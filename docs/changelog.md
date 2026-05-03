# 📄 Dosya Yolu: docs/changelog.md
# 📌 Amac: proje paket degisikliklerini surum bazli kaydetmek
# 📌 Modul - Markdown
# Version: 1.1.3
# Aciklama: Set Otomotiv statik site paketlerinin katalog, renk kartelasi ve PDF katalog degisikliklerini kaydeder
# Bagimli Oldugu Katman: View

## v6.3.32 - Kompakt renk kartlari ve PDF katalog ekleri

- RAL, RAL Effect, Pantone ve NCS renk kartlari kompakt hale getirildi.
- Renk kartlarinda yalnizca renk alani ve kod acik gorunur hale getirildi.
- HEX, RGB, renk ailesi, tip, ad ve not bilgileri acilir detay alanina tasindi.
- Kataloglar sayfasina Atlas Zimpara, Mirka, Karbosan ve Best Sprey PDF katalog kartlari eklendi.
- PDF katalog dosyalari icin `assets/catalogs/pdf/` klasoru eklendi.

## 2.3.3 - Yerel Roboto font gecisi
- Google Fonts CDN baglantilari tum HTML sayfalarindan kaldirildi.
- Roboto fontu local() kaynakli CSS tanimi ile cihaz uzerinden kullanilacak hale getirildi.
- CDN kullanilmadigi durumda Arial ve sistem sans-serif fallback korunur.

## v6.3.31 - Corporate audio delayed autoplay update

- Kurumsal muzik kontrol butonu sol alta tasindi.
- Sayfa yuklendikten 5 saniye sonra otomatik baslatmayi deneyen ayar eklendi.
- Tarayici autoplay engeli durumunda kullaniciya manuel baslatma durumu gosterildi.
- Audio storage key v2 yapildi; eski kapali tercihlerin yeni otomatik baslatmayi engellememesi saglandi.
- Kurumsal muzik dosyasi daha yumusak ritim, pad ve arpej hissiyle yeniden uretildi.
- `data/audio/corporate-audio.json`, `assets/js/corporate-audio.js`, `assets/css/site.css` ve `docs/corporate-audio-guide.md` guncellendi.


## v6.3.29 - Blog resmi kaynak gorselleri

- Axalta / Standox kaynak sayfalarindaki haber ve Color of the Year gorsel URLleri blog kartlarina ve detay hero alanlarina baglandi.
- Eski lokal SVG gorseller fallback olarak korundu.
- data/blog/official-image-map.json eklendi.
- Blog detaylarinda gorsel aciklamalari kaynak gorseli olarak guncellendi.
- TR/EN blog, ana sayfa blog bolumu ve Axalta seri sayfasi kontrol edildi.

# 📄 Dosya Yolu: docs/changelog.md
# 📌 Amac: proje paket degisikliklerini surum bazli kaydetmek
# 📌 Modul - Markdown
# Version: 1.1.2
# Aciklama: Set Otomotiv statik site paketlerinin harita, katalog, RAL Effect, Pantone/NCS rehberleri, blog modulu, Standox/Axalta haber ozetleri, sosyal ikon ve genel degisiklik ozetini guncel tutar
# Bagimli Oldugu Katman: View

## v6.3.27 - Axalta yil renkleri gorunurluk duzeltmesi

- Axalta 2015-2026 yil renkleri blog sayfasinda ayri bir gorunur seri paneli olarak eklendi.
- Ana sayfaya Axalta renk trendleri blog ozet kartlari eklendi.
- `data/blog/axalta-year-colors.json` eklendi.
- Seri ozet sayfasina 2015-2026 yillik renk tablosu eklendi.
- TR/EN blog ve ana sayfa gorunurlugu kontrol edildi.

## v6.3.26 - Axalta Year Color Blog Series

- Axalta 2015-2026 Global Automotive Color of the Year serisi TR/EN bloga eklendi.
- 2015 Radiant Red ile 2026 Solar Boost arasindaki tum yil renkleri icin detay sayfalari olusturuldu.
- Royal Magenta ve ElectroLight yazilari seri formatina uygun sekilde guncellendi.
- Blog liste sayfalari yeni seri en ustte gorunecek sekilde yeniden uretildi.
- `data/blog/tr/posts.json` ve `data/blog/en/posts.json` version `1.2.0` olarak guncellendi.
- `sitemap.xml` yeni blog detay sayfalariyla yeniden olusturuldu.
- Haber metinleri birebir kopyalanmadi; Set Otomotiv yorumu, uygulama notu ve kaynak karti ile sunuldu.

# Changelog

## v6.3.25 - Standox Axalta Blog News Summary

- Standox basin bultenleri sayfasindaki 4 haber blog sistemine sektor haber ozeti olarak eklendi.
- Yeni TR/EN detay sayfalari olusturuldu: Royal Magenta 2022, ElectroLight 2021, 68. renk popularite raporu ve 67. renk popularite raporu.
- Haber metinleri birebir kopyalanmadi; Set Otomotiv tarafindan ozet, yorum ve uygulama notu formatinda yazildi.
- Her yeni blog detayinda kaynak haber linki ve kaynak tarihi gosterildi.
- `data/blog/tr/posts.json` ve `data/blog/en/posts.json` version 1.1.0 olarak guncellendi.
- Blog liste sayfalari yeni sektor haberleriyle yeniden siralandi.
- `sitemap.xml`, `docs/README.md`, `docs/changelog.md` ve blog source card CSS stilleri guncellendi.

## v6.3.24 - Local RAL Effect E3 Guide

- Kataloglar sayfasina RAL Effect E3 Uyum Rehberi karti eklendi.
- `tr/ral-effect-catalog.html` ve `en/ral-effect-catalog.html` sayfalari eklendi.
- `data/catalogs/ral-effect-e3-guide.json` icinde 490 lokal yaklasik dijital RAL Effect E3 tonu olusturuldu.
- RAL Effect E3 yapisi 420 solid ve 70 metallic ton olarak kodlandi.
- Root yonlendirmeleri eklendi: `ral-effect-katalogu.html`, `ral-effect-catalog.html`, `ral-e3-katalogu.html`.
- `sitemap.xml`, `docs/README.md`, `docs/changelog.md`, katalog icerik JSON'lari ve aktif menu kontrolu guncellendi.

## v6.3.23 - Blog Module

- `tr/blog.html` ve `en/blog.html` blog liste sayfalari eklendi.
- `tr/blog-*.html` ve `en/blog-*.html` altinda 6 adet statik SEO uyumlu blog detay sayfasi eklendi.
- Blog icerik indeksi `data/blog/tr/posts.json` ve `data/blog/en/posts.json` altinda lokal veri olarak tutulur.
- Header ve footer menulerine Blog linki eklendi.
- Blog detay sayfalarinda Blog menusu aktif kalacak sekilde `assets/js/site.js` guncellendi.
- Blog kartlari, detay makale ve yan not kartlari icin `assets/css/site.css` stilleri eklendi.
- `blog.html`, `blog_single.html`, `sitemap.xml`, `docs/README.md` ve `docs/changelog.md` guncellendi.


## v6.3.22 - Local NCS Color Guide

- Kataloglar sayfasina NCS Uyum Rehberi karti eklendi.
- `tr/ncs-catalog.html` ve `en/ncs-catalog.html` sayfalari eklendi.
- `data/catalogs/ncs-guide.json` icinde 2353 lokal NCS S tonu olusturuldu.
- NCS sayfasi dis PDF/site bagimliligi olmadan JSON verisiyle calisir.
- NCS renkleri yaklasik dijital onizleme olarak isaretlendi; fiziksel kartela yerine gecmedigi uyarisi eklendi.
- Root yonlendirmeleri eklendi: `ncs-katalogu.html`, `ncs-catalog.html`, `ncs-renkleri.html`.
- `sitemap.xml`, `docs/README.md`, `docs/changelog.md`, katalog icerik JSON'lari ve aktif menu kontrolu guncellendi.

## v6.3.21 - Robust Local Social Image Icons

- Header, mobil menu ve footer sosyal ikonlari CSS mask yerine dogrudan yerel SVG `img` dosyasi olarak kullanildi.
- `assets/icons/social/` altindaki Instagram, Facebook, LinkedIn ve WhatsApp dosyalari korunarak dis ikon/font bagimliligi kaldirildi.
- Iletisim sayfasindaki Instagram satiri yerel SVG img + renkli ikon kutusu yapisina alindi.
- Katalog CTA WhatsApp ikonu yerel SVG img olarak guncellendi.
- CSS icine `social-icon-img`, `contact-social-frame`, `contact-social-img` ve `cta-social-img` siniflari eklendi.
- Eski mask tabanli siniflar geriye uyumluluk icin korundu, fakat aktif header/footer ikonlari img tabanli calisir.


## v6.3.20 - Pantone Match Guide Expansion

- Pantone sayfasi "Pantone Uyum Rehberi" olarak netlestirildi.
- `data/catalogs/pantone-guide.json` 55 ornek tondan 359 lokal tona genisletildi.
- Yeni ton aileleri eklendi: kahve, pastel ve koyu ton.
- Tum Pantone verisi site icindeki lokal JSON dosyasindan calisir; dis site bagimliligi yoktur.
- Sayfaya 359 ton / JSON / HEX-RGB / filtre bilgi kartlari eklendi.
- Renk kartlarinda yaklasik eslestirme notu gosterilecek sekilde `assets/js/color-catalog.js` guncellendi.
- Kataloglar sayfasindaki Pantone karti "Pantone Uyum Rehberi" olarak guncellendi.
- Resmi Pantone lisansli kutuphanesi yerine gecmedigini belirten uretim uyarilari guclendirildi.

## v6.3.19 - Local Color Catalogs

- Kataloglar sayfasina RAL Katalogu ve Pantone Katalogu kartlari eklendi.
- `tr/ral-catalog.html`, `en/ral-catalog.html`, `tr/pantone-catalog.html` ve `en/pantone-catalog.html` sayfalari eklendi.
- RAL renk verisi `data/catalogs/ral-classic.json` altinda lokal olarak tutulur.
- Pantone rehberi `data/catalogs/pantone-guide.json` altinda lokal ve genisletilebilir veri dosyasi olarak eklendi.
- `assets/js/color-catalog.js` ile arama, filtreleme ve HEX kopyalama davranisi eklendi.
- RAL/Pantone detay sayfalarinda Kataloglar menusu aktif kalacak sekilde `assets/js/site.js` guncellendi.
- `assets/css/site.css` icine renk kartelasi sayfalari icin responsive kart stilleri eklendi.
- `sitemap.xml` yeni katalog sayfalariyla guncellendi.

## v6.3.18 - Local Social Icon Files

- Header ve footer sosyal medya ikonlari inline SVG yerine `assets/icons/social/` altindaki yerel SVG dosyalarina tasindi.
- Instagram, Facebook, LinkedIn ve WhatsApp ikonlari artik CDN/font yuklenmesine bagli degildir.
- Iletisim sayfasindaki Instagram ikonu ve katalog CTA WhatsApp ikonu yerel SVG dosyasina baglandi.
- Sosyal ikon boyutlari `assets/css/site.css` icinde dosya tabanli ikonlar icin sabitlendi.

## v6.3.17 - Google Maps Place Link Fix

- Tum header, footer ve iletisim sayfasi harita linkleri kullanicinin verdigi Google Maps kisa konum linki ile esitlendi.
- Iletisim sayfasi iframe haritasi metin bazli arama yerine koordinat bazli embed URL ile guncellendi.
- TR ve EN iletisim iframe adreslerinde ilgili dil parametresi korundu.
- AutoPartsStore JSON-LD alanlarina `hasMap` ve koordinatli `geo` bilgisi eklendi.

## v6.3.16 - HTTPS Guard Removed

- Sonsuz yonlendirme riskini onlemek icin `assets/js/https-guard.js` kaldirildi.
- Tum HTML sayfalarindan `https-guard.js` script referanslari silindi.
- HTTPS zorlamasi ve www/non-www karari hosting, DNS ve GitHub Pages `Enforce HTTPS` tarafina birakildi.
- Docs icinde HTTPS guard referanslari guncellendi.

## v6.3.15 - Address and Google Maps Update

- Adres metni Set Otomotiv, Yeni Ata Sanayi, Mehmet Akif Ersoy Mah. 49-33 Sok. No:33 olarak guncellendi.
- Header, footer, iletisim sayfasi, GDPR metni ve JSON-LD adres alanlari esitlendi.
- Header ve harita butonlari Google Maps yol tarifi baglantisina tasindi.
- Iletisim sayfasi harita iframe sorgusu yeni adrese gore guncellendi.

## v6.3.14 - Deep Audit Fix

- EN ana sayfadaki hatali TR JSON baglantisi `data/content/en/home.json` olarak duzeltildi.
- EN ana sayfa canonical, hreflang, og locale ve og url hatalari duzeltildi.
- Dil secici artik bulundugu sayfanin TR/EN karsiligina gider; her zaman ana sayfaya donmez.
- Yukari cik butonu Bootstrap Icons bagimliliginden cikartildi ve inline SVG kullanir hale getirildi.
- Header topbar adres, telefon ve e-posta ikonlari inline SVG yapisina alindi.
- Footer sayfa listesine `Kataloglar / Catalogs` eklendi.
- Footer harita linki Yandex Set Otomotiv kurum sayfasi ile esitlendi.
- EN footer Turkce kalan metinleri duzeltildi.
- EN 404 sayfasindaki Turkce kalan metinler duzeltildi.
- Brands, References, Privacy, GDPR ve Catalogs sayfalarinda eksik SEO/OG/Twitter meta alanlari tamamlandi.
- Canonical ve `og:url` tutarlilik kontrolu yapildi.

## v6.3.13 - Header Social Icon Fix

- Header ve footer sosyal medya ikonlari Bootstrap Icons fontuna bagimli kalmayacak sekilde inline SVG olarak guncellendi.
- Chrome tarafinda CDN/font gecikmesi veya cache farki nedeniyle sosyal ikonlarin gorunmemesi riski azaltildi.
- Sosyal ikon boyutlari `assets/css/site.css` icinde sabitlendi.

## v6.3.12 - Back To Top Visibility Fix

- Yukari cik butonunun Chrome ve mobil gorunumde daha erken gorunmesi icin scroll esigi 320 px yerine 80 px yapildi.
- Yukari cik butonunun `z-index` degeri yukseltildi.
- Cerez tercih kutusu acikken yukari cik butonunun kutu altinda kalmamasi icin dinamik alt bosluk hesabi eklendi.
- Cerez tercih kutusunun `is-visible` sinifi ile dogru acilip kapanmasi saglandi.
- `assets/css/site.css` ve `assets/js/site.js` patch surumleri guncellendi.

## v6.3.11 - GDPR Notice

- `tr/gdpr.html` KVKK / GDPR aydinlatma metni eklendi.
- `en/gdpr.html` GDPR Notice sayfasi eklendi.
- Root `gdpr.html` yonlendirme dosyasi eklendi.
- Footer yasal linklerine TR icin `KVKK / GDPR`, EN icin `GDPR` linki eklendi.
- Gizlilik sayfalarindan GDPR sayfasina gecis eklendi.
- `sitemap.xml` GDPR sayfalari ile guncellendi.
- EN gizlilik sayfasindaki canonical/hreflang ve metin yazim hatalari duzeltildi.

## v6.3.10 - HTTPS Guard

- `assets/js/https-guard.js` eklendi.
- Canli domainde `https://www.setotomotiv.com` istekleri `https://www.setotomotiv.com` adresine yonlendirilir.
- `www.setotomotiv.com` kullanimi kanonik `setotomotiv.com` adresine yonlendirilir.
- Localhost ve yerel test ortamlarinda yonlendirme devre disi kalacak sekilde ayarlandi.
- Tum ana HTML sayfalarina HTTPS guard scripti erken yuklenecek sekilde eklendi.

## v6.3.9 - Back To Top Button

- Sayfa altindaki sabit WhatsApp hizli iletisim kutusu kaldirildi.
- Ortak `site.js` uzerinden otomatik olusan yukari cik butonu eklendi.
- Yukari cik butonu TR/EN diline gore erisilebilir etiket alacak sekilde ayarlandi.
- Mobil ve desktop sabit pozisyon stilleri `site.css` icinde guncellendi.

## v6.3.8 - Chrome Layout Stability

- Header menusu `navbar-expand-xl` kirilimina alindi.
- Chrome tarafinda 992-1200 px araliginda menu sikismasi ve boyut kaymasi riski azaltildi.
- Hero slider kontrol ve bilgi kartlarinin negatif tasma degerleri kaldirildi.
- Yatay scroll olusturabilecek genislik tasmalari icin CSS koruma katmani eklendi.

## v6.3.7 - Corporate Email Update

- Eski Hotmail adresi tum gorunen alanlarda `info@setotomotiv.com` olarak guncellendi.
- Header, footer, iletisim sayfasi, gizlilik sayfasi ve JSON-LD email alanlari kontrol edildi.
- Release checklist email kontrolu yeni kurumsal adrese gore guncellendi.

## v6.3.6 - Docs Refresh

- `docs/` klasoru guncel proje yapisina gore yenilendi.
- Kataloglar sayfasi ve katalog JSON yapisi dokumanlara eklendi.
- Header Yandex Maps kurum sayfasi linki dokumanlara islendi.
- Asset temizligi sonrasi yerel font klasoru ve eski template kalintilari dokumanlardan kaldirildi.
- `docs/project-structure.md` eklendi.
- `docs/asset-guide.md` eklendi.
- `docs/changelog.md` eklendi.
- Release checklist guncellendi.

## v6.3.5 - Header Yandex Org Link

- Header adres linki TR ve EN tarafinda Yandex Maps Set Otomotiv kurum sayfasina guncellendi.

## v6.3.4 - Header Yandex Map Link

- Header adres linki Yandex Maps kisa linki ile guncellendi.
- Sonraki surumde kurum sayfasi linki tercih edildi.

## v6.3.3 - Asset Clean

- Kullanilmayan `assets/fonts/` klasoru temizlendi.
- Eski template CSS ve JS kalintilari kaldirildi.
- Paket boyutu dusuruldu.
- Kirik gorsel referanslari duzeltildi.

## v6.3.2 - Catalogs Menu

- Header menusune `Kataloglar / Catalogs` eklendi.
- `tr/catalogs.html` ve `en/catalogs.html` sayfalari eklendi.
- Katalog JSON dosyalari eklendi.
- Katalog grid partial dosyalari eklendi.
- Root yonlendirme dosyalari eklendi.
- `sitemap.xml` guncellendi.

## v6.3.1 - Header Email Clean

- Header ve email temizligi yapildi.
- Cok dilli statik yapi korunarak paketlendi.


## v6.3.28 - Blog Visual Upgrade
- Blog kartlarina lokal gorseller eklendi.
- Blog detay sayfalarina hero ve icerik gorseli eklendi.
- Axalta 2015-2026 seri landing sayfasi eklendi.
- Ana sayfa blog preview kartlari gorselli hale getirildi.
- Featured JSON ve seri JSON gorsel alanlari eklendi.

## v6.3.30 - Corporate Audio Module

- Secili sayfalarda calisan kurumsal muzik kontrol modulu eklendi.
- Lokal, sozsuz `corporate-theme.wav` dosyasi eklendi.
- Sag alt muzik ac/kapat butonu ve ses seviyesi kontrolu eklendi.
- Kullanici tercihi `localStorage` ile korunur.
- Aktif sayfalar: ana sayfa, hakkimizda, blog, Axalta renk serisi ve Axalta blog detaylari.

## v6.3.32 - Corporate Audio Countdown Fix

- Kurumsal muzik kontrolu sol altta kompakt hale getirildi.
- Uzun "5 sn sonra" metni kaldirildi, yerine 5-4-3-2-1 geri sayim rozeti eklendi.
- Tarayici sesli autoplay engellerse ilk kullanici etkilesiminde otomatik baslatma fallback eklendi.
- Muzik loop dosyasi daha yumusak ritimli, sozsuz kurumsal yapida yeniden uretildi.
- Audio config version 1.2.0 olarak guncellendi.

- v6.3.33: Kurumsal muzik kontrolu sol alt sabit gorunumden kaldirildi, header dil secimi yanina ikon tabanli kompakt kontrol olarak tasindi.

- v6.3.34: Kurumsal muzik kontrolu header sag ust koseye tasindi, premium cam kapsul gorunumu verildi ve geri sayim 3 saniyeye indirildi.

- v6.3.34: Kurumsal muzik kontrolu back-to-top hizasina tasindi; premium cam efekt ve oynatma aninda isik halkasi eklendi.

- v6.3.37: Dikey ses paneli yeniden dengelendi; panel artik butonun ustunde merkezli, cam efektli ve daha temiz gorunur.

## 2.3.2 - Roboto tipografi ve hata taramasi
- Genel site fontu Inter yerine Roboto olarak guncellendi.
- Google Fonts baglantilari Roboto ailesine tasindi.
- CSS font smoothing yazim hatasi duzeltildi.
- HTML sayfalarda yerel asset/link kontrolu yapildi; eksik baglanti tespit edilmedi.

## 2.3.4 - Turkish Character Fix

- Turkish visible text, metadata and JSON content character issues were corrected.
- Link paths, slugs and asset references were preserved.

## 2.3.5 - Local Roboto Folder Fix

- `assets/fonts/roboto/` klasoru eklendi.
- `assets/css/site.css` icindeki Roboto tanimlari yerel `.woff2` dosya yollarina baglandi.
- CDN font baglantisi kullanilmadigi tekrar dogrulandi.
- Root `index.html` icindeki `display:grid` yazim hatasi duzeltildi.
