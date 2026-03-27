# OpenClaw Manager

<p align="center">
  <strong>One-click local deployment for OpenClaw — your personal AI agent, running on your machine.</strong>
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager">Website</a> •
  <a href="https://evolink.ai/openclaw?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager">Download</a> •
  <a href="#setup-guide">Setup Guide</a> •
  <a href="#supported-channels">Channels</a> •
  <a href="#models">Models</a>
</p>

<p align="center">
  <strong>🌐 Languages：</strong>
  <a href="README.md">English</a> |
  <a href="README.zh-CN.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.de.md">Deutsch</a>
</p>

---

## What is OpenClaw Manager?

**OpenClaw Manager** is a desktop app that deploys [OpenClaw](https://github.com/openclaw/openclaw) locally on your computer with one click. No terminal, no Docker, no manual config files.

OpenClaw is an AI agent framework that connects a Claude-powered AI assistant to your messaging apps. It can read files, browse the web, run code, manage your calendar, and automate daily tasks — all through natural conversation.

**OpenClaw Manager makes the setup trivial:** download, enter two credentials, click Deploy. Done.

---

## What You Need

Just two things:

1. **An API key** — for the AI model (get one from [EvoLink](https://evolink.ai?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager))
2. **A messaging channel** — currently Telegram or Feishu

That's it. The manager handles everything else: downloading OpenClaw, configuring the service, connecting your channel, and verifying the setup.

---

## Supported Channels

| Channel | Status | Region |
|---------|--------|--------|
| **Telegram** | ✅ Supported | Global |
| **Feishu (飞书)** | ✅ Supported | China |
| WhatsApp | 🔜 Coming soon | — |
| Discord | 🔜 Coming soon | — |
| Slack | 🔜 Coming soon | — |
| More... | 🗓️ Planned | — |

We're actively expanding channel support. Contributions and requests welcome.

---

## Setup Guide

Three steps. Under 5 minutes.

### Prerequisites

| What | Where to Get |
|------|-------------|
| **EvoLink API Key** | [evolink.ai](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)utm_medium=readme[evolink.ai](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)utm_campaign=openclaw-manager) → Dashboard → API Keys |
| **Telegram Bot Token** | Create via [@BotFather](https://t.me/BotFather) |
| **Telegram User ID** | Send `/start` to [@userinfobot](https://t.me/userinfobot) |

> 💡 For Feishu: select it during Step 1 and follow the in-app guide for credentials.

### Step 1 — Create an Instance *(~30 sec)*

Pick a Claude model, choose your channel (Telegram or Feishu).  
You can run multiple instances for different bots or teams.

### Step 2 — Enter Credentials

Paste your API key and channel credentials.  
The wizard validates each field before moving on.

### Step 3 — Deploy & Verify

Click **Deploy**. Watch real-time progress.  
Send a test message to confirm everything works.

---

## Models

All Claude models available via EvoLink:

| Model | Best For |
|-------|---------|
| Claude Haiku 4.5 | Fast responses, simple tasks |
| Claude Sonnet 4.5 | Balanced speed & intelligence |
| Claude Opus 4.5 | Complex reasoning |
| Claude Opus 4.6 | Most capable, long-running agents |

---

## Save on API Costs

Route Claude through [EvoLink](https://evolink.ai/openclaw?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager) and pay **~30% less** than official API pricing.

- Same models, same quality
- No code changes needed
- Works out of the box with OpenClaw Manager

> 🔥 Limited-time offer. [Calculate your savings →](https://evolink.ai/openclaw#pricing?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)

---

## Features

- **One-click deploy** — no terminal or Docker required
- **Multi-instance** — run multiple OpenClaw bots side by side
- **Channel selection** — Telegram and Feishu, more coming
- **Model selection** — Haiku, Sonnet, Opus (4.5 & 4.6)
- **Real-time progress** — SSE streaming during deployment
- **Gateway control** — start / stop / status with auto-refresh
- **Clean removal** — one-click delete when you're done
- **Cross-platform** — Windows, macOS, Linux

---

## Build from Source

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

Other platforms:
```bash
# macOS (Intel)
npx pkg dist/setup.cjs --targets node22-macos-x64 --output dist/openclaw-manager --compress GZip

# macOS (Apple Silicon)
npx pkg dist/setup.cjs --targets node22-macos-arm64 --output dist/openclaw-manager --compress GZip

# Linux
npx pkg dist/setup.cjs --targets node22-linux-x64 --output dist/openclaw-manager --compress GZip
```

---

## Powered by

<a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager"><strong>EvoLink</strong></a> — Unified AI API gateway. 40+ models, smart routing, lower cost.

## License

MIT
