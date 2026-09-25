/* ZENVORA SHOOP - PWA install prompt v2 */
(function () {
  'use strict';
  var deferredInstallPrompt = null;
  var DISMISS_KEY = 'zenvoraAppInstallDismissed';

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  function closePrompt() {
    var el = document.getElementById('zenvora-install-overlay');
    if (el) el.remove();
  }

  window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;
  });

  window.addEventListener('appinstalled', function () {
    deferredInstallPrompt = null;
    closePrompt();
    try { localStorage.setItem(DISMISS_KEY, 'installed'); } catch (e) {}
  });

  function showPrompt() {
    if (isStandalone() || document.getElementById('zenvora-install-overlay')) return;

    var overlay = document.createElement('div');
    overlay.id = 'zenvora-install-overlay';
    overlay.className = 'app-install-backdrop';
    overlay.innerHTML =
      '<div class="app-install-modal" role="dialog" aria-modal="true" aria-labelledby="zenvora-install-title">' +
        '<img class="app-install-icon" src="/icon-192.png" alt="ZENVORA SHOOP App">' +
        '<h3 id="zenvora-install-title">Download App</h3>' +
        '<p>Install the ZENVORA SHOOP app on your device for a faster and easier shopping experience.</p>' +
        '<div class="app-install-actions">' +
          '<button type="button" class="app-install-yes">Yes</button>' +
          '<button type="button" class="app-install-no">No</button>' +
        '</div>' +
        '<div class="app-install-help" hidden></div>' +
      '</div>';

    document.body.appendChild(overlay);

    overlay.querySelector('.app-install-no').addEventListener('click', function () {
      try { localStorage.setItem(DISMISS_KEY, 'yes'); } catch (e) {}
      closePrompt();
    });

    overlay.querySelector('.app-install-yes').addEventListener('click', function () {
      var button = this;
      if (location.protocol === 'file:') {
        location.href = 'https://zenvorashoop.netlify.app/';
        return;
      }
      if (deferredInstallPrompt) {
        button.disabled = true;
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then(function () {
          deferredInstallPrompt = null;
          closePrompt();
        }).catch(function () {
          deferredInstallPrompt = null;
          closePrompt();
        });
        return;
      }
      var help = overlay.querySelector('.app-install-help');
      help.hidden = false;
      if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
        help.textContent = 'On iPhone/iPad: tap Share, then “Add to Home Screen”.';
      } else {
        help.textContent = 'Chrome/Edge: use the Install icon in the address bar or browser menu to install ZENVORA SHOOP.';
      }
    });

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) closePrompt();
    });
  }

  // Proactively unregister any active service worker and purge cached files
  function cleanupServiceWorkerAndCaches() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (var i = 0; i < registrations.length; i++) {
          registrations[i].unregister().catch(function () {});
        }
      }).catch(function () {});
    }
    if ('caches' in window) {
      caches.keys().then(function (names) {
        for (var i = 0; i < names.length; i++) {
          caches.delete(names[i]).catch(function () {});
        }
      }).catch(function () {});
    }
  }

  // Run cleanup immediately
  cleanupServiceWorkerAndCaches();

  document.addEventListener('DOMContentLoaded', function () {
    cleanupServiceWorkerAndCaches();

    // Single delegated click listener: ONLY show prompt when customer explicitly clicks Download App
    document.addEventListener('click', function (e) {
      var btn = e.target && e.target.closest ? e.target.closest('#download-app-btn, .download-app-link') : null;
      if (btn) {
        e.preventDefault();
        showPrompt();
      }
    });

    // NOTE: Automatic modal popup is disabled to prevent blocking mobile customers from ordering or adding to cart
  });
})();
