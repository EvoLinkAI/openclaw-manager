# OpenClaw Manager — Installez et gérez OpenClaw en un clic

<p align="center">
  <strong>Installez OpenClaw et connectez Telegram ou Feishu avec un assistant guidé.</strong><br>
  Utilisez Claude via EvoLink et économisez ~30% — estimez vos économies en quelques secondes.
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">Site web</a> •
  <a href="https://github.com/EvoLinkAI/openclaw-manager/releases">Téléchargements</a> •
  <a href="#installation-guidée">Guide d'installation</a> •
  <a href="#modèles">Modèles</a>
</p>

<p align="center">
  <strong>🌐 Languages / Langues：</strong>
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

## Pourquoi OpenClaw Manager ?

| | |
|---|---|
| ✅ **~30% de réduction sur Claude API** | Tarification officielle via EvoLink (durée limitée) |
| ✅ **Pas de terminal** | Copiez-collez les identifiants, cliquez Deploy |
| ✅ **Vérification de bout en bout** | Confirmez que votre canal fonctionne avant de commencer |
| ✅ **Multi-instance** | Exécutez plusieurs bots OpenClaw en parallèle |
| ✅ **Multiplateforme** | macOS, Windows, Linux |

## Démarrage rapide

1. **Téléchargez** le dernier exécutable : [Releases](https://github.com/EvoLinkAI/openclaw-manager/releases)
2. **Lancez** — aucune installation nécessaire
3. **Suivez** l'assistant en 3 étapes

---

## Installation guidée

Pas de terminal. Copiez-collez vos identifiants, c'est tout.

### Prérequis

Vous aurez besoin de ceci avant de commencer :

| Identifiant | Comment l'obtenir |
|---|---|
| **EvoLink API Key** | [Tableau de bord EvoLink](https://evolink.ai) → API Keys |
| **Telegram Bot Token** | Créez un bot via [@BotFather](https://t.me/BotFather), copiez le token |
| **Telegram User ID** | Envoyez `/start` à [@userinfobot](https://t.me/userinfobot) |

> 💡 Feishu (Lark) est également supporté — sélectionnez-le à l'Étape 1.

### Étape 1 — Créer une instance *(~30 sec)*

Choisissez un modèle Claude, puis sélectionnez votre canal (Telegram ou Feishu).
Vous pouvez créer plusieurs instances pour différentes équipes ou bots.

### Étape 2 — Entrer les identifiants

Collez votre EvoLink API Key et les identifiants du canal.
L'assistant valide chaque champ avant de continuer.

### Étape 3 — Déployer et vérifier

Cliquez sur **Deploy**. La progression est diffusée en temps réel via SSE.
Une fois terminé, envoyez un message test pour confirmer que tout fonctionne.

---

## Modèles

Tous les modèles Claude disponibles via EvoLink :

| Modèle | Niveau |
|---|---|
| Claude Haiku 4.5 | Rapide et économique |
| Claude Sonnet 4.5 | Équilibré |
| Claude Opus 4.5 | Avancé |
| Claude Opus 4.6 | Le plus performant |

> 🔥 **Offre à durée limitée** : ~30% de réduction sur les prix officiels Claude via EvoLink.
> Les économies varient selon le niveau, le pattern d'utilisation et la longueur du contexte. [Calculez vos économies →](https://evolink.ai/openclaw#pricing)

---

## Fonctionnalités

- **Gestion multi-instance** — exécutez plusieurs profils OpenClaw en parallèle
- **Sélection de modèle** — Haiku 4.5, Sonnet 4.5, Opus 4.5, Opus 4.6
- **Support de canaux** — Telegram et Feishu (Lark)
- **Déploiement en temps réel** — progression en streaming SSE
- **Contrôle du gateway** — démarrer / arrêter / statut avec auto-refresh
- **Suppression en un clic** — nettoyage du service
- **Multiplateforme** — exécutables Windows, macOS, Linux

---

## Compiler depuis les sources

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

Autres plateformes :
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
</a> — Passerelle API AI unifiée avec 40+ modèles, routage intelligent et coûts réduits.

---

## Licence

MIT
