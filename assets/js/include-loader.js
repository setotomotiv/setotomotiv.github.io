/*
# 📄 Dosya Yolu: assets/js/include-loader.js
# 📌 Amac: statik sitede ortak parcalari ve alt parcali sectionlari tek merkezden yuklemek
# 📌 Modul - JavaScript
# Version: 1.1.0
# Aciklama: data-include tanimlarini recursive fetch ile yukleyip DOM'a yerlestirir
# Bagimli Oldugu Katman: View
*/
(function () {
  function fetchInclude(node) {
    var includePath = node.getAttribute('data-include');
    if (!includePath) {
      return Promise.resolve();
    }

    return fetch(includePath, { credentials: 'same-origin' })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Include yuklenemedi: ' + includePath);
        }
        return response.text();
      })
      .then(function (html) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        var children = Array.prototype.slice.call(wrapper.childNodes);
        var fragment = document.createDocumentFragment();
        children.forEach(function (child) {
          fragment.appendChild(child);
        });
        node.replaceWith(fragment);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function loadPass() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-include]'));
    if (!nodes.length) {
      return Promise.resolve(false);
    }

    return Promise.all(nodes.map(fetchInclude)).then(function () {
      return true;
    });
  }

  function loadRecursive() {
    return loadPass().then(function (loaded) {
      if (!loaded) {
        return;
      }
      return loadRecursive();
    });
  }

  function bootIncludes() {
    loadRecursive().then(function () {
      document.dispatchEvent(new CustomEvent('site:includes-loaded'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootIncludes, { once: true });
  } else {
    bootIncludes();
  }
})();
