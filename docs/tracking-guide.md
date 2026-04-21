# 📄 Dosya Yolu: docs/tracking-guide.md
# 📌 Amac: cookie consent ve opsiyonel tracking sisteminin kullanimini aciklamak
# 📌 Modul - Markdown
# Version: 1.1.0
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

## 5. Consent Kurali

Config dosyasina id girilse bile kullanici consent vermeden script yuklenmez.
Bu kural KVKK/GDPR uyumu icin korunmalidir.

## 6. Test

- Banner reddedildiginde networkte ilgili script gelmemeli.
- Banner kabul edildiginde script yuklenmeli.
- Cerez tercihleri yeniden acilabilmeli.
- Dil degistiginde banner metni ilgili dile uygun kalmali.

## 7. Yasaklar

- Tracking kodunu HTML icine dogrudan eklemek yasak.
- Consent kontrolunu bypass etmek yasak.
- Test ID ile canli ID karistirmak yasak.
