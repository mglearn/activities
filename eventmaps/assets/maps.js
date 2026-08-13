/* History Event Maps — shared helpers + organizer renderers.
   Depends on window.BreakoutI18n (assets/i18n.js). Organizers are rendered
   as live HTML/SVG so every label is real text that reflows for 7 languages
   and switches colour<->grayscale without re-rasterizing. */
(function () {
  'use strict';
  const EM = window.EM || {};

  /* Short map-type slug used in generated PDF filenames (must match
     scripts/build-pdfs.mjs). Exposed so pages can link the pre-generated files. */
  EM.MAP_SLUG = {
    'voices-around-event': 'voices', 'history-trail': 'trail', 'cause-ripples': 'ripples',
    'people-place-change': 'people-place-change', 'turning-point': 'turning',
    'conflict-consequence': 'conflict', 'evidence-dossier': 'dossier',
    'systems-shockwave': 'shockwave', 'continuity-change': 'continuity'
  };
  /* Path to a pre-generated PDF for an activity (English). */
  EM.pdfHref = function (id, mapType, view, ink) {
    return '../downloads/' + id + '_' + (EM.MAP_SLUG[mapType] || mapType) + '_en_' + view + '_' + ink + '.pdf';
  };

  /* Merge several {en:{...},es:{...}} dictionaries into one, per language,
     so a page can combine EM_COMMON + its own strings in one register() call. */
  EM.mergeLangs = function () {
    const out = {};
    for (const dict of arguments) {
      if (!dict) continue;
      for (const lang of Object.keys(dict)) {
        out[lang] = Object.assign(out[lang] || {}, dict[lang]);
      }
    }
    return out;
  };

  /* Minimal inline stakeholder icons (decorative; aria-hidden). */
  const ICONS = {
    flag: '<path d="M5 3v18M5 4h11l-2 3 2 3H5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    crown: '<path d="M4 8l3 4 5-6 5 6 3-4v9H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    ship: '<path d="M4 14h16l-2 5H6zM12 3v11M7 9h10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    people: '<circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 20a5 5 0 0110 0M11 20a5 5 0 0110 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    dot: '<circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2"/>'
  };
  function iconSvg(name) {
    return '<svg class="sh-icon" viewBox="0 0 24 24" aria-hidden="true" style="color:var(--sh)">' + (ICONS[name] || ICONS.dot) + '</svg>';
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  /* Render the Voices Around the Event organizer into `host`.
     activity: parsed record; t: BreakoutI18n.t; opts.gray: boolean. */
  EM.renderVoices = function (host, activity, t, opts) {
    opts = opts || {};
    const glyphs = ['S1', 'S2', 'S3', 'S4', 'S5'];
    const fields = [
      ['wanted', 'f_wanted'], ['feared', 'f_feared'], ['action', 'f_action'],
      ['evidence', 'f_evidence'], ['affected', 'f_affected']
    ];

    const stakeholders = (activity.stakeholders || []).map((sh, i) => {
      const rows = fields.map(([fk, labelKey]) => {
        const ansKey = sh.teacher && sh.teacher[fk];
        const answer = ansKey ? '<span class="answer">' + esc(t(ansKey)) + '</span>' : '';
        return '<div class="field-row">' +
          '<span class="fl">' + esc(t(labelKey)) + '</span>' +
          '<span class="writeline"></span>' + answer +
          '</div>';
      }).join('');
      return '<section class="stakeholder" aria-label="' + esc(t(sh.nameKey)) + '">' +
        '<div class="sh-head">' + iconSvg(sh.icon) +
        '<span class="sh-name">' + esc(t(sh.nameKey)) + '</span>' +
        '<span class="sh-glyph" aria-hidden="true">' + glyphs[i] + '</span></div>' +
        rows + '</section>';
    }).join('');

    const ev = activity.event || {};
    const eventCore = '<div class="event-core" role="group" aria-label="' + esc(t('event_label')) + '">' +
      '<div class="elab">' + esc(t('event_label')) + '</div>' +
      '<div class="etitle">' + esc(evTitle(activity, t)) + '</div>' +
      '<div class="edate">' + esc(evDate(activity, t)) + '</div>' +
      '<div class="eplace">' + esc(evPlace(activity, t)) + '</div></div>';

    const synthesis = '<div class="synthesis" role="group" aria-label="' + esc(t('sy_title')) + '">' +
      '<h4>' + esc(t('sy_title')) + '</h4>' +
      ['sy_agree', 'sy_conflict', 'sy_missing'].map(k =>
        '<div class="sy"><div class="syq">' + esc(t(k)) + '</div><div class="writeline long"></div></div>'
      ).join('') + '</div>';

    const strip = '<div class="org-sourcestrip">' +
      (activity.sources || []).map(s => '<span class="oss">' + esc(t('src_strip')) + ' ' + s.n + '</span>').join('') +
      '</div>';

    host.innerHTML =
      '<div class="organizer' + (opts.gray ? ' gray' : '') + '">' +
      '<div class="org-frame"><div class="voices-grid">' +
      eventCore + stakeholders + synthesis +
      '</div>' + strip + '</div></div>';
  };

  // ---- Shared organizer helpers ----
  const WL = '<span class="writeline"></span>';
  function ans(t, key) { return key ? '<span class="answer">' + esc(t(key)) + '</span>' : ''; }
  // A labeled slot: field label + student writeline + teacher answer.
  function slot(t, labelKey, valueKey) {
    return '<div class="field-row">' +
      (labelKey ? '<span class="fl">' + esc(t(labelKey)) + '</span>' : '') +
      WL + ans(t, valueKey) + '</div>';
  }
  // Event title/date/place: prefer a localized dict key (BTP), else the record's
  // event object (generic activities store literals in activity.event).
  function evField(t, key, fallback) { const v = t(key); return (v === key || v === undefined) ? (fallback || '') : v; }
  function evTitle(a, t) { return evField(t, 'act_title', a.event && a.event.title); }
  function evDate(a, t) { return evField(t, 'act_date', a.event && a.event.date); }
  function evPlace(a, t) { return evField(t, 'act_place', a.event && a.event.place); }
  function eventCore(t, a) {
    return '<div class="event-core" role="group" aria-label="' + esc(t('event_label')) + '">' +
      '<div class="elab">' + esc(t('event_label')) + '</div>' +
      '<div class="etitle">' + esc(evTitle(a, t)) + '</div>' +
      '<div class="edate">' + esc(evDate(a, t)) + '</div>' +
      '<div class="eplace">' + esc(evPlace(a, t)) + '</div></div>';
  }
  function synthBox(t, titleKey, qKeys) {
    return '<div class="synthesis"><h4>' + esc(t(titleKey)) + '</h4>' +
      qKeys.map(k => '<div class="sy"><div class="syq">' + esc(t(k)) + '</div><div class="writeline long"></div></div>').join('') +
      '</div>';
  }
  function sourceStrip(t, activity) {
    return '<div class="org-sourcestrip">' +
      (activity.sources || []).map(s => '<span class="oss">' + esc(t('src_strip')) + ' ' + s.n + '</span>').join('') + '</div>';
  }
  function frame(inner, activity, t, gray, layout) {
    return '<div class="organizer ' + layout + (gray ? ' gray' : '') + '">' +
      '<div class="org-frame">' + inner + sourceStrip(t, activity) + '</div></div>';
  }

  // ---- Per-family renderers ----
  const RENDERERS = {
    'history-trail': function (host, a, t, o) {
      const d = a.mapData;
      const moments = (d.moments || []).map((k, i) =>
        '<div class="omap-box omap-accent-navy"><div class="bx-title"><span class="bx-num">' + (i + 1) + '</span>' +
        esc(t('moment')) + ' ' + (i + 1) + '</div>' + WL + ans(t, k) + '</div>' +
        (i < d.moments.length - 1 ? '<div class="omap-arrow">↓</div>' : '')
      ).join('');
      const people = '<div class="omap-box omap-accent-1"><div class="bx-title">' + esc(t('f_people_groups')) + '</div>' +
        (d.people || []).map(k => '<div class="omap-chip">' + esc(t(k)) + '</div>').join('') + '</div>';
      const inner = eventCore(t, a) +
        '<div class="lay-chain" style="margin-top:12px">' + moments + '</div>' +
        '<div class="lay-3col" style="margin-top:12px">' + people +
        '<div class="omap-box omap-accent-3"><div class="bx-title">' + esc(t('f_why_matter')) + '</div>' + WL + ans(t, d.why) + '</div>' +
        '<div class="omap-box omap-accent-4"><div class="bx-title">' + esc(t('f_still_wonder')) + '</div>' + WL + ans(t, d.question) + '</div>' +
        '</div>';
      host.innerHTML = frame(inner, a, t, o.gray, 'lay-trail');
    },

    'cause-ripples': function (host, a, t, o) {
      const d = a.mapData;
      const ring = (cls, labelKey, keys) =>
        '<div class="ring ' + cls + '"><div class="ring-lab">' + esc(t(labelKey)) + '</div><div class="ring-items">' +
        (keys || []).map(k => '<div class="omap-chip">' + WL + ans(t, k) + '</div>').join('') + '</div></div>';
      const inner =
        ring('ring-r3', 'f_longterm', d.longterm) +
        ring('ring-r2', 'f_immediate', d.immediate) +
        '<div class="ring ring-r1"><div class="ring-lab">' + esc(t('f_cause')) + '</div><div class="ring-items">' +
          (d.causes || []).map(k => '<div class="omap-chip">' + WL + ans(t, k) + '</div>').join('') + '</div>' +
          '<div style="margin-top:8px">' + eventCore(t, a) + '</div></div>' +
        '<div class="lay-3col" style="margin-top:12px">' +
          '<div class="omap-box omap-accent-4"><div class="bx-title">' + esc(t('f_affected2')) + '</div>' +
            (d.affected || []).map(k => '<div class="omap-chip">' + esc(t(k)) + '</div>').join('') + '</div>' +
          '<div class="omap-box omap-accent-navy" style="grid-column:span 2"><div class="bx-title">' + esc(t('f_mattered_most')) + '</div><div class="writeline long"></div>' + ans(t, d.matteredKey) + '</div>' +
        '</div>';
      host.innerHTML = frame(inner, a, t, o.gray, 'lay-rings');
    },

    'people-place-change': function (host, a, t, o) {
      const d = a.mapData;
      const lens = (accent, labelKey, keys) =>
        '<div class="omap-box ' + accent + '"><div class="bx-title">' + esc(t(labelKey)) + '</div>' +
        (keys || []).map(k => '<div class="field-row">' + WL + ans(t, k) + '</div>').join('') + '</div>';
      const inner = eventCore(t, a) +
        '<div class="lay-3col" style="margin-top:12px">' +
          lens('omap-accent-1', 'f_who', d.who) +
          lens('omap-accent-2', 'f_where', d.where) +
          lens('omap-accent-3', 'f_what_changed', d.changed) +
        '</div>' +
        '<div class="synthesis"><h4>' + esc(t('f_connection')) + '</h4><div class="writeline long"></div>' + ans(t, d.connectionKey) + '</div>';
      host.innerHTML = frame(inner, a, t, o.gray, 'lay-lenses');
    },

    'turning-point': function (host, a, t, o) {
      const d = a.mapData;
      const step = (labelKey, key, accent) =>
        '<div class="chain-link ' + accent + '"><div class="cl-lab">' + esc(t(labelKey)) + '</div>' + WL + ans(t, key) + '</div>';
      const flow = '<div class="lay-chain">' +
        step('f_before', d.before, 'omap-accent-1') + '<div class="omap-arrow">↓</div>' +
        step('f_pressures', d.pressures, 'omap-accent-2') + '<div class="omap-arrow">↓</div>' +
        '<div class="chain-link omap-accent-navy" style="border-width:3px"><div class="cl-lab">' + esc(t('f_turning')) + '</div><strong>' + esc(evTitle(a, t)) + '</strong> · ' + esc(evDate(a, t)) + ans(t, d.turning) + '</div>' +
        '<div class="omap-arrow">↓</div>' +
        step('f_immediate_results', d.immediate, 'omap-accent-4') + '<div class="omap-arrow">↓</div>' +
        step('f_longer_change', d.longer, 'omap-accent-5') + '</div>';
      const rail = '<div class="siderail">' +
        '<div class="omap-box omap-accent-2"><div class="bx-title">' + esc(t('f_who_pushed')) + '</div>' + WL + ans(t, d.whoPushed) + '</div>' +
        '<div class="omap-box omap-accent-3"><div class="bx-title">' + esc(t('f_who_resisted')) + '</div>' + WL + ans(t, d.whoResisted) + '</div>' +
        '<div class="omap-box omap-accent-5"><div class="bx-title">' + esc(t('f_could_differ')) + '</div>' + WL + ans(t, d.couldDiffer) + '</div>' +
        '</div>';
      const inner = '<div class="lay-turning">' + flow + rail + '</div>' +
        '<div class="synthesis"><h4>' + esc(t('f_why_turning')) + '</h4><div class="writeline long"></div>' + ans(t, d.whyKey) + '</div>';
      host.innerHTML = frame(inner, a, t, o.gray, 'lay-flow');
    },

    'conflict-consequence': function (host, a, t, o) {
      const d = a.mapData;
      const links = (d.links || []).map((lk, i) =>
        '<div class="chain-link omap-accent-' + (((i) % 5) + 1) + '"><div class="cl-lab">' + esc(t(lk.labelKey)) + '</div>' + WL + ans(t, lk.textKey) + '</div>' +
        (i < d.links.length - 1 ? '<div class="omap-arrow">↓</div>' : '')
      ).join('');
      const inner = '<div class="lay-chain">' + links + '</div>' +
        '<div class="lay-3col" style="margin-top:12px">' +
          '<div class="omap-box omap-accent-2"><div class="bx-title">' + esc(t('f_alt_branch')) + '</div>' + WL + ans(t, d.altKey) + '</div>' +
          '<div class="omap-box omap-accent-3"><div class="bx-title">' + esc(t('f_key_people')) + '</div>' +
            (d.people || []).map(k => '<div class="omap-chip">' + esc(t(k)) + '</div>').join('') + '</div>' +
          '<div class="omap-box omap-accent-navy"><div class="bx-title">' + esc(t('f_key_link')) + '</div><div class="writeline long"></div>' + ans(t, d.mostKey) + '</div>' +
        '</div>';
      host.innerHTML = frame(inner, a, t, o.gray, 'lay-chain-map');
    },

    'evidence-dossier': function (host, a, t, o) {
      const d = a.mapData;
      const card = (c, i) =>
        '<div class="omap-box omap-accent-' + ((i % 5) + 1) + '"><div class="bx-title"><span class="bx-num">' + (i + 1) + '</span>' + esc(t('f_evidence_card')) + ' ' + (i + 1) + '</div>' +
        slot(t, 'f_source', c.sourceKey) + slot(t, 'f_primsec', c.primsecKey) +
        slot(t, 'f_evidence_card', c.evidenceKey) + slot(t, 'f_why_matters', c.whyKey) +
        slot(t, 'f_reliability', c.relKey) + '</div>';
      const inner =
        '<div class="dq"><div class="fl">' + esc(t('f_question')) + '</div><strong>' + esc(t(d.questionKey)) + '</strong></div>' +
        '<div class="omap-box omap-accent-navy"><div class="bx-title">' + esc(t('f_think_know')) + '</div>' + WL + ans(t, d.knowKey) + '</div>' +
        '<div class="dossier-cards">' + (d.cards || []).map(card).join('') + '</div>' +
        '<div class="lay-3col" style="margin-top:12px">' +
          '<div class="omap-box omap-accent-2"><div class="bx-title">' + esc(t('f_conflicting')) + '</div>' + WL + ans(t, d.conflictKey) + '</div>' +
          '<div class="omap-box omap-accent-3"><div class="bx-title">' + esc(t('f_missing')) + '</div>' + WL + ans(t, d.missingKey) + '</div>' +
          '<div class="omap-box omap-accent-4"><div class="bx-title">' + esc(t('f_working_conclusion')) + '</div><div class="writeline long"></div>' + ans(t, d.conclusionMapKey) + '</div>' +
        '</div>';
      host.innerHTML = frame(inner, a, t, o.gray, 'lay-dossier');
    },

    'systems-shockwave': function (host, a, t, o) {
      const d = a.mapData;
      const path = (p, i) =>
        '<div class="omap-box omap-accent-' + ((i % 5) + 1) + '"><div class="bx-title">' + esc(t(p.labelKey)) + '</div>' +
        slot(t, 'f_immediate_effect', p.immediateKey) + slot(t, 'f_secondary_effect', p.secondaryKey) +
        slot(t, 'f_evidence2', p.evidenceKey) + '</div>';
      const inner = eventCore(t, a) +
        '<div class="paths">' + (d.paths || []).map(path).join('') + '</div>' +
        '<div class="lay-3col" style="margin-top:12px">' +
          '<div class="omap-box omap-accent-4"><div class="bx-title">' + esc(t('f_who_benefited')) + '</div>' + WL + ans(t, d.benefitedKey) + '</div>' +
          '<div class="omap-box omap-accent-5"><div class="bx-title">' + esc(t('f_who_cost')) + '</div>' + WL + ans(t, d.costKey) + '</div>' +
          '<div class="omap-box omap-accent-navy"><div class="bx-title">' + esc(t('f_greatest')) + '</div><div class="writeline long"></div>' + ans(t, d.greatestKey) + '</div>' +
        '</div>';
      host.innerHTML = frame(inner, a, t, o.gray, 'lay-shock');
    },

    'continuity-change': function (host, a, t, o) {
      const d = a.mapData;
      const col = (accent, labelKey, keys) =>
        '<div class="omap-box ' + accent + '"><div class="bx-title">' + esc(t(labelKey)) + '</div>' +
        (keys || []).map(k => '<div class="field-row">' + WL + ans(t, k) + '</div>').join('') + '</div>';
      const inner = eventCore(t, a) +
        '<div class="lay-3col" style="margin-top:12px">' +
          col('omap-accent-1', 'f_before', d.before) +
          col('omap-accent-2', 'f_during', d.during) +
          col('omap-accent-3', 'f_after', d.after) +
        '</div>' +
        '<div class="lay-3col" style="margin-top:12px">' +
          '<div class="omap-box omap-accent-4"><div class="bx-title">' + esc(t('f_changed_sig')) + '</div>' + WL + ans(t, d.sigKey) + '</div>' +
          '<div class="omap-box omap-accent-5"><div class="bx-title">' + esc(t('f_changed_grad')) + '</div>' + WL + ans(t, d.gradKey) + '</div>' +
          '<div class="omap-box omap-accent-navy"><div class="bx-title">' + esc(t('f_stayed')) + '</div>' + WL + ans(t, d.sameKey) + '</div>' +
        '</div>' +
        '<div class="synthesis"><h4>' + esc(t('f_was_turning')) + '</h4><div class="writeline long"></div>' + ans(t, d.whyKey) + '</div>';
      host.innerHTML = frame(inner, a, t, o.gray, 'lay-ledger');
    }
  };

  /* Public dispatcher: render any map family from an activity record. */
  EM.renderMap = function (host, activity, t, opts) {
    opts = opts || {};
    if (activity.mapType === 'voices-around-event') return EM.renderVoices(host, activity, t, opts);
    const r = RENDERERS[activity.mapType];
    if (r) r(host, activity, t, opts);
    else host.innerHTML = '<p class="muted">Organizer for "' + esc(activity.mapType) + '" not available.</p>';
  };

  /* Back-to-top button wiring (shared). */
  EM.wireBackToTop = function () {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    const onScroll = () => btn.classList.toggle('visible', window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    onScroll();
  };

  window.EM = EM;
})();
