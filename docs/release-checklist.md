# 📄 Dosya Yolu: docs/release-checklist.md
# 📌 Amac: yayin oncesi kalite kontrol adimlarini sabitlemek
# 📌 Modul - Markdown
# Version: 1.1.0
# Aciklama: zip almadan once kontrol edilmesi gereken tasarim, icerik, SEO, asset ve link maddelerini listeler
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

- [ ] Header adres linki Yandex Set Otomotiv kurum sayfasina gidiyor mu
- [ ] Telefon linki `tel:+903462219287` formatinda mi
- [ ] Email linki `mailto:set_otomotiv@hotmail.com` formatinda mi
- [ ] WhatsApp linki dogru numaraya gidiyor mu
- [ ] Sosyal medya linkleri kirik degil mi
- [ ] Root `catalogs.html`, `kataloglar.html`, `katalog.html` yonlendirmeleri calisiyor mu

## Teknik

- [ ] Ana sayfa gorselleri aciliyor mu
- [ ] `assets/css/site.css` yukleniyor mu
- [ ] `tracking-config.js` hatasiz mi
- [ ] `include-loader.js` hata vermiyor mu
- [ ] `content-loader.js` JSON dosyalarini buluyor mu
- [ ] `filter-system.js` marka ve katalog filtrelerini calistiriyor mu
- [ ] Cookie banner aciliyor mu
- [ ] Cerez tercihleri linki calisiyor mu

## SEO

- [ ] Her sayfada title dolu mu
- [ ] Her sayfada meta description dolu mu
- [ ] Canonical dogru mu
- [ ] Hreflang TR/EN/x-default uyumlu mu
- [ ] `sitemap.xml` katalog sayfalarini iceriyor mu
- [ ] `robots.txt` mevcut mu
- [ ] 404 sayfasi mevcut mu

## Asset Temizligi

- [ ] `assets/fonts/` klasoru pakette yok mu
- [ ] Eski FontAwesome/Glyphicons/Linearicons dosyalari yok mu
- [ ] Kullanilmayan Bootsnav/Owl/Magnific kalintilari yok mu
- [ ] Gorsel yollarinda kirik referans yok mu
- [ ] Yeni PDF eklendiyse dosya adi ASCII ve bosluksuz mu

## Paket

- [ ] Gereksiz dosya kalmadi mi
- [ ] Zip sorunsuz aciliyor mu
- [ ] GitHub Pages icin kok yapisi dogru mu
- [ ] Paket acildiginda `index.html` kokte duruyor mu
- [ ] `docs/changelog.md` son paket bilgisini iceriyor mu
