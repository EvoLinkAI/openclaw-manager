# OpenClaw Manager

<p align="center">
  <strong>Despliega OpenClaw localmente con un clic — tu asistente de IA personal, en tu máquina.</strong>
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager">Sitio Web</a> •
  <a href="https://evolink.ai/openclaw?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager">Descargar</a> •
  <a href="#guía-de-instalación">Guía</a> •
  <a href="#canales-soportados">Canales</a> •
  <a href="#modelos">Modelos</a>
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

## ¿Qué es OpenClaw Manager?

**OpenClaw Manager** es una app de escritorio que despliega [OpenClaw](https://github.com/openclaw/openclaw) localmente con un clic. Sin terminal, sin Docker, sin archivos de configuración manuales.

OpenClaw es un framework de agentes de IA que conecta un asistente impulsado por Claude a tus apps de mensajería. Puede leer archivos, navegar la web, ejecutar código, gestionar calendarios y automatizar tareas — todo mediante conversación natural.

**OpenClaw Manager simplifica todo:** descarga, ingresa dos credenciales, haz clic en Desplegar. Listo.

---

## Lo Que Necesitas

Solo dos cosas:

1. **Una API key** — para el modelo de IA (obtén una en [EvoLink](https://evolink.ai?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager))
2. **Un canal de mensajería** — actualmente Telegram o Feishu

Eso es todo. El manager se encarga del resto: descargar OpenClaw, configurar el servicio, conectar tu canal y verificar la instalación.

---

## Canales Soportados

| Canal | Estado | Región |
|-------|--------|--------|
| **Telegram** | ✅ Soportado | Global |
| **Feishu (飞书)** | ✅ Soportado | China |
| WhatsApp | 🔜 Próximamente | — |
| Discord | 🔜 Próximamente | — |
| Slack | 🔜 Próximamente | — |
| Más... | 🗓️ Planeado | — |

Estamos expandiendo activamente el soporte de canales. Contribuciones y solicitudes bienvenidas.

---

## Guía de Instalación

Tres pasos. Menos de 5 minutos.

### Requisitos

| Qué | Dónde Obtenerlo |
|-----|-----------------|
| **EvoLink API Key** | [evolink.ai](https://evolink.ai/signup?utm_source=github[evolink.ai](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)utm_medium=readme[evolink.ai](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)utm_campaign=openclaw-manager) → Dashboard → API Keys |
| **Token de Bot Telegram** | Crear vía [@BotFather](https://t.me/BotFather) |
| **ID de Usuario Telegram** | Enviar `/start` a [@userinfobot](https://t.me/userinfobot) |

> 💡 Para Feishu: selecciónalo en el Paso 1 y sigue la guía dentro de la app.

### Paso 1 — Crear una Instancia *(~30 seg)*

Elige un modelo Claude, selecciona tu canal (Telegram o Feishu).  
Puedes crear múltiples instancias para diferentes equipos o bots.

### Paso 2 — Ingresar Credenciales

Pega tu API key y credenciales del canal.  
El asistente valida cada campo antes de continuar.

### Paso 3 — Desplegar y Verificar

Haz clic en **Desplegar**. Observa el progreso en tiempo real.  
Envía un mensaje de prueba para confirmar que todo funciona.

---

## Modelos

Todos los modelos Claude disponibles vía EvoLink:

| Modelo | Ideal Para |
|--------|-----------|
| Claude Haiku 4.5 | Respuestas rápidas, tareas simples |
| Claude Sonnet 4.5 | Equilibrio velocidad e inteligencia |
| Claude Opus 4.5 | Razonamiento complejo |
| Claude Opus 4.6 | Más capaz, agentes de larga duración |

---

## Ahorra en Costos de API

Usa Claude a través de [EvoLink](https://evolink.ai/openclaw?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager) y paga **~30% menos** que el precio oficial.

- Mismos modelos, misma calidad
- Sin cambios de código
- Funciona directamente con OpenClaw Manager

> 🔥 Oferta por tiempo limitado. [Calcula tu ahorro →](https://evolink.ai/openclaw#pricing?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)

---

## Características

- **Despliegue con un clic** — sin terminal ni Docker
- **Multi-instancia** — ejecuta múltiples bots OpenClaw a la vez
- **Selección de canal** — Telegram y Feishu, más próximamente
- **Selección de modelo** — Haiku, Sonnet, Opus (4.5 y 4.6)
- **Progreso en tiempo real** — streaming SSE durante el despliegue
- **Control del gateway** — iniciar / detener / estado con auto-refresh
- **Eliminación limpia** — un clic para eliminar
- **Multiplataforma** — Windows, macOS, Linux

---

## Compilar desde Fuente

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

<a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager"><strong>EvoLink</strong></a> — Gateway unificado de API de IA. 40+ modelos, enrutamiento inteligente, menor costo.

## Licencia

MIT
