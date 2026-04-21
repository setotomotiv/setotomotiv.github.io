# 📄 Dosya Yolu: docs/components-guide.md
# 📌 Amac: statik sitede ortak parcali include mimarisini sabitlemek
# 📌 Modul - Markdown
# Version: 1.2.0
# Aciklama: header, footer, katalog grid ve ortak gorunum parcalarinin tek merkezden yonetilme kurallari
# Bagimli Oldugu Katman: View

# Components Guide

## Include Sistemi

Bu proje GitHub Pages uyumlu statik bir include sistemi kullanir.

Temel mantik:
- Sayfalar tekrar eden HTML tasimaz.
- Ortak alanlar `partials/` altinda tutulur.
- Sayfalar `data-include` ile ilgili parcayi cagirir.
- `assets/js/include-loader.js` bu parcalari istemci tarafinda yukler.

## Header

Aktif dosyalar:
- `partials/tr/header.html`
- `partials/en/header.html`

Header gorevleri:
- Topbar konum, telefon ve email bilgilerini gosterir.
- Konum linki Google Maps yol tarifi baglantisina gider.
- Ana menu dil bazli olarak calisir.
- Mobil menude telefon ve sosyal medya kisa yollarini gosterir.

TR menu sirasi:
1. Ana Sayfa
2. Hakkimizda
3. Hizmetler
4. Referanslar
5. Markalarimiz
6. Kataloglar
7. Iletisim

EN menu sirasi:
1. Home
2. About Us
3. Services
4. References
5. Brands
6. Catalogs
7. Contact

Kurallar:
- Header degisikligi sayfa icinde yapilmaz.
- Header linkleri TR ve EN dosyalarinda birlikte guncellenir.
- Adres linki kurum sayfasi olarak kalmalidir, rastgele harita noktasi kullanilmamalidir.

## Footer

Aktif dosyalar:
- `partials/tr/footer.html`
- `partials/en/footer.html`

Kurallar:
- Iletisim bilgileri header ile tutarli olmali.
- Sosyal linkler header ile tutarli olmali.
- Footer yasal linkleri kirik olmamali.

## Hero Slider

Aktif dosyalar:
- `partials/tr/home-hero.html`
- `partials/en/home-hero.html`

Icerik kaynagi:
- `data/content/tr/home.json`
- `data/content/en/home.json`

Zorunlu alanlar:
- `eyebrow`
- `title`
- `desc`
- `primary`
- `secondary`
- `badges`
- `slides`

## Brands Grid

Aktif dosyalar:
- `partials/tr/brands-grid.html`
- `partials/en/brands-grid.html`

Icerik kaynagi:
- `data/content/tr/brands.json`
- `data/content/en/brands.json`

Her marka kartinda kullanilan alanlar:
- `name`
- `text`
- `logo`
- `logoAlt`
- `tags`

## Catalogs Grid

Aktif dosyalar:
- `partials/tr/catalogs-grid.html`
- `partials/en/catalogs-grid.html`

Icerik kaynagi:
- `data/content/tr/catalogs.json`
- `data/content/en/catalogs.json`

Her katalog kartinda kullanilan alanlar:
- `title`
- `text`
- `badge`
- `icon`
- `tags`
- `link`
- `button`

Simdilik katalog PDF dosyalari eklenmedigi icin katalog butonlari iletisim sayfasina yonlendirilir.
PDF eklendiginde `link` alanlari PDF dosya yoluna cevrilebilir.

## Filtreli Grid Sistemi

Kullanilan alanlar:
- `filters`
- `items`
- `data-filter-tags`

Davranis dosyasi:
- `assets/js/filter-system.js`

Kural:
- Filtre butonu ve kart tag degerleri JSON tarafinda uyumlu olmalidir.

## Quick Quote Band

Aktif sayfa:
- Contact sayfasi

Icerik kaynagi:
- `data/content/tr/contact.json`
- `data/content/en/contact.json`

JSON anahtari:
- `quickQuote`

## Script Sirasi

Ortak script sirasi korunmalidir:
1. `tracking-config.js`
2. `include-loader.js`
3. `content-loader.js`
4. `filter-system.js`
5. `site.js`

## Yasaklar

- Header ve footer HTML kopyasini sayfaya gommek yasak.
- Yeni component inline CSS ile yazilmaz.
- Ayni component TR ve EN tarafinda farkli yapida tutulmaz.
- PDF veya katalog linki eklendiginde sadece tek dilde degisiklik yapilmaz.
