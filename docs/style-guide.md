# 📄 Dosya Yolu: docs/style-guide.md
# 📌 Amac: proje genelinde tasarim, renk, tipografi ve component standartlarini sabitlemek
# 📌 Modul - Markdown
# Version: 1.2.0
# Aciklama: kurumsal statik arayuz icin temel stil, header, katalog ve asset kurallari
# Bagimli Oldugu Katman: View

# Set Otomotiv UI / Style Guide

Bu dokuman, proje genelinde tasarim, renk, tipografi ve component standartlarini sabitler.
Tum gelistirmeler bu kurallara uygun yapilmalidir.

## 1. Renk Paleti

Ana renkler:
- Primary: `#0d6efd`
- Primary Gradient: `linear-gradient(135deg, #0d6efd, #0a58ca)`
- Dark Header/Footer: `#0b1f3a`
- Accent Hover: `#1e88e5`

Arka plan:
- Main BG: `#f5f7fb`
- Card BG: `#ffffff`

Metin:
- Title: `#0b1f3a`
- Text: `#4a5568`
- Muted: `#94a3b8`

## 2. Tipografi

Aktif font:
- Google Fonts Inter CDN

Kural:
- Yerel `assets/fonts/` klasoru kullanilmaz.
- Yeni font eklenecekse once performans ve lisans kontrolu yapilir.
- Farkli font ailesi rastgele eklenmez.

## 3. Layout Kurallari

Container:
- max-width: `1200px`
- horizontal padding: `20px`

Grid:
- Desktop: 4 kolon
- Tablet: 2 kolon
- Mobile: 1 kolon

## 4. Header Yapisi

Topbar sirasi sabit:
1. Konum
2. Telefon
3. Email

Sag taraf:
- sosyal medya ikonlari
- yardimci linkler

Navbar:
- Logo solda
- Menu ortada
- Dil secici ve aksiyonlar sagda

Header adres linki:
- Yandex Maps Set Otomotiv kurum sayfasi olarak kalmalidir.

## 5. Menu Kurali

TR menu:
- Ana Sayfa
- Hakkimizda
- Hizmetler
- Referanslar
- Markalarimiz
- Kataloglar
- Iletisim

EN menu:
- Home
- About Us
- Services
- References
- Brands
- Catalogs
- Contact

Yeni menu eklenirse:
- TR header guncellenir.
- EN header guncellenir.
- Sayfa dosyasi eklenir.
- JSON dosyasi eklenir.
- Sitemap guncellenir.
- Docs guncellenir.

## 6. Buton Standartlari

Primary Button:
- arka plan: primary gradient
- border: none
- radius: `12px`
- padding: `10px 20px`

Secondary Button:
- border: `1px solid #ccc`
- background: transparent

## 7. Kart Yapisi

Kartlar su yapiyi kullanir:
- Icon veya logo
- Title
- Description
- List veya CTA opsiyonel

Stil:
- border-radius: `16px`
- shadow: soft
- padding: `25px`
- hover: hafif yukselme ve shadow artisi

## 8. Katalog Kartlari

Katalog kartlari marka/hizmet kartlari ile ayni premium tasarim dilini kullanir.

Kural:
- Kart basligi kisa tutulur.
- Aciklama net ve satis odakli olur.
- PDF yoksa CTA iletisim sayfasina gider.
- PDF varsa CTA dogrudan PDF dosyasina gidebilir.

## 9. Gorsel Kurallari

- Format onceligi: `webp`
- `object-fit: cover`
- `max-width: 100%`
- Tasma olmamali
- About gorsellerinde rounded corner kullanilmali
- Container `overflow: hidden` olmali
- Dosya adinda Turkce karakter ve bosluk olmamali

## 10. Dil Yapisi

- `/tr/`
- `/en/`

Kurallar:
- Root acilis dili algilar.
- Kullanici secimi `localStorage` ile saklanir.
- Menu icinde dil degistirici bulunur.

## 11. Cookie ve Tracking

- Cookie banner zorunlu.
- Tracking yalnizca kullanici onayi ile yuklenir.
- Config dosyasi: `assets/js/tracking-config.js`.

## 12. Responsive Kurallari

Breakpointler:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 13. Footer Yapisi

Ana Footer:
- marka
- linkler
- iletisim
- sosyal medya

Alt Footer:
- gizlilik
- cerez tercihleri

## 14. Performans Kurallari

- Gorseller optimize edilmeli.
- Lazy loading aktif olmali.
- JS uygun yerde `defer` ile yuklenmeli.
- Gereksiz kutuphane eklenmemeli.
- Yerel font paketi eklenmemeli.

## 15. Yasaklar

- Inline CSS kullanma.
- Rastgele renk ekleme.
- Farkli font ailesi ekleme.
- Grid yapisini bozma.
- Docs disi component davranisi ekleme.
- Eski template CSS/JS dosyalarini geri ekleme.
