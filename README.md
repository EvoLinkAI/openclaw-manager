# OpenClaw Manager

Visual manager for [OpenClaw](https://github.com/nicepkg/openclaw) — create, configure, and control multiple AI assistant instances with one click.

## Features

- Multi-instance management — run multiple OpenClaw profiles side by side
- Model selection — Claude Haiku 4.5, Sonnet 4.5, Opus 4.5, Opus 4.6
- Channel support — Telegram and Feishu (Lark)
- Real-time deploy progress via SSE streaming
- Gateway start/stop/status with auto-refresh
- One-click delete with service cleanup
- Cross-platform executables (Windows, macOS, Linux)

## Quick Start

Download the latest executable from [Releases](https://github.com/Pharmacist9527/openclaw-installer/releases), run it, and follow the 3-step wizard.

## Build from Source

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

## Powered by

[EvoLink](https://evolink.ai) — Zero-cost Claude API access

## License

MIT
