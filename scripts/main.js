/**
 * CELERA MANILA — Main Init
 * Smooth scroll for anchor links.
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

})();
