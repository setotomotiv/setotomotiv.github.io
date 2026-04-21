/*
# 📄 Dosya Yolu: assets/js/content-loader.js
# 📌 Amac: sayfa iceriklerini JSON kaynagindan okuyup ilgili sectionlara yerlestirmek
# 📌 Modul - JavaScript
# Version: 1.2.0
# Aciklama: body data-content-file uzerinden JSON yukler, data-content alanlarini ve tekrarli bloklari doldurur
# Bagimli Oldugu Katman: View
*/
(function () {
  var contentCache = {};

  function getValueByPath(source, path) {
    return path.split('.').reduce(function (acc, key) {
      if (acc && Object.prototype.hasOwnProperty.call(acc, key)) {
        return acc[key];
      }
      return null;
    }, source);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function interpolate(template, item) {
    return template
      .replace(/\{\{\s*([\w.]+)\s*\}\}/g, function (_, key) {
        var value = getValueByPath(item, key);
        return value === null || typeof value === 'undefined' ? '' : escapeHtml(value);
      })
      .replace(/\{\s*([\w.]+)\s*\}/g, function (_, key) {
        var value = getValueByPath(item, key);
        return value === null || typeof value === 'undefined' ? '' : escapeHtml(value);
      });
  }

  function renderList(items, iconClass) {
    return items.map(function (item) {
      return '<li><i class="' + iconClass + '"></i><span>' + escapeHtml(item) + '</span></li>';
    }).join('');
  }

  function applyValue(node, value) {
    if (value === null || typeof value === 'undefined') {
      return;
    }

    var mode = node.getAttribute('data-content-mode') || 'text';

    if (mode === 'html') {
      node.innerHTML = value;
      return;
    }

    if (mode === 'attr') {
      var attrName = node.getAttribute('data-content-attr');
      if (attrName) {
        node.setAttribute(attrName, value);
      }
      return;
    }

    if (mode === 'list' && Array.isArray(value)) {
      var iconClass = node.getAttribute('data-content-icon') || 'bi bi-check2';
      node.innerHTML = renderList(value, iconClass);
      return;
    }

    node.textContent = value;
  }

  function applyRepeater(content) {
    document.querySelectorAll('[data-repeat]').forEach(function (node) {
      var path = node.getAttribute('data-repeat');
      var templateNode = node.querySelector('template');
      if (!path || !templateNode) {
        return;
      }

      var items = getValueByPath(content, path);
      if (!Array.isArray(items)) {
        return;
      }

      node.innerHTML = items.map(function (item) {
        var normalizedItem = Object.assign({}, item);
        normalizedItem.logoSecondaryClass = normalizedItem.logoSecondary ? '' : 'is-empty';
        var html = interpolate(templateNode.innerHTML, normalizedItem);
        if (Array.isArray(normalizedItem.list)) {
          html = html.replace(/\{\{LIST\}\}/g, renderList(normalizedItem.list, 'bi bi-check2'));
        }
        return html;
      }).join('');
    });
  }

  function applyFilterButtons(content) {
    document.querySelectorAll('[data-filter-buttons]').forEach(function (node) {
      var path = node.getAttribute('data-filter-buttons');
      var items = getValueByPath(content, path);
      if (!Array.isArray(items)) {
        return;
      }

      node.innerHTML = items.map(function (item, index) {
        var label = escapeHtml(item.label || 'Filtre');
        var value = escapeHtml(item.value || 'all');
        var activeClass = index === 0 ? ' is-active' : '';
        return '<button type="button" class="filter-chip' + activeClass + '" data-filter-value="' + value + '">' + label + '</button>';
      }).join('');
    });
  }

  function applyContent(content) {
    document.querySelectorAll('[data-content]').forEach(function (node) {
      var path = node.getAttribute('data-content');
      if (!path) {
        return;
      }
      applyValue(node, getValueByPath(content, path));
    });

    applyRepeater(content);
    applyFilterButtons(content);
  }

  function loadContentFile(contentPath) {
    if (contentCache[contentPath]) {
      return Promise.resolve(contentCache[contentPath]);
    }

    return fetch(contentPath, { credentials: 'same-origin' })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Icerik JSON yuklenemedi: ' + contentPath);
        }
        return response.json();
      })
      .then(function (json) {
        contentCache[contentPath] = json;
        return json;
      });
  }

  function bootContent() {
    var bodyNode = document.body;
    if (!bodyNode) {
      return;
    }

    var contentPath = bodyNode.getAttribute('data-content-file');
    if (!contentPath) {
      return;
    }

    loadContentFile(contentPath)
      .then(function (content) {
        applyContent(content);
        document.dispatchEvent(new CustomEvent('site:content-loaded'));
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  document.addEventListener('site:includes-loaded', bootContent);

  if (document.readyState !== 'loading') {
    bootContent();
  }
})();
