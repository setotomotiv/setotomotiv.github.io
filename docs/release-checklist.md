# 📄 Dosya Yolu: docs/release-checklist.md
# 📌 Amac: yayin oncesi kalite kontrol adimlarini sabitlemek
# 📌 Modul - Markdown
# Version: 1.1.3
# Aciklama: zip almadan once kontrol edilmesi gereken tasarim, icerik, SEO, adres, asset, HTTPS ve link maddelerini listeler
# Bagimli Oldugu Katman: View

# Release Checklist

## Tasarim

- [ ] Header topbar sirasi dogru mu: konum, telefon, email
- [ ] Header menu sirasi TR ve EN tarafinda ayni mantikta mi
- [ ] `Kataloglar / Catalogs` menusu gorunuyor mu
- [ ] Footer yapisi bozulmadi mi
- [ ] Ana sayfa hero slider calisiyor mu
- [ ] Hizmet kartlari responsive duzende mi
- [ ] Marka kartlari ve katalog kartlari mobilde tasma yapiyor mu
- [ ] Contact quick quote bandi dogru gorunuyor mu
- [ ] Yukari cik butonu 80 px sonrasi gorunuyor ve sayfa basina donuyor mu
- [ ] Cerez tercih kutusu acikken yukari cik butonu kutunun altinda kalmiyor mu

## Icerik

- [ ] Turkce karakterler dogru gorunuyor mu
- [ ] Yazim hatasi var mi
- [ ] TR ve EN menu uyumlu mu
- [ ] `data/content/tr/catalogs.json` mevcut mu
- [ ] `data/content/en/catalogs.json` mevcut mu
- [ ] Katalog butonlari su an dogru hedefe gidiyor mu
- [ ] PDF katalog yoksa butonlar iletisim sayfasina gidiyor mu
- [ ] Telefon, email ve adres bilgileri header/footer/contact icinde tutarli mi

## Linkler

- [ ] Header adres linki Google Maps yol tarifi baglantisina gidiyor mu
- [ ] Telefon linki `tel:+903462219287` formatinda mi
- [ ] Email linki `mailto:info@setotomotiv.com` formatinda mi
- [ ] WhatsApp linki dogru numaraya gidiyor mu
- [ ] Sosyal medya linkleri kirik degil mi
- [ ] Root `catalogs.html`, `kataloglar.html`, `katalog.html` yonlendirmeleri calisiyor mu
- [ ] GitHub Pages `Enforce HTTPS` acik mi
- [ ] DNS tarafinda tek kanonik domain karari net mi

## Teknik

- [ ] Ana sayfa gorselleri aciliyor mu
- [ ] `assets/css/site.css` yukleniyor mu
- [ ] `tracking-config.js` hatasiz mi
- [ ] `include-loader.js` hata vermiyor mu
- [ ] `content-loader.js` JSON dosyalarini buluyor mu
- [ ] `filter-system.js` marka ve katalog filtrelerini calistiriyor mu
- [ ] HTML dosyalarinda `https-guard.js` referansi yok mu
- [ ] Cookie banner aciliyor mu
- [ ] Cerez tercihleri linki calisiyor mu
- [ ] KVKK / GDPR footer linki calisiyor mu
- [ ] `tr/gdpr.html` ve `en/gdpr.html` sayfalari aciliyor mu

## SEO

- [ ] Her sayfada title dolu mu
- [ ] Her sayfada meta description dolu mu
- [ ] Canonical dogru mu
- [ ] Hreflang TR/EN/x-default uyumlu mu
- [ ] `sitemap.xml` katalog ve GDPR sayfalarini iceriyor mu
- [ ] `robots.txt` mevcut mu
- [ ] 404 sayfasi mevcut mu

## Asset Temizligi

- [ ] `assets/fonts/` klasoru pakette yok mu
- [ ] Eski FontAwesome/Glyphicons/Linearicons dosyalari yok mu
- [ ] Kullanilmayan Bootsnav/Owl/Magnific kalintilari yok mu
- [ ] `assets/js/https-guard.js` pakette yok mu
- [ ] Gorsel yollarinda kirik referans yok mu
- [ ] Yeni PDF eklendiyse dosya adi ASCII ve bosluksuz mu

## Paket

- [ ] Gereksiz dosya kalmadi mi
- [ ] Zip sorunsuz aciliyor mu
- [ ] GitHub Pages icin kok yapisi dogru mu
- [ ] Paket acildiginda `index.html` kokte duruyor mu
- [ ] `docs/changelog.md` son paket bilgisini iceriyor mu

- Header sosyal medya ikonlari TR/EN ve mobil/desktop gorunumde kontrol edildi.

## v6.3.14 Audit Kontrolleri

- [ ] EN ana sayfa `data/content/en/home.json` kullanir.
- [ ] Dil secici bulundugu sayfanin TR/EN karsiligina gider.
- [ ] Header topbar ikonlari ve yukari cik butonu CDN gecikmesinden etkilenmez.
- [ ] Canonical ve `og:url` ayni URL degerini kullanir.
- [ ] Footer TR/EN metinleri kendi dilindedir.
- [ ] Kataloglar linki header ve footer menulerinde gorunur.
