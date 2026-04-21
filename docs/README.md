# 📄 Dosya Yolu: docs/README.md
# 📌 Amac: proje dokumanlarinin merkez index dosyasi olmak
# 📌 Modul - Markdown
# Version: 1.3.6
# Aciklama: Set Otomotiv statik site dokumanlarini guncel paket durumuna gore listeler
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
- Yukari cik butonu: `assets/js/site.js` tarafindan olusturulur, scroll sonrasi gorunur
- Font kullanimi: Google Fonts Inter CDN
- Genel ikon kullanimi: Bootstrap Icons CDN
- Sosyal ikon kullanimi: `assets/icons/social/` altindaki yerel SVG dosyalari
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
- `tr/gdpr.html`
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
- `en/gdpr.html`
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
- `gdpr.html`

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

- v6.3.18 ile sosyal medya ikonlari `assets/icons/social/` altina tasindi ve dosya tabanli kullanima gecildi.

- Header menusu icine `Kataloglar / Catalogs` eklendi.
- `tr/catalogs.html` ve `en/catalogs.html` sayfalari eklendi.
- `data/content/tr/catalogs.json` ve `data/content/en/catalogs.json` eklendi.
- `partials/tr/catalogs-grid.html` ve `partials/en/catalogs-grid.html` eklendi.
- Header adres linki Google Maps yol tarifi baglantisina baglandi.
- Kullanilmayan `assets/fonts/` ve eski template kalintilari temizlendi.
- Chrome ve Firefox arasinda gorulebilen header/menu boyut kaymasi icin responsive kirilim duzeltildi.
- Sabit WhatsApp hizli iletisim kutusu kaldirildi; yerine yukari cik butonu eklendi.
- JS tabanli HTTPS guard kaldirildi; HTTPS yonlendirme hosting/GitHub Pages tarafina birakildi.
- `tr/gdpr.html`, `en/gdpr.html` ve root `gdpr.html` sayfalari eklendi.
- Footer yasal linklerine `KVKK / GDPR` ve `GDPR` baglantilari eklendi.

## Isleyis Kurali

1. Once docs guncellenir.
2. Sonra HTML, CSS, JS veya JSON dosyalari degistirilir.
3. Son olarak paket zip alinir.
4. Zip acilip temel sayfalar tarayicida test edilir.
5. `sitemap.xml`, `robots.txt` ve canonical linkleri kontrol edilir.

- v6.3.13 ile header/footer sosyal medya ikonlari inline SVG yapisina alindi; ikonlar artik Bootstrap Icons fontu gec yuklense bile gorunur.

- v6.3.14 ile EN ana sayfa JSON, canonical/hreflang, dil secici, inline ikon ve SEO meta tutarlilik hatalari duzeltildi.

- v6.3.16 ile sonsuz yonlendirme riskini onlemek icin `https-guard.js` kaldirildi; HTTPS kontrolu GitHub Pages `Enforce HTTPS` ve DNS seviyesinde yapilmalidir.
- v6.3.17 ile Google Maps linkleri tek kisa konum linkine, iframe haritalari ise koordinat bazli embed yapisina esitlendi.
