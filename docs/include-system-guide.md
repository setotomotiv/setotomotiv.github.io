# 📄 Dosya Yolu: docs/include-system-guide.md
# 📌 Amac: include ve JSON tabanli icerik sisteminin nasil calistigini sabitlemek
# 📌 Modul - Markdown
# Version: 1.1.0
# Aciklama: ortak parcali yapi, data/content klasoru ve loader sirasi kullanim kurallari
# Bagimli Oldugu Katman: View

# Include ve Content Sistemi

## Genel Yapi

- `partials/tr/` ve `partials/en/` klasorleri ortak HTML sectionlarini tutar.
- `data/content/tr/` ve `data/content/en/` klasorleri metin iceriklerini JSON olarak tutar.
- `assets/js/include-loader.js` once include parcalarini yukler.
- `assets/js/content-loader.js` ilgili JSON dosyasini okuyup `data-content` alanlarini doldurur.
- `assets/js/filter-system.js` filtreli grid alanlarini calistirir.
- `assets/js/site.js` genel site davranislarini calistirir.

## Sayfa Kurali

Her ana sayfa su iki yapidan yararlanir:

```html
<div data-include="../partials/tr/header.html"></div>
```

```html
<body data-page-lang="tr" data-content-file="../data/content/tr/home.json">
```

EN icin yol ve dil degeri degisir:

```html
<div data-include="../partials/en/header.html"></div>
```

```html
<body data-page-lang="en" data-content-file="../data/content/en/home.json">
```

## Alan Doldurma Kurali

- `data-content="about.title"`: text olarak doldurulur.
- `data-content-mode="list"`: dizi verileri listeye donusturulur.
- `data-content-mode="html"`: HTML olarak basilir.
- `data-repeat`: tekrarli kart yapisini uretir.

## Include Dosyalari

Header:
- `partials/tr/header.html`
- `partials/en/header.html`

Footer:
- `partials/tr/footer.html`
- `partials/en/footer.html`

Home:
- `partials/tr/home-hero.html`
- `partials/en/home-hero.html`
- `partials/tr/home-about.html`
- `partials/en/home-about.html`
- `partials/tr/home-services.html`
- `partials/en/home-services.html`
- `partials/tr/home-cta.html`
- `partials/en/home-cta.html`

Grid:
- `partials/tr/brands-grid.html`
- `partials/en/brands-grid.html`
- `partials/tr/catalogs-grid.html`
- `partials/en/catalogs-grid.html`

## Avantaj

- Ayni section birden fazla sayfada tek dosyadan yonetilir.
- Metin degisikligi icin HTML acmaya gerek kalmaz.
- TR ve EN icerik ayrimi temiz kalir.
- GitHub Pages gibi backend olmayan ortamlarda calisir.

## Test Kurali

Degisiklikten sonra tarayicida en az su sayfalar acilmalidir:
- `tr/index.html`
- `tr/catalogs.html`
- `en/index.html`
- `en/catalogs.html`
- `tr/contact.html`

## Yasaklar

- Ayni header veya footer kopyasini sayfa icine gommek yasak.
- Metni dogrudan HTML icinde degistirmek yerine once JSON tarafini kontrol et.
- Inline script ile icerik basmak yasak.
- Include yolunda mutlak local dosya yolu kullanmak yasak.
