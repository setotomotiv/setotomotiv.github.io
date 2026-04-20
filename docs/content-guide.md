# 📄 Dosya Yolu: docs/content-guide.md
# 📌 Amac: iceriklerin JSON tabanli yapi ile nasil yonetilecegini sabitlemek
# 📌 Modul - Markdown
# Version: 1.1.0
# Aciklama: ana ve ic sayfa icerik dosyalari, alan adlari ve tekrarli blok kurallari
# Bagimli Oldugu Katman: View

# Content Guide

Icerikler `data/content/<lang>/` altinda tutulur.

Aktif dosyalar:
- `home.json`
- `brands.json`
- `about.json`
- `services.json`
- `contact.json`
- `references.json`

Kurallar:
- Metin degisikligi once JSON dosyasinda yapilir.
- HTML sayfa icinde sabit metin birakilmaz.
- Tekrarli kart ve liste alanlari `data-repeat` ile uretilir.
- Liste alanlari icin `{{LIST}}` yer tutucusu kullanilir.
- Icerik adlari TR ve EN tarafinda ayni semayi korur.


## Ana Sayfa Hero JSON Alani
`data/content/tr/home.json` ve `data/content/en/home.json` dosyalarinda `hero` nesnesi kullanilir.
- `badges` dizisi 3 oge icermelidir
- `slides` dizisi mevcut iskelet ile 3 oge icermelidir
- `slides[*].image` goreli yol olarak verilmelidir

## Marka JSON Alani
`data/content/*/brands.json` altindaki `items` dizisi repeater ile basilir.
- `logo` alani gorsel yoludur
- `logoAlt` erisilebilirlik icin zorunludur


## Filtreli Grid Sistemi
- Marka ve referans kartlari JSON uzerinden gelir.
- Filtre butonlari da JSON ile uretilir.
- Kartlar `data-filter-tags` ile kategorilenir.
- Filtre davranisi `assets/js/filter-system.js` uzerinden yonetilir.


## Quick Quote Band
- Contact sayfasinda premium iletisim bandi kullanilir.
- Telefon, WhatsApp ve e-posta aksiyonlari tek blokta sunulur.
- JSON anahtari: `quickQuote`
