# 📄 Dosya Yolu: docs/project-structure.md
# 📌 Amac: proje klasor ve dosya gorevlerini netlestirmek
# 📌 Modul - Markdown
# Version: 1.0.0
# Aciklama: Set Otomotiv statik sitesinin klasor yapisini ve sorumluluklarini aciklar
# Bagimli Oldugu Katman: View

# Project Structure

## Kok Dizin

Kok dizin, GitHub Pages ve klasik hosting icin giris ve kisa yonlendirme dosyalarini tutar.

Onemli dosyalar:
- `index.html`: kullaniciyi uygun dil sayfasina yonlendirir
- `404.html`: bulunamayan sayfa ekranidir
- `robots.txt`: arama motoru yonlendirmesidir
- `sitemap.xml`: indexlenebilir URL listesidir
- `site.webmanifest`: PWA ve icon tanimlaridir
- `browserconfig.xml`: eski Microsoft tile tanimidir
- `humans.txt`: proje/marka bilgisi icindir

## Dil Klasorleri

- `tr/`: Turkce sayfalar
- `en/`: Ingilizce sayfalar

Her iki dil klasorunde sayfa isimleri mumkun oldugunca ayni kalir.
Ornek:
- `tr/catalogs.html`
- `en/catalogs.html`

## Partials

- `partials/tr/`: Turkce ortak HTML parcalari
- `partials/en/`: Ingilizce ortak HTML parcalari

Header, footer ve grid gibi tekrarli alanlar burada tutulur.
Sayfa icinde ayni HTML tekrar edilmez.

## Content

- `data/content/tr/`: Turkce JSON icerikler
- `data/content/en/`: Ingilizce JSON icerikler

Metin, kart, filtre ve liste gibi dinamik alanlar JSON uzerinden yonetilir.

## Assets

- `assets/css/site.css`: ana stil dosyasi
- `assets/js/https-guard.js`: HTTP ve www kullanimini kanonik HTTPS adrese yonlendirir
- `assets/js/include-loader.js`: partial include yukleyici
- `assets/js/content-loader.js`: JSON icerik yukleyici
- `assets/js/filter-system.js`: filtreli grid davranisi
- `assets/js/site.js`: genel site davranislari
- `assets/js/tracking-config.js`: opsiyonel tracking ayarlari
- `assets/images/`: logo, banner ve sayfa gorselleri

## Docs

- `docs/`: proje bakim, icerik, SEO, asset ve yayin kurallari

## Silinen Eski Yapi

Asagidaki yapilar aktif projede kullanilmadigi icin temizlenmistir:
- `assets/fonts/`
- FontAwesome yerel font dosyalari
- Glyphicons yerel font dosyalari
- Linearicons yerel font dosyalari
- Eski Bootsnav/Owl/Magnific template kalintilari

## Kural

Yeni dosya eklenirse once bu dokuman guncellenmelidir.
