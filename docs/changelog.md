# 📄 Dosya Yolu: docs/changelog.md
# 📌 Amac: proje paket degisikliklerini surum bazli kaydetmek
# 📌 Modul - Markdown
# Version: 1.0.2
# Aciklama: Set Otomotiv statik site paketlerinin degisiklik ozetini guncel tutar
# Bagimli Oldugu Katman: View

# Changelog

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
- Canli domainde `http://setotomotiv.com` istekleri `https://setotomotiv.com` adresine yonlendirilir.
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
