# OpenClaw Manager — Instalación y gestión de OpenClaw con un clic

<p align="center">
  <strong>Instala OpenClaw y conecta Telegram o Feishu con un asistente guiado.</strong><br>
  Usa Claude a través de EvoLink y paga ~30% menos — calcula tu ahorro en segundos.
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">Sitio web</a> •
  <a href="https://github.com/EvoLinkAI/openclaw-manager/releases">Descargas</a> •
  <a href="#instalación-guiada">Guía de instalación</a> •
  <a href="#modelos">Modelos</a>
</p>

<p align="center">
  <strong>🌐 Languages / Idiomas：</strong>
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

## ¿Por qué OpenClaw Manager?

| | |
|---|---|
| ✅ **~30% de descuento en Claude API** | Precios oficiales a través de EvoLink (tiempo limitado) |
| ✅ **Sin terminal** | Copia y pega credenciales, haz clic en Deploy |
| ✅ **Verificación completa** | Confirma que tu canal funciona antes de empezar |
| ✅ **Multi-instancia** | Ejecuta múltiples bots OpenClaw en paralelo |
| ✅ **Multiplataforma** | macOS, Windows, Linux |

## Inicio rápido

1. **Descarga** el ejecutable más reciente: [Releases](https://github.com/EvoLinkAI/openclaw-manager/releases)
2. **Ejecútalo** — sin instalación necesaria
3. **Sigue** el asistente de 3 pasos

---

## Instalación guiada

Sin terminal. Solo copia y pega credenciales.

### Requisitos previos

Necesitarás esto antes de empezar:

| Credencial | Cómo obtenerla |
|---|---|
| **EvoLink API Key** | [Panel de EvoLink](https://evolink.ai) → API Keys |
| **Telegram Bot Token** | Crea un bot con [@BotFather](https://t.me/BotFather), copia el token |
| **Telegram User ID** | Envía `/start` a [@userinfobot](https://t.me/userinfobot) |

> 💡 Feishu (Lark) también está soportado — selecciónalo en el Paso 1.

### Paso 1 — Crear una instancia *(~30 seg)*

Elige un modelo Claude, luego selecciona tu canal (Telegram o Feishu).
Puedes crear múltiples instancias para diferentes equipos o bots.

### Paso 2 — Ingresar credenciales

Pega tu EvoLink API Key y las credenciales del canal.
El asistente valida cada campo antes de continuar.

### Paso 3 — Desplegar y verificar

Haz clic en **Deploy**. El progreso se transmite en tiempo real vía SSE.
Una vez completo, envía un mensaje de prueba para confirmar que todo funciona.

---

## Modelos

Todos los modelos Claude disponibles a través de EvoLink:

| Modelo | Nivel |
|---|---|
| Claude Haiku 4.5 | Rápido y económico |
| Claude Sonnet 4.5 | Equilibrado |
| Claude Opus 4.5 | Avanzado |
| Claude Opus 4.6 | El más capaz |

> 🔥 **Oferta por tiempo limitado**: ~30% de descuento en precios oficiales de Claude a través de EvoLink.
> El ahorro varía según nivel, patrón de uso y longitud de contexto. [Calcula tu ahorro →](https://evolink.ai/openclaw#pricing)

---

## Características

- **Gestión multi-instancia** — ejecuta múltiples perfiles OpenClaw en paralelo
- **Selección de modelo** — Haiku 4.5, Sonnet 4.5, Opus 4.5, Opus 4.6
- **Soporte de canales** — Telegram y Feishu (Lark)
- **Despliegue en tiempo real** — progreso por streaming SSE
- **Control de gateway** — iniciar / detener / estado con auto-refresh
- **Eliminación con un clic** — limpieza de servicios
- **Multiplataforma** — ejecutables para Windows, macOS, Linux

---

## Compilar desde fuente

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

Otras plataformas:
```bash
# macOS (Intel)
npx pkg dist/setup.cjs --targets node22-macos-x64 --output dist/openclaw-manager --compress GZip

# macOS (Apple Silicon)
npx pkg dist/setup.cjs --targets node22-macos-arm64 --output dist/openclaw-manager --compress GZip

# Linux
npx pkg dist/setup.cjs --targets node22-linux-x64 --output dist/openclaw-manager --compress GZip
```

---

## Impulsado por

<a href="https://evolink.ai">
  <strong>EvoLink</strong>
</a> — Gateway de API de IA unificado con 40+ modelos, enrutamiento inteligente y menor costo.

---

## Licencia

MIT
