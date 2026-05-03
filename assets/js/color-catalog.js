/*
# 📄 Dosya Yolu: assets/js/color-catalog.js
# 📌 Amac: lokal RAL, RAL Effect, Pantone ve NCS katalog JSON dosyalarini okuyup renk kartelasi arayuzunu olusturmak
# 📌 Modul - JavaScript
# Version: 1.3.0
# Aciklama: Arama, filtreleme, HEX kopyalama ve acilir detayli renk kartlarini lokal RAL/RAL Effect/Pantone/NCS katalog verisiyle yonetir
# Bagimli Oldugu Katman: View
*/
(function () {
  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getText(item, key, lang) {
    return item[key + '_' + lang] || item[key + '_tr'] || item[key + '_en'] || '';
  }

  function isLight(hex) {
    var value = String(hex || '#ffffff').replace('#', '');
    if (value.length !== 6) {
      return true;
    }
    var r = parseInt(value.substr(0, 2), 16);
    var g = parseInt(value.substr(2, 2), 16);
    var b = parseInt(value.substr(4, 2), 16);
    return ((r * 299 + g * 587 + b * 114) / 1000) > 150;
  }

  function normalize(value) {
    return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function buildCard(item, lang, labels) {
    var name = getText(item, 'name', lang);
    var family = getText(item, 'family', lang);
    var type = getText(item, 'type', lang);
    var note = getText(item, 'note', lang);
    var noteHtml = note ? '<p class="color-card-note">' + escapeHtml(note) + '</p>' : '';
    var familyHtml = family ? '<div><dt>' + escapeHtml(labels.family) + '</dt><dd>' + escapeHtml(family) + '</dd></div>' : '';
    var typeHtml = type ? '<div><dt>' + escapeHtml(labels.type) + '</dt><dd>' + escapeHtml(type) + '</dd></div>' : '';
    var nameHtml = name ? '<p class="color-card-name">' + escapeHtml(name) + '</p>' : '';
    return '' +
      '<article class="color-card color-card-compact" data-color-card data-family="' + escapeHtml(item.family) + '" data-search="' + escapeHtml(normalize([item.code, name, item.hex, item.rgb, family, note, type].join(' '))) + '">' +
        '<div class="color-swatch color-swatch-clean" style="background:' + escapeHtml(item.hex) + ';" aria-label="' + escapeHtml(item.code + ' ' + name) + '"></div>' +
        '<div class="color-card-body">' +
          '<h3>' + escapeHtml(item.code) + '</h3>' +
          '<details class="color-card-details">' +
            '<summary><span>' + escapeHtml(labels.details) + '</span><i class="bi bi-chevron-down" aria-hidden="true"></i></summary>' +
            '<div class="color-card-details-body">' +
              nameHtml +
              '<dl>' +
                familyHtml +
                '<div><dt>HEX</dt><dd>' + escapeHtml(item.hex) + '</dd></div>' +
                '<div><dt>RGB</dt><dd>' + escapeHtml(item.rgb) + '</dd></div>' +
                typeHtml +
              '</dl>' +
              noteHtml +
              '<button class="btn btn-outline-dark btn-sm w-100" type="button" data-copy-color="' + escapeHtml(item.hex) + '">' + escapeHtml(labels.copy) + '</button>' +
            '</div>' +
          '</details>' +
        '</div>' +
      '</article>';
  }

  function applyFilter(root, activeFamily, query) {
    var search = normalize(query);
    var visible = 0;
    root.querySelectorAll('[data-color-card]').forEach(function (card) {
      var family = card.getAttribute('data-family');
      var text = card.getAttribute('data-search') || '';
      var familyOk = activeFamily === 'all' || family === activeFamily;
      var searchOk = !search || text.indexOf(search) !== -1;
      var show = familyOk && searchOk;
      card.hidden = !show;
      if (show) {
        visible += 1;
      }
    });
    var countNode = root.querySelector('[data-color-count]');
    if (countNode) {
      countNode.textContent = String(visible);
    }
    var emptyNode = root.querySelector('[data-color-empty]');
    if (emptyNode) {
      emptyNode.hidden = visible !== 0;
    }
  }

  function bootCatalog() {
    var root = document.querySelector('[data-color-catalog]');
    if (!root || root.dataset.bound === 'true') {
      return;
    }
    root.dataset.bound = 'true';

    var file = root.getAttribute('data-catalog-file');
    var lang = root.getAttribute('data-catalog-lang') || 'tr';
    if (!file) {
      return;
    }

    fetch(file, { credentials: 'same-origin' })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Katalog verisi yuklenemedi: ' + file);
        }
        return response.json();
      })
      .then(function (catalog) {
        var meta = catalog.meta || {};
        var labels = {
          copy: meta['copy_' + lang] || meta.copy_tr || 'Kopyala',
          empty: meta['empty_' + lang] || meta.empty_tr || 'Sonuc yok',
          count: meta['count_' + lang] || meta.count_tr || 'renk listeleniyor',
          type: meta['type_label_' + lang] || meta.type_label_tr || 'Tip',
          note: meta['note_label_' + lang] || meta.note_label_tr || 'Not',
          family: meta['family_label_' + lang] || meta.family_label_tr || (lang === 'en' ? 'Family' : 'Aile'),
          details: meta['details_label_' + lang] || meta.details_label_tr || (lang === 'en' ? 'Details' : 'Detaylari Goster')
        };
        root.querySelector('[data-color-title]').textContent = meta['title_' + lang] || meta.title_tr || '';
        root.querySelector('[data-color-desc]').textContent = meta['desc_' + lang] || meta.desc_tr || '';
        root.querySelector('[data-color-warning]').textContent = meta['warning_' + lang] || meta.warning_tr || '';
        root.querySelector('[data-color-search]').setAttribute('placeholder', meta['search_' + lang] || meta.search_tr || 'Ara');
        root.querySelector('[data-color-count-label]').textContent = labels.count;
        root.querySelector('[data-color-empty]').textContent = labels.empty;

        var filters = root.querySelector('[data-color-filters]');
        filters.innerHTML = (catalog.filters || []).map(function (filter, index) {
          return '<button type="button" class="filter-chip' + (index === 0 ? ' is-active' : '') + '" data-color-filter="' + escapeHtml(filter.key) + '">' + escapeHtml(filter[lang] || filter.tr || filter.en || filter.key) + '</button>';
        }).join('');

        root.querySelector('[data-color-grid]').innerHTML = (catalog.items || []).map(function (item) {
          return buildCard(item, lang, labels);
        }).join('');

        var activeFamily = 'all';
        var searchNode = root.querySelector('[data-color-search]');
        filters.addEventListener('click', function (event) {
          var button = event.target.closest('[data-color-filter]');
          if (!button) {
            return;
          }
          activeFamily = button.getAttribute('data-color-filter') || 'all';
          filters.querySelectorAll('[data-color-filter]').forEach(function (node) {
            node.classList.toggle('is-active', node === button);
          });
          applyFilter(root, activeFamily, searchNode.value);
        });
        searchNode.addEventListener('input', function () {
          applyFilter(root, activeFamily, searchNode.value);
        });
        root.addEventListener('click', function (event) {
          var button = event.target.closest('[data-copy-color]');
          if (!button) {
            return;
          }
          var value = button.getAttribute('data-copy-color');
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value).catch(function () {});
          }
          button.textContent = value;
          window.setTimeout(function () {
            button.textContent = labels.copy;
          }, 1200);
        });
        applyFilter(root, activeFamily, '');
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  document.addEventListener('DOMContentLoaded', bootCatalog);
  document.addEventListener('site:includes-loaded', bootCatalog);
})();
