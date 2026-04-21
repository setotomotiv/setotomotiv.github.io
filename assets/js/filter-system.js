/*
# 📄 Dosya Yolu: assets/js/filter-system.js
# 📌 Amac: marka ve referans gridlerinde kategori filtreleme etkileşimini yonetmek
# 📌 Modul - JavaScript
# Version: 1.0.0
# Aciklama: data-filter-scope, data-filter-target ve data-filter-tags alanlarini kullanarak kartlari filtreler
# Bagimli Oldugu Katman: View
*/
(function () {
  function applyFilter(scopeNode, value) {
    var targetSelector = scopeNode.getAttribute('data-filter-target');
    if (!targetSelector) {
      return;
    }

    scopeNode.querySelectorAll('[data-filter-value]').forEach(function (button) {
      button.classList.toggle('is-active', button.getAttribute('data-filter-value') === value);
    });

    document.querySelectorAll(targetSelector).forEach(function (itemNode) {
      var tags = (itemNode.getAttribute('data-filter-tags') || '').split(',').map(function (tag) {
        return tag.trim();
      }).filter(Boolean);
      var matched = value === 'all' || tags.indexOf(value) !== -1;
      itemNode.classList.toggle('is-hidden', !matched);
    });
  }

  function bindFilters() {
    document.querySelectorAll('[data-filter-scope]').forEach(function (scopeNode) {
      if (scopeNode.dataset.filterBound === '1') {
        return;
      }
      scopeNode.dataset.filterBound = '1';

      scopeNode.addEventListener('click', function (event) {
        var button = event.target.closest('[data-filter-value]');
        if (!button) {
          return;
        }
        applyFilter(scopeNode, button.getAttribute('data-filter-value'));
      });

      var activeButton = scopeNode.querySelector('[data-filter-value].is-active') || scopeNode.querySelector('[data-filter-value="all"]') || scopeNode.querySelector('[data-filter-value]');
      if (activeButton) {
        applyFilter(scopeNode, activeButton.getAttribute('data-filter-value'));
      }
    });
  }

  document.addEventListener('site:content-loaded', bindFilters);
  document.addEventListener('site:includes-loaded', bindFilters);
  document.addEventListener('DOMContentLoaded', bindFilters);
})();
