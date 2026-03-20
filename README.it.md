# OpenClaw Manager

<p align="center">
  <strong>Distribuisci OpenClaw localmente con un clic — il tuo assistente AI personale, sul tuo computer.</strong>
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">Sito Web</a> •
  <a href="https://evolink.ai/openclaw">Download</a> •
  <a href="#guida-allinstallazione">Guida</a> •
  <a href="#canali-supportati">Canali</a> •
  <a href="#modelli">Modelli</a>
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

## Cos'è OpenClaw Manager?

**OpenClaw Manager** è un'app desktop che distribuisce [OpenClaw](https://github.com/openclaw/openclaw) localmente con un clic. Nessun terminale, nessun Docker, nessun file di configurazione manuale.

OpenClaw è un framework di agenti AI che collega un assistente alimentato da Claude alle tue app di messaggistica. Può leggere file, navigare il web, eseguire codice, gestire calendari e automatizzare attività quotidiane — il tutto attraverso conversazione naturale.

**OpenClaw Manager rende tutto semplice:** scarica, inserisci due credenziali, clicca Deploy. Fatto.

---

## Cosa Ti Serve

Solo due cose:

1. **Una API key** — per il modello AI (ottienila da [EvoLink](https://evolink.ai))
2. **Un canale di messaggistica** — attualmente Telegram o Feishu

È tutto. Il manager gestisce il resto: download di OpenClaw, configurazione del servizio, connessione del canale, verifica dell'installazione.

---

## Canali Supportati

| Canale | Stato | Regione |
|--------|-------|---------|
| **Telegram** | ✅ Supportato | Globale |
| **Feishu (飞书)** | ✅ Supportato | Cina |
| WhatsApp | 🔜 In arrivo | — |
| Discord | 🔜 In arrivo | — |
| Slack | 🔜 In arrivo | — |
| Altri... | 🗓️ Pianificato | — |

Stiamo attivamente espandendo il supporto ai canali. Contributi e richieste sono benvenuti.

---

## Guida all'Installazione

Tre passaggi. Meno di 5 minuti.

### Prerequisiti

| Cosa | Dove Ottenerlo |
|------|---------------|
| **EvoLink API Key** | [evolink.ai](https://evolink.ai/signup?utm_source=github[evolink.ai](https://evolink.ai?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)utm_medium=readme[evolink.ai](https://evolink.ai?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)utm_campaign=openclaw-manager) → Dashboard → API Keys |
| **Token Bot Telegram** | Crea via [@BotFather](https://t.me/BotFather) |
| **ID Utente Telegram** | Invia `/start` a [@userinfobot](https://t.me/userinfobot) |

> 💡 Per Feishu: selezionalo al Passo 1 e segui la guida in-app.

### Passo 1 — Crea un'Istanza *(~30 sec)*

Scegli un modello Claude, seleziona il canale (Telegram o Feishu).  
Puoi creare più istanze per team o bot diversi.

### Passo 2 — Inserisci le Credenziali

Incolla la tua API key e le credenziali del canale.  
La procedura guidata valida ogni campo prima di procedere.

### Passo 3 — Deploy e Verifica

Clicca **Deploy**. Osserva il progresso in tempo reale.  
Invia un messaggio di prova per confermare che tutto funziona.

---

## Modelli

Tutti i modelli Claude disponibili via EvoLink:

| Modello | Ideale Per |
|---------|-----------|
| Claude Haiku 4.5 | Risposte veloci, compiti semplici |
| Claude Sonnet 4.5 | Equilibrio velocità e intelligenza |
| Claude Opus 4.5 | Ragionamento complesso |
| Claude Opus 4.6 | Più potente, agenti a lunga durata |

---

## Risparmia sui Costi API

Usa Claude tramite [EvoLink](https://evolink.ai/openclaw) e paga **~30% in meno** rispetto al prezzo ufficiale.

- Stessi modelli, stessa qualità
- Nessuna modifica al codice
- Funziona subito con OpenClaw Manager

> 🔥 Offerta a tempo limitato. [Calcola il tuo risparmio →](https://evolink.ai/openclaw#pricing)

---

## Funzionalità

- **Deploy con un clic** — nessun terminale o Docker
- **Multi-istanza** — esegui più bot OpenClaw contemporaneamente
- **Selezione canale** — Telegram e Feishu, altri in arrivo
- **Selezione modello** — Haiku, Sonnet, Opus (4.5 & 4.6)
- **Progresso in tempo reale** — streaming SSE durante il deploy
- **Controllo gateway** — avvio / stop / stato con auto-refresh
- **Rimozione pulita** — un clic per eliminare
- **Cross-platform** — Windows, macOS, Linux

---

## Compilazione da Sorgente

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

Altre piattaforme:
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

<a href="https://evolink.ai?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager"><strong>EvoLink</strong></a> — Gateway API AI unificato. 40+ modelli, routing intelligente, costi ridotti.

## Licenza

MIT
