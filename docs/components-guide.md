# 📄 Dosya Yolu: docs/components-guide.md
# 📌 Amac: statik sitede ortak parcali include mimarisini sabitlemek
# 📌 Modul - Markdown
# Version: 1.0.0
# Aciklama: header, footer ve ortak gorunum parcalarinin tek merkezden yonetilme kurallari
# Bağimli Oldugu Katman: View

# Components Guide

## Include sistemi
Bu proje GitHub Pages uyumlu statik bir include sistemi kullanir.

Temel mantik:
- Sayfalar tekrar eden HTML tasimaz
- Ortak alanlar `partials/` altinda tutulur
- Sayfalar `data-include` ile ilgili parcayi cagirir
- `assets/js/include-loader.js` bu parcalari istemci tarafinda yukler

## Klasor yapisi
- `partials/tr/header.html`
- `partials/tr/footer.html`
- `partials/en/header.html`
- `partials/en/footer.html`

## Sayfa kullanimi
TR sayfalarda:
```html
<div data-include="../partials/tr/header.html"></div>
<div data-include="../partials/tr/footer.html"></div>
```

EN sayfalarda:
```html
<div data-include="../partials/en/header.html"></div>
<div data-include="../partials/en/footer.html"></div>
```

## Script sirasi
Ortak script sirasi sabittir:
1. `tracking-config.js`
2. `include-loader.js`
3. `site.js`

## Kurallar
- Header ve footer degisiklikleri dogrudan sayfa icinde yapilmaz
- Ortak degisiklikler sadece `partials/` altinda yapilir
- Active menu, yil ve dil davranisi `site.js` icinde kalir
- Cookie banner include ile degil, merkezi JS ile yonetilir
- Yeni ortak component eklenirse once `partials/` altina alinmali

## Avantajlar
- Tek yerden degisiklik
- TR ve EN yapida tutarlilik
- GitHub Pages ile uyumlu sifir backend yaklasimi
- Bakim kolayligi


## Hero Slider Bileseni
- Dosya: `partials/tr/home-hero.html` ve `partials/en/home-hero.html`
- Icerik kaynagi: `data/content/*/home.json` altindaki `hero` alani
- Zorunlu alanlar: `eyebrow`, `title`, `desc`, `primary`, `secondary`, `badges`, `slides`
- Slider su an 3 slayt duzeni ile sabit iskelet kullanir. Gorsel ve metinler JSON tarafindan beslenir.

## Brands Grid Bileseni
- Dosya: `partials/tr/brands-grid.html` ve `partials/en/brands-grid.html`
- Icerik kaynagi: `data/content/*/brands.json`
- Marka kartlari repeater ile uretilir
- Her kart icin `name`, `text`, `logo`, `logoAlt` alanlari kullanilir


## Filtreli Grid Sistemi
- Marka ve referans kartlari JSON uzerinden gelir.
- Filtre butonlari da JSON ile uretilir.
- Kartlar `data-filter-tags` ile kategorilenir.
- Filtre davranisi `assets/js/filter-system.js` uzerinden yonetilir.


## Scroll Reveal ve Marka Hover
- Section basliklari, kartlar ve split-band bloklari `.so-reveal` animasyon sistemini kullanir.
- Marka logolari ilk durumda gri/soft gorunur. Hover halinde renkli hale gecer.
- Yeni marka kartlari `brand-card` ve `brand-logo-wrap` standardina uygun kalmalidir.


## Referans Karti
- brand-chip ustte kalir
- reference-media alani logo veya gorsel tutar
- iki logolu kartlarda ikinci kutu sadece veri varsa gosterilir
- icon-badge destekleyici vurgu olarak korunur


## Quick Quote Band
- Contact sayfasinda premium iletisim bandi kullanilir.
- Telefon, WhatsApp ve e-posta aksiyonlari tek blokta sunulur.
- JSON anahtari: `quickQuote`
