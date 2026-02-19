# OpenClaw Manager — Tek Tıkla OpenClaw Kur ve Yönet

<p align="center">
  <strong>OpenClaw'ı kurun ve rehberli sihirbaz ile Telegram veya Feishu'yu bağlayın.</strong><br>
  EvoLink üzerinden Claude kullanarak ~%30 tasarruf edin — saniyeler içinde tasarrufunuzu hesaplayın.
</p>

<p align="center">
  <a href="https://evolink.ai/openclaw">Web sitesi</a> •
  <a href="https://github.com/EvoLinkAI/openclaw-manager/releases">İndirmeler</a> •
  <a href="#rehberli-kurulum">Kurulum Rehberi</a> •
  <a href="#modeller">Modeller</a>
</p>

<p align="center">
  <strong>🌐 Languages / Diller：</strong>
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

## Neden OpenClaw Manager?

| | |
|---|---|
| ✅ **Claude API'de ~%30 indirim** | EvoLink üzerinden resmi fiyatlandırma (sınırlı süre) |
| ✅ **Terminal gereksiz** | Kimlik bilgilerini kopyala & yapıştır, Deploy'a tıkla |
| ✅ **Uçtan uca doğrulama** | Başlamadan önce kanalınızın çalıştığını onaylayın |
| ✅ **Çoklu örnek** | Birden fazla OpenClaw botunu aynı anda çalıştırın |
| ✅ **Çapraz platform** | macOS, Windows, Linux |

## Hızlı Başlangıç

1. En son çalıştırılabilir dosyayı **indirin**: [Releases](https://github.com/EvoLinkAI/openclaw-manager/releases)
2. **Çalıştırın** — kurulum gereksiz
3. Aşağıdaki 3 adımlı sihirbazı **takip edin**

---

## Rehberli Kurulum

Terminal gereksiz. Sadece kimlik bilgilerini kopyala & yapıştır.

### Ön Koşullar

Başlamadan önce bunlara ihtiyacınız olacak:

| Kimlik Bilgisi | Nasıl Edinilir |
|---|---|
| **EvoLink API Key** | [EvoLink Panosu](https://evolink.ai) → API Keys |
| **Telegram Bot Token** | [@BotFather](https://t.me/BotFather) ile bot oluşturun, token'ı kopyalayın |
| **Telegram Kullanıcı ID** | [@userinfobot](https://t.me/userinfobot)'a `/start` gönderin |

> 💡 Feishu (Lark) da destekleniyor — Adım 1'de seçin.

### Adım 1 — Örnek Oluşturma *(~30 sn)*

Bir Claude modeli seçin, ardından kanalınızı (Telegram veya Feishu) seçin.
Farklı ekipler veya botlar için birden fazla örnek oluşturabilirsiniz.

### Adım 2 — Kimlik Bilgilerini Girin

EvoLink API Key ve kanal kimlik bilgilerinizi yapıştırın.
Sihirbaz devam etmeden önce her alanı doğrular.

### Adım 3 — Dağıtım ve Doğrulama

**Deploy**'a tıklayın. SSE üzerinden gerçek zamanlı ilerleme akışı sağlanır.
Tamamlandığında, her şeyin çalıştığını onaylamak için bir test mesajı gönderin.

---

## Modeller

EvoLink üzerinden kullanılabilir tüm Claude modelleri:

| Model | Seviye |
|---|---|
| Claude Haiku 4.5 | Hızlı ve ekonomik |
| Claude Sonnet 4.5 | Dengeli |
| Claude Opus 4.5 | Gelişmiş |
| Claude Opus 4.6 | En yetenekli |

> 🔥 **Sınırlı süreli teklif**: EvoLink üzerinden Claude resmi fiyatlandırmasında ~%30 indirim.
> Tasarruf; seviye, kullanım düzeni ve bağlam uzunluğuna göre değişir. [Tasarrufunuzu hesaplayın →](https://evolink.ai/openclaw#pricing)

---

## Özellikler

- **Çoklu örnek yönetimi** — birden fazla OpenClaw profilini aynı anda çalıştırın
- **Model seçimi** — Haiku 4.5, Sonnet 4.5, Opus 4.5, Opus 4.6
- **Kanal desteği** — Telegram ve Feishu (Lark)
- **Gerçek zamanlı dağıtım** — SSE akışlı ilerleme
- **Gateway kontrolü** — başlat / durdur / durum otomatik yenileme
- **Tek tıkla silme** — hizmet temizleme
- **Çapraz platform** — Windows, macOS, Linux çalıştırılabilir dosyalar

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

<a href="https://evolink.ai">
  <strong>EvoLink</strong>
</a> — 40+ model, akıllı yönlendirme ve düşük maliyetle birleşik AI API gateway'i.

---

## Lisans

MIT
