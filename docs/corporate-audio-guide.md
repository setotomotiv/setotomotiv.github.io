# 📄 Dosya Yolu: docs/corporate-audio-guide.md
# 📌 Amac: kurumsal muzik modulunun kapsam ve kullanim notlarini aciklamak
# 📌 Modul - Markdown
# Version: 1.1.0
# Aciklama: secili sayfalarda kullanici kontrollu lokal fon muzigi calisma mantigini belgeler
# Bagimli Oldugu Katman: View

# Corporate Audio Module

Bu modul secili sayfalarda kullanici kontrollu, dusuk sesli kurumsal fon muzigi sunar.

## Dosyalar

- `assets/audio/corporate-theme.wav`
- `assets/js/corporate-audio.js`
- `data/audio/corporate-audio.json`

## Davranis

- Muzik otomatik olarak zorla baslatilmaz.
- Kullanici sag alt muzik butonuna basarsa calar.
- Tercih ve ses seviyesi `localStorage` icinde saklanir.
- Tarayici otomatik oynatmayi engellerse buton kapali durumda kalir.

## Aktif sayfalar

- `index.html`
- `about.html`
- `blog.html`
- `axalta-color-series.html`
- `blog-axalta-*.html`

## Not

Ses dosyasi dis kaynaktan alinmamistir. Site icinde lokal olarak barindirilir.


## v6.3.31 Guncellemesi

- Kontrol butonu sag alttan sol alta tasindi.
- Sayfa yuklendikten 5 saniye sonra muzik baslatmayi deneyen `autoStartDelayMs` ayari eklendi.
- Tarayici sesli otomatik oynatmayi engellerse buton `Muzik icin tiklayin` durumuna gecer.
- Kurumsal loop daha yumusak ritim, pad ve arpej yapisiyla yeniden uretildi.

## v6.3.32 Guncellemesi

- Widget sol alt pozisyonda kompakt gosterilir.
- Otomatik baslatma oncesi 5-4-3-2-1 sayaci kullanilir.
- Tarayici sesli autoplay engeli varsa, ilk kullanici etkilesiminde muzik otomatik baslatilir.
- Sesli autoplay engeli tarayici guvenlik politikasidir; kullanici etkilesimi olmadan kesin olarak zorlanamaz.

## v1.3.0
- Muzik kontrolu artik dil secimi yaninda ikon tabanli olarak calisir.
- Metin etiketleri kaldirildi; durum nokta rozeti ve geri sayim mini badge ile gosterilir.
- Hover veya focus sirasinda ses slideri acilir.

## v1.4.0
- Muzik kontrolu header sag ust koseye tasindi.
- Geri sayim 3 saniyeye indirildi.
- Cam efekt ve ikon kapsulu daha premium hale getirildi.

## v1.5.0
- Kontrol sag alt bolgede back-to-top ile ayni hizaya alindi.
- Oynatma halinde premium isik halkasi animasyonu eklendi.
- Geri sayim 3 saniyedir.

## v1.6.0
- Dikey ses paneli yeniden tasarlandi.
- Panel artik butonun tam ustunde merkezli acilir.
- Cam efektli mini panel daha dengeli gorunur.
