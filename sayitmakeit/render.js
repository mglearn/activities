'use strict';
/* Say It, Make It — renderer. Called by build.js with RENDER=1.
 * Writes index.html (catalog) and a/<slug>.html (guided pages). */
const fs = require('fs');
const path = require('path');

module.exports = function render({ acts, STRANDS, STRAND_ORDER, esc, ROOT }) {
  const A = (ROOT && ROOT) || __dirname;
  let TR = {};
  try { TR = JSON.parse(fs.readFileSync(path.join(A, 'data', 'translations.json'), 'utf8')); } catch (e) {}
  const strandBadge = (s) => `<span class="badge b-${s}"><span class="bl">${STRANDS[s].letter}</span> ${esc(STRANDS[s].label)}</span>`;
  const skillTags = (sk) => (sk || []).map((k) => `<span class="tag">${esc(k)}</span>`).join('');

  const DEF_HARDER = 'Go one-way — no questions allowed — or cap the Describer at thirty words. Add a Messenger who cannot see either model.';
  const DEF_EASIER = 'Allow yes/no clarifying questions, agree on a shared starting piece, and let the Builder peek once before the barrier goes up.';

  /* ---------- head + chrome shared bits ---------- */
  const headCommon = (title, desc, depth, extra) => {
    const up = depth === 1 ? '../' : '';
    const extras = (extra || []).map((s) => `<script src="${up}${s}" defer></script>`).join('\n');
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${up}assets/app.css">
<script src="${up}assets/i18n.js" defer></script>
<script src="${up}assets/i18n-chrome.js" defer></script>
${extras}
<script src="${up}assets/app.js" defer></script>
</head>`;
  };

  const picker = `<div class="lang-picker" data-i18n-picker></div>`;

  /* ---------- guided page ---------- */
  function activityPage(a) {
    const st = STRANDS[a.strand];
    const tr = TR[a.num] || {};
    const enBody = { a_summary: a.summary, a_materials: a.materials || '', a_example: a.example || '', a_harder: a.harder || DEF_HARDER, a_easier: a.easier || DEF_EASIER };
    const actDict = { en: enBody };
    ['es', 'vi', 'ar', 'hi', 'ur', 'zh'].forEach((l) => { if (tr[l]) actDict[l] = tr[l]; });
    const actScript = `<script>window.SIMK_ACT=${JSON.stringify(actDict).replace(/</g, '\\u003c')}</script>`;
    const roles = ['role_describer','role_builder','role_clarifier','role_messenger','role_observer','role_checker']
      .map((k) => `<li data-i18n="${k}"></li>`).join('');
    const steps = [1,2,3,4,5,6,7].map((n) => `<li data-i18n="step_${n}"></li>`).join('');
    const refl = [1,2,3,4].map((n) => `<li data-i18n="refl_${n}"></li>`).join('');
    const standards = (a.teks.length || a.ngss.length) ? `
      <div class="std">
        ${a.teks.length ? `<div class="std-row"><span class="std-k">TEKS</span> <span>${a.teks.map(esc).join(' · ')}</span></div>` : ''}
        ${a.ngss.length ? `<div class="std-row"><span class="std-k">NGSS</span> <span>${a.ngss.map(esc).join(' · ')}</span></div>` : ''}
        <p class="std-note" data-i18n="std_note"></p>
      </div>` : `<p class="std-note" data-i18n="std_pending"></p>`;

    return `${headCommon(`${a.num}. ${a.title} — Say It, Make It`, `${a.title}: a STEAM barrier-communication activity. Describe it, build it, compare, reflect. Seven languages, print-friendly.`, 1)}
<body>
${actScript}
<div class="topbar">
  <a href="../index.html" class="backlink" data-i18n="nav_back_area">← Say It, Make It</a>
  <div class="nav-mid">${strandBadge(a.strand)}</div>
  ${picker}
</div>
<main class="wrap article" style="--accent:${st.accent}">
  <p class="eyebrow"><span data-i18n="activity_word">Activity</span> ${a.num} · <span data-i18n="strand_${a.strand}"></span></p>
  <h1>${esc(a.title)}</h1>
  <div class="art-hero"><img src="../assets/act/${a.slug}.png" alt="${esc(a.title)}" onerror="this.closest('.art-hero').style.display='none'"></div>
  <div class="metarow">
    <div><span class="mk" data-i18n="grades_lbl">Grades</span><span>${esc(a.grades)}</span></div>
    <div><span class="mk" data-i18n="subjects_lbl">STEAM</span><span>${st.icon} ${esc(st.label)}</span></div>
  </div>

  ${a.materials ? `<div class="callout mats"><span class="mk" data-i18n="materials_lbl">Materials</span> <span data-i18n="a_materials">${esc(a.materials)}</span></div>` : ''}

  <h2 data-i18n="sec_describe">What to describe</h2>
  <p class="lede" data-i18n="a_summary">${esc(a.summary)}</p>
  ${a.example ? `<p class="example"><span data-i18n="example_lbl">Example</span>: <span data-i18n="a_example">${esc(a.example)}</span></p>` : ''}

  <div class="cols">
    <section>
      <h2 data-i18n="sec_roles">Roles</h2>
      <ul class="roles">${roles}</ul>
    </section>
    <section>
      <h2 data-i18n="sec_round">How a round works</h2>
      <ol class="steps">${steps}</ol>
    </section>
  </div>

  <h2 data-i18n="sec_levers">Make it harder or easier</h2>
  <div class="levers">
    <div class="lever up"><span class="lk" data-i18n="harder_lbl">Harder</span><p data-i18n="a_harder">${esc(a.harder || DEF_HARDER)}</p></div>
    <div class="lever down"><span class="lk" data-i18n="easier_lbl">Easier</span><p data-i18n="a_easier">${esc(a.easier || DEF_EASIER)}</p></div>
  </div>

  <h2 data-i18n="sec_reflect">Reflect</h2>
  <ul class="reflect">${refl}</ul>

  ${a.skills.length ? `<h2 data-i18n="sec_skills">Skills</h2><div class="tags">${skillTags(a.skills)}</div>` : ''}

  <h2 data-i18n="sec_standards">Standards &amp; alignment</h2>
  ${standards}
  <p class="std-more no-print"><a href="../teks-correlations.html" data-i18n="teks_open">TEKS &amp; standards →</a></p>

  <div class="actions no-print">
    <button class="btn btn-primary" onclick="window.print()" data-i18n="print_btn">Print / Save as PDF</button>
    <a class="btn btn-ghost" href="../index.html" data-i18n="all_activities">All activities</a>
  </div>

  <footer><span data-i18n="footer_copy">Say It, Make It · A TCEA educator resource · CC BY 4.0 (content) · MIT (code)</span></footer>
</main>
</body>
</html>`;
  }

  /* ---------- catalog (index) ---------- */
  function indexPage() {
    const chips = ['all', ...STRAND_ORDER].map((s) =>
      s === 'all'
        ? `<button class="chip active" data-strand="all" data-i18n="filter_all">All</button>`
        : `<button class="chip" data-strand="${s}" style="--accent:${STRANDS[s].accent}"><span class="bl">${STRANDS[s].letter}</span> <span data-i18n="strand_${s}"></span></button>`
    ).join('');

    const card = (a) => `
      <a class="acard b-${a.strand}" href="a/${a.slug}.html" data-strand="${a.strand}" data-grades="${esc(a.grades)}"
         data-search="${esc((a.title + ' ' + a.summary + ' ' + (a.skills || []).join(' ') + ' ' + (a.materials || '')).toLowerCase())}">
        <div class="ac-img"><img src="assets/act/${a.slug}.png" alt="" loading="lazy" onerror="this.closest('.ac-img').style.display='none'"></div>
        <div class="ac-top"><span class="ac-num">${a.num}</span>${strandBadge(a.strand)}</div>
        <h3>${esc(a.title)}</h3>
        <p>${esc(a.summary).slice(0, 120)}${a.summary.length > 120 ? '…' : ''}</p>
        ${a.materials ? `<div class="ac-mats"><span data-i18n="materials_lbl">Materials</span>: ${esc(a.materials)}</div>` : ''}
      </a>`;

    let sections = '';
    STRAND_ORDER.forEach((s) => {
      const items = acts.filter((a) => a.strand === s);
      if (!items.length) return;
      sections += `
      <section class="strand-sec" data-strand="${s}">
        <img class="strand-banner" src="assets/strand-${s}.png" alt="" loading="lazy" onerror="this.style.display='none'">
        <h2 class="sec" style="--accent:${STRANDS[s].accent}">${STRANDS[s].icon} <span data-i18n="strand_${s}"></span> <span class="sec-n">${items.length}</span></h2>
        <div class="grid">${items.map(card).join('')}</div>
      </section>`;
    });

    return `${headCommon('Say It, Make It — STEAM barrier & communication activities', 'A STEAM library of 106 barrier / blind-build / communication activities for K–8 — describe it, build it, compare, reflect. Seven languages, print-friendly, TEKS + NGSS aligned. No logins, no data collected.', 0)}
<body>
<div class="topbar">
  <a href="../index.html" class="backlink" data-i18n="nav_back_hub">← Activities</a>
  <div class="nav-mid nav-brand" data-i18n="brand">Say It, Make It</div>
  ${picker}
</div>
<div class="wrap">
  <header class="top">
    <div class="herowrap">
      <img class="hero" src="assets/hero.png" width="1600" height="800" alt="" onerror="this.style.display='none'">
      <div class="herotitle">
        <div class="htinner">
          <span class="eyebrow" data-i18n="hero_eyebrow">A STEAM educator resource</span>
          <h1><span data-i18n="hero_t1">Say It,</span> <span class="g" data-i18n="hero_t2">Make It</span></h1>
        </div>
      </div>
    </div>
    <p class="sub" data-i18n="hero_sub">One partner describes a hidden model, drawing, pattern, or setup — using words only. The other builds it. Then compare, and talk about what made the words work. 106 STEAM activities.</p>
    <div class="tally">
      <div><div class="n">${acts.length}</div><div class="l" data-i18n="tally_activities">Activities</div></div>
      <div><div class="n">5</div><div class="l" data-i18n="tally_strands">STEAM strands</div></div>
      <div><div class="n">7</div><div class="l" data-i18n="tally_langs">Languages</div></div>
    </div>
  </header>

  <div class="controls no-print">
    <input id="q" type="search" data-i18n-placeholder="search_ph" placeholder="Search activities…" aria-label="Search" autocomplete="off">
    <div class="chips">${chips}</div>
    <div class="toolrow2">
      <button class="tbtn" id="surprise" data-i18n="tool_surprise">🎲 Surprise me</button>
      <button class="tbtn" id="assign" data-i18n="tool_roles">👥 Assign roles</button>
      <button class="tbtn" id="timer" data-i18n="tool_timer">⏱️ Round timer</button>
      <a class="tbtn tbtn-teks" href="teks-correlations.html" data-i18n="teks_open">📋 TEKS &amp; standards</a>
    </div>
    <div class="qinfo" id="qinfo" aria-live="polite"></div>
  </div>

  <div id="results">${sections}</div>
  <p class="noresults" id="noresults" hidden data-i18n="no_match">No activities match your search. Try another word or strand.</p>

  <footer><span data-i18n="footer_copy">Say It, Make It · A TCEA educator resource · CC BY 4.0 (content) · MIT (code)</span><br>
  <span data-i18n="footer_sub">Self-contained · No logins · No data collected · Seven languages · Print-friendly</span></footer>
</div>
</body>
</html>`;
  }

  /* ---------- TEKS & NGSS correlations ---------- */
  function teksPage() {
    const rowsFor = (s) => acts.filter((a) => a.strand === s).sort((x, y) => x.num - y.num).map((a) => {
      const spec = (a.ngss || []).filter((x) => !/SEP-8/.test(x));
      const focus = spec.length ? spec.map(esc).join('; ') : 'SEP-8: communicating information';
      return `<tr><td><span class="tnum">${a.num}</span> ${esc(a.title)}</td><td>${esc(a.grades)}</td><td>${focus}</td></tr>`;
    }).join('');
    let sections = '';
    STRAND_ORDER.forEach((s) => {
      const items = acts.filter((a) => a.strand === s);
      if (!items.length) return;
      const teks = (items[0].teks || []).map(esc).join(' · ');
      sections += `
      <section class="tsec">
        <h2 class="sec" style="--accent:${STRANDS[s].accent}">${STRANDS[s].icon} <span data-i18n="strand_${s}"></span> <span class="sec-n">${items.length}</span></h2>
        <p class="sec-intro"><span class="std-k">TEKS</span> ${teks}</p>
        <div class="tbl-wrap"><table>
          <thead><tr><th data-i18n="th_activity">Activity</th><th data-i18n="grades_lbl">Grades</th><th data-i18n="th_ngss">NGSS focus</th></tr></thead>
          <tbody>${rowsFor(s)}</tbody>
        </table></div>
      </section>`;
    });
    return `${headCommon('TEKS & NGSS Alignment — Say It, Make It', 'TEKS and NGSS correlations for the 106 Say It, Make It STEAM communication activities.', 0, ['assets/i18n-teks.js'])}
<body>
<div class="topbar">
  <a href="index.html" class="backlink" data-i18n="nav_back_area">← Say It, Make It</a>
  <div class="nav-mid nav-brand" data-i18n="teks_title">TEKS &amp; NGSS Alignment</div>
  ${picker}
</div>
<main class="wrap article">
  <p class="eyebrow" data-i18n="teks_eyebrow">Standards Correlation</p>
  <h1 data-i18n="teks_title">TEKS &amp; NGSS Alignment</h1>
  <p class="lede" data-i18n="teks_lede">How Say It, Make It maps to the Texas Essential Knowledge and Skills and the Next Generation Science Standards.</p>
  <div class="callout warn"><p data-i18n="teks_caveat">Verify every code against your district-adopted TEKS before formal documentation.</p></div>
  <div class="callout sep"><p data-i18n="teks_sep">Across all 106 activities — NGSS SEP-8: Obtaining, Evaluating &amp; Communicating Information.</p></div>
  ${sections}
  <div class="actions no-print">
    <button class="btn btn-primary" onclick="window.print()" data-i18n="print_btn">Print / Save as PDF</button>
    <a class="btn btn-ghost" href="index.html" data-i18n="all_activities">All activities</a>
  </div>
  <footer><span data-i18n="footer_copy">Say It, Make It · A TCEA educator resource · CC BY 4.0 (content) · MIT (code)</span></footer>
</main>
</body>
</html>`;
  }

  /* ---------- write ---------- */
  fs.mkdirSync(path.join(A, 'a'), { recursive: true });
  // clean old generated pages
  for (const f of fs.readdirSync(path.join(A, 'a'))) if (f.endsWith('.html')) fs.unlinkSync(path.join(A, 'a', f));
  acts.forEach((a) => fs.writeFileSync(path.join(A, 'a', `${a.slug}.html`), activityPage(a)));
  fs.writeFileSync(path.join(A, 'index.html'), indexPage());
  fs.writeFileSync(path.join(A, 'teks-correlations.html'), teksPage());
  console.log(`Rendered index.html + teks-correlations.html + ${acts.length} activity pages.`);
};
