# OpenClaw Manager — One-Click Install & Manage OpenClaw

<p align="center">
  <strong>Install OpenClaw and connect Telegram or Feishu with a guided wizard.</strong><br>
  Route Claude via EvoLink to pay ~30% less — estimate savings in seconds.
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">Website</a> •
  <a href="https://github.com/EvoLinkAI/openclaw-manager/releases">Downloads</a> •
  <a href="#guided-setup">Setup Guide</a> •
  <a href="#models">Models</a>
</p>

---

## Why OpenClaw Manager?

| | |
|---|---|
| ✅ **~30% off Claude API** | Official pricing through EvoLink (limited time) |
| ✅ **No terminal needed** | Copy & paste credentials, click Deploy |
| ✅ **End-to-end verification** | Confirm your channel works before you start |
| ✅ **Multi-instance** | Run multiple OpenClaw bots side by side |
| ✅ **Cross-platform** | macOS, Windows, Linux |

## Quick Start

1. **Download** the latest executable from [Releases](https://github.com/EvoLinkAI/openclaw-manager/releases)
2. **Run** it — no installation required
3. **Follow** the 3-step wizard below

---

## Guided Setup

No terminal. Just copy & paste credentials.

### Prerequisites

You'll need these before starting:

| Credential | How to Get |
|---|---|
| **EvoLink API Key** | [EvoLink Dashboard](https://evolink.ai) → API Keys |
| **Telegram Bot Token** | Create a bot via [@BotFather](https://t.me/BotFather), copy the token |
| **Telegram User ID** | Send `/start` to [@userinfobot](https://t.me/userinfobot) |

> 💡 Feishu (Lark) is also supported — select it during Step 1.

### Step 1 — Create an Instance *(~30 sec)*

Choose a Claude model, then pick your channel (Telegram or Feishu).  
You can create multiple instances for different teams or bots.

### Step 2 — Enter Credentials

Paste your EvoLink API key and channel credentials.  
The wizard validates each field before proceeding.

### Step 3 — Deploy & Verify

Click **Deploy**. Real-time progress streams via SSE.  
Once complete, send a test message to confirm everything works.

---

## Models

All Claude models available through EvoLink:

| Model | Tier |
|---|---|
| Claude Haiku 4.5 | Fast & affordable |
| Claude Sonnet 4.5 | Balanced |
| Claude Opus 4.5 | Advanced |
| Claude Opus 4.6 | Most capable |

> 🔥 **Limited-time offer**: ~30% off official Claude pricing through EvoLink.  
> Savings vary by tier, usage pattern, and context length. [Calculate your savings →](https://evolink.ai/openclaw#pricing)

---

## Features

- **Multi-instance management** — run multiple OpenClaw profiles side by side
- **Model selection** — Haiku 4.5, Sonnet 4.5, Opus 4.5, Opus 4.6
- **Channel support** — Telegram and Feishu (Lark)
- **Real-time deploy** — SSE streaming progress
- **Gateway control** — start / stop / status with auto-refresh
- **One-click delete** — clean service removal
- **Cross-platform** — Windows, macOS, Linux executables

---

## Build from Source

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

For other platforms:
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

<a href="https://evolink.ai">
  <strong>EvoLink</strong>
</a> — Unified AI API gateway with 40+ models, smart routing, and lower cost.

---

## License

MIT
