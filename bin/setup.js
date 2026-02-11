#!/usr/bin/env node

import { checkAndInstallOpenclaw } from "../lib/install.js";
import { startSetupServer } from "../lib/server.js";
import { createInterface } from "node:readline";

function waitForKey(msg) {
  msg = msg || "Press Enter to exit...";
  return new Promise(function(resolve) {
    console.log("\n" + msg);
    var rl = createInterface({ input: process.stdin, output: process.stdout });
    rl.once("line", function() { rl.close(); resolve(); });
    setTimeout(function() { rl.close(); resolve(); }, 60000);
  });
}

async function main() {
  console.log("\nOpenClaw Manager\n");
  await checkAndInstallOpenclaw();
  await startSetupServer();
}

main().catch(async function(err) {
  console.error("\nFailed: " + err.message);
  await waitForKey();
  process.exit(1);
});
