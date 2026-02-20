# OpenClaw Manager

<p align="center">
  <strong>OpenClaw mit einem Klick lokal bereitstellen — dein persönlicher KI-Agent, auf deinem Rechner.</strong>
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">Website</a> •
  <a href="https://evolink.ai/openclaw">Download</a> •
  <a href="#einrichtungsanleitung">Anleitung</a> •
  <a href="#unterstützte-kanäle">Kanäle</a> •
  <a href="#modelle">Modelle</a>
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

## Was ist OpenClaw Manager?

**OpenClaw Manager** ist eine Desktop-App, die [OpenClaw](https://github.com/openclaw/openclaw) mit einem Klick lokal bereitstellt. Kein Terminal, kein Docker, keine manuellen Konfigurationsdateien.

OpenClaw ist ein KI-Agenten-Framework, das einen Claude-gesteuerten KI-Assistenten mit deinen Messaging-Apps verbindet. Es kann Dateien lesen, im Web surfen, Code ausführen, Kalender verwalten und Alltagsaufgaben automatisieren — alles durch natürliche Konversation.

**OpenClaw Manager macht die Einrichtung trivial:** Herunterladen, zwei Zugangsdaten eingeben, Deploy klicken. Fertig.

---

## Was Du Brauchst

Nur zwei Dinge:

1. **Einen API-Schlüssel** — für das KI-Modell (bei [EvoLink](https://evolink.ai) erhältlich)
2. **Einen Messaging-Kanal** — derzeit Telegram oder Feishu

Das war's. Der Manager erledigt den Rest: OpenClaw herunterladen, Service konfigurieren, Kanal verbinden und Setup verifizieren.

---

## Unterstützte Kanäle

| Kanal | Status | Region |
|-------|--------|--------|
| **Telegram** | ✅ Unterstützt | Global |
| **Feishu (飞书)** | ✅ Unterstützt | China |
| WhatsApp | 🔜 Demnächst | — |
| Discord | 🔜 Demnächst | — |
| Slack | 🔜 Demnächst | — |
| Weitere... | 🗓️ Geplant | — |

Wir erweitern aktiv die Kanalunterstützung. Beiträge und Anfragen willkommen.

---

## Einrichtungsanleitung

Drei Schritte. Unter 5 Minuten.

### Voraussetzungen

| Was | Wo Erhältlich |
|-----|--------------|
| **EvoLink API-Schlüssel** | [evolink.ai](https://evolink.ai) → Dashboard → API Keys |
| **Telegram Bot Token** | Erstelle via [@BotFather](https://t.me/BotFather) |
| **Telegram Benutzer-ID** | Sende `/start` an [@userinfobot](https://t.me/userinfobot) |

> 💡 Für Feishu: Wähle es in Schritt 1 aus und folge der In-App-Anleitung.

### Schritt 1 — Instanz Erstellen *(~30 Sek.)*

Wähle ein Claude-Modell, wähle deinen Kanal (Telegram oder Feishu).  
Du kannst mehrere Instanzen für verschiedene Teams oder Bots erstellen.

### Schritt 2 — Zugangsdaten Eingeben

Füge deinen API-Schlüssel und Kanal-Zugangsdaten ein.  
Der Assistent validiert jedes Feld vor dem Fortfahren.

### Schritt 3 — Bereitstellen & Verifizieren

Klicke **Deploy**. Verfolge den Fortschritt in Echtzeit.  
Sende eine Testnachricht um zu bestätigen, dass alles funktioniert.

---

## Modelle

Alle Claude-Modelle über EvoLink verfügbar:

| Modell | Am Besten Für |
|--------|--------------|
| Claude Haiku 4.5 | Schnelle Antworten, einfache Aufgaben |
| Claude Sonnet 4.5 | Balance aus Geschwindigkeit und Intelligenz |
| Claude Opus 4.5 | Komplexes Reasoning |
| Claude Opus 4.6 | Leistungsfähigstes, Langzeit-Agenten |

---

## API-Kosten Sparen

Nutze Claude über [EvoLink](https://evolink.ai/openclaw) und zahle **~30% weniger** als der offizielle Preis.

- Gleiche Modelle, gleiche Qualität
- Keine Code-Änderungen nötig
- Funktioniert sofort mit OpenClaw Manager

> 🔥 Zeitlich begrenztes Angebot. [Berechne deine Ersparnis →](https://evolink.ai/openclaw#pricing)

---

## Funktionen

- **Ein-Klick-Bereitstellung** — kein Terminal oder Docker nötig
- **Multi-Instanz** — mehrere OpenClaw-Bots gleichzeitig betreiben
- **Kanalauswahl** — Telegram und Feishu, weitere folgen
- **Modellauswahl** — Haiku, Sonnet, Opus (4.5 & 4.6)
- **Echtzeit-Fortschritt** — SSE-Streaming während der Bereitstellung
- **Gateway-Steuerung** — Start / Stop / Status mit Auto-Refresh
- **Saubere Entfernung** — ein Klick zum Löschen
- **Plattformübergreifend** — Windows, macOS, Linux

---

## Aus Quellcode Bauen

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

<a href="https://evolink.ai"><strong>EvoLink</strong></a> — Einheitliches KI-API-Gateway. 40+ Modelle, intelligentes Routing, niedrigere Kosten.

## Lizenz

MIT
