# 📄 Dosya Yolu: docs/changelog.md
# 📌 Amac: proje paket degisikliklerini surum bazli kaydetmek
# 📌 Modul - Markdown
# Version: 1.0.0
# Aciklama: Set Otomotiv statik site paketlerinin degisiklik ozetini tutar
# Bagimli Oldugu Katman: View

# Changelog

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
