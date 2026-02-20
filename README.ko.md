# OpenClaw Manager

<p align="center">
  <strong>OpenClaw를 원클릭으로 로컬 배포 — 당신의 개인 AI 에이전트를, 당신의 컴퓨터에서.</strong>
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">웹사이트</a> •
  <a href="https://evolink.ai/openclaw">다운로드</a> •
  <a href="#설정-가이드">가이드</a> •
  <a href="#지원-채널">채널</a> •
  <a href="#모델">모델</a>
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

## OpenClaw Manager란?

**OpenClaw Manager**는 [OpenClaw](https://github.com/openclaw/openclaw)를 원클릭으로 로컬에 배포하는 데스크톱 앱입니다. 터미널 불필요, Docker 불필요, 수동 설정 파일 편집 불필요.

OpenClaw는 Claude 기반 AI 어시스턴트를 메시징 앱에 연결하는 AI 에이전트 프레임워크입니다. 파일 읽기, 웹 브라우징, 코드 실행, 캘린더 관리, 일상 작업 자동화 — 모두 자연스러운 대화로 수행합니다.

**OpenClaw Manager로 설정은 간단합니다:** 다운로드, 두 개의 자격 증명 입력, 배포 클릭. 끝.

---

## 필요한 것

두 가지만:

1. **API 키** — AI 모델용 ([EvoLink](https://evolink.ai)에서 발급)
2. **메시징 채널** — 현재 Telegram 또는 Feishu 지원

그게 전부입니다. 매니저가 나머지를 모두 처리합니다: OpenClaw 다운로드, 서비스 설정, 채널 연결, 설치 검증.

---

## 지원 채널

| 채널 | 상태 | 지역 |
|------|------|------|
| **Telegram** | ✅ 지원 | 글로벌 |
| **Feishu (飞书)** | ✅ 지원 | 중국 |
| WhatsApp | 🔜 곧 출시 | — |
| Discord | 🔜 곧 출시 | — |
| Slack | 🔜 곧 출시 | — |
| 기타... | 🗓️ 계획 중 | — |

채널 지원을 적극적으로 확대 중입니다. 기여와 요청을 환영합니다.

---

## 설정 가이드

3단계. 5분 이내.

### 사전 준비

| 필요한 것 | 받는 방법 |
|----------|----------|
| **EvoLink API 키** | [evolink.ai](https://evolink.ai) → 대시보드 → API Keys |
| **Telegram 봇 토큰** | [@BotFather](https://t.me/BotFather)에서 생성 |
| **Telegram 사용자 ID** | [@userinfobot](https://t.me/userinfobot)에 `/start` 전송 |

> 💡 Feishu의 경우: 1단계에서 Feishu를 선택하고 앱 내 가이드를 따르세요.

### 1단계 — 인스턴스 생성 *(~30초)*

Claude 모델을 선택하고, 채널(Telegram 또는 Feishu)을 선택합니다.  
다른 팀이나 봇을 위해 여러 인스턴스를 만들 수 있습니다.

### 2단계 — 자격 증명 입력

API 키와 채널 자격 증명을 붙여넣기합니다.  
마법사가 각 필드를 검증한 후 진행합니다.

### 3단계 — 배포 및 검증

**배포**를 클릭합니다. 실시간으로 진행 상황을 확인합니다.  
테스트 메시지를 보내 모든 것이 작동하는지 확인합니다.

---

## 모델

EvoLink를 통해 사용 가능한 모든 Claude 모델:

| 모델 | 최적 용도 |
|------|----------|
| Claude Haiku 4.5 | 빠른 응답, 간단한 작업 |
| Claude Sonnet 4.5 | 속도와 지능의 균형 |
| Claude Opus 4.5 | 복잡한 추론 |
| Claude Opus 4.6 | 최고 성능, 장시간 실행 에이전트 |

---

## API 비용 절약

[EvoLink](https://evolink.ai/openclaw)를 통해 Claude를 사용하면 **공식 가격보다 ~30% 절약**.

- 같은 모델, 같은 품질
- 코드 변경 불필요
- OpenClaw Manager에서 바로 사용 가능

> 🔥 기간 한정 혜택. [절약 금액 계산 →](https://evolink.ai/openclaw#pricing)

---

## 기능

- **원클릭 배포** — 터미널이나 Docker 불필요
- **멀티 인스턴스** — 여러 OpenClaw 봇 동시 실행
- **채널 선택** — Telegram과 Feishu, 더 많은 채널 추가 예정
- **모델 선택** — Haiku, Sonnet, Opus (4.5 & 4.6)
- **실시간 진행** — 배포 중 SSE 스트리밍
- **게이트웨이 제어** — 시작 / 중지 / 상태 자동 새로고침
- **깔끔한 제거** — 원클릭으로 완전 삭제
- **크로스 플랫폼** — Windows, macOS, Linux

---

## 소스에서 빌드

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

다른 플랫폼:
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

<a href="https://evolink.ai"><strong>EvoLink</strong></a> — 통합 AI API 게이트웨이. 40+ 모델, 스마트 라우팅, 저비용.

## 라이선스

MIT
