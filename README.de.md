# OpenClaw Manager — OpenClaw mit einem Klick installieren und verwalten

<p align="center">
  <strong>Installieren Sie OpenClaw und verbinden Sie Telegram oder Feishu mit einem geführten Assistenten.</strong><br>
  Nutzen Sie Claude über EvoLink und sparen Sie ~30% — berechnen Sie Ihre Ersparnis in Sekunden.
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">Website</a> •
  <a href="https://github.com/EvoLinkAI/openclaw-manager/releases">Downloads</a> •
  <a href="#geführte-einrichtung">Einrichtungsanleitung</a> •
  <a href="#modelle">Modelle</a>
</p>

<p align="center">
  <strong>🌐 Languages / Sprachen：</strong>
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

## Warum OpenClaw Manager?

| | |
|---|---|
| ✅ **~30% Rabatt auf Claude API** | Offizielle Preise über EvoLink (zeitlich begrenzt) |
| ✅ **Kein Terminal nötig** | Zugangsdaten kopieren & einfügen, Deploy klicken |
| ✅ **End-to-End-Verifizierung** | Bestätigen Sie, dass Ihr Kanal funktioniert, bevor Sie beginnen |
| ✅ **Multi-Instanz** | Mehrere OpenClaw-Bots parallel betreiben |
| ✅ **Plattformübergreifend** | macOS, Windows, Linux |

## Schnellstart

1. Neueste ausführbare Datei **herunterladen**: [Releases](https://github.com/EvoLinkAI/openclaw-manager/releases)
2. **Ausführen** — keine Installation erforderlich
3. Dem 3-Schritte-Assistenten **folgen**

---

## Geführte Einrichtung

Kein Terminal. Einfach Zugangsdaten kopieren & einfügen.

### Voraussetzungen

Sie benötigen folgendes vor dem Start:

| Zugangsdaten | Wie erhalten |
|---|---|
| **EvoLink API Key** | [EvoLink Dashboard](https://evolink.ai) → API Keys |
| **Telegram Bot Token** | Bot über [@BotFather](https://t.me/BotFather) erstellen, Token kopieren |
| **Telegram Benutzer-ID** | `/start` an [@userinfobot](https://t.me/userinfobot) senden |

> 💡 Feishu (Lark) wird ebenfalls unterstützt — wählen Sie es in Schritt 1.

### Schritt 1 — Instanz erstellen *(~30 Sek.)*

Wählen Sie ein Claude-Modell, dann wählen Sie Ihren Kanal (Telegram oder Feishu).
Sie können mehrere Instanzen für verschiedene Teams oder Bots erstellen.

### Schritt 2 — Zugangsdaten eingeben

Fügen Sie Ihren EvoLink API Key und die Kanal-Zugangsdaten ein.
Der Assistent validiert jedes Feld vor dem Fortfahren.

### Schritt 3 — Bereitstellen und verifizieren

Klicken Sie auf **Deploy**. Der Fortschritt wird in Echtzeit über SSE gestreamt.
Nach Abschluss senden Sie eine Testnachricht, um zu bestätigen, dass alles funktioniert.

---

## Modelle

Alle über EvoLink verfügbaren Claude-Modelle:

| Modell | Stufe |
|---|---|
| Claude Haiku 4.5 | Schnell & günstig |
| Claude Sonnet 4.5 | Ausgewogen |
| Claude Opus 4.5 | Fortgeschritten |
| Claude Opus 4.6 | Leistungsstärkste |

> 🔥 **Zeitlich begrenztes Angebot**: ~30% Rabatt auf offizielle Claude-Preise über EvoLink.
> Die Ersparnis variiert je nach Stufe, Nutzungsmuster und Kontextlänge. [Berechnen Sie Ihre Ersparnis →](https://evolink.ai/openclaw#pricing)

---

## Funktionen

- **Multi-Instanz-Verwaltung** — mehrere OpenClaw-Profile parallel betreiben
- **Modellauswahl** — Haiku 4.5, Sonnet 4.5, Opus 4.5, Opus 4.6
- **Kanalunterstützung** — Telegram und Feishu (Lark)
- **Echtzeit-Deployment** — SSE-Streaming-Fortschritt
- **Gateway-Steuerung** — Start / Stopp / Status mit Auto-Refresh
- **Ein-Klick-Löschung** — Service-Bereinigung
- **Plattformübergreifend** — Windows, macOS, Linux ausführbare Dateien

---

## Aus Quellcode bauen

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

Andere Plattformen:
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
</a> — Vereinheitlichtes AI-API-Gateway mit 40+ Modellen, intelligentem Routing und niedrigeren Kosten.

---

## Lizenz

MIT
