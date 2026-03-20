# OpenClaw Manager

<p align="center">
  <strong>OpenClaw'ı tek tıkla yerel olarak dağıtın — kişisel AI ajanınız, bilgisayarınızda.</strong>
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">Web Sitesi</a> •
  <a href="https://evolink.ai/openclaw">İndir</a> •
  <a href="#kurulum-kılavuzu">Kılavuz</a> •
  <a href="#desteklenen-kanallar">Kanallar</a> •
  <a href="#modeller">Modeller</a>
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

## OpenClaw Manager Nedir?

**OpenClaw Manager**, [OpenClaw](https://github.com/openclaw/openclaw)'ı tek tıkla yerel olarak dağıtan bir masaüstü uygulamasıdır. Terminal yok, Docker yok, manuel yapılandırma dosyası yok.

OpenClaw, Claude destekli bir AI asistanı mesajlaşma uygulamalarınıza bağlayan bir AI ajan çerçevesidir. Dosya okuma, web tarama, kod çalıştırma, takvim yönetimi ve günlük görevleri otomatikleştirme — hepsi doğal konuşma ile.

**OpenClaw Manager kurulumu basitleştirir:** İndir, iki kimlik bilgisi gir, Dağıt'a tıkla. Bitti.

---

## Neye İhtiyacınız Var

Sadece iki şey:

1. **Bir API anahtarı** — AI modeli için ([EvoLink](https://evolink.ai)'ten alın)
2. **Bir mesajlaşma kanalı** — şu anda Telegram veya Feishu

Hepsi bu. Yönetici geri kalanını halleder: OpenClaw indirme, servis yapılandırma, kanal bağlama ve kurulum doğrulama.

---

## Desteklenen Kanallar

| Kanal | Durum | Bölge |
|-------|-------|-------|
| **Telegram** | ✅ Destekleniyor | Küresel |
| **Feishu (飞书)** | ✅ Destekleniyor | Çin |
| WhatsApp | 🔜 Yakında | — |
| Discord | 🔜 Yakında | — |
| Slack | 🔜 Yakında | — |
| Daha fazla... | 🗓️ Planlandı | — |

Kanal desteğini aktif olarak genişletiyoruz. Katkılar ve istekler hoş geldiniz.

---

## Kurulum Kılavuzu

Üç adım. 5 dakikadan az.

### Ön Koşullar

| Ne | Nereden Alınır |
|----|---------------|
| **EvoLink API Anahtarı** | [evolink.ai](https://evolink.ai/signup?utm_source=github[evolink.ai](https://evolink.ai?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)utm_medium=readme[evolink.ai](https://evolink.ai?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager)utm_campaign=openclaw-manager) → Panel → API Keys |
| **Telegram Bot Token** | [@BotFather](https://t.me/BotFather) ile oluşturun |
| **Telegram Kullanıcı ID** | [@userinfobot](https://t.me/userinfobot)'a `/start` gönderin |

> 💡 Feishu için: Adım 1'de Feishu'yu seçin ve uygulama içi kılavuzu takip edin.

### Adım 1 — Örnek Oluştur *(~30 sn)*

Claude modeli seçin, kanalınızı seçin (Telegram veya Feishu).  
Farklı ekipler veya botlar için birden fazla örnek oluşturabilirsiniz.

### Adım 2 — Kimlik Bilgilerini Girin

API anahtarınızı ve kanal kimlik bilgilerinizi yapıştırın.  
Sihirbaz ilerlemeden önce her alanı doğrular.

### Adım 3 — Dağıt ve Doğrula

**Dağıt**'a tıklayın. Gerçek zamanlı ilerlemeyi izleyin.  
Her şeyin çalıştığını onaylamak için test mesajı gönderin.

---

## Modeller

EvoLink üzerinden kullanılabilen tüm Claude modelleri:

| Model | En İyi Kullanım |
|-------|----------------|
| Claude Haiku 4.5 | Hızlı yanıtlar, basit görevler |
| Claude Sonnet 4.5 | Hız ve zeka dengesi |
| Claude Opus 4.5 | Karmaşık akıl yürütme |
| Claude Opus 4.6 | En yetenekli, uzun süreli ajanlar |

---

## API Maliyetlerinden Tasarruf

Claude'u [EvoLink](https://evolink.ai/openclaw) üzerinden kullanın ve **resmi fiyatlandırmadan ~%30 daha az** ödeyin.

- Aynı modeller, aynı kalite
- Kod değişikliği gerekmez
- OpenClaw Manager ile hazır çalışır

> 🔥 Sınırlı süreli teklif. [Tasarrufunuzu hesaplayın →](https://evolink.ai/openclaw#pricing)

---

## Özellikler

- **Tek tıkla dağıtım** — terminal veya Docker gerekmez
- **Çoklu örnek** — birden fazla OpenClaw botunu aynı anda çalıştırın
- **Kanal seçimi** — Telegram ve Feishu, daha fazlası yakında
- **Model seçimi** — Haiku, Sonnet, Opus (4.5 & 4.6)
- **Gerçek zamanlı ilerleme** — dağıtım sırasında SSE akışı
- **Gateway kontrolü** — başlat / durdur / durum otomatik yenileme
- **Temiz kaldırma** — tek tıkla silme
- **Çapraz platform** — Windows, macOS, Linux

---

## Kaynaktan Derleme

```bash
npm install
npm run build
npx pkg dist/setup.cjs --targets node22-win-x64 --output dist/openclaw-manager --compress GZip
```

Diğer platformlar:
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

<a href="https://evolink.ai?utm_source=github&utm_medium=readme&utm_campaign=openclaw-manager"><strong>EvoLink</strong></a> — Birleşik AI API gateway'i. 40+ model, akıllı yönlendirme, düşük maliyet.

## Lisans

MIT
