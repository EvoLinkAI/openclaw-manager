# OpenClaw Manager — 一键安装和管理 OpenClaw

<p align="center">
  <strong>安装 OpenClaw 并通过引导向导连接 Telegram 或飞书。</strong><br>
  通过 EvoLink 使用 Claude，节省约 30% 费用 — 秒级估算节省金额。
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">官网</a> •
  <a href="https://evolink.ai/openclaw">下载</a> •
  <a href="#引导安装">安装指南</a> •
  <a href="#模型">模型</a>
</p>

<p align="center">
  <strong>🌐 Languages / 语言：</strong>
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

## 为什么选择 OpenClaw Manager？

| | |
|---|---|
| ✅ **Claude API 约 7 折** | 通过 EvoLink 的官方定价（限时优惠） |
| ✅ **无需终端** | 复制粘贴凭据，点击部署 |
| ✅ **端到端验证** | 启动前确认频道正常工作 |
| ✅ **多实例管理** | 同时运行多个 OpenClaw 机器人 |
| ✅ **跨平台** | macOS、Windows、Linux |

## 快速开始

1. **下载**最新可执行文件：[Releases](https://evolink.ai/openclaw)
2. **运行** — 无需安装
3. **按照**以下 3 步向导操作

---

## 引导安装

无需终端。只需复制粘贴凭据。

### 前置条件

开始前需要准备：

| 凭据 | 获取方式 |
|---|---|
| **EvoLink API Key** | [EvoLink 控制台](https://evolink.ai) → API Keys |
| **Telegram Bot Token** | 通过 [@BotFather](https://t.me/BotFather) 创建机器人，复制 Token |
| **Telegram 用户 ID** | 向 [@userinfobot](https://t.me/userinfobot) 发送 `/start` |

> 💡 也支持飞书（Lark）— 在第 1 步中选择即可。

### 第 1 步 — 创建实例 *（约 30 秒）*

选择 Claude 模型，然后选择频道（Telegram 或飞书）。
可以为不同团队或机器人创建多个实例。

### 第 2 步 — 输入凭据

粘贴 EvoLink API Key 和频道凭据。
向导会在继续前验证每个字段。

### 第 3 步 — 部署并验证

点击 **Deploy**。通过 SSE 实时推送部署进度。
完成后发送测试消息确认一切正常。

---

## 模型

通过 EvoLink 可用的所有 Claude 模型：

| 模型 | 定位 |
|---|---|
| Claude Haiku 4.5 | 快速且经济 |
| Claude Sonnet 4.5 | 均衡 |
| Claude Opus 4.5 | 高级 |
| Claude Opus 4.6 | 最强 |

> 🔥 **限时优惠**：通过 EvoLink 享受 Claude 官方定价约 7 折。
> 节省金额因使用层级、使用模式和上下文长度而异。[计算您的节省 →](https://evolink.ai/openclaw#pricing)

---

## 功能

- **多实例管理** — 同时运行多个 OpenClaw 配置
- **模型选择** — Haiku 4.5、Sonnet 4.5、Opus 4.5、Opus 4.6
- **频道支持** — Telegram 和飞书（Lark）
- **实时部署** — SSE 流式进度推送
- **网关控制** — 启动 / 停止 / 状态自动刷新
- **一键删除** — 清理服务
- **跨平台** — Windows、macOS、Linux 可执行文件

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

## 由 EvoLink 提供支持

<a href="https://evolink.ai">
  <strong>EvoLink</strong>
</a> — 统一 AI API 网关，40+ 模型，智能路由，更低成本。

---

## 许可证

MIT
