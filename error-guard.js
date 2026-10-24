/**
 * ZENVORA SHOOP - Early Error & Abort Guard
 * Ensures benign network aborts, stream disconnections, and window unloads
 * never bubble up as unhandled promise rejections or uncaught window errors.
 */
(function () {
  'use strict';

  function isIgnorableError(err) {
    if (!err) return false;
    if (err.name === 'AbortError' || err.code === 20) return true;
    var msg = (err.message || String(err)).toLowerCase();
    return (
      msg.includes('aborted a request') ||
      msg.includes('user aborted') ||
      msg.includes('aborterror') ||
      msg.includes('request was aborted') ||
      msg.includes('operation was aborted') ||
      msg.includes('cancelled') ||
      msg.includes('could not reach cloud firestore backend') ||
      msg.includes('backend didn\'t respond within 10 seconds') ||
      msg.includes('operate in offline mode')
    );
  }

  // Intercept early in capture phase
  window.addEventListener(
    'unhandledrejection',
    function (event) {
      if (isIgnorableError(event.reason)) {
        event.preventDefault();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
        return true;
      }
    },
    true
  );

  window.addEventListener(
    'error',
    function (event) {
      if (isIgnorableError(event.error) || isIgnorableError(event.message)) {
        event.preventDefault();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
        return true;
      }
    },
    true
  );

  // Filter Firestore backend timeout and offline warnings from console.warn/error
  function isFirestoreOfflineLog(args) {
    if (!args || !args.length) return false;
    for (var i = 0; i < args.length; i++) {
      var arg = args[i];
      var str = typeof arg === 'object' && arg !== null
        ? ((arg.message || '') + ' ' + (arg.stack || '') + ' ' + (arg.code || ''))
        : String(arg);
      var lower = str.toLowerCase();
      if (
        lower.includes('could not reach cloud firestore backend') ||
        lower.includes('operate in offline mode') ||
        lower.includes('backend didn\'t respond within 10 seconds') ||
        lower.includes('backend didnt respond within 10 seconds')
      ) {
        return true;
      }
    }
    return false;
  }

  var originalWarn = console.warn;
  console.warn = function () {
    var args = Array.prototype.slice.call(arguments);
    if (isFirestoreOfflineLog(args)) return;
    return originalWarn.apply(console, args);
  };

  var originalError = console.error;
  console.error = function () {
    var args = Array.prototype.slice.call(arguments);
    if (isFirestoreOfflineLog(args)) return;
    return originalError.apply(console, args);
  };
})();
