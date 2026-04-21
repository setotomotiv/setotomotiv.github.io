# 📄 Dosya Yolu: docs/asset-guide.md
# 📌 Amac: asset klasorunun temiz ve performansli kalmasini saglamak
# 📌 Modul - Markdown
# Version: 1.0.2
# Aciklama: CSS, JS, gorsel, font, katalog ve HTTPS guard temizlik kurallarini tanimlar
# Bagimli Oldugu Katman: View

# Asset Guide

## Aktif Asset Yapisi

CSS:
- `assets/css/site.css`

JS:
- `assets/js/tracking-config.js`
- `assets/js/include-loader.js`
- `assets/js/content-loader.js`
- `assets/js/filter-system.js`
- `assets/js/site.js`

Images:
- `assets/images/`

## HTTPS Guard Kurali

- JS tabanli `http -> https` veya `www -> non-www` yonlendirme dosyasi kullanilmaz.
- HTTPS zorlamasi GitHub Pages `Enforce HTTPS`, DNS ve hosting seviyesi uzerinden yapilir.
- Tarayici tarafinda protokol/host degistiren script eklenirse sonsuz yonlendirme riski dogar.

## Font Kurali

Aktif font:
- Google Fonts Inter CDN

Silinen yapi:
- `assets/fonts/`
- FontAwesome yerel font dosyalari
- Glyphicons yerel font dosyalari
- Linearicons yerel font dosyalari

Kural:
- Yerel font klasoru geri eklenmez.
- Yeni font gerekiyorsa once lisans ve performans kontrolu yapilir.
- Ikon icin Bootstrap Icons CDN kullanilir.

## CSS Kurali

Aktif ana CSS:
- `assets/css/site.css`

Yasak eski template kalintilari:
- `font-awesome.min.css`
- `bootstrap.min.css` yerel kopyasi
- `bootsnav.css`
- `owl.carousel.css`
- `magnific-popup.css`

Not:
- Bootstrap 5 CDN uzerinden yuklenir.
- Bootstrap Icons CDN uzerinden yuklenir.

## JS Kurali

Aktif JS dosyalari sadece proje davranisi icindir.
Eski jQuery template dosyalari geri eklenmez.

Yasak eski kalintilar:
- eski jQuery pluginleri
- Bootsnav scriptleri
- Owl carousel scriptleri
- Magnific popup scriptleri

## Gorsel Kurali

- Format onceligi `webp` olmalidir.
- Logo ve favicon dosyalari `assets/images/logo/` altinda tutulmalidir.
- Banner gorselleri optimize edilmelidir.
- Kullanilmayan gorsel dosyalari paket oncesi kontrol edilmelidir.
- Dosya adinda Turkce karakter, bosluk veya ozel karakter kullanilmamalidir.

## Katalog PDF Kurali

PDF katalog eklenecekse onerilen klasor:
- `assets/catalogs/`

Onerilen dosya adlari:
- `set-otomotiv-yedek-parca.pdf`
- `set-otomotiv-otomotiv-boya.pdf`
- `set-otomotiv-bakim-urunleri.pdf`

PDF eklendiginde guncellenecek dosyalar:
- `data/content/tr/catalogs.json`
- `data/content/en/catalogs.json`
- `docs/content-guide.md`
- `docs/release-checklist.md`

## Paket Kontrolu

Zip almadan once su kontroller yapilir:
- Kullanilmayan font dosyasi yok mu
- Kullanilmayan CSS/JS kalintisi yok mu
- Kirik gorsel yolu yok mu
- Katalog PDF linkleri dogru mu
- Paket boyutu gereksiz sismemis mi

## Yukari Cik Butonu Kurali

- Buton HTML icine sabit yazilmaz; `assets/js/site.js` tarafindan uretilir.
- Gorunurluk scroll sonrasi JS ile yonetilir.
- Cerez tercih kutusu acikken buton alt boslugu CSS degiskeni ile dinamik ayarlanir.
- `z-index` degeri footer, cerez ve sabit alanlarla cakismayacak sekilde korunur.

## v6.3.14 ikon notu

Header sosyal ikonlari, header topbar ikonlari ve yukari cik butonu inline SVG kullanir.
Bootstrap Icons CDN halen sayfa ici dekoratif ikonlar icin kullanilir.
