#!/usr/bin/env node

import { checkAndInstallOpenclaw } from "../lib/install.js";
import { startSetupServer } from "../lib/server.js";
import { isInstalled } from "../lib/configure.js";
import { createInterface } from "node:readline";

function waitForKey(msg = "Press Enter to exit...") {
  return new Promise((resolve) => {
    console.log(`\n${msg}`);
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    rl.once("line", () => { rl.close(); resolve(); });
    setTimeout(() => { rl.close(); resolve(); }, 60000);
  });
}

async function main() {
  const installed = isInstalled();

  if (installed) {
    console.log("\n🐾 OpenClaw Manager\n");
    console.log("✓ OpenClaw is already configured.");
  } else {
    console.log("\n🐾 OpenClaw Quick Setup\n");
    await checkAndInstallOpenclaw();
  }

  await startSetupServer();
}

main().catch(async (err) => {
  console.error("\nSetup failed:", err.message);
  await waitForKey();
  process.exit(1);
});
