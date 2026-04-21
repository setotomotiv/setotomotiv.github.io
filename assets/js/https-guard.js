/*
# 📄 Dosya Yolu: assets/js/https-guard.js
# 📌 Amac: canli domainde HTTP ve www kullanimini HTTPS kanonik adrese yonlendirmek
# 📌 Modul - JavaScript
# Version: 1.0.0
# Aciklama: GitHub Pages Enforce HTTPS icin istemci tarafinda yedek guvenlik yonlendirmesi saglar
# Bagimli Oldugu Katman: View
*/
(function () {
  var canonicalHost = 'setotomotiv.com';
  var managedHosts = ['setotomotiv.com', 'www.setotomotiv.com'];
  var localHosts = ['localhost', '127.0.0.1', '0.0.0.0', '::1'];
  var currentHost = window.location.hostname.toLowerCase();

  if (localHosts.indexOf(currentHost) !== -1) {
    return;
  }

  if (managedHosts.indexOf(currentHost) === -1) {
    return;
  }

  var needsHttps = window.location.protocol === 'http:';
  var needsCanonicalHost = currentHost !== canonicalHost;

  if (!needsHttps && !needsCanonicalHost) {
    return;
  }

  var targetUrl = 'https://' + canonicalHost + window.location.pathname + window.location.search + window.location.hash;
  window.location.replace(targetUrl);
})();
