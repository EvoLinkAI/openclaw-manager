# OpenClaw Manager

<p align="center">
  <strong>一键本地部署 OpenClaw — 你的个人 AI 代理，运行在你的电脑上。</strong>
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">官网</a> •
  <a href="https://evolink.ai/openclaw">下载</a> •
  <a href="#安装指南">安装指南</a> •
  <a href="#支持的通讯渠道">渠道</a> •
  <a href="#模型">模型</a>
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

## 什么是 OpenClaw Manager？

**OpenClaw Manager** 是一款桌面应用，让你一键在本地部署 [OpenClaw](https://github.com/openclaw/openclaw)。无需终端、无需 Docker、无需手动编辑配置文件。

OpenClaw 是一个 AI 代理框架，将 Claude 驱动的 AI 助手连接到你的通讯工具。它能读取文件、浏览网页、运行代码、管理日历、自动化日常任务 — 全部通过自然对话完成。

**OpenClaw Manager 让部署变得极其简单：** 下载、输入两个凭证、点击部署。搞定。

---

## 你需要什么

只需两样东西：

1. **一个 API Key** — 用于 AI 模型（从 [EvoLink](https://evolink.ai) 获取）
2. **一个通讯渠道** — 目前支持 Telegram 或飞书

就这些。管理器会处理所有其他事情：下载 OpenClaw、配置服务、连接渠道、验证安装。

---

## 支持的通讯渠道

| 渠道 | 状态 | 地区 |
|------|------|------|
| **Telegram** | ✅ 已支持 | 全球 |
| **飞书** | ✅ 已支持 | 中国 |
| WhatsApp | 🔜 即将推出 | — |
| Discord | 🔜 即将推出 | — |
| Slack | 🔜 即将推出 | — |
| 更多... | 🗓️ 计划中 | — |

我们正在积极扩展渠道支持。欢迎贡献和提出需求。

---

## 安装指南

三步完成，不到 5 分钟。

### 准备工作

| 需要什么 | 在哪获取 |
|---------|---------|
| **EvoLink API Key** | [evolink.ai](https://evolink.ai) → 控制台 → API Keys |
| **Telegram Bot Token** | 通过 [@BotFather](https://t.me/BotFather) 创建 |
| **Telegram 用户 ID** | 给 [@userinfobot](https://t.me/userinfobot) 发送 `/start` |

> 💡 飞书用户：在第一步中选择飞书，按应用内指引获取凭证。

### 第一步 — 创建实例 *（约 30 秒）*

选择 Claude 模型，选择渠道（Telegram 或飞书）。  
可以创建多个实例，用于不同团队或机器人。

### 第二步 — 输入凭证

粘贴 API Key 和渠道凭证。  
向导会逐项验证后再继续。

### 第三步 — 部署并验证

点击 **部署**，实时查看进度。  
发送测试消息确认一切正常。

---

## 模型

通过 EvoLink 可用的所有 Claude 模型：

| 模型 | 适合场景 |
|------|---------|
| Claude Haiku 4.5 | 快速响应，简单任务 |
| Claude Sonnet 4.5 | 速度与智能兼顾 |
| Claude Opus 4.5 | 复杂推理 |
| Claude Opus 4.6 | 最强大，适合长时间运行的代理 |

---

## 节省 API 费用

通过 [EvoLink](https://evolink.ai/openclaw) 使用 Claude，**比官方定价节省约 30%**。

- 相同模型，相同质量
- 无需修改代码
- OpenClaw Manager 开箱即用

> 🔥 限时优惠。[计算你的节省 →](https://evolink.ai/openclaw#pricing)

---

## 功能特性

- **一键部署** — 无需终端或 Docker
- **多实例** — 同时运行多个 OpenClaw 机器人
- **渠道选择** — Telegram 和飞书，更多即将推出
- **模型选择** — Haiku、Sonnet、Opus（4.5 和 4.6）
- **实时进度** — 部署过程 SSE 流式展示
- **网关控制** — 启动 / 停止 / 状态自动刷新
- **一键清理** — 不需要时干净删除
- **跨平台** — Windows、macOS、Linux

---

## 从源码构建

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

其他平台：
```bash
# macOS (Intel)
npx pkg dist/setup.cjs --targets node22-macos-x64 --output dist/openclaw-manager --compress GZip

# macOS (Apple Silicon)
npx pkg dist/setup.cjs --targets node22-macos-arm64 --output dist/openclaw-manager --compress GZip

# Linux
npx pkg dist/setup.cjs --targets node22-linux-x64 --output dist/openclaw-manager --compress GZip
```

---

## 由以下提供支持

<a href="https://evolink.ai"><strong>EvoLink</strong></a> — 统一 AI API 网关。40+ 模型，智能路由，更低成本。

## 许可证

MIT
