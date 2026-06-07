/**
 * CELERA MANILA — Scroll Reveal Animations
 * Uses IntersectionObserver to trigger .reveal elements.
 * Respects prefers-reduced-motion.
 */

(function () {
  'use strict';

  // Bail out if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

})();
