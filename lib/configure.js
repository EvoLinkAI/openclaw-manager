import { writeFileSync, mkdirSync, existsSync, readFileSync, readdirSync } from "node:fs";
import { execSync } from "node:child_process";
import { createConnection } from "node:net";
import { homedir } from "node:os";
import { join, basename } from "node:path";

const BASE_PORT = 28789;

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

  // Check default profile
  if (existsSync(join(home, ".openclaw", "openclaw.json"))) {
    profiles.push("default");
  }

  // Check named profiles (~/.openclaw-xxx/)
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

export function generateConfig(apiKey, botToken, port) {
  return {
    models: {
      providers: {
        anthropic: {
          api: "anthropic-messages",
          baseUrl: "https://code.evolink.ai",
          apiKey: apiKey,
          models: [
            {
              id: "claude-opus-4-6",
              name: "Claude Opus 4.6",
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
          primary: "anthropic/claude-opus-4-6",
        },
      },
    },
    channels: {
      telegram: {
        enabled: true,
        botToken: botToken,
        dmPolicy: "pairing",
        groups: {
          "*": { requireMention: true },
        },
      },
    },
    gateway: {
      port: port,
    },
  };
}

export async function runSetup(profile, apiKey, botToken) {
  const port = nextAvailablePort();
  const dir = profileDir(profile);
  const cfgPath = configPath(profile);

  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  let config = {};
  if (existsSync(cfgPath)) {
    try { config = JSON.parse(readFileSync(cfgPath, "utf-8")); } catch {}
  }

  const generated = generateConfig(apiKey, botToken, port);
  const merged = deepMerge(config, generated);
  writeFileSync(cfgPath, JSON.stringify(merged, null, 2), "utf-8");
  console.log(`Config written to ${cfgPath}`);

  const flag = profileFlag(profile);
  const onboardCmd = flag
    ? `openclaw ${flag} onboard --install-daemon --flow quickstart --accept-risk --skip-skills --skip-channels --skip-ui --skip-health --non-interactive --gateway-port ${port}`
    : `openclaw onboard --install-daemon --flow quickstart --accept-risk --skip-skills --skip-channels --skip-ui --skip-health --non-interactive --gateway-port ${port}`;

  console.log("Running OpenClaw onboarding...");
  try {
    execSync(onboardCmd, { stdio: "inherit" });
    console.log("Onboarding complete.");
  } catch {
    throw new Error("Onboarding failed.");
  }

  // Re-write config to preserve our values after onboard
  const postOnboard = JSON.parse(readFileSync(cfgPath, "utf-8"));
  const final = deepMerge(postOnboard, generated);
  writeFileSync(cfgPath, JSON.stringify(final, null, 2), "utf-8");

  // Restart gateway
  try {
    const restartCmd = flag ? `openclaw ${flag} gateway restart` : "openclaw gateway restart";
    execSync(restartCmd, { stdio: "inherit", timeout: 15000 });
  } catch {}

  return { configPath: cfgPath, port };
}

export async function connectTelegramUser(profile, telegramId) {
  const cfgPath = configPath(profile);
  if (!existsSync(cfgPath)) throw new Error("Config not found.");

  const config = JSON.parse(readFileSync(cfgPath, "utf-8"));
  if (!config.channels) config.channels = {};
  if (!config.channels.telegram) config.channels.telegram = {};
  config.channels.telegram.dmPolicy = "allowlist";

  const existing = (config.channels.telegram.allowFrom || []).map(String);
  if (!existing.includes(telegramId)) existing.push(telegramId);
  config.channels.telegram.allowFrom = existing;

  writeFileSync(cfgPath, JSON.stringify(config, null, 2), "utf-8");
  console.log(`Telegram user ${telegramId} added to allowlist.`);

  const flag = profileFlag(profile);
  try {
    const cmd = flag ? `openclaw ${flag} gateway restart` : "openclaw gateway restart";
    execSync(cmd, { stdio: "inherit", timeout: 15000 });
  } catch {}
}

export function startGateway(profile) {
  const cfgPath = configPath(profile);
  let port = BASE_PORT;
  try {
    const cfg = JSON.parse(readFileSync(cfgPath, "utf-8"));
    if (cfg.gateway && cfg.gateway.port) port = cfg.gateway.port;
  } catch {}

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
