import { writeFileSync, mkdirSync, existsSync, readFileSync, readdirSync } from "node:fs";
import { execSync, spawn } from "node:child_process";
import { createConnection } from "node:net";
import { homedir } from "node:os";
import { join } from "node:path";

const BASE_PORT = 28789;

export const MODEL_CATALOG = [
  { id: "claude-haiku-4-5-20251001", name: "Claude Haiku 4.5" },
  { id: "claude-sonnet-4-5-20250929", name: "Claude Sonnet 4.5" },
  { id: "claude-opus-4-5-20251101", name: "Claude Opus 4.5" },
  { id: "claude-opus-4-6", name: "Claude Opus 4.6" },
];

function profileDir(profile) {
  const suffix = profile === "default" ? "" : `-${profile}`;
  return join(homedir(), `.openclaw${suffix}`);
}

function configPath(profile) {
  return join(profileDir(profile), "openclaw.json");
}

function profileFlag(profile) {
  return profile === "default" ? "" : `--profile ${profile}`;
}

export function listProfiles() {
  const home = homedir();
  const profiles = [];
  if (existsSync(join(home, ".openclaw", "openclaw.json"))) {
    profiles.push("default");
  }
  try {
    const entries = readdirSync(home, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory() && entry.name.startsWith(".openclaw-")) {
        const name = entry.name.slice(".openclaw-".length);
        if (name && existsSync(join(home, entry.name, "openclaw.json"))) {
          profiles.push(name);
        }
      }
    }
  } catch {}
  return profiles;
}

function readPort(profile) {
  try {
    const cfg = JSON.parse(readFileSync(configPath(profile), "utf-8"));
    if (cfg.gateway && cfg.gateway.port) return cfg.gateway.port;
  } catch {}
  return BASE_PORT;
}

function checkPort(port) {
  return new Promise(function(resolve) {
    const sock = createConnection({ host: "127.0.0.1", port: port }, function() {
      sock.destroy();
      resolve(true);
    });
    sock.on("error", function() { resolve(false); });
    sock.setTimeout(800, function() { sock.destroy(); resolve(false); });
  });
}

export async function getProfileInfo(profile) {
  const port = readPort(profile);
  const running = await checkPort(port);
  return { profile, port, gateway: running ? "running" : "stopped" };
}

export async function getAllProfiles() {
  const names = listProfiles();
  return Promise.all(names.map(function(n) { return getProfileInfo(n); }));
}

function nextAvailablePort() {
  const usedPorts = new Set();
  for (const p of listProfiles()) {
    try {
      const cfg = JSON.parse(readFileSync(configPath(p), "utf-8"));
      if (cfg.gateway && cfg.gateway.port) usedPorts.add(cfg.gateway.port);
    } catch {}
  }
  let port = BASE_PORT;
  while (usedPorts.has(port)) port++;
  return port;
}

export function generateConfig(apiKey, modelId, channel, channelCreds, port) {
  const model = MODEL_CATALOG.find(function(m) { return m.id === modelId; }) || MODEL_CATALOG[3];
  const config = {
    models: {
      providers: {
        anthropic: {
          api: "anthropic-messages",
          baseUrl: "https://direct.evolink.ai",
          apiKey: apiKey,
          models: [
            {
              id: model.id,
              name: model.name,
              reasoning: false,
              input: ["text"],
              cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
              contextWindow: 200000,
              maxTokens: 8192,
            },
          ],
        },
      },
    },
    agents: {
      defaults: {
        model: {
          primary: "anthropic/" + model.id,
        },
      },
    },
    gateway: {
      port: port,
    },
  };

  // Channel-specific config
  if (channel === "telegram") {
    config.channels = {
      telegram: {
        enabled: true,
        botToken: channelCreds.botToken,
        dmPolicy: "pairing",
        groups: { "*": { requireMention: true } },
      },
    };
  }

  return config;
}

// Stream-based setup with progress events via SSE
export function runSetupStream(profile, apiKey, modelId, channel, channelCreds, onProgress) {
  return new Promise(function(resolve, reject) {
    const port = nextAvailablePort();
    const dir = profileDir(profile);
    const cfgPath = configPath(profile);

    onProgress(5, "Creating profile directory...");
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    let config = {};
    if (existsSync(cfgPath)) {
      try { config = JSON.parse(readFileSync(cfgPath, "utf-8")); } catch {}
    }

    onProgress(10, "Writing configuration...");
    const generated = generateConfig(apiKey, modelId, channel, channelCreds, port);
    const merged = deepMerge(config, generated);
    writeFileSync(cfgPath, JSON.stringify(merged, null, 2), "utf-8");

    onProgress(15, "Running onboarding...");
    const flag = profileFlag(profile);
    const args = [];
    if (flag) args.push("--profile", profile);
    args.push("onboard", "--install-daemon", "--flow", "quickstart", "--accept-risk",
      "--skip-skills", "--skip-channels", "--skip-ui", "--skip-health",
      "--non-interactive", "--gateway-port", String(port));

    const child = spawn("openclaw", args, { stdio: ["ignore", "pipe", "pipe"], shell: true });
    let pct = 15;
    const maxOnboard = 80;

    function tick(line) {
      if (pct < maxOnboard) {
        pct = Math.min(pct + 3, maxOnboard);
        const msg = line.length > 60 ? line.slice(0, 60) + "..." : line;
        onProgress(pct, msg || "Onboarding...");
      }
    }

    child.stdout.on("data", function(d) {
      d.toString().split("\n").forEach(function(l) { if (l.trim()) tick(l.trim()); });
    });
    child.stderr.on("data", function(d) {
      d.toString().split("\n").forEach(function(l) { if (l.trim()) tick(l.trim()); });
    });

    child.on("close", function(code) {
      if (code !== 0) {
        onProgress(pct, "Onboarding failed");
        return reject(new Error("Onboarding failed (exit " + code + ")"));
      }

      onProgress(85, "Applying final configuration...");
      try {
        const postOnboard = JSON.parse(readFileSync(cfgPath, "utf-8"));
        const final = deepMerge(postOnboard, generated);
        // Fix plugin entries: onboard writes enabled:false, gateway needs true
        if (!final.plugins) final.plugins = {};
        if (!final.plugins.entries) final.plugins.entries = {};
        if (channel === "telegram") {
          final.plugins.entries.telegram = { enabled: true };
        }
        writeFileSync(cfgPath, JSON.stringify(final, null, 2), "utf-8");
      } catch {}

      onProgress(92, "Restarting gateway...");
      try {
        const restartCmd = flag ? `openclaw ${flag} gateway restart` : "openclaw gateway restart";
        execSync(restartCmd, { stdio: "ignore", timeout: 15000 });
      } catch {}

      onProgress(100, "Done");
      resolve({ configPath: cfgPath, port });
    });

    child.on("error", function(err) {
      reject(new Error("Failed to start onboarding: " + err.message));
    });
  });
}

export function connectTelegramUser(profile, telegramId, onProgress) {
  const cfgPath = configPath(profile);
  if (!existsSync(cfgPath)) throw new Error("Config not found.");

  if (onProgress) onProgress(20, "Reading configuration...");
  const config = JSON.parse(readFileSync(cfgPath, "utf-8"));
  if (!config.channels) config.channels = {};
  if (!config.channels.telegram) config.channels.telegram = {};
  config.channels.telegram.dmPolicy = "allowlist";

  const existing = (config.channels.telegram.allowFrom || []).map(String);
  if (!existing.includes(telegramId)) existing.push(telegramId);
  config.channels.telegram.allowFrom = existing;

  if (onProgress) onProgress(50, "Saving configuration...");
  writeFileSync(cfgPath, JSON.stringify(config, null, 2), "utf-8");

  if (onProgress) onProgress(70, "Restarting gateway...");
  const flag = profileFlag(profile);
  try {
    const cmd = flag ? `openclaw ${flag} gateway restart` : "openclaw gateway restart";
    execSync(cmd, { stdio: "ignore", timeout: 15000 });
  } catch {}

  if (onProgress) onProgress(100, "Connected");
}

export function startGateway(profile) {
  const port = readPort(profile);
  const flag = profileFlag(profile);
  const cmd = flag
    ? `openclaw ${flag} gateway start --port ${port}`
    : `openclaw gateway start --port ${port}`;
  execSync(cmd, { stdio: "inherit", timeout: 15000 });
}

export function stopGateway(profile) {
  const flag = profileFlag(profile);
  const cmd = flag ? `openclaw ${flag} gateway stop` : "openclaw gateway stop";
  execSync(cmd, { stdio: "inherit", timeout: 15000 });
}

function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === "object" &&
      !Array.isArray(target[key])
    ) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}
