/**
 * CELERA MANILA — Navbar Behavior
 * Handles scroll state (transparent → opaque) and
 * mobile menu open/close with keyboard support.
 */

(function () {
  'use strict';

  var navbar     = document.getElementById('navbar');
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var heroEl     = document.getElementById('hero');

  if (!navbar) return;

  // ── Scroll: transparent ↔ opaque ──────────────────
  var rafId    = null;
  var isOpen   = false;

  function updateNavbar () {
    var threshold = heroEl ? heroEl.offsetHeight * 0.3 : 80;
    if (window.scrollY > threshold) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
    rafId = null;
  }

  window.addEventListener('scroll', function () {
    if (!rafId) {
      rafId = requestAnimationFrame(updateNavbar);
    }
  }, { passive: true });

  // Run once on load in case page is already scrolled
  updateNavbar();

  // ── Mobile Menu ────────────────────────────────────
  if (!hamburger || !mobileMenu) return;

  function openMenu () {
    isOpen = true;
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu () {
    isOpen = false;
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    isOpen ? closeMenu() : openMenu();
  });

  // Close when a mobile nav link is clicked
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });

})();
