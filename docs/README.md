# 📄 Dosya Yolu: docs/README.md
# 📌 Amac: proje dokumanlarinin merkez index dosyasi olmak
# 📌 Modul - Markdown
# Version: 1.2.0
# Aciklama: Set Otomotiv statik site dokumanlarini guncel proje yapisina gore listeler
# Bagimli Oldugu Katman: View

# Set Otomotiv Docs Index

Bu klasor, Set Otomotiv statik web projesinin teknik ve icerik kurallarini tutar.
Kod degismeden once ilgili dokuman kontrol edilmeli ve gerekiyorsa guncellenmelidir.

## Guncel Paket Durumu

- Proje tipi: statik HTML site
- Yayina uygun ortam: GitHub Pages veya standart statik hosting
- Dil yapisi: `tr/` ve `en/`
- Icerik sistemi: `data/content/<lang>/*.json`
- Ortak parca sistemi: `partials/<lang>/*.html`
- Ana stil dosyasi: `assets/css/site.css`
- Aktif JS dosyalari: `assets/js/*.js`
- HTTPS guard: `assets/js/https-guard.js`
- Font kullanimi: Google Fonts Inter CDN
- Ikon kullanimi: Bootstrap Icons CDN
- Yerel `assets/fonts/` klasoru artik yoktur

## Aktif Sayfalar

TR:
- `tr/index.html`
- `tr/about.html`
- `tr/services.html`
- `tr/ref.html`
- `tr/brands.html`
- `tr/catalogs.html`
- `tr/contact.html`
- `tr/privacy.html`
- `tr/404.html`

EN:
- `en/index.html`
- `en/about.html`
- `en/services.html`
- `en/ref.html`
- `en/brands.html`
- `en/catalogs.html`
- `en/contact.html`
- `en/privacy.html`
- `en/404.html`

Root kisa yonlendirme sayfalari:
- `index.html`
- `catalogs.html`
- `kataloglar.html`
- `katalog.html`
- `about.html`
- `services.html`
- `brands.html`
- `contact.html`
- `ref.html`
- `privacy.html`

## Dokumanlar

- `docs/project-structure.md`: klasor ve dosya gorevleri
- `docs/components-guide.md`: header, footer, grid ve ortak component kurallari
- `docs/content-guide.md`: JSON icerik semasi ve sayfa icerikleri
- `docs/include-system-guide.md`: include ve content loader calisma mantigi
- `docs/style-guide.md`: UI, renk, tipografi ve responsive kurallar
- `docs/seo-guide.md`: canonical, hreflang, sitemap ve meta kurallari
- `docs/tracking-guide.md`: cookie consent ve tracking kurallari
- `docs/asset-guide.md`: CSS, JS, image ve font temizlik kurallari
- `docs/release-checklist.md`: yayin oncesi kontrol listesi
- `docs/changelog.md`: paket degisiklik ozeti

## Son Eklenenler

- Header menusu icine `Kataloglar / Catalogs` eklendi.
- `tr/catalogs.html` ve `en/catalogs.html` sayfalari eklendi.
- `data/content/tr/catalogs.json` ve `data/content/en/catalogs.json` eklendi.
- `partials/tr/catalogs-grid.html` ve `partials/en/catalogs-grid.html` eklendi.
- Header adres linki Yandex Maps Set Otomotiv kurum sayfasina baglandi.
- Kullanilmayan `assets/fonts/` ve eski template kalintilari temizlendi.
- Chrome ve Firefox arasinda gorulebilen header/menu boyut kaymasi icin responsive kirilim duzeltildi.
- Sabit WhatsApp hizli iletisim kutusu kaldirildi; yerine yukari cik butonu eklendi.
- HTTP ve www kullanimini kanonik HTTPS adrese yonlendiren `https-guard.js` eklendi.

## Isleyis Kurali

1. Once docs guncellenir.
2. Sonra HTML, CSS, JS veya JSON dosyalari degistirilir.
3. Son olarak paket zip alinir.
4. Zip acilip temel sayfalar tarayicida test edilir.
5. `sitemap.xml`, `robots.txt` ve canonical linkleri kontrol edilir.
