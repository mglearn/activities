/* TCEA Curiosity Challenge — shared activity engine.
   Renders five activity types from window.CURIOSITY_PACK. Fully client-side.
   No accounts, no network, no student data leaves the browser.
   Accessibility: keyboard + click for every control, no drag-only interaction,
   aria-live feedback, visible focus (see CSS), reduced-motion honored in CSS. */
(function () {
  "use strict";
  var PACK = window.CURIOSITY_PACK;
  if (!PACK) { return; }

  /* ---------- tiny DOM helper ---------- */
  function el(tag, props, kids) {
    var n = document.createElement(tag);
    if (props) for (var k in props) {
      if (k === "class") n.className = props[k];
      else if (k === "html") n.innerHTML = props[k];
      else if (k === "text") n.textContent = props[k];
      else if (k.slice(0, 2) === "on" && typeof props[k] === "function") n.addEventListener(k.slice(2), props[k]);
      else if (props[k] != null) n.setAttribute(k, props[k]);
    }
    if (kids != null) (Array.isArray(kids) ? kids : [kids]).forEach(function (c) {
      if (c == null) return;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }
  function norm(s) { return (s || "").toString().trim().toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim(); }
  function live(section, msg) {
    var l = section.querySelector(".live");
    if (l) { l.textContent = ""; setTimeout(function () { l.textContent = msg; }, 30); }
  }

  var TYPE_TAG = {
    "four-clues": "Guess It", "sort": "Sort It", "order": "Sort It",
    "spot": "Spot It", "explain": "Explain It", "extend": "Extend It"
  };

  /* =====================================================================
     FOUR CLUES  (Guess It)
     ===================================================================== */
  function fourClues(a, section) {
    var earned = 0, possible = 0;
    var scoreEl = el("span", { class: "fc-score" });
    section.appendChild(scoreEl);
    function updateScore() { scoreEl.textContent = "Score: " + earned + " / " + possible; }

    a.items.forEach(function (item, i) {
      possible += 4;
      var shown = 1, solved = false;
      var wrap = el("div", { class: "fc-item" });
      wrap.appendChild(el("div", { class: "num", style: "font-family:'Fredoka';font-weight:700;color:var(--accent);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase", text: "Mystery " + (i + 1) }));
      var clueWrap = el("div", { class: "fc-cluewrap" });
      var clueEls = item.clues.map(function (c, ci) {
        var e = el("div", { class: "clue" + (ci === 0 ? "" : " locked") }, [
          el("span", { class: "k", text: "Clue " + (ci + 1) }),
          el("span", { class: "txt", text: c })
        ]);
        clueWrap.appendChild(e);
        return e;
      });
      wrap.appendChild(clueWrap);

      var note = el("textarea", { class: "fc-note", "aria-label": "Evidence note for mystery " + (i + 1), placeholder: "What in the clues points to your answer? (jot before revealing the next clue)" });
      wrap.appendChild(note);

      var input = el("input", { type: "text", "aria-label": "Your answer for mystery " + (i + 1), placeholder: "Your answer", autocomplete: "off" });
      var checkBtn = el("button", { class: "btn", type: "button" }, "Check");
      var revealBtn = el("button", { class: "btn ghost", type: "button" }, "Reveal next clue (−1 point)");
      var giveBtn = el("button", { class: "btn ghost", type: "button" }, "Show answer");
      var row = el("div", { class: "fc-answer" }, [input, checkBtn]);
      wrap.appendChild(row);
      wrap.appendChild(el("div", { class: "toolbar", style: "margin-top:8px" }, [revealBtn, giveBtn]));
      var out = el("div", { "aria-live": "polite" });
      wrap.appendChild(out);

      function revealAnswer(win) {
        solved = true;
        input.disabled = true; checkBtn.disabled = true; revealBtn.disabled = true; giveBtn.disabled = true;
        out.innerHTML = "";
        if (win) { earned += (5 - shown); updateScore(); }
        var pts = win ? (5 - shown) : 0;
        out.appendChild(el("div", { class: "reveal" }, (win ? "Correct — +" + pts + " point" + (pts === 1 ? "" : "s") + ". " : "Answer: " + item.answer + ". ") + (item.reveal || "")));
        if (item.source) out.appendChild(el("div", { class: "reveal src", text: "Source: " + item.source }));
      }
      checkBtn.addEventListener("click", function () {
        if (solved) return;
        var g = norm(input.value);
        if (!g) { out.innerHTML = ""; out.appendChild(el("div", { class: "hint", text: "Type an answer first." })); return; }
        var ok = (item.accept || []).map(norm).indexOf(g) > -1 || norm(item.answer) === g;
        if (ok) revealAnswer(true);
        else { out.innerHTML = ""; out.appendChild(el("div", { class: "result mid show", text: "Not quite — reveal another clue or try again." })); }
      });
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); checkBtn.click(); } });
      revealBtn.addEventListener("click", function () {
        if (solved || shown >= item.clues.length) return;
        clueEls[shown].classList.remove("locked");
        shown++;
        if (shown >= item.clues.length) { revealBtn.disabled = true; revealBtn.textContent = "All clues shown"; }
        else revealBtn.textContent = "Reveal next clue (−1 point)";
      });
      giveBtn.addEventListener("click", function () { if (!solved) revealAnswer(false); });

      section._resets.push(function () {
        solved = false; shown = 1; input.value = ""; note.value = "";
        input.disabled = false; checkBtn.disabled = false; giveBtn.disabled = false;
        revealBtn.disabled = false; revealBtn.textContent = "Reveal next clue (−1 point)";
        clueEls.forEach(function (e, ci) { e.classList.toggle("locked", ci !== 0); });
        out.innerHTML = "";
      });
      section.appendChild(wrap);
    });
    section._onReset = function () { earned = 0; updateScore(); };
    updateScore();
  }

  /* =====================================================================
     SORT / MATCH  (Sort It)
     ===================================================================== */
  function sortIt(a, section) {
    var selected = null;
    var placedCount = 0;
    var total = a.items.length;

    var grid = el("div", { class: "sort-grid" });
    var bank = el("div", { class: "bank" }, el("h3", { text: "Cards — pick one, then choose a category" }));
    var cats = el("div", { class: "cats" });
    grid.appendChild(bank); grid.appendChild(cats);
    section.appendChild(grid);
    section.appendChild(el("span", { class: "live", "aria-live": "polite" }));

    var progress = el("div", { class: "hint", style: "margin-top:10px", text: "0 of " + total + " placed" });
    section.appendChild(progress);

    var catBoxes = {};
    a.categories.forEach(function (c) {
      var box = el("div", { class: "cat" }, el("h4", { text: c.label || c.text }));
      var drop = el("button", { class: "drop", type: "button", disabled: "" }, "Place selected card here");
      var holder = el("div", {});
      box.appendChild(holder); box.appendChild(drop);
      drop.addEventListener("click", function () { if (selected) place(selected, c.id); });
      catBoxes[c.id] = { holder: holder, drop: drop };
      cats.appendChild(box);
    });

    function setSelected(tok, item) {
      if (selected && selected.tok === tok) { clearSel(); return; }
      clearSel();
      selected = { tok: tok, item: item };
      tok.setAttribute("aria-pressed", "true");
      a.categories.forEach(function (c) { catBoxes[c.id].drop.disabled = false; });
      live(section, "Selected " + item.text + ". Now choose a category.");
    }
    function clearSel() {
      if (selected) selected.tok.setAttribute("aria-pressed", "false");
      selected = null;
      a.categories.forEach(function (c) { catBoxes[c.id].drop.disabled = true; });
    }
    function place(sel, catId) {
      var item = sel.item, tok = sel.tok;
      tok.classList.add("placed"); tok.disabled = true; tok.setAttribute("aria-pressed", "false");
      var ok = item.cat === catId;
      var pi = el("div", { class: "placed-item " + (ok ? "ok" : "no") });
      pi.appendChild(el("span", {}, [el("span", { text: (ok ? "✓ " : "✗ ") + item.text }), el("span", { class: "fb", text: item.feedback || (ok ? "" : "Correct home: " + catLabel(item.cat)) })]));
      var undo = el("button", { class: "undo", type: "button", "aria-label": "Remove " + item.text }, "×");
      undo.addEventListener("click", function () {
        catBoxes[catId].holder.removeChild(pi);
        tok.classList.remove("placed"); tok.disabled = false;
        placedCount--; updateProgress();
      });
      pi.appendChild(undo);
      catBoxes[catId].holder.appendChild(pi);
      clearSel();
      placedCount++; updateProgress();
      live(section, (ok ? "Correct. " : "Not the best home. ") + (item.feedback || ""));
    }
    function catLabel(id) { var c = a.categories.filter(function (x) { return x.id === id; })[0]; return c ? (c.label || c.text) : id; }
    function updateProgress() {
      progress.textContent = placedCount + " of " + total + " placed";
      if (placedCount === total) {
        var right = 0;
        a.items.forEach(function () {}); // count computed below on placed states
        progress.textContent = "All " + total + " placed — review the green and red cards, then reset to try again.";
      }
    }

    a.items.forEach(function (item) {
      var tok = el("button", { class: "token", type: "button", "aria-pressed": "false" }, item.text);
      tok.addEventListener("click", function () { setSelected(tok, item); });
      item._tok = tok;
      bank.appendChild(tok);
    });

    section._onReset = function () {
      clearSel(); placedCount = 0; updateProgress();
      a.items.forEach(function (item) { item._tok.classList.remove("placed"); item._tok.disabled = false; item._tok.setAttribute("aria-pressed", "false"); });
      a.categories.forEach(function (c) { catBoxes[c.id].holder.innerHTML = ""; catBoxes[c.id].drop.disabled = true; });
    };
  }

  /* =====================================================================
     ORDER / SCALE  (Sort It — sequence)
     ===================================================================== */
  function orderIt(a, section) {
    var items = a.items.slice();
    // deterministic scramble: display by descending rank so it is clearly unsorted
    var order = items.slice().sort(function (x, y) { return y.rank - x.rank; });
    if (a.orderLabel) section.appendChild(el("p", { class: "hint", text: "Goal order: " + a.orderLabel }));
    var list = el("ol", { class: "order-list" });
    section.appendChild(list);
    section.appendChild(el("span", { class: "live", "aria-live": "polite" }));
    var checkBtn = el("button", { class: "btn", type: "button" }, "Check order");
    var out = el("div", { "aria-live": "polite" });
    section.appendChild(el("div", { class: "toolbar" }, checkBtn));
    section.appendChild(out);

    function render() {
      list.innerHTML = "";
      order.forEach(function (item, idx) {
        var up = el("button", { type: "button", "aria-label": "Move " + item.text + " up", disabled: idx === 0 ? "" : null }, "↑");
        var dn = el("button", { type: "button", "aria-label": "Move " + item.text + " down", disabled: idx === order.length - 1 ? "" : null }, "↓");
        up.addEventListener("click", function () { swap(idx, idx - 1); });
        dn.addEventListener("click", function () { swap(idx, idx + 1); });
        var li = el("li", {}, [
          el("span", { class: "label", text: item.text }),
          item.note ? el("span", { class: "note", text: item.note }) : null,
          el("span", { class: "moves" }, [up, dn])
        ]);
        list.appendChild(li);
      });
    }
    function swap(i, j) {
      if (j < 0 || j >= order.length) return;
      var t = order[i]; order[i] = order[j]; order[j] = t;
      render();
      out.innerHTML = "";
      list.children[j].querySelector(".moves button:not([disabled])") &&
        list.children[j].querySelectorAll("button")[0].focus();
    }
    checkBtn.addEventListener("click", function () {
      var right = 0;
      order.forEach(function (item, idx) {
        var ok = item.rank === idx + 1;
        if (ok) right++;
        list.children[idx].classList.toggle("ok", ok);
        list.children[idx].classList.toggle("no", !ok);
      });
      out.innerHTML = "";
      if (right === order.length) {
        out.appendChild(el("div", { class: "result good show", text: "Perfect order! " + (a.reveal || "") }));
      } else {
        out.appendChild(el("div", { class: "result mid show", text: right + " of " + order.length + " in the right spot. Adjust and check again." }));
      }
      live(section, right + " of " + order.length + " correct.");
    });
    section._onReset = function () {
      order = items.slice().sort(function (x, y) { return y.rank - x.rank; });
      render(); out.innerHTML = "";
    };
    render();
  }

  /* =====================================================================
     SPOT IT  (image notice/wonder OR odd-one-out)
     ===================================================================== */
  function spotIt(a, section) {
    if (a.image) {
      var media = el("div", { class: "spot-media" });
      var img = el("img", { src: a.image.file, alt: a.image.alt || "", loading: "lazy" });
      img.addEventListener("error", function () {
        media.innerHTML = "";
        media.appendChild(el("div", { class: "noimg", text: "🖼️ Image coming soon — use the text description below." }));
      });
      media.appendChild(img);
      section.appendChild(media);
      if (a.image.description) {
        section.appendChild(el("details", { class: "desc" }, [
          el("summary", { text: "Text description of the image" }),
          el("p", { style: "margin-top:8px", text: a.image.description })
        ]));
      }
    }

    if (a.variant === "odd-one-out" && a.options) {
      var grid = el("div", { class: "ooo" });
      var out = el("div", { "aria-live": "polite" });
      a.options.forEach(function (o) {
        var b = el("button", { type: "button" }, o.label);
        b.addEventListener("click", function () {
          Array.prototype.forEach.call(grid.children, function (c) { c.classList.remove("chosen"); });
          b.classList.add("chosen");
          out.innerHTML = "";
          out.appendChild(el("div", { class: "reveal", text: "A defensible case for “" + o.label + "”: " + (o.defense || "") }));
          out.appendChild(el("div", { class: "hint", style: "margin-top:6px", text: "More than one answer can be defended — what matters is the reasoning." }));
        });
        grid.appendChild(b);
      });
      section.appendChild(grid); section.appendChild(out);
      section._onReset = function () { Array.prototype.forEach.call(grid.children, function (c) { c.classList.remove("chosen"); }); out.innerHTML = ""; };
    } else {
      var ul = el("ul", { class: "spot-prompts" });
      (a.prompts || []).forEach(function (p, i) {
        var ta = el("textarea", { "aria-label": p, placeholder: "Type here…" });
        ul.appendChild(el("li", {}, [el("span", { text: p }), ta]));
      });
      section.appendChild(ul);
      var revealBtn = el("button", { class: "btn ghost", type: "button" }, "Reveal caption & source");
      var cap = el("div", { class: "reveal", style: "display:none" });
      if (a.image && a.image.caption) cap.textContent = a.image.caption;
      revealBtn.addEventListener("click", function () { cap.style.display = cap.style.display === "none" ? "block" : "none"; });
      if (a.image && a.image.caption) { section.appendChild(el("div", { class: "toolbar" }, revealBtn)); section.appendChild(cap); }
      section._onReset = function () { ul.querySelectorAll("textarea").forEach(function (t) { t.value = ""; }); cap.style.display = "none"; };
    }
  }

  /* =====================================================================
     EXPLAIN IT  (evidence → claim)
     ===================================================================== */
  function explainIt(a, section) {
    var ev = a.evidence || {};
    var box = el("div", { class: "evidence" });
    if (ev.caption) box.appendChild(el("div", { class: "cap", text: ev.caption }));
    if (ev.kind === "table" && ev.rows) {
      var tbl = el("table", {});
      ev.rows.forEach(function (r, ri) {
        var tr = el("tr", {});
        r.forEach(function (cell) { tr.appendChild(el(ri === 0 ? "th" : "td", { text: cell })); });
        tbl.appendChild(tr);
      });
      box.appendChild(tbl);
    } else if (ev.kind === "quote") {
      box.appendChild(el("blockquote", { text: ev.text || "" }));
    } else if (Array.isArray(ev.bullets)) {
      var ulb = el("ul", { style: "padding-left:20px;font-weight:600" });
      ev.bullets.forEach(function (b) { ulb.appendChild(el("li", { text: b })); });
      box.appendChild(ulb);
    }
    if (ev.description) box.appendChild(el("details", { class: "desc", style: "margin-top:10px" }, [el("summary", { text: "Text description of the evidence" }), el("p", { style: "margin-top:8px", text: ev.description })]));
    section.appendChild(box);

    if (a.question) section.appendChild(el("p", { class: "instr", text: a.question }));
    var claim = el("textarea", { class: "claimbox", "aria-label": "Your claim and evidence", placeholder: a.sentenceStarter || "Write your claim and the evidence that supports it." });
    section.appendChild(claim);

    var revealBtn = el("button", { class: "btn ghost", type: "button" }, "Reveal a model response");
    var out = el("div", { style: "display:none" });
    out.appendChild(el("div", { class: "reveal", text: a.model || "" }));
    var sup = el("div", { class: "support" });
    if (a.canSupport) sup.appendChild(el("div", { class: "box can" }, [el("b", { text: "The evidence CAN support" }), document.createTextNode(a.canSupport)]));
    if (a.cannotSupport) sup.appendChild(el("div", { class: "box cannot" }, [el("b", { text: "It CANNOT prove" }), document.createTextNode(a.cannotSupport)]));
    out.appendChild(sup);
    revealBtn.addEventListener("click", function () { out.style.display = out.style.display === "none" ? "block" : "none"; });
    section.appendChild(el("div", { class: "toolbar" }, revealBtn));
    section.appendChild(out);
    section._onReset = function () { claim.value = ""; out.style.display = "none"; };
  }

  /* =====================================================================
     EXTEND IT  (create / transfer)
     ===================================================================== */
  function extendIt(a, section) {
    if (Array.isArray(a.cards)) {
      var pick = el("div", { class: "cards-pick" });
      a.cards.forEach(function (c) {
        pick.appendChild(el("div", { class: "pick" }, [
          el("b", { text: c.idea }),
          el("p", { style: "font-weight:600;font-size:.85rem;margin-top:4px", text: c.plainSummary }),
          c.technicalWord ? el("span", { class: "word", text: c.technicalWord }) : null
        ]));
      });
      section.appendChild(el("p", { class: "hint", text: "Pick one idea to work with:" }));
      section.appendChild(pick);
    }
    if (Array.isArray(a.requirements)) {
      section.appendChild(el("p", { class: "instr", text: "Your response must include:" }));
      var ol = el("ul", { class: "reqs" });
      a.requirements.forEach(function (r) { ol.appendChild(el("li", { text: r })); });
      section.appendChild(ol);
    }
    if (Array.isArray(a.fields)) {
      var fs = el("div", { class: "fields" });
      a.fields.forEach(function (f, i) {
        var id = section.id + "-f" + i;
        var control = /explain|describe|story|why|reason|two|symbol|response|sketch/i.test(f.label)
          ? el("textarea", { id: id })
          : el("input", { id: id, type: "text" });
        fs.appendChild(el("label", { for: id }, [document.createTextNode(f.label), f.hint ? el("span", { class: "fh", text: f.hint }) : null, control]));
      });
      section.appendChild(fs);
      section._fields = fs;
    }
    if (a.privacyNote) section.appendChild(el("div", { class: "privnote" }, [el("b", { text: "Privacy: " }), document.createTextNode(a.privacyNote)]));
    if (a.example) section.appendChild(el("div", { class: "example" }, [el("b", { text: "Example: " }), document.createTextNode(a.example)]));
    section.appendChild(el("div", { class: "toolbar" }, el("button", { class: "btn ghost", type: "button", onclick: function () { window.print(); } }, "🖨️ Print this page")));
    section._onReset = function () { if (section._fields) section._fields.querySelectorAll("input,textarea").forEach(function (c) { c.value = ""; }); };
  }

  var RENDER = { "four-clues": fourClues, "sort": sortIt, "order": orderIt, "spot": spotIt, "explain": explainIt, "extend": extendIt };

  /* ---------- build the page ---------- */
  function build() {
    document.title = PACK.title + " · TCEA Curiosity Challenge";
    var mount = document.getElementById("pack");
    if (!mount) return;

    // meta chips
    var chips = document.getElementById("meta-chips");
    if (chips && PACK.gradeBands) PACK.gradeBands.forEach(function (b) { chips.appendChild(el("span", { class: "chip accent", text: "Grades " + b })); });

    // activity nav cards
    var nav = document.getElementById("act-nav");
    if (nav) PACK.activities.forEach(function (a, i) {
      nav.appendChild(el("a", { class: "actcard", href: "#" + a.id, style: "--accent:var(--accent)" }, [
        el("div", { class: "num", text: "Challenge " + (i + 1) + " · " + (TYPE_TAG[a.type] || "") }),
        el("h3", { text: a.title }),
        el("p", { text: a.instructions || "" }),
        el("div", { class: "foot" }, [el("span", { text: a.time || "" }), el("span", { class: "go", text: "Start →" })])
      ]));
    });

    PACK.activities.forEach(function (a, i) {
      var section = el("section", { class: "panel", id: a.id, tabindex: "-1" });
      section.appendChild(el("h2", {}, [
        el("span", { class: "tag", text: TYPE_TAG[a.type] || "Activity" }),
        document.createTextNode((i + 1) + ". " + a.title),
        el("span", { class: "time", text: a.time ? " · " + a.time : "" })
      ]));
      if (a.instructions) section.appendChild(el("p", { class: "instr", text: a.instructions }));
      var body = el("div", {});
      body._resets = [];                 // per-item reset callbacks (used by four-clues)
      section.appendChild(body);
      (RENDER[a.type] || function () {})(a, body);

      if (a.teacherMove) section.appendChild(el("div", { class: "tmove" }, [el("b", { text: "Teacher move: " }), document.createTextNode(a.teacherMove)]));

      var resetBtn = el("button", { class: "btn ghost", type: "button" }, "↺ Reset this challenge");
      resetBtn.addEventListener("click", function () {
        if (body._onReset) body._onReset();
        (body._resets || []).forEach(function (r) { r(); });
        section.scrollIntoView({ block: "start" });
      });
      var top = el("a", { class: "btn ghost", href: "#top" }, "↑ All challenges");
      section.appendChild(el("hr", { class: "divider" }));
      section.appendChild(el("div", { class: "toolbar" }, [resetBtn, top]));
      mount.appendChild(section);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
