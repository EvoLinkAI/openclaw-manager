# OpenClaw Manager — 一鍵安裝和管理 OpenClaw

<p align="center">
  <strong>安裝 OpenClaw 並通過引導嚮導連接 Telegram 或飛書。</strong><br>
  通過 EvoLink 使用 Claude，節省約 30% 費用 — 秒級估算節省金額。
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">官網</a> •
  <a href="https://evolink.ai/openclaw">下載</a> •
  <a href="#引導安裝">安裝指南</a> •
  <a href="#模型">模型</a>
</p>

<p align="center">
  <strong>🌐 Languages / 語言：</strong>
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

## 為什麼選擇 OpenClaw Manager？

| | |
|---|---|
| ✅ **Claude API 約 7 折** | 通過 EvoLink 的官方定價（限時優惠） |
| ✅ **無需終端** | 複製貼上憑據，點擊部署 |
| ✅ **端到端驗證** | 啟動前確認頻道正常工作 |
| ✅ **多實例管理** | 同時運行多個 OpenClaw 機器人 |
| ✅ **跨平台** | macOS、Windows、Linux |

## 快速開始

1. **下載**最新可執行檔：[Releases](https://evolink.ai/openclaw)
2. **運行** — 無需安裝
3. **按照**以下 3 步嚮導操作

---

## 引導安裝

無需終端。只需複製貼上憑據。

### 前置條件

開始前需要準備：

| 憑據 | 獲取方式 |
|---|---|
| **EvoLink API Key** | [EvoLink 控制台](https://evolink.ai) → API Keys |
| **Telegram Bot Token** | 通過 [@BotFather](https://t.me/BotFather) 創建機器人，複製 Token |
| **Telegram 用戶 ID** | 向 [@userinfobot](https://t.me/userinfobot) 發送 `/start` |

> 💡 也支持飛書（Lark）— 在第 1 步中選擇即可。

### 第 1 步 — 創建實例 *（約 30 秒）*

選擇 Claude 模型，然後選擇頻道（Telegram 或飛書）。
可以為不同團隊或機器人創建多個實例。

### 第 2 步 — 輸入憑據

貼上 EvoLink API Key 和頻道憑據。
嚮導會在繼續前驗證每個欄位。

### 第 3 步 — 部署並驗證

點擊 **Deploy**。通過 SSE 即時推送部署進度。
完成後發送測試訊息確認一切正常。

---

## 模型

通過 EvoLink 可用的所有 Claude 模型：

| 模型 | 定位 |
|---|---|
| Claude Haiku 4.5 | 快速且經濟 |
| Claude Sonnet 4.5 | 均衡 |
| Claude Opus 4.5 | 高級 |
| Claude Opus 4.6 | 最強 |

> 🔥 **限時優惠**：通過 EvoLink 享受 Claude 官方定價約 7 折。
> 節省金額因使用層級、使用模式和上下文長度而異。[計算您的節省 →](https://evolink.ai/openclaw#pricing)

---

## 功能

- **多實例管理** — 同時運行多個 OpenClaw 配置
- **模型選擇** — Haiku 4.5、Sonnet 4.5、Opus 4.5、Opus 4.6
- **頻道支持** — Telegram 和飛書（Lark）
- **即時部署** — SSE 串流進度推送
- **閘道控制** — 啟動 / 停止 / 狀態自動重新整理
- **一鍵刪除** — 清理服務
- **跨平台** — Windows、macOS、Linux 可執行檔

---

## 從原始碼構建

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
</a> — 統一 AI API 閘道，40+ 模型，智能路由，更低成本。

---

## 授權條款

MIT
