import express from "express";
import { createServer } from "node:http";
import { execSync } from "node:child_process";
import { platform } from "node:os";
import { INDEX_HTML } from "./html.js";
import { getAllProfiles, runSetup, connectTelegramUser, startGateway, stopGateway } from "./configure.js";

export async function startSetupServer() {
  const app = express();
  app.use(express.json());

  // Serve page with server-injected state
  app.get("/", async (_req, res) => {
    const profiles = await getAllProfiles();
    const initScript = "<script>window.__STATE__=" + JSON.stringify({ profiles }) + "</script>";
    const html = INDEX_HTML.replace("<!--SERVER_STATE-->", initScript);
    res.type("html").send(html);
  });

  // Get all profiles (for refresh)
  app.get("/profiles", async (_req, res) => {
    res.json(await getAllProfiles());
  });

  // Setup new instance
  app.post("/setup", async (req, res) => {
    var { profile, apiKey, botToken } = req.body;
    profile = (profile || "default").trim();
    if (!apiKey || !botToken) return res.status(400).json({ error: "API Key and Bot Token are required." });
    try {
      var result = await runSetup(profile, apiKey.trim(), botToken.trim());
      res.json({ success: true, profile: profile, port: result.port });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Connect Telegram user
  app.post("/connect", async (req, res) => {
    var { profile, telegramId } = req.body;
    profile = (profile || "default").trim();
    if (!telegramId) return res.status(400).json({ error: "Telegram User ID is required." });
    try {
      await connectTelegramUser(profile, telegramId.trim());
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Start gateway
  app.post("/start-gateway", (req, res) => {
    var { profile } = req.body;
    profile = (profile || "default").trim();
    try {
      startGateway(profile);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Failed to start gateway." });
    }
  });

  // Stop gateway
  app.post("/stop-gateway", (req, res) => {
    var { profile } = req.body;
    profile = (profile || "default").trim();
    try {
      stopGateway(profile);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Failed to stop gateway." });
    }
  });

  // Shutdown server
  var server = createServer(app);
  await new Promise(function(resolve) { server.listen(0, "127.0.0.1", resolve); });
  var port = server.address().port;
  var url = "http://127.0.0.1:" + port;

  console.log("Manager ready: " + url);
  console.log("Opening browser...\n");

  var os = platform();
  try {
    if (os === "win32") {
      execSync('start "" "' + url + '"', { stdio: "ignore" });
    } else if (os === "darwin") {
      execSync('open "' + url + '"', { stdio: "ignore" });
    } else {
      execSync('xdg-open "' + url + '"', { stdio: "ignore" });
    }
  } catch {
    console.log("Could not open browser. Please visit: " + url);
  }

  return new Promise(function(resolve) {
    app.post("/shutdown", function(_req, res) {
      res.json({ ok: true });
      console.log("\nShutting down...");
      server.close(function() { resolve(); });
    });
  });
}
