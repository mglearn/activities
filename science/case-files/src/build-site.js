#!/usr/bin/env node
/* ============================================================
   CER & ACE Case Files — website builder
   Writes ../index.html from the same content.js the printables
   and decks are built from, so the page can never drift from
   the files it hands out.

     node src/build-site.js
   ============================================================ */

const fs = require('fs');
const path = require('path');
const C = require('./content.js');

const ROOT = path.join(__dirname, '..');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* Download sizes are read off disk so the page never advertises a
   stale figure after a rebuild. */
function size(file) {
  const p = path.join(ROOT, 'files', file);
  if (!fs.existsSync(p)) return '';
  const kb = fs.statSync(p).size / 1024;
  return kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.round(kb)} KB`;
}

const DOWNLOADS = [
  {
    file: 'CER_ACE_Case_Files_Teacher_Guide.pdf',
    kind: 'PDF · 9 pages',
    name: 'Teacher Guide',
    blurb: 'Prep and setup, answer keys, circulating questions, the misconception to expect, an extension for each case, the standards map, and the K–16 adaptation ladder.',
    tone: 'ink',
  },
  {
    file: 'CER_Case_Files_Student_Packet.pdf',
    kind: 'PDF · 14 pages',
    name: 'Student Packet — CER',
    blurb: 'Every case as a Page 1 investigation and a Claim–Evidence–Reasoning Page 2, with a worked density example up front.',
    tone: 'cer',
  },
  {
    file: 'ACE_Case_Files_Student_Packet.pdf',
    kind: 'PDF · 14 pages',
    name: 'Student Packet — ACE',
    blurb: 'The same five investigations with an Articulate–Connect–Extend Page 2 for reflection, connection, and transfer.',
    tone: 'ace',
  },
  {
    file: 'CER_ACE_Case_Files_Editable_Packets.pptx',
    kind: 'PowerPoint · 28 slides',
    name: 'Editable Packet Deck',
    blurb: 'Both packets as real text boxes and tables. Edit the prompts, swap the samples, or let students type their evidence and responses straight into the file.',
    tone: 'plain',
  },
  {
    file: 'CER_ACE_Case_Files_Projection_Deck.pptx',
    kind: 'PowerPoint · 20 slides',
    name: 'Projection Deck',
    blurb: 'For the board rather than the printer: one mystery at a time, the evidence to collect, the questions to ask while students work, and the debrief.',
    tone: 'plain',
  },
];

/* ---------- fragments ---------- */

const routineCards = C.ROUTINE.map((m) => `
      <li class="move">
        <span class="num">${esc(m.n)}</span>
        <h3>${esc(m.move)}</h3>
        <p>${esc(m.text)}</p>
      </li>`).join('');

const caseSections = C.CASES.map((c, i) => `
    <article class="case" id="case-${esc(c.slug)}">
      <div class="case-plate">
        <img src="assets/${esc(c.img)}" alt="${esc(c.title)} materials laid out on a tray" loading="lazy" width="1200" height="400">
        <span class="plate-tag">Case ${esc(c.n)}</span>
      </div>
      <div class="case-body">
        <p class="case-kicker">${esc(c.focus)}</p>
        <h3>${esc(c.blogHead)}</h3>
        <p class="case-mystery">${esc(c.mystery)}</p>
        ${c.blog.map((p) => `<p>${esc(p)}</p>`).join('\n        ')}
        <dl class="case-meta">
          <div><dt>Students figure out</dt><dd>${esc(c.figureOut)}</dd></div>
          <div><dt>Texas</dt><dd>${esc(c.tx)}</dd></div>
          <div><dt>NGSS</dt><dd>${esc(c.ngss)}</dd></div>
        </dl>
      </div>
    </article>`).join('');

const caseIndexRows = C.CASES.map((c) => `
        <a class="ix-row" href="#case-${esc(c.slug)}">
          <span class="ix-no">${esc(c.n)}</span>
          <span class="ix-title">${esc(c.title)}</span>
          <span class="ix-focus">${esc(c.focus)}</span>
          <span class="ix-out">${esc(c.figureOut)}</span>
        </a>`).join('');

const downloadCards = DOWNLOADS.map((d) => `
        <a class="dl ${d.tone}" href="files/${esc(d.file)}" download>
          <span class="dl-kind">${esc(d.kind)}${size(d.file) ? ` · ${size(d.file)}` : ''}</span>
          <h3>${esc(d.name)}</h3>
          <p>${esc(d.blurb)}</p>
          <span class="dl-go">Download<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v11m0 0 4-4m-4 4-4-4M4 17h12"/></svg></span>
        </a>`).join('');

const startSteps = C.QUICK_START.steps.map((s) => `
        <li><span class="num">${esc(s.n)}</span><div><h3>${esc(s.head)}</h3><p>${esc(s.text)}</p></div></li>`).join('');

const formatPanels = ['CER', 'ACE'].map((id) => {
  const F = C.FORMATS[id];
  const parts = F.sections.map((s) => `<li><b>${esc(s.n)}</b> ${esc(s.head)}</li>`).join('');
  return `
        <div class="fmt ${id.toLowerCase()}">
          <span class="fmt-id">${esc(id)}</span>
          <h3>${esc(F.name)}</h3>
          <p>${esc(F.use)}</p>
          <ol class="fmt-steps">${parts}</ol>
        </div>`;
}).join('');

const searchKeywords = [
  'cer ace case files hands-on printable science packets claim evidence reasoning',
  'articulate connect extend mystery mixture density deception state detectives magnet mimic',
  'conductor clues separation mixtures magnetism conductivity melting condensation evaporation',
  'grades 5 6 7 8 middle school physical science TEKS NGSS teacher guide answer key rubric',
  'worksheet lab investigation evidence reasoning misconception powerpoint editable projection deck',
].join(' ');

/* ---------- page ---------- */

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="referrer" content="no-referrer">
<title>CER &amp; ACE Case Files — Hands-On Science Cases</title>
<meta name="description" content="CER &amp; ACE Case Files: five hands-on science cases for grades 5–8 with a Claim–Evidence–Reasoning or Articulate–Connect–Extend response page. Free teacher guide, student packets, and editable PowerPoint decks. No logins, no data collected.">
<meta name="keywords" content="${esc(searchKeywords)}">
<meta property="og:title" content="CER &amp; ACE Case Files — Hands-On Science Cases">
<meta property="og:description" content="Five hands-on cases in matter, energy, magnetism, and conductivity. One reasoning routine, two response formats, and everything you need to run it tomorrow.">
<meta property="og:image" content="${esc(C.BRAND.url)}assets/og.jpg">
<meta property="og:type" content="article">
<link rel="canonical" href="${esc(C.BRAND.url)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
<style>
/* ============================================================
   CER & ACE Case Files — case-file dossier
   Same system as the printables: warm paper, oxblood case
   stamps, typewriter labels, slab display type.
   ============================================================ */
:root{
  --ink:#241E1A; --ink-soft:#645C56; --ink-faint:#97918A;
  --oxblood:#8F3222; --oxblood-lt:#BF6C5B; --oxblood-wash:#FCE6DC;
  --indigo:#17559B; --indigo-lt:#5C88C1; --indigo-wash:#E1EDFA;
  --manila:#F4EAD5; --manila-d:#E6D9BF;
  --rule:#C5BDB0; --rule-soft:#DCD7CD; --paper:#FCFAF6;
  --slab:'Zilla Slab',Georgia,'Times New Roman',serif;
  --mono:'IBM Plex Mono','SFMono-Regular',Consolas,'Courier New',monospace;
  --sans:'Source Sans 3','Source Sans Pro','Segoe UI',Calibri,sans-serif;
  --wrap:1120px;
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html{scroll-behavior:smooth}
body{font-family:var(--sans);color:var(--ink);background:var(--paper);line-height:1.55;
  font-variant-numeric:tabular-nums lining-nums}
img{max-width:100%;display:block}
a{color:var(--oxblood)}
a:hover{color:var(--ink)}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 24px}

/* ---------- typewriter label, used everywhere ---------- */
.lab{font-family:var(--mono);font-size:.68rem;font-weight:600;letter-spacing:.16em;
  text-transform:uppercase;color:var(--oxblood)}

/* ---------- topbar ---------- */
.topbar{position:sticky;top:0;z-index:50;background:rgba(252,250,246,.94);
  backdrop-filter:blur(10px);border-bottom:1px solid var(--rule)}
.topbar .wrap{display:flex;align-items:center;gap:16px;height:50px}
.backlink{font-family:var(--mono);font-size:.72rem;font-weight:600;letter-spacing:.1em;
  text-transform:uppercase;text-decoration:none;color:var(--ink-soft)}
.backlink:hover{color:var(--oxblood)}
.topbar .spacer{flex:1}
.topbar .jump{font-family:var(--mono);font-size:.68rem;font-weight:600;letter-spacing:.12em;
  text-transform:uppercase;text-decoration:none;color:var(--paper);background:var(--oxblood);
  padding:7px 14px}
.topbar .jump:hover{background:var(--ink);color:var(--paper)}

/* ---------- hero: the cover, on screen ---------- */
.hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.92fr);background:var(--ink)}
.hero-field{padding:56px 24px 52px;display:flex;flex-direction:column;
  max-width:calc(var(--wrap)/2);margin-left:auto;width:100%}
.hero-edition{align-self:flex-start;font-family:var(--mono);font-size:.68rem;font-weight:600;
  letter-spacing:.2em;text-transform:uppercase;color:var(--ink);background:var(--manila);padding:5px 12px}
.hero-file{margin:18px 0 auto;padding-top:14px;border-top:1px solid rgba(244,234,213,.24);
  font-family:var(--mono);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;
  color:rgba(244,234,213,.55);line-height:2}
.hero h1{font-family:var(--slab);font-weight:700;font-size:clamp(2.5rem,5.2vw,4rem);line-height:.94;
  letter-spacing:-.024em;color:var(--paper);margin-top:38px}
.hero h1 .b{display:block;color:var(--oxblood-lt)}
.hero-tag{align-self:flex-start;font-family:var(--mono);font-size:.74rem;letter-spacing:.16em;
  text-transform:uppercase;color:var(--manila-d);margin-top:20px;padding-top:16px;
  border-top:3px solid var(--oxblood)}
.hero-shot{position:relative;min-height:340px;background:var(--ink)}
.hero-shot img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
@media(max-width:820px){
  .hero{grid-template-columns:1fr}
  .hero-field{max-width:none;padding:36px 24px 40px;order:2}
  .hero-shot{order:1;min-height:240px;aspect-ratio:16/9}
  .hero h1{margin-top:24px}
}

/* ---------- lede ---------- */
.lede{padding:44px 0 8px}
.lede p{font-size:1.22rem;line-height:1.5;max-width:44rem}
.lede p+p{margin-top:16px;font-size:1.05rem;color:var(--ink-soft)}

/* ---------- section head ---------- */
.shead{display:flex;align-items:center;gap:14px;margin:0 0 22px}
.shead::after{content:'';flex:1;height:1px;background:var(--rule-soft)}
h2{font-family:var(--slab);font-weight:700;font-size:clamp(1.6rem,3vw,2.2rem);
  line-height:1.05;letter-spacing:-.015em;margin-bottom:6px}
.sub{color:var(--ink-soft);font-style:italic;margin-bottom:26px}
section{padding:44px 0}
section+section{border-top:1px solid var(--rule-soft)}

/* ---------- the routine ---------- */
.moves{list-style:none;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;
  border-top:2px solid var(--ink)}
.move{padding:20px 22px 24px 0;border-right:1px solid var(--rule-soft)}
.move:last-child{border-right:0}
.move .num{font-family:var(--mono);font-size:1.7rem;font-weight:600;color:var(--oxblood-lt);
  line-height:1;display:block;margin-bottom:10px}
.move h3{font-family:var(--slab);font-size:1.3rem;font-weight:700;margin-bottom:5px}
.move p{font-size:.95rem;color:var(--ink-soft);line-height:1.45}
@media(max-width:760px){.moves{grid-template-columns:1fr 1fr}
  .move{border-bottom:1px solid var(--rule-soft);padding-right:18px}
  .move:nth-child(2n){border-right:0}}
@media(max-width:440px){.moves{grid-template-columns:1fr}.move{border-right:0}}

.rule-note{display:flex;gap:18px;align-items:baseline;margin-top:28px;padding:14px 0;
  border-top:2px solid var(--ink);border-bottom:2px solid var(--ink);flex-wrap:wrap}
.rule-note .lab{flex:none;width:132px}
.rule-note p{font-size:1.1rem;font-style:italic;flex:1;min-width:260px}

/* ---------- case index ---------- */
.ix{border-top:2px solid var(--ink);margin-bottom:8px}
.ix-row{display:grid;grid-template-columns:44px 1.5fr 1.3fr 1.6fr;gap:14px;align-items:baseline;
  padding:12px 0;border-bottom:1px solid var(--rule);text-decoration:none;color:inherit;
  transition:background .15s}
.ix-row:hover{background:var(--manila)}
.ix-no{font-family:var(--mono);font-size:.82rem;font-weight:600;color:var(--oxblood)}
.ix-title{font-family:var(--slab);font-size:1.15rem;font-weight:600}
.ix-focus,.ix-out{font-size:.92rem;color:var(--ink-soft)}
@media(max-width:760px){
  .ix-row{grid-template-columns:38px 1fr;row-gap:2px}
  .ix-no{grid-row:span 3}
  .ix-out{padding-bottom:2px}
}

/* ---------- cases ---------- */
.case{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:34px;
  padding:36px 0;border-bottom:1px solid var(--rule-soft)}
.case:last-child{border-bottom:0}
.case-plate{position:relative;align-self:start;position:sticky;top:70px}
.case-plate img{width:100%;height:auto;aspect-ratio:3/2;object-fit:cover}
.plate-tag{position:absolute;left:0;bottom:0;background:var(--ink);color:var(--manila);
  font-family:var(--mono);font-size:.66rem;font-weight:500;letter-spacing:.14em;
  text-transform:uppercase;padding:5px 11px}
.case-kicker{font-family:var(--mono);font-size:.68rem;font-weight:600;letter-spacing:.16em;
  text-transform:uppercase;color:var(--oxblood);margin-bottom:6px}
.case-body h3{font-family:var(--slab);font-size:1.75rem;font-weight:700;line-height:1.08;
  letter-spacing:-.015em;margin-bottom:12px}
.case-mystery{background:var(--manila);border-left:4px solid var(--oxblood);padding:12px 16px;
  font-size:1.02rem;margin-bottom:16px}
.case-body p+p{margin-top:12px}
.case-body>p:not(.case-kicker):not(.case-mystery){color:var(--ink-soft);line-height:1.55}
.case-meta{margin-top:20px;border-top:1px solid var(--rule)}
.case-meta>div{display:flex;gap:14px;padding:8px 0;border-bottom:1px solid var(--rule-soft);
  align-items:baseline;flex-wrap:wrap}
.case-meta dt{font-family:var(--mono);font-size:.64rem;font-weight:600;letter-spacing:.13em;
  text-transform:uppercase;color:var(--ink-faint);width:150px;flex:none;line-height:1.7}
.case-meta dd{font-size:.88rem;color:var(--ink-soft);flex:1;min-width:180px}
@media(max-width:820px){.case{grid-template-columns:1fr;gap:20px}.case-plate{position:static}}

/* ---------- CER / ACE ---------- */
.fmts{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.fmt{padding:24px 26px 26px;border:2px solid var(--oxblood);background:var(--oxblood-wash)}
.fmt.ace{border-color:var(--indigo);background:var(--indigo-wash)}
.fmt-id{font-family:var(--mono);font-size:.7rem;font-weight:600;letter-spacing:.2em;
  color:var(--paper);background:var(--oxblood);padding:4px 11px;display:inline-block}
.fmt.ace .fmt-id{background:var(--indigo)}
.fmt h3{font-family:var(--slab);font-size:1.5rem;font-weight:700;margin:14px 0 8px}
.fmt p{font-size:1rem;line-height:1.5}
.fmt-steps{list-style:none;margin-top:16px;padding-top:14px;border-top:1px solid var(--rule)}
.fmt-steps li{font-family:var(--mono);font-size:.8rem;padding:5px 0;color:var(--ink-soft)}
.fmt-steps b{color:var(--oxblood);margin-right:8px}
.fmt.ace .fmt-steps b{color:var(--indigo)}
@media(max-width:760px){.fmts{grid-template-columns:1fr}}

/* ---------- downloads ---------- */
#downloads{scroll-margin-top:60px}
.dls{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.dl{display:flex;flex-direction:column;padding:22px 22px 20px;text-decoration:none;color:inherit;
  background:var(--paper);border:1px solid var(--rule);border-top:5px solid var(--ink-faint);
  transition:transform .16s cubic-bezier(.2,.7,.3,1),box-shadow .18s,border-color .18s}
.dl:hover{transform:translateY(-3px);box-shadow:0 12px 26px rgba(36,30,26,.13)}
.dl.ink{border-top-color:var(--ink);background:var(--manila)}
.dl.cer{border-top-color:var(--oxblood)}
.dl.ace{border-top-color:var(--indigo)}
.dl-kind{font-family:var(--mono);font-size:.65rem;font-weight:600;letter-spacing:.13em;
  text-transform:uppercase;color:var(--ink-faint)}
.dl h3{font-family:var(--slab);font-size:1.28rem;font-weight:700;margin:8px 0 8px;line-height:1.15}
.dl p{font-size:.92rem;color:var(--ink-soft);line-height:1.45;flex:1}
.dl-go{display:inline-flex;align-items:center;gap:8px;margin-top:16px;font-family:var(--mono);
  font-size:.72rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--oxblood)}
.dl.ace .dl-go{color:var(--indigo)}
.dl-go svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;
  stroke-linecap:round;stroke-linejoin:round;transition:transform .16s}
.dl:hover .dl-go svg{transform:translateY(2px)}
@media(max-width:900px){.dls{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.dls{grid-template-columns:1fr}}

/* ---------- run it ---------- */
.steps{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:0 32px}
.steps li{display:flex;gap:16px;padding:16px 0;border-top:1px solid var(--rule)}
.steps .num{font-family:var(--mono);font-size:.78rem;font-weight:600;letter-spacing:.12em;
  color:var(--oxblood);padding-top:3px}
.steps h3{font-family:var(--slab);font-size:1.2rem;font-weight:700;margin-bottom:3px}
.steps p{font-size:.94rem;color:var(--ink-soft);line-height:1.45}
@media(max-width:700px){.steps{grid-template-columns:1fr}}

.note{margin-top:26px;padding:16px 20px;border:1px solid var(--rule);
  border-left:4px solid var(--ink-faint);font-size:.94rem;color:var(--ink-soft);line-height:1.5}
.note b{font-family:var(--mono);font-size:.66rem;font-weight:600;letter-spacing:.14em;
  text-transform:uppercase;color:var(--ink);display:block;margin-bottom:5px}

/* ---------- closing ---------- */
.close{background:var(--ink);color:var(--manila);padding:52px 0}
.close p{font-family:var(--slab);font-size:clamp(1.3rem,2.6vw,1.85rem);font-weight:600;
  line-height:1.3;max-width:36rem;color:var(--paper)}
.close .pair{margin-top:22px;font-family:var(--sans);font-size:1rem;color:var(--manila-d);
  font-weight:400;max-width:36rem}
.close a{color:var(--oxblood-lt);font-weight:600}
.close a:hover{color:var(--manila)}

footer.site{padding:30px 0 12px;font-family:var(--mono);font-size:.68rem;letter-spacing:.1em;
  text-transform:uppercase;color:var(--ink-faint);display:flex;gap:18px;flex-wrap:wrap;
  align-items:baseline;border-top:1px solid var(--rule)}
footer.site .spacer{flex:1}
footer.site a{color:var(--ink-soft);text-decoration:none}
footer.site a:hover{color:var(--oxblood)}

@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto}}
@media print{.topbar,.hero-shot,.dl-go{display:none}body{background:#fff}}
</style>
</head>
<body>

<div class="topbar">
  <div class="wrap">
    <a class="backlink" href="../../">← Activities</a>
    <span class="spacer"></span>
    <a class="jump" href="#downloads">Get the packets</a>
  </div>
</div>

<header class="hero">
  <div class="hero-field">
    <span class="hero-edition">Classroom packet</span>
    <div class="hero-file">Cases 01–05<br>CER or ACE response<br>${esc(C.BRAND.grades)}</div>
    <h1>CER &amp; ACE<span class="b">Case Files</span></h1>
    <span class="hero-tag">${esc(C.BRAND.tagline)}</span>
  </div>
  <div class="hero-shot">
    <img src="assets/hero.jpg" alt="Three middle-school students in aprons and safety glasses examining rock and mineral samples at a lab bench" width="920" height="900">
  </div>
</header>

<main>
<div class="wrap">

  <section class="lede" aria-labelledby="lede-h">
    <h2 id="lede-h" class="sr-only">About these cases</h2>
    <p>${esc(C.BLOG.lede)}</p>
    <p>${esc(C.BLOG.intro)}</p>
  </section>

  <section aria-labelledby="routine-h">
    <div class="shead"><span class="lab">The routine</span></div>
    <h2 id="routine-h">Four moves, five cases</h2>
    <p class="sub">Every case uses the same routine, so students put their attention on the evidence instead of on learning a new worksheet.</p>
    <ol class="moves">${routineCards}
    </ol>
    <div class="rule-note">
      <span class="lab">Evidence rule</span>
      <p>${esc(C.EVIDENCE_RULE)}</p>
    </div>
  </section>

  <section aria-labelledby="cases-h">
    <div class="shead"><span class="lab">The five-pack</span></div>
    <h2 id="cases-h">Exploring the cases</h2>
    <p class="sub">Each case is a Page 1 investigation and your choice of a Page 2 response.</p>
    <div class="ix">${caseIndexRows}
    </div>
    ${caseSections}
  </section>

  <section aria-labelledby="fmt-h">
    <div class="shead"><span class="lab">Page 2</span></div>
    <h2 id="fmt-h">Choose CER or ACE</h2>
    <p class="sub">Both need Page 1 evidence. They ask for different thinking, so the packets ship as two separate files.</p>
    <div class="fmts">${formatPanels}
    </div>
  </section>

  <section id="downloads" aria-labelledby="dl-h">
    <div class="shead"><span class="lab">Download</span></div>
    <h2 id="dl-h">Everything you need to run it</h2>
    <p class="sub">Free to print and share for classroom use. No login, no sign-up, nothing collected.</p>
    <div class="dls">${downloadCards}
    </div>
  </section>

  <section aria-labelledby="run-h">
    <div class="shead"><span class="lab">Quick start</span></div>
    <h2 id="run-h">Running it tomorrow</h2>
    <p class="sub">${esc(C.QUICK_START.lede)}</p>
    <ol class="steps">${startSteps}
    </ol>
    <div class="note"><b>About the standards in the guide</b>${esc(C.STANDARDS.caveat)}</div>
  </section>

</div>

<section class="close">
  <div class="wrap">
    <p>${esc(C.BLOG.close)}</p>
    <p class="pair">Pair a hands-on case with a <a href="../../ctobs/science/">Science Critical Thinking Online Breakout</a> for a digital follow-up.</p>
  </div>
</section>

<div class="wrap">
  <footer class="site">
    <span>${esc(C.BRAND.publisher)} · Classroom packet</span>
    <span class="spacer"></span>
    <a href="../../">Learning Activities Hub</a>
  </footer>
</div>
</main>

<script src="/activities/licensing-footer.js" defer></script>
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, 'index.html'), page);
console.log(`index.html  ${(page.length / 1024).toFixed(0)} KB`);
