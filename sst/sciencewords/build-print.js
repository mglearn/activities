#!/usr/bin/env node
/* ============================================================
   build-print.js — writes every printable handout and teacher
   key from the JSON data.

     data/activities.json    -> print/color/grades-<band>/<id>.html
                                print/bw/grades-<band>/<id>.html
     data/teacher-keys.json  -> teacher-keys/<id>-key.html

   The handouts are plain static HTML. They open, read, and
   print with JavaScript switched off; the only script on them
   wires the Print button. Because they are generated, a wording
   fix in the JSON reaches the colour sheet, the black-and-white
   sheet, and the activity card in one edit.

   Run after editing any activity:  node build-print.js
   ============================================================ */
'use strict';

const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

const activities = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/activities.json'), 'utf8')).activities;
const keyFile = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/teacher-keys.json'), 'utf8'));

const LABEL = {
  gradeBand: { '3-5': 'Grades 3–5', '6-8': 'Grades 6–8', '9-12': 'Grades 9–12' },
  scienceArea: {
    'matter-energy': 'Matter and Energy',
    'force-motion-energy': 'Force, Motion, and Energy',
    'earth-space': 'Earth and Space',
    'organisms-environments': 'Organisms and Environments'
  },
  sst: { boy: 'BOY', moy: 'MOY', eoy: 'EOY' },
  ace: { articulate: 'Articulate', connect: 'Connect', extend: 'Extend' },
  type: {
    break: 'Break It', build: 'Build It', decode: 'Decode It', sort: 'Sort It',
    detective: 'Word Detective', mystery: 'Mystery Word', stimulus: 'Decode the Stimulus',
    equation: 'Word Equation', partner: 'Partner Challenge', exit: 'Exit Ticket'
  },
  role: { prefix: 'Prefix', root: 'Root', 'combining-form': 'Root', suffix: 'Suffix', word: 'Word' }
};

const esc = (s) => String(s === undefined || s === null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const roleClass = (role) => (role === 'prefix' ? 'prefix' : role === 'suffix' ? 'suffix' : role === 'word' ? 'word' : 'root');

/* ---------------------------------------------------------------- blocks */

const rules = (n) => Array.from({ length: n }, () => '<div class="rule"></div>').join('\n');

function partChip(item) {
  return `<div class="part ${roleClass(item.role)}">
  <span class="role">${esc(LABEL.role[item.role] || item.role)}</span>
  <span class="txt">${esc(item.display)}</span>
  <span class="mean">${esc(item.meaning || '')}</span>
</div>`;
}

const BLOCKS = {
  instructions: (b) => `<div class="block instructions">${esc(b.text)}</div>`,

  note: (b) => `<div class="block"><div class="note">${esc(b.text)}</div></div>`,

  wordparts: (b) => `<div class="block">
  ${b.caption ? `<h2>${esc(b.caption)}</h2>` : ''}
  <div class="parts">${b.items.map(partChip).join('\n')}</div>
</div>`,

  bigword: (b) => `<div class="block"><div class="bigword">
  <div class="w">${esc(b.word)}</div>
  <div class="split">${b.split.map(esc).join(' &nbsp;+&nbsp; ')}</div>
</div></div>`,

  breaktable: (b) => `<div class="block">
  ${b.caption ? `<h2>${esc(b.caption)}</h2>` : ''}
  <table class="sheet-table">
    <thead><tr><th>Word</th>${b.columns.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead>
    <tbody>
      ${b.rows.map((r) => `<tr>
        <td class="word">${esc(r.word)}<br><span style="font-weight:600;font-size:9pt">${r.split.map(esc).join(' | ')}</span></td>
        ${b.columns.map(() => '<td class="answer"></td>').join('')}
      </tr>`).join('\n')}
    </tbody>
  </table>
</div>`,

  table: (b) => {
    const bodyRows = b.prefill && b.prefill.length
      ? b.prefill.map((word) => `<tr><td class="word">${esc(word)}</td>${b.columns.slice(1).map(() => '<td class="answer"></td>').join('')}</tr>`)
      : Array.from({ length: b.rows || 4 }, () => `<tr>${b.columns.map(() => '<td class="answer"></td>').join('')}</tr>`);
    return `<div class="block">
  ${b.caption ? `<h2>${esc(b.caption)}</h2>` : ''}
  <table class="sheet-table">
    <thead><tr>${b.columns.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead>
    <tbody>${bodyRows.join('\n')}</tbody>
  </table>
</div>`;
  },

  detectivetable: (b) => `<div class="block">
  ${b.caption ? `<h2>${esc(b.caption)}</h2>` : ''}
  <table class="sheet-table">
    <thead><tr>${b.columns.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead>
    <tbody>
      ${b.rows.map((r) => `<tr><td class="word">${esc(r.word)}</td>${b.columns.slice(1).map(() => '<td class="answer"></td>').join('')}</tr>`).join('\n')}
    </tbody>
  </table>
</div>`,

  datatable: (b) => `<div class="block">
  ${b.caption ? `<h2>${esc(b.caption)}</h2>` : ''}
  <table class="sheet-table">
    <thead><tr>${b.columns.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead>
    <tbody>${b.rows.map((r) => `<tr>${r.map((cell) => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('\n')}</tbody>
  </table>
</div>`,

  lines: (b) => `<div class="block lines">
  <span class="label">${esc(b.label)}</span>
  ${rules(b.count || 2)}
</div>`,

  cards: (b) => `<div class="block">
  ${b.caption ? `<h2>${esc(b.caption)}</h2>` : ''}
  <p class="cutnote">Cut along the dashed lines. Keep first-part cards and last-part cards in two piles.</p>
  <div class="cards-grid" style="grid-template-columns:repeat(${b.columns || 5},1fr)">
    ${b.items.map((i) => `<div class="cut ${roleClass(i.role)}">
      <span class="role">${esc(LABEL.role[i.role] || i.role)}</span>
      <span class="txt">${esc(i.display)}</span>
      <span class="mean">${esc(i.meaning || '')}</span>
    </div>`).join('\n')}
  </div>
</div>`,

  sortcolumns: (b) => `<div class="block">
  ${b.caption ? `<h2>${esc(b.caption)}</h2>` : ''}
  <div class="sortgrid" style="grid-template-columns:repeat(${b.columns.length},1fr)">
    ${b.columns.map((c) => `<div class="sortcol"><h3>${esc(c)}</h3></div>`).join('\n')}
  </div>
  <div class="sortitems">
    <h3>Sort these</h3>
    <ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
  </div>
</div>`,

  checkboxes: (b) => `<div class="block">
  <span class="label" style="font-weight:700">${esc(b.label)}</span>
  <ul class="checklist">
    ${b.items.map((i) => `<li><span class="box"></span><span>${esc(i)}</span></li>`).join('\n')}
  </ul>
</div>`,

  oddoneout: (b) => `<div class="block">
  ${b.caption ? `<h2>${esc(b.caption)}</h2>` : ''}
  <p>${esc(b.prompt)}</p>
  <div class="oddlist">${b.items.map((i) => `<span>${esc(i)}</span>`).join('')}</div>
</div>`,

  equation: (b) => `<div class="block"><div class="equation">
  <div class="row">
    ${b.parts.map((p, i) => `<div class="part ${i === b.parts.length - 1 ? 'suffix' : 'root'}">
      <span class="txt">${esc(p)}</span><span class="mean">${esc(b.meanings[i] || '')}</span>
    </div>${i < b.parts.length - 1 ? '<span class="op">+</span>' : ''}`).join('\n')}
  </div>
  <div class="eq">=</div>
  <div class="result">${esc(b.result)}</div>
  <div class="fill">
    <b>${esc(b.clueLabel || 'Word-part clue')}:</b> ${b.clue ? esc(b.clue) : '<span class="line"></span>'}
    <b>${esc(b.scienceLabel || 'Science meaning')}:</b> ${b.science ? esc(b.science) : '<span class="line"></span>'}
  </div>
</div></div>`,

  mysterycards: (b) => `<div class="block">
  ${b.caption ? `<h2>${esc(b.caption)}</h2>` : ''}
  <div class="mystery">
    ${b.cards.map((c) => `<div class="mcardp">
      <div class="w">${esc(c.word)}</div>
      <div class="clues">${c.clues.map((cl) => `<div><b>${esc(cl[0])}</b> = ${esc(cl[1])}</div>`).join('')}</div>
      <div><small>My prediction:</small><div class="predict"></div></div>
      <div class="sci"><b>Science:</b> ${esc(c.science)}</div>
    </div>`).join('\n')}
  </div>
</div>`,

  mcq: (b) => `<div class="block mcq">
  <p class="stem">${esc(b.stem)}</p>
  <ol>${b.options.map((o) => `<li>${esc(o)}</li>`).join('\n')}</ol>
  ${b.followUp ? `<div class="lines" style="margin-top:8px"><span class="label">${esc(b.followUp)}</span>${rules(b.followUpLines || 2)}</div>` : ''}
</div>`,

  ace: (b) => `<div class="block"><div class="ace">
  <h2>ACE it</h2>
  ${[['A', 'Articulate', b.a], ['C', 'Connect', b.c], ['E', 'Extend', b.e]].map(([letter, name, text]) => `<div class="item">
    <span class="letter">${letter}</span>
    <span class="txt"><b>${name}</b>${esc(text)}<span class="line"></span></span>
  </div>`).join('\n')}
</div></div>`,

  stimulus: (b) => {
    let inner = '';
    if (b.kind === 'chain') {
      inner = `<div class="chain">${b.chain.map((n, i) => `${i ? '<span class="arrow">&#8594;</span>' : ''}<span class="node">${esc(n)}</span>`).join('')}</div>`;
    } else if (b.kind === 'diagram') {
      inner = DIAGRAMS[b.diagram] ? DIAGRAMS[b.diagram]() : '';
      if (b.caption) inner += `<p class="caption">${esc(b.caption)}</p>`;
    } else {
      inner = `<p>${esc(b.text)}</p>`;
    }
    return `<div class="block"><div class="stimulus">
  ${b.title ? `<h2>${esc(b.title)}</h2>` : ''}
  ${inner}
</div></div>`;
  }
};

/* ---------------------------------------------------------------- diagrams

   Original inline SVG, drawn for this resource. Every diagram
   carries a title and desc so it is announced meaningfully, and
   uses outlines rather than fills so it survives grayscale. */

const DIAGRAMS = {
  geothermal: () => `<svg viewBox="0 0 620 260" role="img" aria-labelledby="geo-t geo-d" style="width:100%;height:auto">
  <title id="geo-t">Cross-section of the ground beneath a small town</title>
  <desc id="geo-d">Buildings sit on the surface. An arrow shows water moving down through cracks in cool rock, reaching hot rock deep below, and a second arrow shows heated water and steam rising back to the surface. Three depth labels mark the surface, 500 meters, and 1,500 meters.</desc>
  <g fill="none" stroke="#1f2933" stroke-width="2">
    <rect x="10" y="10" width="600" height="240" stroke="#c8d2de"/>
    <line x1="10" y1="60" x2="610" y2="60"/>
    <line x1="10" y1="140" x2="610" y2="140" stroke-dasharray="6 5"/>
    <line x1="10" y1="215" x2="610" y2="215" stroke-dasharray="6 5"/>
    <path d="M70 60 L70 34 L92 20 L114 34 L114 60"/>
    <path d="M140 60 L140 40 L176 40 L176 60"/>
    <path d="M210 60 L210 30 L228 18 L246 30 L246 60"/>
    <path d="M300 62 C300 100, 288 140, 296 210" stroke-dasharray="7 6"/>
    <path d="M400 210 C408 140, 396 100, 396 62"/>
    <path d="M396 62 l-6 12 M396 62 l6 12"/>
    <path d="M296 210 l-6 -12 M296 210 l6 -12"/>
    <path d="M120 232 q26 -16 52 0 t52 0 t52 0 t52 0 t52 0 t52 0"/>
    <path d="M120 244 q26 -16 52 0 t52 0 t52 0 t52 0 t52 0 t52 0"/>
  </g>
  <g font-family="system-ui, sans-serif" font-size="12" fill="#1f2933">
    <text x="18" y="52">Surface: houses and school</text>
    <text x="18" y="76">Cool rock with cracks</text>
    <text x="18" y="156">Warmer rock</text>
    <text x="18" y="231" font-weight="700">Hot rock</text>
    <text x="240" y="120">water moves down</text>
    <text x="410" y="120">hot water rises</text>
    <text x="520" y="52">0 m</text>
    <text x="520" y="134">500 m</text>
    <text x="520" y="209">1,500 m</text>
  </g>
</svg>`
};

/* ---------------------------------------------------------------- sheet */

function renderBlocks(blocks) {
  return blocks.map((b) => {
    const fn = BLOCKS[b.type];
    if (!fn) throw new Error('Unknown block type: ' + b.type);
    return fn(b);
  }).join('\n');
}

function sheetHead(activity, extra) {
  return `<div class="sheet-head">
  <div class="kicker">Break It, Build It · Science Word Parts</div>
  <h1>${esc(activity.title)}${extra || ''}</h1>
  <div class="meta">${esc(LABEL.gradeBand[activity.gradeBand])} · ${esc(LABEL.scienceArea[activity.scienceArea])} · ${esc(LABEL.sst[activity.sstCheckpoint])} · ${esc(LABEL.ace[activity.ace])} · ${esc(LABEL.type[activity.activityType])} · ${activity.estimatedMinutes} min</div>
</div>`;
}

const NAMEBAR = `<div class="namebar"><span>Name</span><span>Date</span></div>`;

const FOOTER_NOTE = `<div class="footer-note">
  <span>Break It, Build It · Science Word Parts · mglearn.github.io/activities/sst/sciencewords/</span>
  <span>Not an official SST assessment. CC BY-NC 4.0</span>
</div>`;

function toolbar(activity, mode, depth) {
  const up = '../'.repeat(depth);
  const other = mode === 'color' ? 'bw' : 'color';
  const otherLabel = mode === 'color' ? 'Black &amp; white edition' : 'Colour edition';
  return `<div class="toolbar noprint">
  <a href="${up}activities.html">&#8592; All activities</a>
  <button type="button" id="print-btn" hidden>Print</button>
  <a href="${up}print/${other}/grades-${activity.gradeBand}/${activity.id}.html">${otherLabel}</a>
  <span class="spacer"></span>
  <a href="${up}teacher-keys/${activity.id}-key.html">Teacher key</a>
</div>`;
}

function htmlDoc({ title, description, bodyClass, depth, body }) {
  const up = '../'.repeat(depth);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="referrer" content="no-referrer">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="stylesheet" href="${up}css/print.css">
</head>
<body class="${bodyClass}">
${body}
<script src="${up}js/print.js" defer></script>
</body>
</html>
`;
}

/* Exit tickets repeat on one page with cut lines. */
function ticketSheet(activity, count, layoutClass) {
  const one = `<div class="ticket">
  ${sheetHead(activity)}
  ${NAMEBAR}
  ${renderBlocks(activity.blocks)}
</div>`;
  return `<div class="tickets ${layoutClass}">${Array.from({ length: count }, () => one).join('\n')}</div>`;
}

function buildActivity(activity, mode) {
  const depth = 3; // print/<mode>/grades-<band>/
  let inner;
  if (activity.layout === 'quarter-page') inner = ticketSheet(activity, 4, 'quarter');
  else if (activity.layout === 'half-page') inner = ticketSheet(activity, 2, 'half');
  else inner = `${sheetHead(activity)}${NAMEBAR}${renderBlocks(activity.blocks)}${FOOTER_NOTE}`;

  const body = `${toolbar(activity, mode, depth)}
<div class="sheetwrap">
  <div class="sheet">
${inner}
  </div>
</div>`;

  return htmlDoc({
    title: `${activity.title} — ${mode === 'bw' ? 'black and white' : 'colour'} handout`,
    description: activity.description,
    bodyClass: mode === 'bw' ? 'bw' : '',
    depth,
    body
  });
}

function buildKey(activity, key) {
  const depth = 1; // teacher-keys/
  const answers = key.answers.map((a) => `<li>
  <div class="q">${esc(a.prompt)}</div>
  <div class="a">${esc(a.answer)}</div>
  ${a.why ? `<div class="why">${esc(a.why)}</div>` : ''}
</li>`).join('\n');

  const solo = `<div class="block solostrip">
  <h2>Response evidence</h2>
  <table>${keyFile.soloStrip.map((s) => `<tr><td class="lvl">${s.level} — ${esc(s.label)}</td><td>${esc(s.evidence)}</td></tr>`).join('')}</table>
</div>`;

  const body = `<div class="toolbar noprint">
  <a href="../activities.html">&#8592; All activities</a>
  <button type="button" id="print-btn" hidden>Print</button>
  <a href="../print/color/grades-${activity.gradeBand}/${activity.id}.html">Student sheet (colour)</a>
  <a href="../print/bw/grades-${activity.gradeBand}/${activity.id}.html">Student sheet (B&amp;W)</a>
</div>
<div class="sheetwrap">
  <div class="sheet">
    ${sheetHead(activity)}
    <p><span class="keybadge">Teacher key</span></p>
    <div class="block"><ul class="keylist">${answers}</ul></div>
    ${key.lookFor ? `<div class="block"><div class="lookfor"><h2>What to look for</h2><p>${esc(key.lookFor)}</p></div></div>` : ''}
    ${solo}
    ${FOOTER_NOTE}
  </div>
</div>`;

  return htmlDoc({
    title: `Teacher key — ${activity.title}`,
    description: `Answers and teacher look-fors for ${activity.title}.`,
    bodyClass: 'key',
    depth,
    body
  });
}

/* ---------------------------------------------------------------- run */

function write(file, contents) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents);
}

let sheets = 0;
let keys = 0;
const missingKeys = [];

activities.forEach((activity) => {
  ['color', 'bw'].forEach((mode) => {
    const out = path.join(ROOT, 'print', mode, 'grades-' + activity.gradeBand, activity.id + '.html');
    write(out, buildActivity(activity, mode));
    sheets += 1;
  });

  const key = keyFile.keys[activity.id];
  if (key) {
    write(path.join(ROOT, 'teacher-keys', activity.id + '-key.html'), buildKey(activity, key));
    keys += 1;
  } else {
    missingKeys.push(activity.id);
  }
});

console.log(`build-print: ${sheets} student handouts, ${keys} teacher keys, from ${activities.length} activities`);
if (missingKeys.length) {
  console.error('build-print: MISSING teacher keys for ' + missingKeys.join(', '));
  process.exitCode = 1;
}
