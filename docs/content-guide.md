# 📄 Dosya Yolu: docs/content-guide.md
# 📌 Amac: iceriklerin JSON tabanli yapi ile nasil yonetilecegini sabitlemek
# 📌 Modul - Markdown
# Version: 1.2.0
# Aciklama: ana ve ic sayfa icerik dosyalari, kataloglar, alan adlari ve tekrarli blok kurallari
# Bagimli Oldugu Katman: View

# Content Guide

Icerikler `data/content/<lang>/` altinda tutulur.

## Aktif JSON Dosyalari

TR:
- `data/content/tr/home.json`
- `data/content/tr/about.json`
- `data/content/tr/services.json`
- `data/content/tr/references.json`
- `data/content/tr/brands.json`
- `data/content/tr/catalogs.json`
- `data/content/tr/contact.json`

EN:
- `data/content/en/home.json`
- `data/content/en/about.json`
- `data/content/en/services.json`
- `data/content/en/references.json`
- `data/content/en/brands.json`
- `data/content/en/catalogs.json`
- `data/content/en/contact.json`

## Genel Kurallar

- Metin degisikligi once JSON dosyasinda yapilir.
- HTML sayfa icinde sabit metin mumkun oldugunca birakilmaz.
- Tekrarli kart ve liste alanlari `data-repeat` ile uretilir.
- Liste alanlari icin `{{LIST}}` yer tutucusu kullanilir.
- TR ve EN dosyalari ayni semayi korur.
- Bir dilde yeni alan eklendiyse diger dilde de ayni alan eklenir.

## Ana Sayfa

Dosyalar:
- `data/content/tr/home.json`
- `data/content/en/home.json`

Onemli alanlar:
- `hero`
- `about`
- `services`
- `cta`

Hero kurallari:
- `badges` dizisi 3 oge icermelidir.
- `slides` dizisi mevcut iskelet ile uyumlu olmalidir.
- `slides[*].image` goreli yol olarak verilmelidir.

## Markalar

Dosyalar:
- `data/content/tr/brands.json`
- `data/content/en/brands.json`

Kart alanlari:
- `name`
- `text`
- `logo`
- `logoAlt`
- `tags`

Kural:
- Logo yolu kirik olmamali.
- `logoAlt` bos birakilmamalidir.
- Filtre tag degerleri `filters` ile uyumlu olmalidir.

## Kataloglar

Dosyalar:
- `data/content/tr/catalogs.json`
- `data/content/en/catalogs.json`

Sayfalar:
- `tr/catalogs.html`
- `en/catalogs.html`

Partial dosyalari:
- `partials/tr/catalogs-grid.html`
- `partials/en/catalogs-grid.html`

Kart alanlari:
- `title`
- `text`
- `badge`
- `icon`
- `tags`
- `link`
- `button`

Mevcut kural:
- PDF katalog dosyasi olmadigi icin `link` alanlari iletisim sayfasina gidebilir.
- PDF eklendiginde `assets/catalogs/` gibi temiz bir klasor acilip linkler oraya baglanabilir.
- PDF adlarinda Turkce karakter ve bosluk kullanilmamalidir.

Ornek PDF yolu:
- `../assets/catalogs/set-otomotiv-yedek-parca.pdf`

## Referanslar

Dosyalar:
- `data/content/tr/references.json`
- `data/content/en/references.json`

Kural:
- Birden fazla logo varsa bos alan gosterilmemelidir.
- `brand-chip` metni kisa tutulmalidir.

## Iletisim

Dosyalar:
- `data/content/tr/contact.json`
- `data/content/en/contact.json`

Onemli alanlar:
- telefon
- email
- adres
- WhatsApp linki
- map linki
- `quickQuote`

Kural:
- Header topbar bilgileri ile iletisim sayfasi bilgileri tutarli olmalidir.

## Yasaklar

- Inline HTML icinde kalici metin guncellemesi yapmak yasak.
- TR ve EN semalarini farkli tutmak yasak.
- PDF dosyasini rastgele klasore koymak yasak.
