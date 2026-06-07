/**
 * CELERA MANILA — Reservation Form
 * Client-side validation + submission state.
 *
 * To wire to a real backend, replace the submit handler body:
 *   Formspree:  set action="https://formspree.io/f/YOUR_ID" method="POST" on the form
 *   Custom API: use fetch() with JSON.stringify(new FormData(form))
 */

(function () {
  'use strict';

  var form      = document.getElementById('reservationForm');
  var submitBtn = document.getElementById('submitBtn');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate all required fields
    var fields = form.querySelectorAll('[required]');
    var isValid = true;

    fields.forEach(function (field) {
      field.classList.remove('is-invalid');
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('is-invalid');
        field.addEventListener('input', function () {
          field.classList.remove('is-invalid');
        }, { once: true });
      }
    });

    if (!isValid) return;

    // ── Submit ────────────────────────────────────────
    // Replace this block with your real API call.
    submitBtn.textContent = 'Request Received';
    submitBtn.disabled    = true;

    // Reset after 4 s (demo / UX feedback)
    setTimeout(function () {
      form.reset();
      submitBtn.textContent = 'Request Reservation';
      submitBtn.disabled    = false;
    }, 4000);
  });

})();
