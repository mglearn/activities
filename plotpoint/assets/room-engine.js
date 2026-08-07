/* PlotPoint — shared title-room engine.
   ---------------------------------------------------------------------------
   A title room supplies its content on:
     window.__ROOM__        = { id, storageKey?, ui:{…}, content:{…} }   (English)
     window.__ROOM_LANGS__  = { es:{ ui:{…}, content:{…} }, … }          (translations)
   The engine renders 10 sections, tracks progress, saves locally, prints, and
   drives the shared BreakoutI18n language switcher (../../ctobs/assets/i18n.js).

   Load order in a room page:
     ../../ctobs/assets/i18n.js -> data.en.js -> lang/*.js -> ../assets/room-engine.js

   English is the source language. Translations widen access and are flagged for
   human review. No content is invented: where an author/room left a fact
   unverified, its data carries a "Needs review" note surfaced in the Teacher tab.
--------------------------------------------------------------------------- */
(function () {
  'use strict';
  var R = window.__ROOM__ || {};
  var ROOM_ID = R.id || 'plotpoint-room';
  var STORAGE_KEY = R.storageKey || ('plotpoint.' + ROOM_ID + '.v1');
  var I18N = window.BreakoutI18n;

  /* ---- fold translated UI packs, register chrome dictionary ---- */
  var UI = { en: R.ui || {} };
  var CONTENT = { en: R.content || {} };
  var packs = window.__ROOM_LANGS__ || {};
  Object.keys(packs).forEach(function (code) {
    if (packs[code].ui) UI[code] = packs[code].ui;
    if (packs[code].content) CONTENT[code] = packs[code].content;
  });
  if (I18N) I18N.register(ROOM_ID, UI);

  function lang() { return I18N ? I18N.getLang() : 'en'; }
  function t(k, vars) { return I18N ? I18N.t(k, vars) : (UI.en[k] || k); }
  /* content(): per-field fallback to English for partial translations */
  function content() {
    var base = CONTENT.en || {}, loc = CONTENT[lang()] || {};
    var out = {};
    Object.keys(base).forEach(function (k) { out[k] = (loc[k] !== undefined ? loc[k] : base[k]); });
    return out;
  }

  /* ---- progress persistence ---- */
  var state = { done: {}, section: 'enter', genaiOn: false };
  function load() {
    try { var s = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); if (s && typeof s === 'object') state = Object.assign(state, s); } catch (_) {}
  }
  function save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {} }
  function markDone(id) { if (!state.done[id]) { state.done[id] = true; save(); renderNav(); } }
  load();

  /* ---- DOM helpers ---- */
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var tmp = a[i]; a[i] = a[j]; a[j] = tmp; } return a; }
  function flag(cond) { return cond ? ' <span class="review-flag">' + t('review.flag') + '</span>' : ''; }

  /* ---- sections ---- */
  var SECTIONS = [
    { id: 'enter',    ic: '📖', render: renderEnter },
    { id: 'vocab',    ic: '🔤', render: renderVocab },
    { id: 'relic',    ic: '🏺', render: renderRelic },
    { id: 'ctob',     ic: '🔒', render: renderCtob },
    { id: 'arcade',   ic: '🕹️', render: renderArcade },
    { id: 'analysis', ic: '🧭', render: renderAnalysis },
    { id: 'extend',   ic: '🚀', render: renderExtend },
    { id: 'genai',    ic: '🤖', render: renderGenai },
    { id: 'print',    ic: '🖨️', render: renderPrint },
    { id: 'teacher',  ic: '🎓', render: renderTeacher }
  ];
  var scored = ['vocab', 'relic', 'ctob', 'arcade', 'analysis'];

  function renderNav() {
    var rail = document.getElementById('rail'); if (!rail) return;
    rail.innerHTML = '';
    SECTIONS.forEach(function (s) {
      var b = el('button', 'navbtn');
      b.type = 'button';
      b.setAttribute('data-sec', s.id);
      b.setAttribute('aria-current', state.section === s.id ? 'true' : 'false');
      var done = state.done[s.id] && scored.indexOf(s.id) > -1;
      b.innerHTML = '<span class="ic" aria-hidden="true">' + s.ic + '</span>' +
        '<span class="lbl">' + esc(t('nav.' + s.id)) + '</span>' +
        (done ? '<span class="done" aria-label="' + esc(t('nav.done')) + '">✓</span>' : '');
      b.addEventListener('click', function () { go(s.id); });
      rail.appendChild(b);
    });
    var total = scored.length;
    var n = scored.filter(function (x) { return state.done[x]; }).length;
    var chip = document.getElementById('progresschip');
    if (chip) chip.textContent = t('progress.chip', { n: n, total: total });
  }

  function go(id) {
    state.section = id; save();
    SECTIONS.forEach(function (s) {
      var scr = document.getElementById('sec-' + s.id);
      if (scr) scr.classList.toggle('active', s.id === id);
    });
    renderNav();
    try { if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id); } catch (_) {}
    var main = document.getElementById('main'); if (main) main.focus();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  /* =======================================================================
     SECTION RENDERERS
  ======================================================================= */

  function renderEnter(root) {
    var c = content(), m = c.meta || {};
    root.innerHTML = '';
    var p = el('div', 'panel');
    var head = el('div', 'enter-head');
    var txt = el('div', 'enter-head-txt');
    txt.appendChild(el('span', 'eyebrow', esc(t('enter.eyebrow'))));
    txt.appendChild(el('h1', 'rtitle', esc(m.title) + ' <span style="color:var(--ink-soft);font-size:.6em;font-weight:600">' + esc(t('enter.by', { a: m.author })) + '</span>'));
    if (c.hook) txt.appendChild(el('p', 'lead', esc(c.hook)));

    var pills = el('div', 'pill-row');
    [['grades', m.grades], ['genre', m.genre], ['time', m.time]].forEach(function (x) {
      if (x[1]) pills.appendChild(el('span', 'pill', esc(x[1])));
    });
    if (m.spoiler) pills.appendChild(el('span', 'pill warn', esc(t('enter.spoiler') + ': ' + m.spoiler)));
    if (m.rights) pills.appendChild(el('span', 'pill', esc(m.rights)));
    txt.appendChild(pills);
    head.appendChild(txt);

    // Optional hero image in the upper-right of Enter the Story. URLs/paths are
    // language-neutral, so fall back to the English meta for translations.
    var enMeta0 = (CONTENT.en && CONTENT.en.meta) || {};
    var hero = m.hero || enMeta0.hero;
    if (hero) {
      var fig = el('div', 'enter-hero');
      var img = document.createElement('img');
      img.src = hero; img.alt = m.heroAlt || m.title || '';
      img.loading = 'lazy';
      img.addEventListener('error', function () {
        fig.classList.add('ph');
        fig.innerHTML = '<span>' + esc(t('relic.placeholder')) + '</span><small>' + esc(hero) + '</small>';
      });
      fig.appendChild(img);
      head.appendChild(fig);
    }
    p.appendChild(head);

    var g2 = el('div', 'grid2');
    var access = el('div', 'note');
    access.innerHTML = '<strong>' + esc(t('enter.access')) + ':</strong> ' + esc(m.textAccess || '') +
      (m.copyright ? '<br><strong>' + esc(t('enter.copyright')) + ':</strong> ' + esc(m.copyright) : '');
    g2.appendChild(access);
    var cnote = el('div', 'note');
    cnote.innerHTML = '<strong>' + esc(t('enter.contentReview')) + ':</strong> ' + esc(m.contentNote || t('enter.contentDefault'));
    g2.appendChild(cnote);
    p.appendChild(g2);

    // Copyright / independent-companion disclaimer (used by copyrighted-work rooms).
    var disclaimer = m.disclaimer || enMeta0.disclaimer;
    if (disclaimer) { p.appendChild(el('div', 'disclaimer', esc(disclaimer))); }
    root.appendChild(p);

    // Read & Listen — free public-domain full text + audiobook.
    // URLs are language-neutral, so fall back to the English meta if a translation
    // pack predates these fields (labels still come from the translated UI).
    var enMeta = (CONTENT.en && CONTENT.en.meta) || {};
    var gutenberg = m.gutenberg || enMeta.gutenberg;
    var audio = m.audio || enMeta.audio;
    var aiAudio = m.aiAudio || enMeta.aiAudio;
    // Older and newly added public-domain rooms may predate explicit resource URLs.
    // Never turn a missing resource into a search link: show a clear unavailable
    // state unless the room records a verified direct URL.
    var rightsText = String(m.rights || enMeta.rights || '');
    var isPublicDomain = /public domain/i.test(rightsText) && !/copyrighted|licensed/i.test(rightsText);
    // Use a translated key if present, else a default string — so a new pillbox works
    // in every language without editing all lang packs.
    function tf(key, fallback){ var s = t(key); return (s && s !== key) ? s : fallback; }
    if (gutenberg || audio || aiAudio || isPublicDomain) {
      var pr = el('div', 'panel');
      pr.appendChild(el('span', 'eyebrow', esc(t('enter.readListen'))));
      pr.appendChild(el('h2', 'stitle', esc(t('enter.readListenTitle'))));
      pr.appendChild(el('p', 'lead', esc(t('enter.readListenNote'))));
      var row = el('div', 'btn-row');
      function resource(url, icon, available, unavailable) {
        if (url) {
          var a = el('a', 'btn ghost'); a.href = url; a.target = '_blank';
          a.rel = 'noopener noreferrer'; a.innerHTML = icon + ' ' + esc(available);
          row.appendChild(a);
        } else {
          var span = el('span', 'btn ghost'); span.setAttribute('aria-disabled', 'true');
          span.style.opacity = '.68'; span.style.cursor = 'not-allowed';
          span.innerHTML = icon + ' ' + esc(unavailable + ' — ' + tf('enter.notAvailable', 'Not available.'));
          row.appendChild(span);
        }
      }
      resource(gutenberg, '📖', t('enter.read'), tf('enter.gutenbergName', 'Project Gutenberg text'));
      resource(audio, '🎧', t('enter.listen'), tf('enter.librivoxName', 'LibriVox audio'));
      resource(aiAudio, '🤖', tf('enter.aiListen', 'Listen — AI narration'), tf('enter.gutenbergAudioName', 'Project Gutenberg Audiobooks'));
      pr.appendChild(row);
      var note2 = el('div', 'note'); note2.style.marginTop = '10px'; note2.textContent = t('enter.readAloud'); pr.appendChild(note2);
      if (aiAudio) { var note3 = el('div', 'note'); note3.style.marginTop = '6px'; note3.textContent = tf('enter.aiNote', 'AI-generated narration of the public-domain text (Project Gutenberg, via an open AI reading). It may contain reading errors — preview before assigning.'); pr.appendChild(note3); }
      root.appendChild(pr);
    }

    // learning goals
    var pg = el('div', 'panel');
    pg.appendChild(el('h2', 'stitle', esc(t('enter.goals'))));
    var ul = el('ul', 'ticks');
    (c.goals || []).forEach(function (g) { ul.appendChild(el('li', null, esc(g))); });
    pg.appendChild(ul);
    root.appendChild(pg);

    // reading stages
    if (c.stages) {
      var ps = el('div', 'panel');
      ps.appendChild(el('h2', 'stitle', esc(t('enter.stages'))));
      ['before', 'during', 'after'].forEach(function (st) {
        if (!c.stages[st]) return;
        ps.appendChild(el('h3', null, esc(t('enter.stage.' + st))));
        var u = el('ul', 'ticks');
        c.stages[st].forEach(function (x) { u.appendChild(el('li', null, esc(x))); });
        ps.appendChild(u);
      });
      root.appendChild(ps);
    }

    // ACE cards
    if (c.ace) {
      var pa = el('div', 'panel');
      pa.appendChild(el('span', 'eyebrow', esc(t('enter.aceEyebrow'))));
      pa.appendChild(el('h2', 'stitle', esc(t('enter.ace'))));
      pa.appendChild(el('p', 'lead', esc(t('enter.aceIntro'))));
      var cards = el('div', 'ace-cards');
      ['articulate', 'connect', 'extend'].forEach(function (k) {
        var a = c.ace[k]; if (!a) return;
        var card = el('div', 'ace-card');
        card.innerHTML = '<div class="k">' + esc(t('ace.' + k)) + '</div>' +
          '<div class="goal">' + esc(a.goal) + '</div>' +
          '<div class="pr">' + esc(a.prompt) + '</div>';
        cards.appendChild(card);
      });
      pa.appendChild(cards);
      var tip = el('div', 'note'); tip.innerHTML = '<strong>' + esc(t('genai.rule')) + '</strong>';
      pa.appendChild(tip);
      root.appendChild(pa);
    }
    markDone('enter');
  }

  /* ---------- Vocabulary ---------- */
  function renderVocab(root) {
    var c = content(); var vocab = c.vocab || [];
    root.innerHTML = '';
    var p = el('div', 'panel');
    p.appendChild(el('span', 'eyebrow', esc(t('vocab.eyebrow'))));
    p.appendChild(el('h1', 'rtitle', esc(t('vocab.title'))));
    p.appendChild(el('p', 'lead', esc(t('vocab.intro', { n: vocab.length }))));

    var modes = el('div', 'vocab-modes');
    var MODES = ['study', 'match', 'context'];
    var body = el('div');
    var cur = 'study';
    MODES.forEach(function (mo) {
      var b = el('button', 'chip'); b.type = 'button'; b.textContent = t('vocab.mode.' + mo);
      b.setAttribute('aria-pressed', mo === cur ? 'true' : 'false');
      b.addEventListener('click', function () {
        cur = mo;
        modes.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        draw();
      });
      modes.appendChild(b);
    });
    p.appendChild(modes); p.appendChild(body); root.appendChild(p);

    function draw() {
      body.innerHTML = '';
      if (cur === 'study') {
        vocab.forEach(function (v) {
          var card = el('div', 'vcard');
          card.innerHTML = '<div class="term">' + esc(v.term) + '</div>' +
            '<div class="def">' + esc(v.def) + '</div>' +
            (v.example ? '<div class="ex">✓ ' + esc(t('vocab.example')) + ': ' + esc(v.example) + '</div>' : '') +
            (v.nonexample ? '<div class="ex">✗ ' + esc(t('vocab.nonexample')) + ': ' + esc(v.nonexample) + '</div>' : '');
          body.appendChild(card);
        });
      } else if (cur === 'match') { drawMatch(); }
      else { drawContext(); }
    }

    function drawMatch() {
      var wrap = el('div');
      wrap.appendChild(el('p', 'lead', esc(t('vocab.matchHint'))));
      var grid = el('div', 'match-grid');
      var left = el('div', 'match-col'), right = el('div', 'match-col');
      left.appendChild(el('h3', null, esc(t('vocab.terms'))));
      right.appendChild(el('h3', null, esc(t('vocab.defs'))));
      var pick = null, matched = 0;
      vocab.forEach(function (v, i) {
        var tb = el('button', 'tile'); tb.type = 'button'; tb.textContent = v.term; tb.dataset.i = i;
        tb.addEventListener('click', function () {
          if (tb.classList.contains('matched')) return;
          left.querySelectorAll('.tile').forEach(function (x) { if (!x.classList.contains('matched')) x.setAttribute('aria-pressed', 'false'); });
          tb.setAttribute('aria-pressed', 'true'); pick = i;
        });
        left.appendChild(tb);
      });
      shuffle(vocab.map(function (_, i) { return i; })).forEach(function (i) {
        var v = vocab[i];
        var db = el('button', 'tile'); db.type = 'button'; db.textContent = v.def; db.dataset.i = i;
        db.addEventListener('click', function () {
          if (db.classList.contains('matched') || pick == null) return;
          if (pick === i) {
            db.classList.add('matched');
            left.querySelector('.tile[aria-pressed="true"]').classList.add('matched');
            left.querySelector('.tile[aria-pressed="true"]').setAttribute('aria-pressed', 'false');
            pick = null; matched++;
            if (matched === vocab.length) { fb.className = 'feedback ok show'; fb.textContent = t('vocab.matchDone'); markDone('vocab'); }
          } else {
            db.classList.add('wrong'); setTimeout(function () { db.classList.remove('wrong'); }, 500);
          }
        });
        right.appendChild(db);
      });
      grid.appendChild(left); grid.appendChild(right); wrap.appendChild(grid);
      var fb = el('div', 'feedback'); wrap.appendChild(fb);
      body.appendChild(wrap);
    }

    function drawContext() {
      var items = vocab.filter(function (v) { return v.context; });
      if (!items.length) { body.appendChild(el('p', 'lead', esc(t('vocab.noContext')))); return; }
      items.forEach(function (v, i) {
        var q = el('div', 'qblock');
        q.innerHTML = '<div class="qlabel">' + esc(t('vocab.contextLabel')) + '</div>' +
          '<div class="qtext">' + esc(v.context.replace(v.term, '_____')) + '</div>';
        var opts = shuffle([v.term].concat((v.distractors || items.filter(function (x) { return x !== v; }).slice(0, 3).map(function (x) { return x.term; }))));
        var box = el('div', 'opts');
        opts.forEach(function (o) {
          var lab = el('label', 'opt');
          lab.innerHTML = '<input type="radio" name="ctx' + i + '"><span>' + esc(o) + '</span>';
          lab.querySelector('input').addEventListener('change', function () {
            box.querySelectorAll('.opt').forEach(function (x) { x.classList.remove('correct', 'incorrect'); });
            lab.classList.add(o === v.term ? 'correct' : 'incorrect');
          });
          box.appendChild(lab);
        });
        q.appendChild(box); body.appendChild(q);
      });
    }
    draw();
  }

  /* ---------- Relic Room ---------- */
  function renderRelic(root) {
    var c = content(); var arts = (c.relic && c.relic.artifacts) || [];
    root.innerHTML = '';
    var p = el('div', 'panel');
    p.appendChild(el('span', 'eyebrow', esc(t('relic.eyebrow'))));
    p.appendChild(el('h1', 'rtitle', esc((c.relic && c.relic.name) || t('relic.title'))));
    p.appendChild(el('p', 'lead', esc((c.relic && c.relic.intro) || '')));
    var grid = el('div', 'relic-grid');
    var detail = el('div'); detail.id = 'artifact-detail';
    arts.forEach(function (a, i) {
      var card = el('div', 'relic-card' + (state.done['relic.' + a.id] ? ' done' : ''));
      card.setAttribute('role', 'button'); card.tabIndex = 0;
      card.innerHTML = '<div class="thumb">' + (a.image ? '<img src="' + esc(a.image) + '" alt="" onerror="this.style.display=\'none\'">' : '🗝️') + '</div>' +
        '<div class="nm">' + esc(a.name) + '</div>' +
        '<div class="st">' + esc(state.done['relic.' + a.id] ? t('relic.reviewed') : t('relic.investigate')) + '</div>';
      function open() {
        openArtifact(a, i, detail);
        grid.querySelectorAll('.relic-card').forEach(function (x) { x.classList.remove('active'); });
        card.classList.add('active');
        // Make the click visibly "do something": bring the opened artifact into view and focus it.
        var h = detail.querySelector('.stitle');
        if (h) { h.setAttribute('tabindex', '-1'); }
        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        try { detail.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); } catch (_) { try { detail.scrollIntoView(); } catch (__) {} }
        if (h) { try { h.focus({ preventScroll: true }); } catch (_) { h.focus(); } }
      }
      card.addEventListener('click', open);
      card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
      grid.appendChild(card);
    });
    p.appendChild(grid); root.appendChild(p); root.appendChild(detail);
    if (arts[0]) openArtifact(arts[0], 0, detail);
  }

  function openArtifact(a, i, host) {
    host.innerHTML = '';
    var p = el('div', 'panel');
    var layout = el('div', 'artifact');
    var frame = el('div', 'frame');
    if (a.image) frame.innerHTML = '<img src="' + esc(a.image) + '" alt="' + esc(a.alt || a.name) + '" onerror="this.parentNode.innerHTML=\'<div class=&quot;ph&quot;>' + esc(t('relic.placeholder')) + '<small>' + esc(a.image) + '</small></div>\'">';
    else frame.innerHTML = '<div class="ph">' + esc(t('relic.placeholder')) + '<small>' + esc('images/' + a.id + '.webp') + '</small></div>';
    var info = el('div');
    info.appendChild(el('span', 'eyebrow', esc(t('relic.artifact', { n: i + 1 }))));
    info.appendChild(el('h2', 'stitle', esc(a.name)));
    var cl = el('ul', 'clues');
    (a.clues || []).forEach(function (x) { cl.appendChild(el('li', null, esc(x))); });
    info.appendChild(cl);
    layout.appendChild(frame); layout.appendChild(info); p.appendChild(layout);

    // three MCQs
    var form = el('div');
    var qs = [
      { key: 'identify', label: t('relic.q.identify'), opts: a.identify },
      { key: 'purpose', label: t('relic.q.purpose'), opts: a.purpose },
      { key: 'significance', label: t('relic.q.significance'), opts: a.significance }
    ];
    var answers = {};
    qs.forEach(function (q, qi) {
      if (!q.opts) return;
      var block = el('div', 'qblock');
      block.innerHTML = '<div class="qlabel">' + esc(q.label) + '</div><div class="qtext">' + esc(q.opts.q || '') + '</div>';
      var choices = q.opts.choices || q.opts; // choices array, index 0 correct
      var order = shuffle(choices.map(function (_, k) { return k; }));
      var box = el('div', 'opts');
      order.forEach(function (k) {
        var lab = el('label', 'opt');
        lab.innerHTML = '<input type="radio" name="r' + a.id + qi + '"><span>' + esc(choices[k]) + '</span>';
        lab.querySelector('input').addEventListener('change', function () { answers[q.key] = k; });
        box.appendChild(lab);
      });
      block.appendChild(box); form.appendChild(block);
    });
    p.appendChild(form);

    var fb = el('div', 'feedback');
    var reveal = el('div'); reveal.style.marginTop = '10px';
    var btn = el('button', 'btn primary'); btn.type = 'button'; btn.textContent = t('relic.check');
    btn.addEventListener('click', function () {
      var need = qs.filter(function (q) { return q.opts; }).length;
      if (Object.keys(answers).length < need) { fb.className = 'feedback no show'; fb.textContent = t('relic.answerAll'); return; }
      var correct = qs.filter(function (q) { return q.opts && answers[q.key] === 0; }).length;
      fb.className = 'feedback ' + (correct === need ? 'ok' : 'no') + ' show';
      fb.textContent = t('relic.scored', { c: correct, m: need });
      // reveal
      reveal.innerHTML = '<div class="note"><strong>' + esc(t('relic.reveals')) + ':</strong> ' + esc(a.reveals || '') +
        '<br><strong>' + esc(t('relic.conceals')) + ':</strong> ' + esc(a.conceals || '') + '</div>';
      var ace = el('div', 'qblock');
      ace.innerHTML = '<div class="qlabel">' + esc(t('relic.aceLabel')) + '</div><div class="qtext">' + esc(a.ace || t('relic.aceDefault')) + '</div>' +
        '<textarea rows="3" placeholder="' + esc(t('relic.acePlaceholder')) + '"></textarea>';
      reveal.appendChild(ace);
      markDone('relic.' + a.id);
      // whole section done when all artifacts checked
      var all = (content().relic.artifacts || []).every(function (x) { return state.done['relic.' + x.id]; });
      if (all) markDone('relic');
    });
    p.appendChild(fb); p.appendChild(btn); p.appendChild(reveal);
    host.appendChild(p);
  }

  /* ---------- CTOB ---------- */
  function renderCtob(root) {
    var c = content(); var locks = (c.ctob && c.ctob.locks) || [];
    root.innerHTML = '';
    var p = el('div', 'panel');
    p.appendChild(el('span', 'eyebrow', esc(t('ctob.eyebrow'))));
    p.appendChild(el('h1', 'rtitle', esc((c.ctob && c.ctob.name) || t('ctob.title'))));
    p.appendChild(el('p', 'lead', esc((c.ctob && c.ctob.intro) || '')));
    var solvedCount = 0;
    var status = el('div', 'arcade-status');
    locks.forEach(function (lk, i) { p.appendChild(buildLock(lk, i, onSolve)); });
    function onSolve() {
      solvedCount = locks.filter(function (_, i) { return state['ctobLock.' + ROOM_ID + i]; }).length;
      status.textContent = t('ctob.progress', { n: solvedCount, total: locks.length });
      if (solvedCount === locks.length) { status.textContent = t('ctob.done'); markDone('ctob'); }
    }
    p.appendChild(status); root.appendChild(p);
    onSolve();
  }

  function buildLock(lk, i, onSolve) {
    var wrap = el('div', 'lock');
    var solvedKey = 'ctobLock.' + ROOM_ID + i;
    var head = el('div', 'lhead');
    head.innerHTML = '<strong>' + esc(t('ctob.lock', { n: i + 1 })) + '</strong><span class="ltype">' + esc(t('lock.' + lk.type)) + '</span>';
    wrap.appendChild(head);
    wrap.appendChild(el('p', null, '<b>' + esc(lk.prompt) + '</b>'));
    if (lk.evidence) { var ev = el('ul', 'clues'); lk.evidence.forEach(function (x) { ev.appendChild(el('li', null, esc(x))); }); wrap.appendChild(ev); }
    var fb = el('div', 'feedback');

    function solved() { wrap.classList.add('solved'); fb.className = 'feedback ok show'; fb.textContent = t('ctob.correct'); state[solvedKey] = true; save(); onSolve(); }
    if (state[solvedKey]) { wrap.classList.add('solved'); }

    if (lk.type === 'digit' || lk.type === 'word') {
      var inp = el('input', 'txt' + (lk.type === 'digit' ? ' digit-in' : '')); inp.type = 'text';
      inp.setAttribute('inputmode', lk.type === 'digit' ? 'numeric' : 'text');
      inp.placeholder = t('ctob.enter');
      var b = el('button', 'btn primary'); b.type = 'button'; b.textContent = t('ctob.check'); b.style.marginTop = '8px';
      b.addEventListener('click', function () {
        var val = (inp.value || '').trim().toLowerCase();
        if (val === String(lk.answer).toLowerCase()) solved();
        else { fb.className = 'feedback no show'; fb.textContent = t('ctob.wrong'); }
      });
      wrap.appendChild(inp); wrap.appendChild(b);
    } else if (lk.type === 'mc') {
      var order = shuffle(lk.options.map(function (_, k) { return k; })); // index 0 correct
      var box = el('div', 'opts'); var chosen = -1;
      order.forEach(function (k) {
        var lab = el('label', 'opt');
        lab.innerHTML = '<input type="radio" name="lk' + i + '"><span>' + esc(lk.options[k]) + '</span>';
        lab.querySelector('input').addEventListener('change', function () { chosen = k; });
        box.appendChild(lab);
      });
      var b2 = el('button', 'btn primary'); b2.type = 'button'; b2.textContent = t('ctob.check'); b2.style.marginTop = '8px';
      b2.addEventListener('click', function () { if (chosen === 0) solved(); else { fb.className = 'feedback no show'; fb.textContent = t('ctob.wrong'); } });
      wrap.appendChild(box); wrap.appendChild(b2);
    } else if (lk.type === 'sequence') {
      var orderState = shuffle(lk.items.map(function (_, k) { return k; })); // correct order = 0,1,2...
      // never start a sequence lock already solved
      var tries = 0;
      while (lk.items.length > 1 && orderState.every(function (k, pos) { return k === pos; }) && tries++ < 8) {
        orderState = shuffle(lk.items.map(function (_, k) { return k; }));
      }
      var list = el('ul', 'seq-list');
      function drawSeq() {
        list.innerHTML = '';
        orderState.forEach(function (k, pos) {
          var li = el('li', 'seq-item'); li.innerHTML = '<span>' + esc(lk.items[k]) + '</span>';
          var mv = el('span', 'mv');
          var up = el('button', 'mvbtn'); up.type = 'button'; up.textContent = '↑'; up.setAttribute('aria-label', t('seq.up'));
          var dn = el('button', 'mvbtn'); dn.type = 'button'; dn.textContent = '↓'; dn.setAttribute('aria-label', t('seq.down'));
          up.disabled = pos === 0; dn.disabled = pos === orderState.length - 1;
          up.addEventListener('click', function () { var tmp = orderState[pos - 1]; orderState[pos - 1] = orderState[pos]; orderState[pos] = tmp; drawSeq(); });
          dn.addEventListener('click', function () { var tmp = orderState[pos + 1]; orderState[pos + 1] = orderState[pos]; orderState[pos] = tmp; drawSeq(); });
          mv.appendChild(up); mv.appendChild(dn); li.appendChild(mv); list.appendChild(li);
        });
      }
      drawSeq();
      var b3 = el('button', 'btn primary'); b3.type = 'button'; b3.textContent = t('ctob.check');
      b3.addEventListener('click', function () { if (orderState.every(function (k, pos) { return k === pos; })) solved(); else { fb.className = 'feedback no show'; fb.textContent = t('ctob.wrong'); } });
      wrap.appendChild(list); wrap.appendChild(b3);
    }

    // progressive hints
    if (lk.hints && lk.hints.length) {
      var hb = el('div', 'hintbox'); var shown = 0;
      var hbtn = el('button', 'copybtn'); hbtn.type = 'button'; hbtn.textContent = t('ctob.hint'); hbtn.style.marginTop = '8px';
      var hbox = el('div');
      hbtn.addEventListener('click', function () { if (shown < lk.hints.length) { var h = el('div', 'hint show', esc(lk.hints[shown])); hbox.appendChild(h); shown++; } if (shown >= lk.hints.length) hbtn.disabled = true; });
      hb.appendChild(hbtn); hb.appendChild(hbox); wrap.appendChild(hb);
    }
    wrap.appendChild(fb);
    return wrap;
  }

  /* ---------- Arcade (accessible sort/reasoning game) ---------- */
  function renderArcade(root) {
    var c = content(); var g = c.arcade || {};
    root.innerHTML = '';
    var p = el('div', 'panel');
    p.appendChild(el('span', 'eyebrow', esc(t('arcade.eyebrow'))));
    p.appendChild(el('h1', 'rtitle', esc(g.name || t('arcade.title'))));
    p.appendChild(el('p', 'lead', esc(g.instruction || t('arcade.default'))));
    var board = el('div', 'arcade-board');
    var pool = el('div'); pool.id = 'arcade-pool';
    var buckets = el('div', 'buckets');
    var cards = shuffle((g.cards || []).map(function (x, i) { return i; }));
    var placed = {}; // cardIndex -> bucketId

    function bucketEl(b) {
      var d = el('div', 'bucket'); d.dataset.bucket = b.id;
      d.innerHTML = '<h3>' + esc(b.label) + '</h3><div class="drop">' + esc(t('arcade.drophere')) + '</div>';
      d.addEventListener('dragover', function (e) { e.preventDefault(); d.classList.add('over'); });
      d.addEventListener('dragleave', function () { d.classList.remove('over'); });
      d.addEventListener('drop', function (e) { e.preventDefault(); d.classList.remove('over'); var ci = e.dataTransfer.getData('text/plain'); place(parseInt(ci, 10), b.id); });
      return d;
    }
    (g.buckets || []).forEach(function (b) { buckets.appendChild(bucketEl(b)); });

    function cardEl(ci) {
      var card = g.cards[ci];
      var d = el('div', 'acard'); d.id = 'acard-' + ci; d.setAttribute('draggable', 'true'); d.tabIndex = 0;
      var send = el('span', 'sendbtns');
      (g.buckets || []).forEach(function (b) {
        var sb = el('button'); sb.type = 'button'; sb.textContent = b.short || b.label; sb.title = t('arcade.moveto', { b: b.label });
        sb.addEventListener('click', function () { place(ci, b.id); });
        send.appendChild(sb);
      });
      d.innerHTML = '<span>' + esc(card.text) + '</span>';
      d.appendChild(send);
      d.addEventListener('dragstart', function (e) { e.dataTransfer.setData('text/plain', String(ci)); });
      return d;
    }
    function place(ci, bid) {
      placed[ci] = bid;
      var cardNode = document.getElementById('acard-' + ci);
      var target = buckets.querySelector('.bucket[data-bucket="' + bid + '"]');
      if (cardNode && target) target.appendChild(cardNode);
      updateStatus();
    }
    cards.forEach(function (ci) { pool.appendChild(cardEl(ci)); });

    var status = el('div', 'arcade-status'); var meter = el('div', 'scoremeter'); meter.innerHTML = '<span></span>';
    function updateStatus() {
      var n = Object.keys(placed).length, total = (g.cards || []).length;
      status.textContent = t('arcade.placedn', { n: n, total: total });
    }
    var checkBtn = el('button', 'btn primary'); checkBtn.type = 'button'; checkBtn.textContent = t('arcade.check');
    var replayBtn = el('button', 'btn ghost'); replayBtn.type = 'button'; replayBtn.textContent = t('arcade.replay');
    var fb = el('div', 'feedback');
    checkBtn.addEventListener('click', function () {
      var total = (g.cards || []).length; if (Object.keys(placed).length < total) { fb.className = 'feedback no show'; fb.textContent = t('arcade.placeAll'); return; }
      var correct = 0;
      (g.cards || []).forEach(function (card, ci) {
        var node = document.getElementById('acard-' + ci);
        var right = placed[ci] === card.bucket;
        if (right) correct++;
        if (node) {
          node.classList.remove('ok', 'err'); node.classList.add(right ? 'ok' : 'err');
          if (card.why && !node.querySelector('.whyline')) { var w = el('div', 'whyline'); w.style.cssText = 'font-weight:600;font-size:.8rem;margin-top:4px'; w.textContent = (right ? '✓ ' : '✗ ') + card.why; node.appendChild(w); }
        }
      });
      var pct = Math.round(correct / total * 100);
      meter.querySelector('span').style.width = pct + '%';
      fb.className = 'feedback ' + (correct === total ? 'ok' : 'no') + ' show';
      fb.textContent = t('arcade.result', { c: correct, total: total });
      if (correct === total) markDone('arcade');
    });
    replayBtn.addEventListener('click', function () { renderArcade(root); });
    board.appendChild(el('h3', null, esc(t('arcade.cards'))));
    board.appendChild(pool); board.appendChild(buckets); board.appendChild(status); board.appendChild(meter);
    p.appendChild(board);
    var row = el('div', 'btn-row'); row.appendChild(checkBtn); row.appendChild(replayBtn); p.appendChild(row); p.appendChild(fb);
    if (g.followup) { var f = el('div', 'note'); f.style.marginTop = '12px'; f.innerHTML = '<strong>' + esc(t('arcade.followup')) + ':</strong> ' + esc(g.followup); p.appendChild(f); }
    root.appendChild(p);
    updateStatus();
  }

  /* ---------- Analysis ---------- */
  function renderAnalysis(root) {
    var c = content(); var a = c.analysis || {};
    root.innerHTML = '';
    var p = el('div', 'panel');
    p.appendChild(el('span', 'eyebrow', esc(t('analysis.eyebrow'))));
    p.appendChild(el('h1', 'rtitle', esc(t('analysis.title'))));
    p.appendChild(el('p', 'lead', esc(t('analysis.intro'))));

    var answers = {};
    (a.mcq || []).forEach(function (q, i) {
      var block = el('div', 'qblock');
      block.innerHTML = '<div class="qlabel">' + esc(t('analysis.mc', { n: i + 1 })) + '</div><div class="qtext">' + esc(q.q) + '</div>';
      var order = shuffle(q.options.map(function (_, k) { return k; })); // index 0 correct
      var box = el('div', 'opts');
      order.forEach(function (k) {
        var lab = el('label', 'opt');
        lab.innerHTML = '<input type="radio" name="mc' + i + '"><span>' + esc(q.options[k]) + '</span>';
        lab.querySelector('input').addEventListener('change', function () { answers[i] = k; block._sel = lab; block._correctText = q.options[0]; });
        box.appendChild(lab);
      });
      block.appendChild(box);
      if (q.why) { var wby = el('div', 'feedback'); wby.dataset.why = q.why; block.appendChild(wby); }
      p.appendChild(block);
    });
    var fb = el('div', 'feedback');
    var check = el('button', 'btn primary'); check.type = 'button'; check.textContent = t('analysis.check');
    check.addEventListener('click', function () {
      var mcq = a.mcq || []; if (Object.keys(answers).length < mcq.length) { fb.className = 'feedback no show'; fb.textContent = t('analysis.answerAll'); return; }
      var correct = 0;
      mcq.forEach(function (q, i) {
        var block = p.querySelectorAll('.qblock')[i];
        block.querySelectorAll('.opt').forEach(function (o) { o.classList.remove('correct', 'incorrect'); });
        var chosenLabel = Array.prototype.filter.call(block.querySelectorAll('.opt'), function (o) { return o.querySelector('input').checked; })[0];
        if (answers[i] === 0) { correct++; if (chosenLabel) chosenLabel.classList.add('correct'); }
        else if (chosenLabel) chosenLabel.classList.add('incorrect');
        var wby = block.querySelector('.feedback[data-why]');
        if (wby) { wby.className = 'feedback ' + (answers[i] === 0 ? 'ok' : 'no') + ' show'; wby.textContent = wby.dataset.why; }
      });
      fb.className = 'feedback ' + (correct === mcq.length ? 'ok' : 'no') + ' show';
      fb.textContent = t('analysis.score', { c: correct, total: mcq.length });
      if (correct >= Math.ceil(mcq.length * 0.6)) markDone('analysis');
    });
    p.appendChild(check); p.appendChild(fb); root.appendChild(p);

    // short responses + paragraph + ACE reflection
    var ps = el('div', 'panel');
    ps.appendChild(el('h2', 'stitle', esc(t('analysis.written'))));
    ps.appendChild(el('p', 'lead', esc(t('analysis.writtenIntro'))));
    (a.short || []).forEach(function (q, i) {
      ps.appendChild(el('label', 'fld', esc(t('analysis.short', { n: i + 1 })) + ' — ' + esc(q)));
      ps.appendChild(el('textarea', null)).setAttribute('rows', '3');
    });
    if (a.paragraph) { ps.appendChild(el('label', 'fld', esc(t('analysis.paragraph')) + ' — ' + esc(a.paragraph))); ps.appendChild(el('textarea', null)).setAttribute('rows', '5'); }
    if (a.aceReflection) { ps.appendChild(el('label', 'fld', esc(t('analysis.aceReflection')) + ' — ' + esc(a.aceReflection))); ps.appendChild(el('textarea', null)).setAttribute('rows', '4'); }
    var noteEl = el('div', 'note'); noteEl.textContent = t('analysis.localNote'); ps.appendChild(noteEl);
    root.appendChild(ps);
  }

  /* ---------- Extend ---------- */
  function renderExtend(root) {
    var c = content(); var e = c.extend || {};
    root.innerHTML = '';
    var p = el('div', 'panel');
    p.appendChild(el('span', 'eyebrow', esc(t('extend.eyebrow'))));
    p.appendChild(el('h1', 'rtitle', esc(e.name || t('extend.title'))));
    p.appendChild(el('p', 'lead', esc(e.prompt || '')));
    if (e.format) { var f = el('div', 'note'); f.innerHTML = '<strong>' + esc(t('extend.format')) + ':</strong> ' + esc(e.format); p.appendChild(f); }
    var fields = [
      ['evidence', t('extend.evidence')],
      ['transfers', t('extend.transfers')],
      ['changes', t('extend.changes')],
      ['breaks', t('extend.breaks')],
      ['response', t('extend.response')]
    ];
    fields.forEach(function (fl) {
      p.appendChild(el('label', 'fld', esc(fl[1])));
      p.appendChild(el('textarea', null)).setAttribute('rows', '3');
    });
    var note = el('div', 'note'); note.textContent = t('extend.localNote'); p.appendChild(note);
    root.appendChild(p);
    markDone('extend');
  }

  /* ---------- Gen AI Thinking Partner ---------- */
  function renderGenai(root) {
    var c = content();
    root.innerHTML = '';
    var p = el('div', 'panel');
    p.appendChild(el('span', 'eyebrow', esc(t('genai.eyebrow'))));
    p.appendChild(el('h1', 'rtitle', esc(t('genai.title'))));
    var rule = el('div', 'note'); rule.innerHTML = '<strong>' + esc(t('genai.rule')) + '</strong>'; p.appendChild(rule);

    var toggle = el('div', 'toggle-row');
    toggle.innerHTML = '<label class="switch"><input type="checkbox" id="genai-toggle"' + (state.genaiOn ? ' checked' : '') + '><span class="slider"></span></label>' +
      '<span><strong>' + esc(t('genai.enable')) + '</strong><br><span style="color:var(--ink-soft);font-weight:600;font-size:.85rem">' + esc(t('genai.enableNote')) + '</span></span>';
    p.appendChild(toggle);

    var warn = el('div', 'note'); warn.innerHTML = '⚠️ ' + esc(t('genai.warning')); p.appendChild(warn);

    var bodyWrap = el('div', 'genai-body' + (state.genaiOn ? '' : ' disabled')); bodyWrap.id = 'genai-body';
    // prompts
    bodyWrap.appendChild(el('h2', 'stitle', esc(t('genai.prompts'))));
    (c.genaiPrompts || []).forEach(function (pr) {
      var d = el('div', 'prompt');
      d.innerHTML = '<div class="pt">' + esc(pr.title) + '</div><div class="pc">' + esc(pr.text) + '</div>';
      var cb = el('button', 'copybtn'); cb.type = 'button'; cb.textContent = t('genai.copy');
      cb.addEventListener('click', function () {
        try { navigator.clipboard.writeText(pr.text); cb.textContent = t('genai.copied'); setTimeout(function () { cb.textContent = t('genai.copy'); }, 1500); } catch (_) {}
      });
      d.appendChild(cb); bodyWrap.appendChild(d);
    });
    // receipt
    bodyWrap.appendChild(el('h2', 'stitle', esc(t('genai.receipt'))));
    bodyWrap.appendChild(el('p', 'lead', esc(t('genai.receiptIntro'))));
    var receipt = el('div', 'receipt');
    var groups = [
      ['genai.before', ['r.first', 'r.evidence', 'r.question']],
      ['genai.during', ['r.asked', 'r.suggested']],
      ['genai.after', ['r.accepted', 'r.changed', 'r.rejected', 'r.why', 'r.textEvidence', 'r.final']]
    ];
    groups.forEach(function (grp) {
      receipt.appendChild(el('h3', null, esc(t(grp[0]))));
      grp[1].forEach(function (k) {
        receipt.appendChild(el('label', 'fld', esc(t(k))));
        receipt.appendChild(el('textarea', null)).setAttribute('rows', '2');
      });
    });
    bodyWrap.appendChild(receipt);
    var alt = el('div', 'note'); alt.innerHTML = '<strong>' + esc(t('genai.altTitle')) + ':</strong> ' + esc(t('genai.alt')); bodyWrap.appendChild(alt);
    p.appendChild(bodyWrap); root.appendChild(p);

    document.getElementById('genai-toggle').addEventListener('change', function (e) {
      state.genaiOn = e.target.checked; save();
      bodyWrap.classList.toggle('disabled', !state.genaiOn);
    });
  }

  /* ---------- Print ---------- */
  function renderPrint(root) {
    var c = content();
    root.innerHTML = '';
    var p = el('div', 'panel');
    p.appendChild(el('span', 'eyebrow', esc(t('print.eyebrow'))));
    p.appendChild(el('h1', 'rtitle', esc(t('print.title'))));
    p.appendChild(el('p', 'lead', esc(t('print.intro'))));
    var ul = el('ul', 'ticks');
    [t('print.item.vocab'), t('print.item.relic'), t('print.item.ctob'), t('print.item.analysis'), t('print.item.extend'), t('print.item.ace'), t('print.item.receipt')].forEach(function (x) { ul.appendChild(el('li', null, esc(x))); });
    p.appendChild(ul);
    var btn = el('button', 'btn primary'); btn.type = 'button'; btn.textContent = t('print.button');
    btn.addEventListener('click', function () { buildPrintArea(c); window.print(); });
    p.appendChild(btn); root.appendChild(p);
  }

  function buildPrintArea(c) {
    var area = document.getElementById('print-area'); if (!area) { area = el('div'); area.id = 'print-area'; document.body.appendChild(area); }
    var m = (c.meta || {});
    var h = '<h1 class="rtitle">' + esc(m.title) + ' — ' + esc(t('print.title')) + '</h1>';
    h += '<p class="metaline">' + esc(t('enter.by', { a: m.author })) + ' · ' + esc(m.grades || '') + '</p>';
    // vocab
    if (c.vocab) { h += '<div class="panel"><h2 class="stitle">' + esc(t('vocab.title')) + '</h2><dl>'; c.vocab.forEach(function (v) { h += '<dt style="font-weight:800">' + esc(v.term) + '</dt><dd style="margin:0 0 8px">' + esc(v.def) + '</dd>'; }); h += '</dl></div>'; }
    // relic evidence sheet
    if (c.relic && c.relic.artifacts) { h += '<div class="panel"><h2 class="stitle">' + esc(t('relic.title')) + '</h2><ol>'; c.relic.artifacts.forEach(function (a) { h += '<li style="margin-bottom:8px"><b>' + esc(a.name) + '</b><br>' + esc((a.clues || []).join(' · ')) + '<br>' + esc(t('relic.q.identify')) + ' ____________  ' + esc(t('relic.q.purpose')) + ' ____________</li>'; }); h += '</ol></div>'; }
    // ctob evidence
    if (c.ctob && c.ctob.locks) { h += '<div class="panel"><h2 class="stitle">' + esc((c.ctob.name || t('ctob.title'))) + '</h2><ol>'; c.ctob.locks.forEach(function (lk) { h += '<li style="margin-bottom:8px">' + esc(lk.prompt) + '<br>' + esc((lk.evidence || []).join(' · ')) + '<br>' + esc(t('print.answer')) + ' __________</li>'; }); h += '</ol></div>'; }
    // analysis
    if (c.analysis) { h += '<div class="panel"><h2 class="stitle">' + esc(t('analysis.title')) + '</h2><ol>'; (c.analysis.mcq || []).forEach(function (q) { h += '<li style="margin-bottom:6px">' + esc(q.q) + '<br>' + q.options.map(function (o) { return '☐ ' + esc(o); }).join('&nbsp;&nbsp;') + '</li>'; }); (c.analysis.short || []).forEach(function (q) { h += '<li style="margin-bottom:6px">' + esc(q) + '<br>______________________________</li>'; }); h += '</ol></div>'; }
    // extend + ACE organizer
    if (c.extend) { h += '<div class="panel"><h2 class="stitle">' + esc(t('extend.title')) + '</h2><p>' + esc(c.extend.prompt || '') + '</p>' +
      '<p>' + esc(t('extend.transfers')) + '<br>__________</p><p>' + esc(t('extend.changes')) + '<br>__________</p><p>' + esc(t('extend.breaks')) + '<br>__________</p></div>'; }
    // gen ai receipt
    h += '<div class="panel"><h2 class="stitle">' + esc(t('genai.receipt')) + '</h2>' +
      '<p>' + esc(t('r.first')) + '<br>__________</p><p>' + esc(t('r.asked')) + '<br>__________</p>' +
      '<p>' + esc(t('r.accepted')) + '<br>__________</p><p>' + esc(t('r.changed')) + '<br>__________</p>' +
      '<p>' + esc(t('r.rejected')) + '<br>__________</p><p>' + esc(t('r.final')) + '<br>__________</p></div>';
    area.innerHTML = h;
  }

  /* ---------- Teacher + Standards ---------- */
  function renderTeacher(root) {
    var c = content(); var tg = c.teacher || {}; var st = c.standards || {};
    root.innerHTML = '';
    var p = el('div', 'panel');
    p.appendChild(el('span', 'eyebrow', esc(t('teacher.eyebrow'))));
    p.appendChild(el('h1', 'rtitle', esc(t('teacher.title'))));
    if (tg.overview) p.appendChild(el('p', 'lead', esc(tg.overview)));

    // pathways
    var paths = el('div', 'grid2');
    (tg.pathways || defaultPathways()).forEach(function (pw) {
      var d = el('div', 'ace-card');
      d.innerHTML = '<div class="k">' + esc(pw.name) + '</div><div class="pr">' + esc(pw.time) + '</div><div style="margin-top:6px;font-weight:600;font-size:.85rem">' + esc(pw.body) + '</div>';
      paths.appendChild(d);
    });
    p.appendChild(el('h2', 'stitle', esc(t('teacher.pathways')))); p.appendChild(paths);
    root.appendChild(p);

    // standards
    var pst = el('div', 'panel');
    pst.appendChild(el('h2', 'stitle', esc(t('teacher.standards'))));
    pst.appendChild(el('p', 'lead', esc(t('teacher.standardsNote'))));
    var table = el('table', 'std-table');
    table.innerHTML = '<tr><th>' + esc(t('teacher.framework')) + '</th><th>' + esc(t('teacher.codes')) + '</th></tr>';
    [['TEKS (ELAR)', st.teks], ['ELPS', st.elps], ['Common Core ELA', st.ccss], ['CAST UDL 3.0', st.udl]].forEach(function (r) {
      if (!r[1]) return;
      var tr = el('tr');
      tr.innerHTML = '<td><b>' + esc(r[0]) + '</b></td><td>' + esc(Array.isArray(r[1]) ? r[1].join(', ') : r[1]) + '</td>';
      table.appendChild(tr);
    });
    pst.appendChild(table);
    root.appendChild(pst);

    // answer keys
    var pk = el('div', 'panel');
    pk.appendChild(el('h2', 'stitle', esc(t('teacher.answerKeys'))));
    pk.appendChild(el('p', 'lead', esc(t('teacher.answerNote'))));
    if (c.analysis && c.analysis.mcq) {
      var det = el('details', 'acc');
      det.innerHTML = '<summary>' + esc(t('analysis.title')) + '</summary>';
      var ol = el('ol');
      c.analysis.mcq.forEach(function (q) { ol.appendChild(el('li', null, '<b>' + esc(q.options[0]) + '</b>' + (q.why ? ' — ' + esc(q.why) : ''))); });
      det.appendChild(ol); pk.appendChild(det);
    }
    if (c.relic && c.relic.artifacts) {
      var det2 = el('details', 'acc');
      det2.innerHTML = '<summary>' + esc(t('relic.title')) + '</summary>';
      var ol2 = el('ol');
      c.relic.artifacts.forEach(function (a) {
        var idc = (a.identify && (a.identify.choices || a.identify)) || [];
        ol2.appendChild(el('li', null, '<b>' + esc(a.name) + '</b> — ' + esc(idc[0] || '')));
      });
      det2.appendChild(ol2); pk.appendChild(det2);
    }
    if (tg.reviewNotes && tg.reviewNotes.length) {
      var dr = el('details', 'acc');
      dr.innerHTML = '<summary>' + esc(t('teacher.reviewItems')) + '</summary>';
      var ur = el('ul', 'ticks'); tg.reviewNotes.forEach(function (x) { ur.appendChild(el('li', null, esc(x))); });
      dr.appendChild(ur); pk.appendChild(dr);
    }
    root.appendChild(pk);
    markDone('teacher');
  }
  function defaultPathways() {
    return [
      { name: t('path.quick'), time: t('path.quick.time'), body: t('path.quick.body') },
      { name: t('path.invest'), time: t('path.invest.time'), body: t('path.invest.body') },
      { name: t('path.complete'), time: t('path.complete.time'), body: t('path.complete.body') }
    ];
  }

  /* =======================================================================
     BOOT
  ======================================================================= */
  function renderAll() {
    SECTIONS.forEach(function (s) {
      var scr = document.getElementById('sec-' + s.id);
      if (scr) { try { s.render(scr); } catch (e) { scr.innerHTML = '<div class="panel">Section error: ' + esc(e.message) + '</div>'; } }
    });
    renderNav();
    // reset chrome text
    document.querySelectorAll('[data-i18n]').forEach(function (n) { var v = t(n.getAttribute('data-i18n')); if (v) n.textContent = v; });
  }

  function boot() {
    // build screen containers
    var main = document.getElementById('main');
    SECTIONS.forEach(function (s) {
      var scr = el('section', 'screen'); scr.id = 'sec-' + s.id;
      scr.setAttribute('aria-labelledby', 'nav-' + s.id);
      main.appendChild(scr);
    });
    renderAll();
    var start = (location.hash || '').replace('#', '');
    go(SECTIONS.some(function (s) { return s.id === start; }) ? start : (state.section || 'enter'));
    if (I18N) window.addEventListener('breakout-i18n:changed', function () { renderAll(); go(state.section); });
    // reset button
    var rb = document.getElementById('reset-button');
    if (rb) rb.addEventListener('click', function () {
      if (confirm(t('reset.confirm'))) { try { localStorage.removeItem(STORAGE_KEY); } catch (_) {} state = { done: {}, section: 'enter', genaiOn: false }; renderAll(); go('enter'); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
