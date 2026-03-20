# OpenClaw Manager

<p align="center">
  <strong>OpenClaw をワンクリックでローカルにデプロイ — あなた専用の AI エージェントを、あなたのマシンで。</strong>
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">ウェブサイト</a> •
  <a href="https://evolink.ai/openclaw">ダウンロード</a> •
  <a href="#セットアップガイド">ガイド</a> •
  <a href="#対応チャネル">チャネル</a> •
  <a href="#モデル">モデル</a>
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

## OpenClaw Manager とは？

**OpenClaw Manager** は、[OpenClaw](https://github.com/openclaw/openclaw) をワンクリックでローカルにデプロイできるデスクトップアプリです。ターミナル不要、Docker 不要、設定ファイルの手動編集不要。

OpenClaw は Claude 搭載の AI アシスタントをメッセージングアプリに接続する AI エージェントフレームワークです。ファイル読み取り、Web ブラウジング、コード実行、カレンダー管理、日常タスクの自動化 — すべて自然な会話で行えます。

**OpenClaw Manager ならセットアップは簡単：** ダウンロード、2つの認証情報を入力、デプロイをクリック。完了。

---

## 必要なもの

2つだけ：

1. **API キー** — AI モデル用（[EvoLink](https://evolink.ai) で取得）
2. **メッセージングチャネル** — 現在 Telegram または Feishu に対応

それだけです。マネージャーが残りすべてを処理します：OpenClaw のダウンロード、サービスの設定、チャネルの接続、セットアップの検証。

---

## 対応チャネル

| チャネ��� | ステータス | 地域 |
|---------|----------|------|
| **Telegram** | ✅ 対応済み | グローバル |
| **Feishu（飛書）** | ✅ 対応済み | 中国 |
| WhatsApp | 🔜 近日対応 | — |
| Discord | 🔜 近日対応 | — |
| Slack | 🔜 近日対応 | — |
| その他... | 🗓️ 計画中 | — |

チャネルサポートを積極的に拡大中。コントリビューションやリクエスト歓迎。

---

## セットアップガイド

3ステップ。5分以内。

### 前提条件

| 必要なもの | 取得方法 |
|-----------|---------|
| **EvoLink API キー** | [evolink.ai](https://evolink.ai/signup?utm_source=github[evolink.ai](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)utm_medium=readme[evolink.ai](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)utm_campaign=openclaw-manager) → ダッシュボード → API Keys |
| **Telegram ボットトークン** | [@BotFather](https://t.me/BotFather) で作成 |
| **Telegram ユーザー ID** | [@userinfobot](https://t.me/userinfobot) に `/start` を送信 |

> 💡 Feishu の場合：ステップ1で Feishu を選択し、アプリ内ガイドに従って認証情報を取得。

### ステップ 1 — インスタンスを作成 *（約30秒）*

Claude モデルを選択、チャネル（Telegram または Feishu）を選択。  
異なるチームやボット用に複数インスタンスを作成可能。

### ステップ 2 — 認証情報を入力

API キーとチャネルの認証情報を貼り付け。  
ウィザードが各フィールドを検証してから次へ。

### ステップ 3 — デプロイ＆検証

**デプロイ** をクリック。リアルタイムで進捗を確認。  
テストメッセージを送信して動作を確認。

---

## モデル

EvoLink 経由で利用可能な全 Claude モデル：

| モデル | 最適な用途 |
|-------|----------|
| Claude Haiku 4.5 | 高速レスポンス、シンプルなタスク |
| Claude Sonnet 4.5 | スピードと知性のバランス |
| Claude Opus 4.5 | 複雑な推論 |
| Claude Opus 4.6 | 最も高性能、長時間実行エージェント |

---

## API コスト削減

[EvoLink](https://evolink.ai/openclaw) 経由で Claude を使用すると、**公式価格より約30%お得**。

- 同じモデル、同じ品質
- コード変更不要
- OpenClaw Manager ですぐに使える

> 🔥 期間限定オファー。[節約額を計算 →](https://evolink.ai/openclaw#pricing)

---

## 機能

- **ワンクリックデプロイ** — ターミナルや Docker 不要
- **マルチインスタンス** — 複数の OpenClaw ボットを同時実行
- **チャネル選択** — Telegram と Feishu、他も追加予定
- **モデル選択** — Haiku、Sonnet、Opus（4.5 & 4.6）
- **リアルタイム進捗** — デプロイ中の SSE ストリーミング
- **ゲートウェイ制御** — 起動 / 停止 / ステータス自動更新
- **クリーン削除** — ワンクリックで完全削除
- **クロスプラットフォーム** — Windows、macOS、Linux

---

## ソースからビルド

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

他のプラットフォーム：
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

<a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager"><strong>EvoLink</strong></a> — 統合 AI API ゲートウェイ。40以上のモデル、スマートルーティング、低コスト。

## ライセンス

MIT
