# 📄 Dosya Yolu: docs/include-system-guide.md
# 📌 Amac: include ve JSON tabanli icerik sisteminin nasil calistigini sabitlemek
# 📌 Modul - Markdown
# Version: 1.0.0
# Aciklama: ortak parcali yapi ve data/content klasoru kullanim kurallari
# Bagimli Oldugu Katman: View

# Include ve Content Sistemi

## Genel Yapi
- `partials/tr/` ve `partials/en/` klasorleri ortak HTML sectionlarini tutar.
- `data/content/tr/` ve `data/content/en/` klasorleri metin iceriklerini JSON olarak tutar.
- `assets/js/include-loader.js` once tum include parcalarini recursive olarak yukler.
- `assets/js/content-loader.js` sonra ilgili JSON dosyasini okuyup `data-content` alanlarini doldurur.

## Sayfa Kurali
Her sayfa su iki yapidan yararlanir:
- `data-include="../partials/..."`
- `data-content-file="../data/content/...json"`

## Alan Doldurma Kurali
- `data-content="about.title"` => text olarak doldurulur.
- `data-content-mode="list"` => dizi verileri listeye donusturulur.
- `data-content-mode="html"` => HTML olarak basilir.

## Avantaj
- Ayni section birden fazla sayfada tek dosyadan yonetilir.
- Metin degisikligi icin HTML acmaya gerek kalmaz.
- TR ve EN icerik ayrimi temiz kalir.

## Yasaklar
- Ayni header veya footer kopyasini sayfa icine gommek yasak.
- Metni dogrudan HTML icinde degistirmek yerine once JSON tarafini kontrol et.
- Inline script ile icerik basmak yasak.


## Filtreli Grid Sistemi
- Marka ve referans kartlari JSON uzerinden gelir.
- Filtre butonlari da JSON ile uretilir.
- Kartlar `data-filter-tags` ile kategorilenir.
- Filtre davranisi `assets/js/filter-system.js` uzerinden yonetilir.
