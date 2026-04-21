/*
# 📄 Dosya Yolu: assets/js/site.js
# 📌 Amac: statik kurumsal sitede ortak arayuz davranislarini yonetmek
# 📌 Modul - JavaScript
# Version: 3.4.0
# Aciklama: loader, aktif menu, sayfa bazli dil gecisi, slider, cerez, yukari tusu ve opsiyonel tracking davranislarini yonetir
# Bagimli Oldugu Katman: View
*/
(function () {
  var consentKey = 'site_cookie_consent_v1';
  var trackingLoaded = {
    analytics: false,
    marketing: false
  };

  function removeLoader() {
    var loaderNode = document.getElementById('siteLoader');
    if (!loaderNode) {
      return;
    }

    document.body.classList.add('is-loading');
    var minLoaderDelay = 1100;
    var startTime = Date.now();

    window.addEventListener('load', function () {
      var elapsed = Date.now() - startTime;
      var remaining = Math.max(0, minLoaderDelay - elapsed);
      window.setTimeout(function () {
        loaderNode.classList.add('is-hidden');
        document.body.classList.remove('is-loading');
        window.setTimeout(function () {
          if (loaderNode.parentNode) {
            loaderNode.parentNode.removeChild(loaderNode);
          }
        }, 520);
      }, remaining);
    }, { once: true });
  }

  function initCurrentYear() {
    var yearNode = document.getElementById('currentYear');
    if (yearNode) {
      yearNode.textContent = new Date().getFullYear();
    }
  }

  function initActiveMenu() {
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('[data-nav-link]').forEach(function (link) {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
      var target = link.getAttribute('href');
      if ((currentPath === '' && target === 'index.html') || currentPath === target) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  function initHeroSlider() {
    var heroSlider = document.getElementById('heroSlider');
    if (!heroSlider || !window.bootstrap || !bootstrap.Carousel || heroSlider.dataset.carouselBound === 'true') {
      return;
    }

    new bootstrap.Carousel(heroSlider, {
      interval: 5200,
      ride: 'carousel',
      pause: 'hover',
      touch: true,
      wrap: true
    });

    heroSlider.dataset.carouselBound = 'true';
  }

  function getCurrentPageFile() {
    var pageFile = window.location.pathname.split('/').pop() || 'index.html';
    return pageFile.indexOf('.') === -1 ? 'index.html' : pageFile;
  }

  function buildLangUrl(targetLang) {
    return '../' + targetLang + '/' + getCurrentPageFile();
  }

  function initLanguagePreference() {
    var bodyNode = document.body;
    var pageLang = bodyNode ? bodyNode.getAttribute('data-page-lang') : null;

    if (pageLang) {
      try {
        localStorage.setItem('site_lang', pageLang);
      } catch (error) {}
    }

    document.querySelectorAll('[data-lang-option]').forEach(function (link) {
      var targetLang = link.getAttribute('data-lang-option');

      if (targetLang === 'tr' || targetLang === 'en') {
        link.setAttribute('href', buildLangUrl(targetLang));
        link.classList.toggle('active', targetLang === pageLang);
      }

      if (link.dataset.langBound === 'true') {
        return;
      }

      link.dataset.langBound = 'true';
      link.addEventListener('click', function () {
        var selectedLang = this.getAttribute('data-lang-option');
        try {
          localStorage.setItem('site_lang', selectedLang);
        } catch (error) {}
      });
    });
  }

  function readConsent() {
    try {
      var raw = localStorage.getItem(consentKey);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function writeConsent(data) {
    try {
      localStorage.setItem(consentKey, JSON.stringify(data));
    } catch (error) {}
  }

  function injectScript(src, attrs) {
    if (!src || document.querySelector('script[src="' + src + '"]')) {
      return;
    }

    var script = document.createElement('script');
    script.src = src;
    script.async = true;

    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        script.setAttribute(key, attrs[key]);
      });
    }

    document.head.appendChild(script);
  }

  function loadGoogleAnalytics(measurementId) {
    if (!measurementId || trackingLoaded.analytics) {
      return;
    }

    trackingLoaded.analytics = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
    injectScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId));
  }

  function loadMetaPixel(pixelId) {
    if (!pixelId || trackingLoaded.marketing) {
      return;
    }

    trackingLoaded.marketing = true;
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
  }

  function applyTracking(consent) {
    var config = window.SETOTOMOTIV_TRACKING || {};
    if (!consent || !consent.preferences) {
      return;
    }

    if (consent.preferences.analytics && config.analytics && config.analytics.enabled && config.analytics.measurementId) {
      loadGoogleAnalytics(config.analytics.measurementId);
    }

    if (consent.preferences.marketing && config.metaPixel && config.metaPixel.enabled && config.metaPixel.pixelId) {
      loadMetaPixel(config.metaPixel.pixelId);
    }
  }

  function getCookieText(pageLang) {
    var map = {
      tr: {
        title: 'Cerez tercihleri',
        desc: 'Site deneyimini gelistirmek ve isterseniz analiz veya reklam olcumlerini acmak icin cerez tercihlerinizi yonetebilirsiniz.',
        necessary: 'Zorunlu',
        analytics: 'Analitik',
        marketing: 'Pazarlama',
        accept: 'Tumunu kabul et',
        reject: 'Sadece zorunlu',
        save: 'Tercihleri kaydet',
        manage: 'Cerez tercihleri',
        policy: 'Gizlilik ve Cerez Politikasi'
      },
      en: {
        title: 'Cookie preferences',
        desc: 'You can manage your cookie preferences for site experience, analytics, and marketing features.',
        necessary: 'Necessary',
        analytics: 'Analytics',
        marketing: 'Marketing',
        accept: 'Accept all',
        reject: 'Necessary only',
        save: 'Save preferences',
        manage: 'Cookie preferences',
        policy: 'Privacy and Cookie Policy'
      }
    };

    return map[pageLang] || map.tr;
  }

  function buildConsentMarkup(pageLang) {
    var text = getCookieText(pageLang);
    var wrapper = document.createElement('div');
    wrapper.id = 'cookieConsent';
    wrapper.className = 'cookie-consent';
    wrapper.innerHTML = '' +
      '<div class="cookie-consent-card">' +
        '<div class="cookie-consent-copy">' +
          '<strong>' + text.title + '</strong>' +
          '<p>' + text.desc + ' <a href="privacy.html">' + text.policy + '</a></p>' +
        '</div>' +
        '<div class="cookie-consent-actions">' +
          '<button class="btn btn-outline-dark btn-sm" data-cookie-action="reject">' + text.reject + '</button>' +
          '<button class="btn btn-outline-dark btn-sm" data-cookie-action="toggle">' + text.manage + '</button>' +
          '<button class="btn btn-primary btn-sm" data-cookie-action="accept">' + text.accept + '</button>' +
        '</div>' +
        '<div class="cookie-consent-panel" hidden>' +
          '<label><input checked disabled type="checkbox"> <span>' + text.necessary + '</span></label>' +
          '<label><input data-cookie-checkbox="analytics" type="checkbox"> <span>' + text.analytics + '</span></label>' +
          '<label><input data-cookie-checkbox="marketing" type="checkbox"> <span>' + text.marketing + '</span></label>' +
          '<button class="btn btn-dark btn-sm" data-cookie-action="save">' + text.save + '</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(wrapper);
    return wrapper;
  }

  function syncBackToTopOffset(node) {
    var rootNode = document.documentElement;
    var bodyNode = document.body;

    if (!rootNode || !bodyNode) {
      return;
    }

    var isVisible = node && node.classList.contains('is-visible') && !node.classList.contains('is-hidden');

    if (!isVisible) {
      rootNode.style.setProperty('--back-to-top-bottom', '18px');
      bodyNode.classList.remove('has-cookie-consent-visible');
      return;
    }

    var consentHeight = Math.ceil(node.getBoundingClientRect().height || 0);
    var safeOffset = Math.max(82, consentHeight + 34);
    rootNode.style.setProperty('--back-to-top-bottom', safeOffset + 'px');
    bodyNode.classList.add('has-cookie-consent-visible');
  }

  function hideConsent(node) {
    if (!node) {
      return;
    }
    node.classList.remove('is-visible');
    node.classList.add('is-hidden');
    syncBackToTopOffset(node);
  }

  function showConsent(node) {
    if (!node) {
      return;
    }
    node.classList.remove('is-hidden');
    node.classList.add('is-visible');
    window.requestAnimationFrame(function () {
      syncBackToTopOffset(node);
    });
  }

  function bindConsentEvents(node) {
    if (!node || node.dataset.bound === 'true') {
      return;
    }

    node.dataset.bound = 'true';

    node.addEventListener('click', function (event) {
      var actionNode = event.target.closest('[data-cookie-action]');
      if (!actionNode) {
        return;
      }

      var action = actionNode.getAttribute('data-cookie-action');
      var panel = node.querySelector('.cookie-consent-panel');
      var analyticsNode = node.querySelector('[data-cookie-checkbox="analytics"]');
      var marketingNode = node.querySelector('[data-cookie-checkbox="marketing"]');

      if (action === 'toggle') {
        panel.hidden = !panel.hidden;
        window.setTimeout(function () {
          syncBackToTopOffset(node);
        }, 30);
        return;
      }

      if (action === 'accept') {
        var accepted = {
          accepted: true,
          updatedAt: new Date().toISOString(),
          preferences: {
            necessary: true,
            analytics: true,
            marketing: true
          }
        };
        writeConsent(accepted);
        applyTracking(accepted);
        hideConsent(node);
        return;
      }

      if (action === 'reject') {
        var rejected = {
          accepted: true,
          updatedAt: new Date().toISOString(),
          preferences: {
            necessary: true,
            analytics: false,
            marketing: false
          }
        };
        writeConsent(rejected);
        hideConsent(node);
        return;
      }

      if (action === 'save') {
        var saved = {
          accepted: true,
          updatedAt: new Date().toISOString(),
          preferences: {
            necessary: true,
            analytics: !!analyticsNode.checked,
            marketing: !!marketingNode.checked
          }
        };
        writeConsent(saved);
        applyTracking(saved);
        hideConsent(node);
      }
    });

    document.querySelectorAll('[data-open-preferences="true"]').forEach(function (link) {
      if (link.dataset.bound === 'true') {
        return;
      }
      link.dataset.bound = 'true';
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var panel = node.querySelector('.cookie-consent-panel');
        panel.hidden = false;
        showConsent(node);
      });
    });
  }

  function initConsent() {
    var bodyNode = document.body;
    var pageLang = bodyNode ? bodyNode.getAttribute('data-page-lang') || 'tr' : 'tr';
    var bannerNode = document.getElementById('cookieConsent') || buildConsentMarkup(pageLang);
    var savedConsent = readConsent();

    if (savedConsent && savedConsent.preferences) {
      var analyticsNode = bannerNode.querySelector('[data-cookie-checkbox="analytics"]');
      var marketingNode = bannerNode.querySelector('[data-cookie-checkbox="marketing"]');
      if (analyticsNode) {
        analyticsNode.checked = !!savedConsent.preferences.analytics;
      }
      if (marketingNode) {
        marketingNode.checked = !!savedConsent.preferences.marketing;
      }
      applyTracking(savedConsent);
      hideConsent(bannerNode);
    } else {
      showConsent(bannerNode);
    }

    if (bannerNode.dataset.resizeBound !== 'true') {
      bannerNode.dataset.resizeBound = 'true';
      window.addEventListener('resize', function () {
        syncBackToTopOffset(bannerNode);
      });
    }

    bindConsentEvents(bannerNode);
  }

  function initBackToTop() {
    var bodyNode = document.body;
    var pageLang = bodyNode ? bodyNode.getAttribute('data-page-lang') || 'tr' : 'tr';
    var label = pageLang === 'en' ? 'Back to top' : 'Yukari cik';
    var buttonNode = document.getElementById('backToTopButton');

    if (!buttonNode) {
      buttonNode = document.createElement('button');
      buttonNode.id = 'backToTopButton';
      buttonNode.className = 'back-to-top';
      buttonNode.type = 'button';
      buttonNode.innerHTML = '<svg class="back-to-top-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d="M12 4.75 4.75 12l1.41 1.41L11 8.58v10.67h2V8.58l4.84 4.83L19.25 12 12 4.75Z"/></svg><span class="visually-hidden"></span>';
      document.body.appendChild(buttonNode);
    }

    buttonNode.setAttribute('aria-label', label);
    var hiddenLabel = buttonNode.querySelector('.visually-hidden');
    if (hiddenLabel) {
      hiddenLabel.textContent = label;
    }

    function syncVisibility() {
      if (window.scrollY > 80) {
        buttonNode.classList.add('is-visible');
      } else {
        buttonNode.classList.remove('is-visible');
      }
    }

    if (buttonNode.dataset.bound !== 'true') {
      buttonNode.dataset.bound = 'true';
      buttonNode.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      window.addEventListener('scroll', syncVisibility, { passive: true });
    }

    syncVisibility();
  }



  function applyRevealClasses() {
    var selectors = [
      '.section-title',
      '.service-card',
      '.brand-card',
      '.reference-card',
      '.split-band',
      '.media-card',
      '.soft-box',
      '.filter-bar',
      '.hero-slider-shell',
      '.hero-copy',
      '.hero-floating-card',
      '.breadcrumb-band .container > *'
    ];

    var index = 0;
    document.querySelectorAll(selectors.join(',')).forEach(function (node) {
      if (node.classList.contains('so-reveal')) {
        return;
      }
      node.classList.add('so-reveal');
      var delayClass = 'so-reveal-delay-' + ((index % 4) + 1);
      node.classList.add(delayClass);
      index += 1;
    });
  }

  function initScrollReveal() {
    applyRevealClasses();

    var nodes = document.querySelectorAll('.so-reveal');
    if (!nodes.length) {
      return;
    }

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(function (node) {
        node.classList.add('is-visible');
      });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (node) {
        node.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.16,
      rootMargin: '0px 0px -40px 0px'
    });

    nodes.forEach(function (node) {
      if (!node.dataset.revealBound) {
        node.dataset.revealBound = 'true';
        observer.observe(node);
      }
    });
  }

  function bootSharedUi() {
    initCurrentYear();
    initActiveMenu();
    initHeroSlider();
    initLanguagePreference();
    initConsent();
    initBackToTop();
    initScrollReveal();
  }

  removeLoader();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootSharedUi, { once: true });
  } else {
    bootSharedUi();
  }

  document.addEventListener('site:includes-loaded', bootSharedUi);
  document.addEventListener('site:content-loaded', bootSharedUi);
})();
