/* ============================================================
   print.js — the two controls on a generated handout.

   Handouts are static HTML written by build-print.js. They read
   correctly and print correctly with JavaScript switched off;
   this file only wires the Print button, which cannot be a plain
   link, and keeps the inline handler out of the markup.
   ============================================================ */
(function () {
  'use strict';
  var button = document.getElementById('print-btn');
  if (button) {
    button.addEventListener('click', function () { window.print(); });
    button.hidden = false;
  }
})();
