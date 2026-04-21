# 📄 Dosya Yolu: docs/seo-guide.md
# 📌 Amac: sayfa bazli SEO kurallarini sabitlemek
# 📌 Modul - Markdown
# Version: 1.1.0
# Aciklama: title, description, canonical, hreflang, sitemap ve sosyal meta yapisini tanimlar
# Bagimli Oldugu Katman: View

# SEO Guide

## 1. Title Kurali

- Her sayfada benzersiz olmali.
- 60 karakteri asmamaya calis.
- Marka ismi sonda yer almali.

Ornek:
- `Ana Sayfa | Set Otomotiv`
- `Markalarimiz | Set Otomotiv`
- `Kataloglar | Set Otomotiv`
- `Catalogs | Set Otomotiv`

## 2. Meta Description

- 140 ile 160 karakter arasi hedeflenmeli.
- Ayni aciklama tum sayfalarda tekrar edilmemeli.
- Ana hizmet kelimeleri dogal sekilde gecmeli.

## 3. Canonical

- Her sayfa kendi canonical adresine sahip olmali.
- TR ve EN sayfalar farkli canonical kullanmali.
- Root yonlendirme sayfalarinda canonical hedef sayfaya uygun olmalidir.

Katalog ornegi:
- `https://setotomotiv.com/tr/catalogs.html`
- `https://setotomotiv.com/en/catalogs.html`

## 4. Hreflang

Dil bazli sayfalarda asagidaki mantik korunmali:
- `tr`
- `en`
- `x-default`

Kural:
- TR sayfa EN karsiligini gostermeli.
- EN sayfa TR karsiligini gostermeli.
- `x-default` genellikle TR ana hedefe gidebilir.

## 5. Open Graph ve Twitter

- `og:title` sayfa title ile uyumlu olmali.
- `og:description` meta description ile uyumlu olmali.
- `og:url` canonical ile uyumlu olmali.
- `og:image` kullanilacaksa kirik olmamali.
- Gorsel yolunda Turkce karakter ve bosluk olmamali.

## 6. Sitemap

`sitemap.xml` yeni sayfalari icermelidir.

Katalog sayfalari sitemap icinde bulunmalidir:
- `/tr/catalogs.html`
- `/en/catalogs.html`

Root kisa sayfalari sitemap icinde zorunlu degildir; canonical karmasasi olusturmamak icin ana dil sayfalari onceliklidir.

## 7. Robots

`robots.txt` mevcut olmali ve sitemap adresini gostermelidir.

## 8. 404

- Kok `404.html` mevcut olmali.
- Dil klasorlerinde 404 sayfasi mevcut olmali.
- 404 sayfasi kullaniciyi ana sayfaya veya iletisime yonlendirmelidir.

## 9. Katalog SEO Notu

Katalog PDF dosyalari eklendiginde:
- PDF dosya adi acik ve okunabilir olmali.
- PDF linkleri katalog sayfasindan verilmeli.
- Gerekirse PDF dosyalari sitemap disinda birakilabilir.
- PDF icin ayni icerigi HTML sayfada da ozetlemek SEO icin daha sagliklidir.
