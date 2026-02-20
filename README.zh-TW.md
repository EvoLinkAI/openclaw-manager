# OpenClaw Manager

<p align="center">
  <strong>一鍵本地部署 OpenClaw — 你的個人 AI 代理，運行在你的電腦上。</strong>
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">官網</a> •
  <a href="https://evolink.ai/openclaw">下載</a> •
  <a href="#安裝指南">安裝指南</a> •
  <a href="#支援的通訊渠道">渠道</a> •
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

## 什麼是 OpenClaw Manager？

**OpenClaw Manager** 是一款桌面應用，讓你一鍵在本地部署 [OpenClaw](https://github.com/openclaw/openclaw)。無需終端、無需 Docker、無需手動編輯設定檔。

OpenClaw 是一個 AI 代理框架，將 Claude 驅動的 AI 助手連接到你的通訊工具。它能讀取檔案、瀏覽網頁、執行程式碼、管理行事曆、自動化日常任務 — 全部透過自然對話完成。

**OpenClaw Manager 讓部署變得極其簡單：** 下載、輸入兩個憑證、點擊部署。搞定。

---

## 你需要什麼

只需兩樣東西：

1. **一個 API Key** — 用於 AI 模型（從 [EvoLink](https://evolink.ai) 取得）
2. **一個通訊渠道** — 目前支援 Telegram 或飛書

就這些。管理器會處理所有其他事情：下載 OpenClaw、配置服務、連接渠道、驗證安裝。

---

## 支援的通訊渠道

| 渠道 | 狀態 | 地區 |
|------|------|------|
| **Telegram** | ✅ 已支援 | 全球 |
| **飛書** | ✅ 已支援 | 中國 |
| WhatsApp | 🔜 即將推出 | — |
| Discord | 🔜 即將推出 | — |
| Slack | 🔜 即將推出 | — |
| 更多... | 🗓️ 計劃中 | — |

我們正在積極擴展渠道支援。歡迎貢獻和提出需求。

---

## 安裝指南

三步完成，不到 5 分鐘。

### 準備工作

| 需要什麼 | 在哪取得 |
|---------|---------|
| **EvoLink API Key** | [evolink.ai](https://evolink.ai) → 控制台 → API Keys |
| **Telegram Bot Token** | 透過 [@BotFather](https://t.me/BotFather) 建立 |
| **Telegram 使用者 ID** | 給 [@userinfobot](https://t.me/userinfobot) 傳送 `/start` |

> 💡 飛書使用者：在第一步中選擇飛書，按應用內指引取得憑證。

### 第一步 — 建立實例 *（約 30 秒）*

選擇 Claude 模型，選擇渠道（Telegram 或飛書）。  
可以建立多個實例，用於不同團隊或機器人。

### 第二步 — 輸入憑證

貼上 API Key 和渠道憑證。  
精靈會逐項驗證後再繼續。

### 第三步 — 部署並驗證

點擊 **部署**，即時查看進度。  
傳送測試訊息確認一切正常。

---

## 模型

透過 EvoLink 可用的所有 Claude 模型：

| 模型 | 適合場景 |
|------|---------|
| Claude Haiku 4.5 | 快速回應，簡單任務 |
| Claude Sonnet 4.5 | 速度與智慧兼顧 |
| Claude Opus 4.5 | 複雜推理 |
| Claude Opus 4.6 | 最強大，適合長時間運行的代理 |

---

## 節省 API 費用

透過 [EvoLink](https://evolink.ai/openclaw) 使用 Claude，**比官方定價節省約 30%**。

- 相同模型，相同品質
- 無需修改程式碼
- OpenClaw Manager 開箱即用

> 🔥 限時優惠。[計算你的節省 →](https://evolink.ai/openclaw#pricing)

---

## 功能特性

- **一鍵部署** — 無需終端或 Docker
- **多實例** — 同時運行多個 OpenClaw 機器人
- **渠道選擇** — Telegram 和飛書，更多即將推出
- **模型選擇** — Haiku、Sonnet、Opus（4.5 和 4.6）
- **即時進度** — 部署過程 SSE 串流展示
- **閘道控制** — 啟動 / 停止 / 狀態自動重新整理
- **一鍵清理** — 不需要時乾淨刪除
- **跨平台** — Windows、macOS、Linux

---

## 從原始碼建構

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

<a href="https://evolink.ai"><strong>EvoLink</strong></a> — 統一 AI API 閘道。40+ 模型，智慧路由，更低成本。

## 授權條款

MIT
