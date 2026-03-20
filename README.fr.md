# OpenClaw Manager

<p align="center">
  <strong>Déployez OpenClaw localement en un clic — votre assistant IA personnel, sur votre machine.</strong>
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">Site Web</a> •
  <a href="https://evolink.ai/openclaw">Télécharger</a> •
  <a href="#guide-dinstallation">Guide</a> •
  <a href="#canaux-supportés">Canaux</a> •
  <a href="#modèles">Modèles</a>
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

## Qu'est-ce qu'OpenClaw Manager ?

**OpenClaw Manager** est une application de bureau qui déploie [OpenClaw](https://github.com/openclaw/openclaw) localement en un clic. Pas de terminal, pas de Docker, pas de fichiers de configuration manuels.

OpenClaw est un framework d'agents IA qui connecte un assistant alimenté par Claude à vos applications de messagerie. Il peut lire des fichiers, naviguer sur le web, exécuter du code, gérer des calendriers et automatiser des tâches quotidiennes — le tout via conversation naturelle.

**OpenClaw Manager simplifie tout :** téléchargez, entrez deux identifiants, cliquez Déployer. C'est fait.

---

## Ce Dont Vous Avez Besoin

Seulement deux choses :

1. **Une clé API** — pour le modèle IA (obtenez-la sur [EvoLink](https://evolink.ai))
2. **Un canal de messagerie** — actuellement Telegram ou Feishu

C'est tout. Le manager gère le reste : téléchargement d'OpenClaw, configuration du service, connexion du canal et vérification de l'installation.

---

## Canaux Supportés

| Canal | Statut | Région |
|-------|--------|--------|
| **Telegram** | ✅ Supporté | Mondial |
| **Feishu (飞书)** | ✅ Supporté | Chine |
| WhatsApp | 🔜 Bientôt | — |
| Discord | 🔜 Bientôt | — |
| Slack | 🔜 Bientôt | — |
| Plus... | 🗓️ Planifié | — |

Nous étendons activement le support des canaux. Contributions et demandes bienvenues.

---

## Guide d'Installation

Trois étapes. Moins de 5 minutes.

### Prérequis

| Quoi | Où l'Obtenir |
|------|-------------|
| **Clé API EvoLink** | [evolink.ai](https://evolink.ai?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager) → Tableau de bord → API Keys |
| **Token Bot Telegram** | Créez via [@BotFather](https://t.me/BotFather) |
| **ID Utilisateur Telegram** | Envoyez `/start` à [@userinfobot](https://t.me/userinfobot) |

> 💡 Pour Feishu : sélectionnez-le à l'Étape 1 et suivez le guide intégré à l'application.

### Étape 1 — Créer une Instance *(~30 sec)*

Choisissez un modèle Claude, sélectionnez votre canal (Telegram ou Feishu).  
Vous pouvez créer plusieurs instances pour différentes équipes ou bots.

### Étape 2 — Entrer les Identifiants

Collez votre clé API et les identifiants du canal.  
L'assistant valide chaque champ avant de continuer.

### Étape 3 — Déployer et Vérifier

Cliquez **Déployer**. Observez la progression en temps réel.  
Envoyez un message test pour confirmer que tout fonctionne.

---

## Modèles

Tous les modèles Claude disponibles via EvoLink :

| Modèle | Idéal Pour |
|--------|-----------|
| Claude Haiku 4.5 | Réponses rapides, tâches simples |
| Claude Sonnet 4.5 | Équilibre vitesse et intelligence |
| Claude Opus 4.5 | Raisonnement complexe |
| Claude Opus 4.6 | Le plus puissant, agents longue durée |

---

## Économisez sur les Coûts API

Utilisez Claude via [EvoLink](https://evolink.ai/openclaw) et payez **~30% de moins** que le tarif officiel.

- Mêmes modèles, même qualité
- Aucune modification de code
- Fonctionne directement avec OpenClaw Manager

> 🔥 Offre limitée dans le temps. [Calculez vos économies →](https://evolink.ai/openclaw#pricing)

---

## Fonctionnalités

- **Déploiement en un clic** — pas de terminal ni Docker
- **Multi-instance** — exécutez plusieurs bots OpenClaw simultanément
- **Sélection de canal** — Telegram et Feishu, d'autres à venir
- **Sélection de modèle** — Haiku, Sonnet, Opus (4.5 & 4.6)
- **Progression en temps réel** — streaming SSE pendant le déploiement
- **Contrôle du gateway** — démarrer / arrêter / statut auto-refresh
- **Suppression propre** — un clic pour supprimer
- **Multi-plateforme** — Windows, macOS, Linux

---

## Compiler depuis les Sources

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

<a href="https://evolink.ai?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager"><strong>EvoLink</strong></a> — Passerelle API IA unifiée. 40+ modèles, routage intelligent, coûts réduits.

## Licence

MIT
