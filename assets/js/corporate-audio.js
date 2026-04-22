/*
# 📄 Dosya Yolu: assets/js/corporate-audio.js
# 📌 Amac: secili sayfalarda kurumsal fon muzigi icin back-to-top hizasinda konumlanan premium kontrol, isik halkasi ve geri sayim davranisini saglamak
# 📌 Modul - JavaScript
# Version: 1.5.0
# Aciklama: 3 saniyelik kompakt sayac gosterir, kontrolu back-to-top ile ayni hizada sabitler ve oynatma durumunda premium isik halkasi gosterir
# Bagimli Oldugu Katman: View
*/
(function () {
  var config = window.SETOTOMOTIV_AUDIO || {};
  var fallbackConfig = {
    enabled: true,
    defaultVolume: 0.18,
    storageKey: 'set_otomotiv_corporate_audio_v3',
    source: 'assets/audio/corporate-theme.wav',
    autoStart: true,
    autoStartDelayMs: 3000,
    mutedWarmup: true,
    resumePreviousChoice: true,
    allowedPages: ['index.html', 'about.html', 'blog.html', 'axalta-color-series.html'],
    allowedPatterns: ['^blog-axalta-.*\\.html$'],
    mountSelectors: [],
    labels: {
      tr: { blocked: 'Tikla', play: 'Muzik ac', pause: 'Muzigi durdur', volume: 'Ses seviyesi' },
      en: { blocked: 'Click', play: 'Turn music on', pause: 'Pause music', volume: 'Volume' }
    }
  };

  config = Object.assign({}, fallbackConfig, config);
  config.labels = Object.assign({}, fallbackConfig.labels, config.labels || {});
  config.labels.tr = Object.assign({}, fallbackConfig.labels.tr, (config.labels || {}).tr || {});
  config.labels.en = Object.assign({}, fallbackConfig.labels.en, (config.labels || {}).en || {});

  var state = {
    audio: null,
    widget: null,
    button: null,
    badge: null,
    countdown: null,
    volumeWrap: null,
    volume: null,
    timer: null,
    countdownTimer: null,
    unlockBound: false,
    isPlaying: false,
    isBlocked: false,
    hasUserPaused: false,
    mountedInline: false
  };

  function getPageFile() {
    var file = window.location.pathname.split('/').pop() || 'index.html';
    return file.indexOf('.') === -1 ? 'index.html' : file;
  }

  function getBasePrefix() {
    var path = window.location.pathname;
    return (path.indexOf('/tr/') !== -1 || path.indexOf('/en/') !== -1) ? '../' : '';
  }

  function getLang() {
    var bodyLang = document.body ? document.body.getAttribute('data-page-lang') : '';
    return bodyLang === 'en' ? 'en' : 'tr';
  }

  function getText() {
    return config.labels[getLang()] || config.labels.tr;
  }

  function isAllowedPage() {
    if (!config.enabled) {
      return false;
    }
    var file = getPageFile();
    if ((config.allowedPages || []).indexOf(file) !== -1) {
      return true;
    }
    return (config.allowedPatterns || []).some(function (pattern) {
      try {
        return new RegExp(pattern).test(file);
      } catch (error) {
        return false;
      }
    });
  }

  function readPrefs() {
    try {
      var raw = localStorage.getItem(config.storageKey);
      return raw ? JSON.parse(raw) : {};
    } catch (error) {
      return {};
    }
  }

  function writePrefs(prefs) {
    try {
      localStorage.setItem(config.storageKey, JSON.stringify(prefs));
    } catch (error) {}
  }

  function resolveSource() {
    var source = config.source || fallbackConfig.source;
    return /^(https?:|\/)/.test(source) ? source : getBasePrefix() + source;
  }

  function clearTimers() {
    if (state.timer) {
      clearTimeout(state.timer);
      state.timer = null;
    }
    if (state.countdownTimer) {
      clearInterval(state.countdownTimer);
      state.countdownTimer = null;
    }
  }

  function findMountTarget() {
    var target = null;
    (config.mountSelectors || []).some(function (selector) {
      var node = document.querySelector(selector);
      if (node) {
        target = node;
        return true;
      }
      return false;
    });
    return target;
  }

  function mountWidget() {
    if (!state.widget) {
      return;
    }
    if (!document.body.contains(state.widget)) {
      document.body.appendChild(state.widget);
    }
    state.widget.classList.add('is-floating');
    state.widget.classList.remove('is-inline');
    state.mountedInline = false;
  }

  function setBadgeMode(mode) {
    if (!state.badge) {
      return;
    }
    state.badge.classList.remove('is-on', 'is-off', 'is-blocked');
    if (mode === 'blocked') {
      state.badge.classList.add('is-blocked');
      return;
    }
    state.badge.classList.add(state.isPlaying ? 'is-on' : 'is-off');
  }

  function setCountdown(value) {
    if (!state.countdown) {
      return;
    }
    if (value === null || value === undefined || value === '') {
      state.countdown.hidden = true;
      state.countdown.textContent = '';
      return;
    }
    state.countdown.hidden = false;
    state.countdown.textContent = String(value);
  }

  function updateUi(isPlaying, mode) {
    var text = getText();
    state.isPlaying = !!isPlaying;
    if (state.widget) {
      state.widget.classList.toggle('is-playing', state.isPlaying);
      state.widget.classList.toggle('is-blocked', mode === 'blocked');
      state.widget.classList.toggle('is-counting', mode === 'countdown');
    }
    if (state.button) {
      state.button.classList.toggle('is-playing', state.isPlaying);
      state.button.classList.toggle('is-blocked', mode === 'blocked');
      state.button.setAttribute('aria-pressed', state.isPlaying ? 'true' : 'false');
      state.button.setAttribute('aria-label', state.isPlaying ? text.pause : text.play);
      state.button.title = state.isBlocked ? text.blocked : (state.isPlaying ? text.pause : text.play);
    }
    if (mode !== 'countdown') {
      setCountdown(null);
    }
    setBadgeMode(mode);
  }

  function setVolume(value) {
    var volume = Math.max(0, Math.min(1, Number(value) || config.defaultVolume));
    if (state.audio) {
      state.audio.volume = volume;
    }
    var prefs = readPrefs();
    prefs.volume = volume;
    writePrefs(prefs);
  }

  function saveEnabled(value) {
    var prefs = readPrefs();
    prefs.enabled = !!value;
    prefs.changedAt = Date.now();
    writePrefs(prefs);
  }

  function bindUnlockOnFirstInteraction() {
    if (state.unlockBound) {
      return;
    }
    state.unlockBound = true;
    var unlock = function () {
      if (!state.isPlaying && !state.hasUserPaused) {
        playAudio({ auto: false, save: true });
      }
      ['pointerdown', 'click', 'keydown', 'touchstart'].forEach(function (eventName) {
        document.removeEventListener(eventName, unlock, true);
      });
    };
    ['pointerdown', 'click', 'keydown', 'touchstart'].forEach(function (eventName) {
      document.addEventListener(eventName, unlock, true);
    });
  }

  function playAudio(options) {
    options = options || {};
    if (!state.audio) {
      return;
    }
    state.audio.muted = false;
    state.audio.play().then(function () {
      state.isBlocked = false;
      if (options.save !== false) {
        saveEnabled(true);
      }
      updateUi(true);
    }).catch(function () {
      state.isBlocked = true;
      updateUi(false, options.auto ? 'blocked' : undefined);
      bindUnlockOnFirstInteraction();
    });
  }

  function pauseAudio() {
    if (!state.audio) {
      return;
    }
    clearTimers();
    state.hasUserPaused = true;
    state.audio.pause();
    saveEnabled(false);
    updateUi(false);
  }

  function toggleAudio() {
    if (state.isPlaying) {
      pauseAudio();
      return;
    }
    state.hasUserPaused = false;
    playAudio({ auto: false, save: true });
  }

  function buildWidget() {
    var text = getText();
    var prefs = readPrefs();
    var wrapper = document.createElement('div');
    wrapper.className = 'corporate-audio-widget';
    wrapper.setAttribute('data-corporate-audio', 'true');
    wrapper.innerHTML = '<button class="corporate-audio-toggle" type="button" aria-pressed="false" aria-label="' + text.play + '"><span class="corporate-audio-icon" aria-hidden="true"><span class="bar bar-1"></span><span class="bar bar-2"></span><span class="bar bar-3"></span></span><span class="corporate-audio-badge is-off" aria-hidden="true"></span><span class="corporate-audio-countdown" hidden></span></button><label class="corporate-audio-volume"><span class="visually-hidden">' + text.volume + '</span><input type="range" min="0" max="1" step="0.01" value="' + (prefs.volume || config.defaultVolume) + '" /></label>';
    state.widget = wrapper;
    state.button = wrapper.querySelector('.corporate-audio-toggle');
    state.badge = wrapper.querySelector('.corporate-audio-badge');
    state.countdown = wrapper.querySelector('.corporate-audio-countdown');
    state.volumeWrap = wrapper.querySelector('.corporate-audio-volume');
    state.volume = wrapper.querySelector('input[type="range"]');
    state.button.addEventListener('click', toggleAudio);
    state.volume.addEventListener('input', function () {
      setVolume(this.value);
    });
    mountWidget();
  }

  function shouldAutoStart(prefs) {
    if (!config.autoStart) {
      return false;
    }
    if (config.resumePreviousChoice && prefs.enabled === false) {
      return false;
    }
    return true;
  }

  function tryMutedWarmup() {
    if (!config.mutedWarmup || !state.audio) {
      return;
    }
    state.audio.muted = true;
    state.audio.play().then(function () {
      state.audio.pause();
      state.audio.currentTime = 0;
      state.audio.muted = false;
    }).catch(function () {
      if (state.audio) {
        state.audio.muted = false;
      }
    });
  }

  function scheduleAutoStart(prefs) {
    if (!shouldAutoStart(prefs)) {
      updateUi(false);
      return;
    }
    var delay = Math.max(0, Number(config.autoStartDelayMs) || 5000);
    var remaining = Math.max(1, Math.ceil(delay / 1000));
    updateUi(false, 'countdown');
    setCountdown(remaining);
    tryMutedWarmup();
    state.countdownTimer = window.setInterval(function () {
      remaining -= 1;
      if (remaining <= 0) {
        clearInterval(state.countdownTimer);
        state.countdownTimer = null;
        setCountdown(null);
        return;
      }
      setCountdown(remaining);
    }, 1000);
    state.timer = window.setTimeout(function () {
      state.timer = null;
      playAudio({ auto: true, save: true });
    }, delay);
  }

  function bindMountRefresh() {
    document.addEventListener('site:includes-loaded', mountWidget);
    window.addEventListener('resize', mountWidget);
  }

  function initAudio() {
    if (!isAllowedPage() || document.querySelector('[data-corporate-audio]')) {
      return;
    }
    var prefs = readPrefs();
    state.audio = new Audio(resolveSource());
    state.audio.loop = true;
    state.audio.preload = 'auto';
    state.audio.volume = prefs.volume || config.defaultVolume;
    state.audio.addEventListener('pause', function () {
      if (!state.hasUserPaused) {
        updateUi(false);
      }
    });
    state.audio.addEventListener('playing', function () {
      updateUi(true);
    });
    buildWidget();
    bindMountRefresh();
    scheduleAutoStart(prefs);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAudio, { once: true });
  } else {
    initAudio();
  }
})();
