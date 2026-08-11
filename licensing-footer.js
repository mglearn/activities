/* ============================================================
   Learning Activities Hub — licensing footer (unobtrusive)
   Appends a quiet one-line licensing notice to the end of the
   page, linking to /activities/licensing.html. Injects its own
   scoped styles so it cannot clash with a page's existing CSS.

   Include on a page with:
     <script src="/activities/licensing-footer.js" defer></script>

   The path is absolute, so the same tag works at any folder
   depth. To change the license shown site-wide, edit
   LICENSE_TEXT below — the pages themselves need no changes.

   Note for generated pages: several suites are produced by build
   scripts. The tag is emitted by those generators too, so a
   rebuild reproduces it. If you add a new generator, include the
   tag in its template.
   ============================================================ */
(function () {
  "use strict";

  var HOLDER       = "© 2026 TCEA";
  var LICENSE_TEXT = "Content CC BY-NC 4.0 · Code MIT";
  var HREF         = "/activities/licensing.html";

  // Never inject inside an embedded iframe — the host page carries it.
  try { if (window.top !== window.self) return; } catch (e) { return; }

  // Never inject on the licensing page itself.
  if (/\/licensing\.html$/.test(location.pathname)) return;

  function build() {
    if (document.getElementById("lah-lic-footer")) return;

    var css = ""
      + "#lah-lic-footer{all:initial;display:block;box-sizing:border-box;width:100%;"
      + "margin:2.5rem 0 0;padding:.9rem 1rem calc(.9rem + env(safe-area-inset-bottom,0px));"
      + "border-top:1px solid rgba(5,76,140,.14);background:transparent;text-align:center;"
      + "font-family:'Nunito',system-ui,-apple-system,'Segoe UI',sans-serif;"
      + "font-size:.76rem;line-height:1.6;color:#516079;}"
      + "#lah-lic-footer .lah-lic-in{max-width:820px;margin:0 auto;}"
      + "#lah-lic-footer a{color:#054c8c;text-decoration:underline;text-underline-offset:2px;}"
      + "#lah-lic-footer a:hover,#lah-lic-footer a:focus-visible{color:#023266;}"
      + "@media print{#lah-lic-footer{border-top:1px solid #ccc;color:#333;}}";

    var style = document.createElement("style");
    style.id = "lah-lic-footer-css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    var bar = document.createElement("footer");
    bar.id = "lah-lic-footer";

    var inner = document.createElement("div");
    inner.className = "lah-lic-in";
    inner.appendChild(document.createTextNode(HOLDER + " · " + LICENSE_TEXT + " · "));

    var link = document.createElement("a");
    link.href = HREF;
    link.textContent = "Licensing & provenance";
    inner.appendChild(link);

    bar.appendChild(inner);
    document.body.appendChild(bar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
