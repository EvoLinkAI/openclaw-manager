# OpenClaw Manager — 원클릭으로 OpenClaw 설치 및 관리

<p align="center">
  <strong>OpenClaw을 설치하고 가이드 위저드로 Telegram 또는 Feishu를 연결하세요.</strong><br>
  EvoLink를 통해 Claude를 사용하면 ~30% 절약 — 몇 초 만에 절약 금액을 추산하세요.
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">웹사이트</a> •
  <a href="https://github.com/EvoLinkAI/openclaw-manager/releases">다운로드</a> •
  <a href="#가이드-설치">설치 가이드</a> •
  <a href="#모델">모델</a>
</p>

<p align="center">
  <strong>🌐 Languages / 언어：</strong>
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

## 왜 OpenClaw Manager인가?

| | |
|---|---|
| ✅ **Claude API ~30% 할인** | EvoLink를 통한 공식 가격 (기간 한정) |
| ✅ **터미널 불필요** | 자격 증명을 복사 & 붙여넣기하고 Deploy 클릭 |
| ✅ **엔드투엔드 검증** | 시작 전 채널이 작동하는지 확인 |
| ✅ **멀티 인스턴스** | 여러 OpenClaw 봇을 동시에 실행 |
| ✅ **크로스 플랫폼** | macOS, Windows, Linux |

## 빠른 시작

1. 최신 실행 파일 **다운로드**: [Releases](https://github.com/EvoLinkAI/openclaw-manager/releases)
2. **실행** — 설치 불필요
3. 아래 3단계 위저드 **따르기**

---

## 가이드 설치

터미널 불필요. 자격 증명을 복사 & 붙여넣기만 하세요.

### 사전 준비

시작 전 필요한 것:

| 자격 증명 | 얻는 방법 |
|---|---|
| **EvoLink API Key** | [EvoLink 대시보드](https://evolink.ai) → API Keys |
| **Telegram Bot Token** | [@BotFather](https://t.me/BotFather)에서 봇 생성 후 토큰 복사 |
| **Telegram 사용자 ID** | [@userinfobot](https://t.me/userinfobot)에 `/start` 전송 |

> 💡 Feishu(Lark)도 지원됩니다 — 1단계에서 선택하세요.

### 1단계 — 인스턴스 생성 *(~30초)*

Claude 모델을 선택한 다음 채널(Telegram 또는 Feishu)을 선택합니다.
다른 팀이나 봇을 위해 여러 인스턴스를 만들 수 있습니다.

### 2단계 — 자격 증명 입력

EvoLink API Key와 채널 자격 증명을 붙여넣기합니다.
위저드가 계속하기 전에 각 필드를 검증합니다.

### 3단계 — 배포 및 검증

**Deploy**를 클릭합니다. SSE를 통해 실시간으로 진행 상황이 스트리밍됩니다.
완료되면 테스트 메시지를 보내 모든 것이 작동하는지 확인합니다.

---

## 모델

EvoLink를 통해 사용 가능한 모든 Claude 모델:

| 모델 | 티어 |
|---|---|
| Claude Haiku 4.5 | 빠르고 경제적 |
| Claude Sonnet 4.5 | 균형잡힌 |
| Claude Opus 4.5 | 고급 |
| Claude Opus 4.6 | 최고 성능 |

> 🔥 **기간 한정 오퍼**: EvoLink를 통해 Claude 공식 가격 ~30% 할인.
> 절약 금액은 티어, 사용 패턴, 컨텍스트 길이에 따라 다릅니다. [절약 금액 계산 →](https://evolink.ai/openclaw#pricing)

---

## 기능

- **멀티 인스턴스 관리** — 여러 OpenClaw 프로필 동시 실행
- **모델 선택** — Haiku 4.5, Sonnet 4.5, Opus 4.5, Opus 4.6
- **채널 지원** — Telegram 및 Feishu (Lark)
- **실시간 배포** — SSE 스트리밍 진행률
- **게이트웨이 제어** — 시작 / 중지 / 상태 자동 새로고침
- **원클릭 삭제** — 서비스 정리
- **크로스 플랫폼** — Windows, macOS, Linux 실행 파일

---

## 소스에서 빌드

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

기타 플랫폼:
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
</a> — 40개 이상의 모델을 갖춘 통합 AI API 게이트웨이, 스마트 라우팅, 저비용.

---

## 라이선스

MIT
