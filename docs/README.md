
## v6.3.29 - Blog resmi kaynak gorselleri

- Axalta / Standox kaynak sayfalarindaki haber ve Color of the Year gorsel URLleri blog kartlarina ve detay hero alanlarina baglandi.
- Eski lokal SVG gorseller fallback olarak korundu.
- data/blog/official-image-map.json eklendi.
- Blog detaylarinda gorsel aciklamalari kaynak gorseli olarak guncellendi.
- TR/EN blog, ana sayfa blog bolumu ve Axalta seri sayfasi kontrol edildi.

# 📄 Dosya Yolu: docs/README.md
# 📌 Amac: proje dokumanlarinin merkez index dosyasi olmak
# 📌 Modul - Markdown
# Version: 1.7.0
# Aciklama: Set Otomotiv statik site dokumanlarini, lokal renk kataloglarini, RAL Effect, Pantone/NCS uyum rehberlerini, blog modulu, Axalta 2015-2026 renk serisi, Standox/Axalta haber ozetleri ve sosyal ikon kullanimini guncel paket durumuna gore listeler
# Bagimli Oldugu Katman: View

# Set Otomotiv Docs Index

Bu klasor, Set Otomotiv statik web projesinin teknik ve icerik kurallarini tutar.
Kod degismeden once ilgili dokuman kontrol edilmeli ve gerekiyorsa guncellenmelidir.

## Guncel Paket Durumu

- Proje tipi: statik HTML site
- Yayina uygun ortam: GitHub Pages veya standart statik hosting
- Dil yapisi: `tr/` ve `en/`
- Icerik sistemi: `data/content/<lang>/*.json`
- Blog sistemi: `tr/blog.html`, `en/blog.html`, `tr/blog-*.html`, `en/blog-*.html` ve `data/blog/<lang>/posts.json`
- Lokal renk kataloglari: `data/catalogs/*.json`
- RAL Effect E3 uyum rehberi: 490 lokal yaklasik ton, resmi fiziksel RAL Effect E3 kartelasi yerine gecmez
- Pantone uyum rehberi: 359 lokal ton, resmi lisansli Pantone kutuphanesi yerine gecmez
- NCS uyum rehberi: 2353 lokal NCS S tonu, yaklasik dijital onizleme niteligindedir
- Ortak parca sistemi: `partials/<lang>/*.html`
- Ana stil dosyasi: `assets/css/site.css`
- Aktif JS dosyalari: `assets/js/*.js`
- Yukari cik butonu: `assets/js/site.js` tarafindan olusturulur, scroll sonrasi gorunur
- Font kullanimi: Yerel Roboto ve sistem font fallback
- Genel ikon kullanimi: Bootstrap Icons CDN
- Sosyal ikon kullanimi: `assets/icons/social/` altindaki yerel SVG dosyalari dogrudan `img` olarak kullanilir
- Yerel `assets/fonts/` klasoru artik yoktur


## Lokal Renk Kataloglari

- RAL: `data/catalogs/ral-classic.json` ile lokal olarak calisir.
- RAL Effect E3 uyum rehberi: `data/catalogs/ral-effect-e3-guide.json` ile lokal olarak calisir.
- RAL Effect E3 rehberi 420 solid + 70 metallic olmak uzere 490 yaklasik dijital ton icerir.
- Pantone uyum rehberi: `data/catalogs/pantone-guide.json` ile lokal olarak calisir.
- Pantone rehberi 359 yaklasik dijital ton icerir.
- NCS uyum rehberi: `data/catalogs/ncs-guide.json` ile lokal olarak calisir.
- NCS rehberi 2353 yaklasik dijital NCS S tonu icerir.
- Bu veriler resmi Pantone veya NCS kutuphanelerinin kopyasi degildir; uretim oncesi fiziksel kartela veya lisansli kaynakla dogrulama gerekir.
- Yeni renk ekleme islemi JSON `items` dizisine yeni kayit eklenerek yapilir.

## Aktif Sayfalar

TR:
- `tr/index.html`
- `tr/about.html`
- `tr/services.html`
- `tr/ref.html`
- `tr/brands.html`
- `tr/catalogs.html`
- `tr/blog.html`
- `tr/blog-*.html`
- `tr/ral-catalog.html`
- `tr/ral-effect-catalog.html`
- `tr/pantone-catalog.html`
- `tr/ncs-catalog.html`
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
- `en/blog.html`
- `en/blog-*.html`
- `en/ral-catalog.html`
- `en/ral-effect-catalog.html`
- `en/pantone-catalog.html`
- `en/ncs-catalog.html`
- `en/contact.html`
- `en/privacy.html`
- `en/gdpr.html`
- `en/404.html`

Root kisa yonlendirme sayfalari:
- `index.html`
- `catalogs.html`
- `kataloglar.html`
- `katalog.html`
- `ral-katalogu.html`
- `ral-effect-katalogu.html`
- `ral-e3-katalogu.html`
- `pantone-katalogu.html`
- `ral-catalog.html`
- `ral-effect-catalog.html`
- `pantone-catalog.html`
- `ncs-katalogu.html`
- `ncs-catalog.html`
- `ncs-renkleri.html`
- `blog.html`
- `blog_single.html`
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

- v6.3.26 ile Axalta 2015-2026 Global Automotive Color of the Year serisi TR/EN bloga eklendi; her yil icin ayri detay sayfasi ve genel seri ozeti olusturuldu.

- v6.3.25 ile Standox/Axalta kaynakli 4 sektor haber ozeti bloga eklendi; haberler birebir kopya degil, Set Otomotiv yorumu ve kaynak linkiyle sunulur.

- v6.3.24 ile RAL Effect E3 Uyum Rehberi eklendi; 490 lokal yaklasik ton `data/catalogs/ral-effect-e3-guide.json` uzerinden dis site bagimliligi olmadan calisir.

- v6.3.22 ile NCS Uyum Rehberi eklendi; 2353 lokal NCS S tonu `data/catalogs/ncs-guide.json` uzerinden dis site bagimliligi olmadan calisir.

- v6.3.21 ile sosyal ikonlar CSS mask yerine dogrudan yerel SVG img dosyalarina baglandi.

- v6.3.19 ile RAL ve Pantone renk kataloglari lokal JSON verisiyle eklendi; katalog sayfalari dis siteye bagimli degildir.

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

### v6.3.27 Notu

Axalta 2015-2026 yil renkleri artik sadece detay dosyalari olarak degil, blog liste sayfasinda ust seri paneli ve ana sayfada blog ozet kartlariyla da gorunur durumdadir.


## v6.3.28 - Blog Visual Upgrade
- Blog kartlarina lokal gorseller eklendi.
- Blog detay sayfalarina hero ve icerik gorseli eklendi.
- Axalta 2015-2026 seri landing sayfasi eklendi.
- Ana sayfa blog preview kartlari gorselli hale getirildi.
- Featured JSON ve seri JSON gorsel alanlari eklendi.

## v6.3.30 Corporate Audio Module

- Secili sayfalara kullanici kontrollu kurumsal muzik butonu eklendi.
- Lokal `assets/audio/corporate-theme.wav` dosyasi eklendi.
- `assets/js/corporate-audio.js` ve `data/audio/corporate-audio.json` ile sayfa bazli kontrol saglandi.
- Muzik otomatik zorlanmaz; kullanici tercihi ve ses seviyesi saklanir.


## v6.3.31 Corporate Audio

- Muzik kontrolu sol altta gosterilir.
- Sayfa yuklendikten 5 saniye sonra otomatik baslatma denenir.
- Tarayici engellerse kullanici tek tikla baslatabilir.
- Audio loop daha yumusak ve ritimli olarak yeniden uretildi.

## v6.3.32 Notu

Kurumsal muzik modulu kompakt geri sayim, sol alt kontrol, daha yumusak lokal loop ve ilk etkilesimde otomatik baslatma fallback ile guncellendi.

- Corporate audio control now appears as an icon-only inline control next to the language switcher on supported pages.

- Corporate audio control is now placed at the top-right corner of the header with a premium glass capsule style and a 3-second countdown.

- Corporate audio control now aligns with the back-to-top button and uses a premium glass style with a light ring while playing.

- The corporate audio widget now uses a centered vertical volume panel for a cleaner balance next to the back-to-top control.
