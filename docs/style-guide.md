# 📄 Dosya Yolu: docs/style-guide.md
# 📌 Amac: proje genelinde tasarim, renk, tipografi ve component standartlarini sabitlemek
# 📌 Modul - Markdown
# Version: 1.1.0
# Aciklama: kurumsal statik arayuz icin temel stil kurallari
# Bagimli Oldugu Katman: View

# Set Otomotiv - UI / Style Guide

Bu dokuman, proje genelinde tasarim, renk, tipografi ve component standartlarini sabitler.
Tum gelistirmeler bu kurallara uygun yapilmalidir.

---

## 1. Renk Paleti

### Ana Renkler
- Primary: `#0d6efd`
- Primary Gradient: `linear-gradient(135deg, #0d6efd, #0a58ca)`
- Dark Header/Footer: `#0b1f3a`
- Accent Hover: `#1e88e5`

### Arka Plan
- Main BG: `#f5f7fb`
- Card BG: `#ffffff`

### Metin
- Title: `#0b1f3a`
- Text: `#4a5568`
- Muted: `#94a3b8`

---

## 2. Layout Kurallari

### Container
- max-width: `1200px`
- horizontal padding: `20px`

### Grid
- Desktop: 4 kolon
- Tablet: 2 kolon
- Mobile: 1 kolon

---

## 3. Header Yapisi

### Top Bar
Sira sabit:
1. Konum
2. Telefon
3. Email

Sag taraf:
- sosyal medya ikonlari
- dil secici yardimci alanlari

### Navbar
- Logo solda
- Menu ortada
- CTA buton sagda

---

## 4. Buton Standartlari

### Primary Button
- arka plan: primary gradient
- border: none
- radius: `12px`
- padding: `10px 20px`

### Secondary Button
- border: `1px solid #ccc`
- background: transparent

---

## 5. Kart Yapisi

Kartlar su yapiyi kullanir:
- Icon
- Title
- Description
- List opsiyonel

### Stil
- border-radius: `16px`
- shadow: soft
- padding: `25px`
- hover: hafif yukselme ve shadow artisi

---

## 6. Hizmet Kartlari

Ana sayfada sira sabit:
1. Yedek Parca
2. Otomotiv Boyalari
3. Sanayi Boyalari
4. Bakim Urunleri

Bu sira zorunlu olmadikca degistirilmemelidir.

---

## 7. Gorsel Kurallari

- format onceligi: `webp`
- `object-fit: cover`
- `max-width: 100%`
- tasma olmamali
- about gorsellerinde rounded corner kullanilmali
- container `overflow: hidden` olmali

---

## 8. Dil Yapisi

- `/tr/`
- `/en/`

Kurallar:
- root acilis dili algilar
- kullanici secimi `localStorage` ile saklanir
- menu icinde dil degistirici bulunur

---

## 9. Cookie ve Tracking

- cookie banner zorunlu
- tracking yalnizca kullanici onayi ile yuklenir
- config dosyasi: `assets/js/tracking-config.js`

---

## 10. Responsive Kurallari

### Breakpointler
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

---

## 11. Footer Yapisi

### Ana Footer
- marka
- linkler
- iletisim
- sosyal medya

### Alt Footer
- gizlilik
- cerez tercihleri

---

## 12. Performans Kurallari

- gorseller optimize edilmeli
- lazy loading aktif olmali
- JS uygun yerde `defer` ile yuklenmeli
- gereksiz kutuphane eklenmemeli

---

## 13. Yasaklar

- inline css kullanma
- rastgele renk ekleme
- farkli font ailesi ekleme
- grid yapisini bozma
- docs disi component davranisi ekleme
