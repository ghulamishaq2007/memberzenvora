/**
 * ZENVORA SHOOP - Early Error & Abort Guard
 * Ensures benign network aborts, stream disconnections, and window unloads
 * never bubble up as unhandled promise rejections or uncaught window errors.
 */
(function () {
  'use strict';

  function isAbortError(err) {
    if (!err) return false;
    if (err.name === 'AbortError' || err.code === 20) return true;
    var msg = (err.message || String(err)).toLowerCase();
    return (
      msg.includes('aborted a request') ||
      msg.includes('user aborted') ||
      msg.includes('aborterror') ||
      msg.includes('request was aborted') ||
      msg.includes('operation was aborted') ||
      msg.includes('cancelled')
    );
  }

  // Intercept early in capture phase
  window.addEventListener(
    'unhandledrejection',
    function (event) {
      if (isAbortError(event.reason)) {
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
      if (isAbortError(event.error) || isAbortError(event.message)) {
        event.preventDefault();
        if (event.stopImmediatePropagation) event.stopImmediatePropagation();
        return true;
      }
    },
    true
  );
})();
