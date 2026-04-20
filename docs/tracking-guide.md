# 📄 Dosya Yolu: docs/tracking-guide.md
# 📌 Amac: cookie consent ve opsiyonel tracking sisteminin kullanimini aciklamak
# 📌 Modul - Markdown
# Version: 1.0.0
# Aciklama: analytics ve meta pixel kodlarinin guvenli sekilde eklenmesini tanimlar
# Bagimli Oldugu Katman: Tool

# Tracking Guide

## 1. Temel Mantik

Tracking varsayilan olarak kapali gelir.
Kullanicidan izin alinmadan analytics veya pazarlama scripti calismaz.

## 2. Config Dosyasi

Dosya:
- `assets/js/tracking-config.js`

Ornek yapi:

```js
window.SETOTOMOTIV_TRACKING = {
  analytics: {
    enabled: false,
    measurementId: ""
  },
  metaPixel: {
    enabled: false,
    pixelId: ""
  }
};
```

## 3. Google Analytics Acma

- `enabled: true`
- `measurementId` alanina `G-XXXXXXXXXX` degerini yaz

## 4. Meta Pixel Acma

- `enabled: true`
- `pixelId` alanina pixel id yaz

## 5. Kural

Config dosyasina id girilse bile kullanici consent vermeden script yuklenmez.

## 6. Test

- banner reddedildiginde networkte ilgili script gelmemeli
- banner kabul edildiginde script yuklenmeli
