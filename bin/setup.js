#!/usr/bin/env node

import { checkAndInstallOpenclaw } from "../lib/install.js";
import { startSetupServer } from "../lib/server.js";
import { loadOrCreateConfig } from "../lib/auth.js";
import { createInterface } from "node:readline";
import { execSync } from "node:child_process";

function waitForKey(msg) {
  msg = msg || "Press Enter to exit...";
  return new Promise(function(resolve) {
    console.log("\n" + msg);
    var rl = createInterface({ input: process.stdin, output: process.stdout });
    rl.once("line", function() { rl.close(); resolve(); });
    setTimeout(function() { rl.close(); resolve(); }, 60000);
  });
}

function checkAdmin() {
  if (process.platform !== "win32") return;
  try {
    execSync("net session", { stdio: "ignore" });
  } catch {
    throw new Error(
      "This program requires Administrator privileges.\n" +
      "Please right-click the exe and select \"Run as administrator\"."
    );
  }
}

async function main() {
  console.log("\nOpenClaw Manager\n");

  var args = process.argv.slice(2);
  var serverMode = args.indexOf("--server") !== -1;
  var resetToken = args.indexOf("--reset-token") !== -1;
  var portOverride = 0;
  var portIdx = args.indexOf("--port");
  if (portIdx !== -1 && args[portIdx + 1]) {
    portOverride = parseInt(args[portIdx + 1], 10);
    if (isNaN(portOverride) || portOverride < 1 || portOverride > 65535) {
      throw new Error("Invalid port number: " + args[portIdx + 1]);
    }
  }

  checkAdmin();
  await checkAndInstallOpenclaw();

  if (serverMode) {
    var config = loadOrCreateConfig(resetToken);
    var port = portOverride || config.port;
    console.log("┌──────────────────────────────────────────┐");
    console.log("│  Server Mode                             │");
    console.log("│                                          │");
    console.log("│  URL:   http://0.0.0.0:" + port + String("").padEnd(Math.max(0, 24 - String(port).length)) + "│");
    console.log("│  Token: " + config.token + "  │");
    console.log("│                                          │");
    console.log("│  SSH tunnel example:                     │");
    console.log("│  ssh -L " + port + ":localhost:" + port + " user@server     │");
    console.log("└──────────────────────────────────────────┘");
    console.log("");
    await startSetupServer({ serverMode: true, port: port, token: config.token });
  } else {
    await startSetupServer({ serverMode: false });
  }
}

main().catch(async function(err) {
  console.error("\nFailed: " + err.message);
  await waitForKey();
  process.exit(1);
});
