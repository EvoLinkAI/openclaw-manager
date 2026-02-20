# OpenClaw Manager — Installa e gestisci OpenClaw con un clic

<p align="center">
  <strong>Installa OpenClaw e connetti Telegram o Feishu con una procedura guidata.</strong><br>
  Usa Claude tramite EvoLink e risparmia ~30% — calcola il risparmio in pochi secondi.
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">Sito web</a> •
  <a href="https://evolink.ai/openclaw">Download</a> •
  <a href="#installazione-guidata">Guida all'installazione</a> •
  <a href="#modelli">Modelli</a>
</p>

<p align="center">
  <strong>🌐 Languages / Lingue：</strong>
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

## Perché OpenClaw Manager?

| | |
|---|---|
| ✅ **~30% di sconto su Claude API** | Prezzi ufficiali tramite EvoLink (tempo limitato) |
| ✅ **Nessun terminale** | Copia e incolla le credenziali, clicca Deploy |
| ✅ **Verifica end-to-end** | Conferma che il canale funziona prima di iniziare |
| ✅ **Multi-istanza** | Esegui più bot OpenClaw in parallelo |
| ✅ **Multipiattaforma** | macOS, Windows, Linux |

## Avvio rapido

1. **Scarica** l'eseguibile più recente: [Releases](https://evolink.ai/openclaw)
2. **Esegui** — nessuna installazione necessaria
3. **Segui** la procedura guidata in 3 passaggi

---

## Installazione guidata

Nessun terminale. Basta copiare e incollare le credenziali.

### Prerequisiti

Avrai bisogno di questi prima di iniziare:

| Credenziale | Come ottenerla |
|---|---|
| **EvoLink API Key** | [Dashboard EvoLink](https://evolink.ai) → API Keys |
| **Telegram Bot Token** | Crea un bot tramite [@BotFather](https://t.me/BotFather), copia il token |
| **Telegram User ID** | Invia `/start` a [@userinfobot](https://t.me/userinfobot) |

> 💡 Anche Feishu (Lark) è supportato — selezionalo nel Passaggio 1.

### Passaggio 1 — Creare un'istanza *(~30 sec)*

Scegli un modello Claude, poi seleziona il tuo canale (Telegram o Feishu).
Puoi creare più istanze per team o bot diversi.

### Passaggio 2 — Inserire le credenziali

Incolla la tua EvoLink API Key e le credenziali del canale.
La procedura guidata valida ogni campo prima di procedere.

### Passaggio 3 — Deploy e verifica

Clicca **Deploy**. Il progresso viene trasmesso in tempo reale via SSE.
Una volta completato, invia un messaggio di test per confermare che tutto funziona.

---

## Modelli

Tutti i modelli Claude disponibili tramite EvoLink:

| Modello | Livello |
|---|---|
| Claude Haiku 4.5 | Veloce ed economico |
| Claude Sonnet 4.5 | Bilanciato |
| Claude Opus 4.5 | Avanzato |
| Claude Opus 4.6 | Il più capace |

> 🔥 **Offerta a tempo limitato**: ~30% di sconto sui prezzi ufficiali Claude tramite EvoLink.
> Il risparmio varia in base al livello, pattern di utilizzo e lunghezza del contesto. [Calcola il tuo risparmio →](https://evolink.ai/openclaw#pricing)

---

## Funzionalità

- **Gestione multi-istanza** — esegui più profili OpenClaw in parallelo
- **Selezione modello** — Haiku 4.5, Sonnet 4.5, Opus 4.5, Opus 4.6
- **Supporto canali** — Telegram e Feishu (Lark)
- **Deploy in tempo reale** — progresso in streaming SSE
- **Controllo gateway** — avvio / stop / stato con auto-refresh
- **Eliminazione con un clic** — pulizia del servizio
- **Multipiattaforma** — eseguibili Windows, macOS, Linux

---

## Compilare da sorgente

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

<a href="https://evolink.ai">
  <strong>EvoLink</strong>
</a> — Gateway API AI unificato con 40+ modelli, routing intelligente e costi inferiori.

---

## Licenza

MIT
