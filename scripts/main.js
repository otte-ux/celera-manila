/**
 * CELERA MANILA — Main Init
 * Smooth scroll for anchor links + image fallbacks.
 * Loaded last — all other scripts are already active.
 */

(function () {
  'use strict';

  // ── Smooth scroll for # anchor links ──────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href   = this.getAttribute('href');
      var target = href && href !== '#' ? document.querySelector(href) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Image fallbacks ────────────────────────────────
  // If a local asset is missing (e.g. not yet added to /assets/images/),
  // the Unsplash CDN placeholder in data-fallback loads automatically.
  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    function tryFallback () {
      var fb = img.getAttribute('data-fallback');
      if (fb && img.src !== fb) {
        img.removeEventListener('error', tryFallback);
        img.src = fb;
      }
    }
    img.addEventListener('error', tryFallback);
  });

})();
