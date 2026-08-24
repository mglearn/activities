#!/usr/bin/env node
/* ============================================================
   CER & ACE Case Files — PowerPoint builders

     CER_ACE_Case_Files_Editable_Packets.pptx
       28 slides, US-Letter portrait. The printable packets as
       real text boxes and tables, so teachers can edit them and
       students can type responses straight into the file.

     CER_ACE_Case_Files_Projection_Deck.pptx
       20 slides, 16:9. Built for the board, not for the printer:
       one mystery at a time, the evidence prompts, and the
       misconception check.

   pptxgenjs is not vendored in this repo. Install it anywhere
   and point NODE_PATH at it:

     npm install pptxgenjs --prefix /tmp/sdc
     NODE_PATH=/tmp/sdc/node_modules node src/build-decks.js

   PowerPoint cannot fall back through a font stack the way the
   PDFs do, so the decks use faces that ship with Office and
   Google Slides: Georgia for the display slab, Consolas for the
   typewriter labels, Calibri for body copy.
   ============================================================ */

const fs = require('fs');
const path = require('path');
const PptxGenJS = require('pptxgenjs');
const C = require('./content.js');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'files');
const ASSETS = path.join(ROOT, 'assets');

/* Same palette as print.css, without the leading hash pptxgenjs dislikes. */
const K = {
  ink: '241E1A',
  inkSoft: '645C56',
  inkFaint: '97918A',
  oxblood: '8F3222',
  oxbloodLt: 'BF6C5B',
  oxbloodWash: 'FCE6DC',
  indigo: '17559B',
  indigoLt: '5C88C1',
  indigoWash: 'E1EDFA',
  manila: 'F4EAD5',
  manilaD: 'E6D9BF',
  rule: 'C5BDB0',
  ruleSoft: 'DCD7CD',
  paper: 'FCFAF6',
};

const DISPLAY = 'Georgia';
const MONO = 'Consolas';
const BODY = 'Calibri';

const accentOf = (fmt) => (fmt === 'ACE'
  ? { a: K.indigo, lt: K.indigoLt, wash: K.indigoWash }
  : { a: K.oxblood, lt: K.oxbloodLt, wash: K.oxbloodWash });

const img = (name) => path.join(ASSETS, name);

/* ============================================================
   Deck 1 — the packets, US-Letter portrait
   ============================================================ */

const P = { w: 8.5, h: 11, m: 0.62 };
const CW = P.w - P.m * 2;

function label(slide, text, x, y, w, color, size = 8) {
  slide.addText(text.toUpperCase(), {
    x, y, w, h: 0.16,
    fontFace: MONO, fontSize: size, bold: true, color,
    charSpacing: 1.6, valign: 'middle',
  });
}

/* The running head every interior slide carries. */
function slideHead(slide, caseNo, stamp, acc) {
  /* The chip has to hold 'ROUTINE' as well as 'CASE 01'. */
  const chipW = Math.max(0.62, caseNo.length * 0.095 + 0.16);
  slide.addShape('rect', { x: P.m, y: 0.42, w: chipW, h: 0.2, fill: { color: acc.a } });
  slide.addText(caseNo.toUpperCase(), {
    x: P.m, y: 0.42, w: chipW, h: 0.2,
    fontFace: MONO, fontSize: 8, bold: true, color: K.paper,
    align: 'center', valign: 'middle', charSpacing: 1,
  });
  slide.addText(C.BRAND.title.toUpperCase(), {
    x: P.m + chipW + 0.13, y: 0.42, w: 3, h: 0.2,
    fontFace: MONO, fontSize: 8, color: K.inkFaint, charSpacing: 1.4, valign: 'middle',
  });
  slide.addText(stamp.toUpperCase(), {
    x: P.w - P.m - 1.9, y: 0.42, w: 1.9, h: 0.2,
    fontFace: MONO, fontSize: 8, bold: true, color: acc.a,
    align: 'right', valign: 'middle', charSpacing: 1.2,
  });
  slide.addShape('rect', { x: P.m, y: 0.66, w: CW, h: 0.012, fill: { color: K.rule } });
  /* Spine rule — the same one that runs down the printed sheets. */
  slide.addShape('rect', { x: P.m - 0.2, y: 0.42, w: 0.035, h: P.h - 0.95, fill: { color: acc.a } });
}

function slideTitle(slide, title, deck, y = 0.82) {
  slide.addText(title, {
    x: P.m, y, w: CW, h: 0.4,
    fontFace: DISPLAY, fontSize: 25, bold: true, color: K.ink, valign: 'middle',
  });
  slide.addText(deck, {
    x: P.m, y: y + 0.4, w: CW, h: 0.22,
    fontFace: BODY, fontSize: 12, italic: true, color: K.inkSoft, valign: 'middle',
  });
}

function slideFolio(slide, left, n) {
  const y = P.h - 0.52;
  slide.addShape('rect', { x: P.m, y, w: CW, h: 0.012, fill: { color: K.rule } });
  slide.addText(left.toUpperCase(), {
    x: P.m, y: y + 0.05, w: CW - 0.5, h: 0.2,
    fontFace: MONO, fontSize: 7.5, color: K.inkFaint, charSpacing: 1.2, valign: 'middle',
  });
  slide.addText(String(n), {
    x: P.w - P.m - 0.5, y: y + 0.05, w: 0.5, h: 0.2,
    fontFace: MONO, fontSize: 7.5, bold: true, color: K.inkSoft, align: 'right', valign: 'middle',
  });
}

function mysteryBox(slide, text, y, acc, h = 0.72) {
  slide.addShape('rect', { x: P.m, y, w: CW, h, fill: { color: K.manila } });
  slide.addShape('rect', { x: P.m, y, w: 0.045, h, fill: { color: acc.a } });
  label(slide, 'The mystery', P.m + 0.16, y + 0.07, 2, acc.a, 7.5);
  slide.addText(text, {
    x: P.m + 0.16, y: y + 0.24, w: CW - 0.34, h: h - 0.3,
    fontFace: BODY, fontSize: 11.5, color: K.ink, valign: 'top', lineSpacing: 15,
  });
  return y + h;
}

/* Editable evidence log. Blank cells are real table cells, so a
   student typing in PowerPoint gets a cursor where the pen would go. */
function logTable(slide, headers, rows, y, acc, rowH) {
  const head = headers.map((t) => ({
    text: t.toUpperCase(),
    options: {
      fontFace: MONO, fontSize: 7.5, bold: true, color: K.inkSoft, charSpacing: 1.2,
      fill: { color: K.paper }, valign: 'bottom',
      border: [{ type: 'none' }, { type: 'none' }, { pt: 1.5, color: K.ink }, { type: 'none' }],
    },
  }));
  const body = rows.map((r) => {
    const cells = Array.isArray(r) ? r : [r, '', ''];
    return cells.map((t, i) => ({
      text: t,
      options: {
        fontFace: i === 0 ? MONO : BODY,
        fontSize: i === 0 ? 9 : 10,
        color: i === 0 ? K.ink : K.inkSoft,
        valign: 'top',
        border: [
          { type: 'none' },
          { type: 'none' },
          { pt: 0.75, color: K.rule },
          i === 0 ? { type: 'none' } : { pt: 0.5, color: K.ruleSoft },
        ],
      },
    }));
  });
  slide.addTable([head, ...body], {
    x: P.m, y, w: CW,
    colW: [CW * 0.26, CW * 0.44, CW * 0.30],
    rowH: [0.2, ...rows.map(() => rowH)],
    margin: [3, 5, 3, 0],
    fill: { color: K.paper },
  });
  return y + 0.2 + rowH * rows.length;
}

function packetPageOne(pptx, c, fmt, pageNo, isWorked) {
  const acc = accentOf(fmt);
  const s = pptx.addSlide();
  s.background = { color: K.paper };
  slideHead(s, `Case ${c.n}`, `Page 1 · ${fmt}`, acc);
  slideTitle(s, c.title, c.deck);

  /* Name / date / group. */
  let y = 1.48;
  const idw = [CW * 0.44, CW * 0.26, CW * 0.26];
  ['Name', 'Date', 'Group'].forEach((t, i) => {
    const x = P.m + idw.slice(0, i).reduce((a, b) => a + b + 0.1, 0);
    label(s, t, x, y, idw[i], K.inkFaint, 7.5);
    s.addShape('rect', { x, y: y + 0.22, w: idw[i], h: 0.01, fill: { color: K.rule } });
  });

  y = mysteryBox(s, c.mystery, 1.86, acc, 0.78);

  s.addImage({ path: img(c.img), x: P.m, y: y + 0.14, w: CW, h: 1.45, sizing: { type: 'cover', w: CW, h: 1.45 } });
  s.addShape('rect', { x: P.m, y: y + 1.37, w: 2.3, h: 0.22, fill: { color: K.ink } });
  slide_cap(s, `Case ${c.n} · evidence tray`, P.m + 0.08, y + 1.37);
  y = y + 1.59;

  /* Materials and safety. */
  s.addShape('rect', { x: P.m, y: y + 0.12, w: CW, h: 0.012, fill: { color: K.rule } });
  [['Materials', c.materials, K.inkFaint], ['Safety', c.safety, acc.a]].forEach(([k, v, col], i) => {
    const yy = y + 0.16 + i * 0.28;
    label(s, k, P.m, yy, 0.8, col, 7);
    s.addText(v, {
      x: P.m + 0.85, y: yy - 0.02, w: CW - 0.85, h: 0.26,
      fontFace: BODY, fontSize: 9.5, color: K.inkSoft, valign: 'middle',
    });
    s.addShape('rect', { x: P.m, y: yy + 0.24, w: CW, h: 0.008, fill: { color: i ? K.rule : K.ruleSoft } });
  });
  y += 0.78;

  label(s, 'Step 1 · Observe before you explain', P.m, y, 4, acc.a, 8);
  y = logTable(s, [c.observe.label, 'What I observe', 'Tool or test used'], c.observe.rows, y + 0.22, acc, isWorked ? 0.3 : 0.44);

  label(s, 'Step 2 · Collect evidence', P.m, y + 0.16, 4, acc.a, 8);
  logTable(s, ['Test performed', 'Result / data', 'What it tells me'], c.evidence.rows, y + 0.38, acc, isWorked ? 0.3 : 0.52);

  slideFolio(s, `${isWorked ? 'Worked example' : `Case ${c.n}`} · Page 1 · ${fmt}`, pageNo);
}

function slide_cap(slide, text, x, y) {
  slide.addText(text.toUpperCase(), {
    x, y, w: 2.2, h: 0.22,
    fontFace: MONO, fontSize: 7, color: K.manila, charSpacing: 1.3, valign: 'middle',
  });
}

function packetPageTwo(pptx, c, fmtId, pageNo, answers) {
  const F = C.FORMATS[fmtId];
  const acc = accentOf(fmtId);
  const s = pptx.addSlide();
  s.background = { color: K.paper };
  slideHead(s, `Case ${c.n}`, `Page 2 · ${fmtId}`, acc);
  slideTitle(s, c.title, F.pageDeck);

  /* How-to strip. */
  s.addShape('rect', { x: P.m, y: 1.48, w: CW, h: 0.52, fill: { color: K.paper }, line: { color: K.rule, width: 0.75 } });
  s.addShape('rect', { x: P.m, y: 1.48, w: 0.035, h: 0.52, fill: { color: K.inkFaint } });
  label(s, 'How to use this slide', P.m + 0.14, 1.53, 2.6, K.ink, 7);
  s.addText(F.intro, {
    x: P.m + 0.14, y: 1.68, w: CW - 0.3, h: 0.28,
    fontFace: BODY, fontSize: 9.5, color: K.inkSoft, valign: 'top',
  });

  /* Response fields, sized by how much writing each one wants. */
  const top = 2.14;
  const bottom = P.h - 1.14;
  const gap = 0.12;
  const units = F.sections.reduce((a, x) => a + x.lines, 0);
  const chrome = 0.52;
  const free = bottom - top - gap * (F.sections.length - 1) - chrome * F.sections.length;

  let y = top;
  F.sections.forEach((sec, i) => {
    const h = chrome + (free * sec.lines) / units;
    const fill = sec.tone === 'accent' ? acc.wash : sec.tone === 'alt' ? K.manila : K.paper;
    const bar = sec.tone === 'accent' ? acc.a : sec.tone === 'alt' ? K.ink : K.rule;
    s.addShape('rect', { x: P.m, y, w: CW, h, fill: { color: fill }, line: { color: K.rule, width: 0.75 } });
    s.addShape('rect', { x: P.m, y, w: 0.035, h, fill: { color: bar } });

    s.addText([
      { text: sec.n, options: { fontFace: MONO, fontSize: 9, bold: true, color: acc.a } },
      { text: '   ' + sec.head, options: { fontFace: DISPLAY, fontSize: 12, bold: true, color: K.ink } },
    ], { x: P.m + 0.16, y: y + 0.05, w: CW - 0.34, h: 0.2, valign: 'middle' });

    s.addText(sec.hint, {
      x: P.m + 0.16, y: y + 0.24, w: CW - 0.34, h: 0.2,
      fontFace: BODY, fontSize: 8.5, color: K.inkSoft, valign: 'top',
    });

    /* The answer area: a real text frame, so it takes a cursor. */
    s.addText(answers ? answers[i] : '', {
      x: P.m + 0.16, y: y + 0.46, w: CW - 0.34, h: h - 0.54,
      fontFace: BODY, fontSize: 11, color: K.ink, valign: 'top', lineSpacing: 17,
    });
    y += h + gap;
  });

  if (F.checklist) {
    s.addText(F.checklist.map((t) => '☐  ' + t).join('     '), {
      x: P.m, y: bottom + 0.04, w: CW, h: 0.2,
      fontFace: MONO, fontSize: 8, color: K.inkSoft, valign: 'middle',
    });
  }

  const sy = bottom + (F.checklist ? 0.28 : 0.08);
  s.addShape('rect', { x: P.m, y: sy, w: CW, h: 0.3, fill: { color: K.ink } });
  s.addText([
    { text: 'STEMS   ', options: { fontFace: MONO, fontSize: 8, bold: true, color: K.paper, charSpacing: 1.4 } },
    { text: F.stems, options: { fontFace: MONO, fontSize: 8, color: K.manila } },
  ], { x: P.m + 0.14, y: sy, w: CW - 0.28, h: 0.3, valign: 'middle' });

  slideFolio(s, `Case ${c.n} · Page 2 · ${fmtId}`, pageNo);
}

function packetCover(pptx, fmtId) {
  const F = C.FORMATS[fmtId];
  const acc = accentOf(fmtId);
  const s = pptx.addSlide();
  s.background = { color: K.paper };

  s.addShape('rect', { x: 0, y: 0, w: 3.78, h: 6.15, fill: { color: K.ink } });
  s.addImage({ path: img('hero.jpg'), x: 3.78, y: 0, w: P.w - 3.78, h: 6.15, sizing: { type: 'cover', w: P.w - 3.78, h: 6.15 } });

  s.addShape('rect', { x: P.m, y: 0.5, w: 2.05, h: 0.24, fill: { color: K.manila } });
  s.addText(`STUDENT PACKET · ${fmtId}`, {
    x: P.m, y: 0.5, w: 2.05, h: 0.24,
    fontFace: MONO, fontSize: 8, bold: true, color: K.ink, align: 'center', valign: 'middle', charSpacing: 1.6,
  });
  s.addShape('rect', { x: P.m, y: 0.95, w: 2.6, h: 0.01, fill: { color: '4A423B' } });
  s.addText(`CASES 01–05\nRESPONSE FORMAT · ${fmtId}\n${C.BRAND.grades.toUpperCase()}`, {
    x: P.m, y: 1.02, w: 2.6, h: 0.7,
    fontFace: MONO, fontSize: 7.5, color: '9C948B', lineSpacing: 14, valign: 'top', charSpacing: 1.2,
  });

  s.addText([
    { text: 'Science\n', options: { color: K.paper } },
    { text: 'Detective\nCases', options: { color: acc.lt } },
  ], {
    x: P.m, y: 3.5, w: 2.9, h: 1.9,
    fontFace: DISPLAY, fontSize: 36, bold: true, valign: 'bottom', lineSpacing: 36,
  });
  s.addShape('rect', { x: P.m, y: 5.5, w: 2.2, h: 0.026, fill: { color: acc.a } });
  s.addText(C.BRAND.tagline.toUpperCase(), {
    x: P.m, y: 5.58, w: 2.9, h: 0.24,
    fontFace: MONO, fontSize: 8, color: K.manilaD, charSpacing: 1.5, valign: 'middle',
  });

  s.addText(`Five reusable investigations in matter, energy, magnetism, and conductivity. Every case uses the same reasoning routine. Your response pages use ${F.name}.`, {
    x: P.m, y: 6.45, w: CW, h: 0.6,
    fontFace: BODY, fontSize: 12.5, color: K.ink, valign: 'top', lineSpacing: 18,
  });

  let y = 7.2;
  s.addShape('rect', { x: P.m, y, w: CW, h: 0.02, fill: { color: K.ink } });
  y += 0.1;
  C.CASES.forEach((c) => {
    s.addText(c.n, { x: P.m, y, w: 0.4, h: 0.24, fontFace: MONO, fontSize: 9, bold: true, color: acc.a, valign: 'middle' });
    s.addText(c.title, { x: P.m + 0.42, y, w: 1.9, h: 0.24, fontFace: DISPLAY, fontSize: 12, bold: true, color: K.ink, valign: 'middle' });
    s.addText(c.figureOut, { x: P.m + 2.4, y, w: CW - 2.4, h: 0.24, fontFace: BODY, fontSize: 10, color: K.inkSoft, valign: 'middle' });
    s.addShape('rect', { x: P.m, y: y + 0.26, w: CW, h: 0.008, fill: { color: K.rule } });
    y += 0.34;
  });

  ['Name', 'Class / period'].forEach((t, i) => {
    const x = P.m + i * (CW / 2 + 0.14);
    const w = CW / 2 - 0.14;
    label(s, t, x, y + 0.18, w, K.inkFaint, 7.5);
    s.addShape('rect', { x, y: y + 0.6, w, h: 0.012, fill: { color: K.ink } });
  });

  s.addShape('rect', { x: P.m, y: P.h - 0.6, w: CW, h: 0.01, fill: { color: K.rule } });
  s.addText(`${C.BRAND.publisher} · CLASSROOM PACKET`, {
    x: P.m, y: P.h - 0.55, w: 4, h: 0.2, fontFace: MONO, fontSize: 7.5, color: K.inkFaint, charSpacing: 1.2, valign: 'middle',
  });
  s.addText(C.BRAND.grades.toUpperCase(), {
    x: P.w - P.m - 3.5, y: P.h - 0.55, w: 3.5, h: 0.2, fontFace: MONO, fontSize: 7.5, color: K.inkFaint,
    align: 'right', charSpacing: 1.2, valign: 'middle',
  });
}

function packetRoutine(pptx, fmtId) {
  const F = C.FORMATS[fmtId];
  const acc = accentOf(fmtId);
  const s = pptx.addSlide();
  s.background = { color: K.paper };
  slideHead(s, 'Routine', fmtId, acc);
  slideTitle(s, 'The Case File Routine', 'Use the same four moves in every case');

  let y = 1.55;
  s.addShape('rect', { x: P.m, y, w: CW, h: 0.02, fill: { color: K.ink } });
  y += 0.1;
  C.ROUTINE.forEach((m) => {
    s.addText(m.n, { x: P.m, y: y + 0.16, w: 0.55, h: 0.4, fontFace: MONO, fontSize: 21, bold: true, color: acc.lt, valign: 'middle' });
    s.addText(m.move, { x: P.m + 0.62, y: y + 0.14, w: 3, h: 0.3, fontFace: DISPLAY, fontSize: 16, bold: true, color: K.ink, valign: 'middle' });
    s.addText(m.text, { x: P.m + 0.62, y: y + 0.44, w: CW - 0.66, h: 0.28, fontFace: BODY, fontSize: 11, color: K.inkSoft, valign: 'middle' });
    s.addShape('rect', { x: P.m, y: y + 0.9, w: CW, h: 0.008, fill: { color: K.rule } });
    y += 1.0;
  });

  y += 0.25;
  label(s, 'Team roles', P.m, y, 2.5, acc.a, 8);
  let ry = y + 0.26;
  C.ROLES.forEach((r) => {
    s.addText(r.role.toUpperCase(), { x: P.m, y: ry, w: 1.5, h: 0.3, fontFace: MONO, fontSize: 8.5, bold: true, color: K.ink, valign: 'top', charSpacing: 0.6 });
    s.addText(r.text, { x: P.m + 1.55, y: ry, w: 1.85, h: 0.5, fontFace: BODY, fontSize: 10, color: K.inkSoft, valign: 'top' });
    ry += 0.8;
  });

  const bx = P.m + 3.6;
  const bh = ry - y - 0.26 + 0.26;
  s.addShape('rect', { x: bx, y, w: CW - 3.6, h: bh, fill: { color: acc.wash }, line: { color: acc.a, width: 1.5 } });
  label(s, 'Your Page 2 response', bx + 0.18, y + 0.14, 2.4, acc.a, 7.5);
  s.addText(F.name, { x: bx + 0.18, y: y + 0.36, w: CW - 3.96, h: 0.3, fontFace: DISPLAY, fontSize: 15, bold: true, color: K.ink, valign: 'middle' });
  s.addText(F.blurb, { x: bx + 0.18, y: y + 0.7, w: CW - 3.96, h: bh - 0.85, fontFace: BODY, fontSize: 10, color: K.ink, valign: 'top', lineSpacing: 14 });

  const dy = P.h - 1.05;
  s.addShape('rect', { x: P.m, y: dy, w: CW, h: 0.02, fill: { color: K.ink } });
  label(s, 'Evidence rule', P.m, dy + 0.1, 1.5, acc.a, 7.5);
  s.addText(C.EVIDENCE_RULE, { x: P.m + 1.6, y: dy + 0.06, w: CW - 1.6, h: 0.26, fontFace: BODY, fontSize: 11, italic: true, color: K.ink, valign: 'middle' });
  s.addShape('rect', { x: P.m, y: dy + 0.38, w: CW, h: 0.02, fill: { color: K.ink } });

  slideFolio(s, `Routine · ${fmtId}`, 2);
}

function buildPacketDeck() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'LETTER_P', width: P.w, height: P.h });
  pptx.layout = 'LETTER_P';
  pptx.title = 'CER & ACE Case Files — Student Packets';
  pptx.subject = 'Five hands-on science cases with CER and ACE response pages';
  pptx.company = C.BRAND.publisher;

  ['CER', 'ACE'].forEach((fmt) => {
    packetCover(pptx, fmt);
    packetRoutine(pptx, fmt);
    const w = { ...C.WORKED, n: '00' };
    packetPageOne(pptx, w, fmt, 3, true);
    packetPageTwo(pptx, w, fmt, 4, C.WORKED.answers[fmt]);
    C.CASES.forEach((c, i) => {
      packetPageOne(pptx, c, fmt, 5 + i * 2);
      packetPageTwo(pptx, c, fmt, 6 + i * 2);
    });
  });

  return pptx.writeFile({ fileName: path.join(OUT, 'CER_ACE_Case_Files_Editable_Packets.pptx') });
}

/* ============================================================
   Deck 2 — projection deck, 16:9
   ============================================================ */

const W = { w: 13.333, h: 7.5, m: 0.7 };
const WW = W.w - W.m * 2;

function deckChrome(slide, kicker, acc, n, total) {
  slide.addShape('rect', { x: 0, y: 0, w: W.w, h: 0.06, fill: { color: acc.a } });
  slide.addText(kicker.toUpperCase(), {
    x: W.m, y: W.h - 0.52, w: 8, h: 0.24,
    fontFace: MONO, fontSize: 10, color: K.inkFaint, charSpacing: 1.6, valign: 'middle',
  });
  slide.addText(`${n} / ${total}`, {
    x: W.w - W.m - 1.4, y: W.h - 0.52, w: 1.4, h: 0.24,
    fontFace: MONO, fontSize: 10, bold: true, color: K.inkSoft, align: 'right', valign: 'middle',
  });
}

function buildProjectionDeck() {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'WIDE_169', width: W.w, height: W.h });
  pptx.layout = 'WIDE_169';
  pptx.title = 'CER & ACE Case Files — Projection Deck';
  pptx.subject = 'Whiteboard deck for running the five hands-on cases';
  pptx.company = C.BRAND.publisher;

  const acc = { a: K.oxblood, lt: K.oxbloodLt, wash: K.oxbloodWash };
  const TOTAL = 20;
  let n = 0;
  const next = () => ++n;

  /* 1 — title */
  {
    const s = pptx.addSlide();
    s.background = { color: K.ink };
    s.addImage({ path: img('hero.jpg'), x: 7.2, y: 0, w: 6.133, h: W.h, sizing: { type: 'cover', w: 6.133, h: W.h } });
    s.addShape('rect', { x: W.m, y: 1.1, w: 2.4, h: 0.32, fill: { color: K.manila } });
    s.addText('CLASSROOM DECK', {
      x: W.m, y: 1.1, w: 2.4, h: 0.32,
      fontFace: MONO, fontSize: 11, bold: true, color: K.ink, align: 'center', valign: 'middle', charSpacing: 1.8,
    });
    s.addText([
      { text: 'CER & ACE\n', options: { color: K.paper } },
      { text: 'Case Files', options: { color: acc.lt } },
    ], { x: W.m, y: 2.2, w: 6.2, h: 2.2, fontFace: DISPLAY, fontSize: 48, bold: true, valign: 'top', lineSpacing: 52 });
    s.addShape('rect', { x: W.m, y: 4.6, w: 3.2, h: 0.04, fill: { color: acc.a } });
    s.addText(C.BRAND.tagline.toUpperCase(), {
      x: W.m, y: 4.8, w: 6.2, h: 0.34, fontFace: MONO, fontSize: 13, color: K.manilaD, charSpacing: 2, valign: 'middle',
    });
    s.addText(C.BRAND.grades, {
      x: W.m, y: 5.4, w: 6.2, h: 0.3, fontFace: BODY, fontSize: 14, color: '9C948B', valign: 'middle',
    });
    next();
  }

  /* 2 — the routine */
  {
    const s = pptx.addSlide();
    s.background = { color: K.paper };
    s.addText('The Case File Routine', { x: W.m, y: 0.5, w: WW, h: 0.6, fontFace: DISPLAY, fontSize: 34, bold: true, color: K.ink, valign: 'middle' });
    s.addText('Four moves. Every case.', { x: W.m, y: 1.1, w: WW, h: 0.34, fontFace: BODY, fontSize: 16, italic: true, color: K.inkSoft, valign: 'middle' });
    const cw = (WW - 0.6) / 4;
    C.ROUTINE.forEach((m, i) => {
      const x = W.m + i * (cw + 0.2);
      s.addShape('rect', { x, y: 1.85, w: cw, h: 3.9, fill: { color: i % 2 ? K.manila : acc.wash } });
      s.addText(m.n, { x: x + 0.28, y: 2.05, w: cw - 0.5, h: 0.8, fontFace: MONO, fontSize: 40, bold: true, color: acc.lt, valign: 'middle' });
      s.addText(m.move, { x: x + 0.28, y: 2.95, w: cw - 0.5, h: 0.5, fontFace: DISPLAY, fontSize: 24, bold: true, color: K.ink, valign: 'middle' });
      s.addText(m.text, { x: x + 0.28, y: 3.5, w: cw - 0.56, h: 2, fontFace: BODY, fontSize: 14, color: K.inkSoft, valign: 'top', lineSpacing: 20 });
    });
    s.addText(C.EVIDENCE_RULE, { x: W.m, y: 6.05, w: WW, h: 0.5, fontFace: BODY, fontSize: 17, italic: true, color: K.ink, valign: 'middle' });
    deckChrome(s, 'The routine', acc, next(), TOTAL);
  }

  /* 3 — CER or ACE, plus roles */
  {
    const s = pptx.addSlide();
    s.background = { color: K.paper };
    s.addText('Choose the response', { x: W.m, y: 0.5, w: WW, h: 0.6, fontFace: DISPLAY, fontSize: 34, bold: true, color: K.ink, valign: 'middle' });
    s.addText('Both need Page 1 evidence. They ask for different thinking.', { x: W.m, y: 1.1, w: WW, h: 0.34, fontFace: BODY, fontSize: 16, italic: true, color: K.inkSoft, valign: 'middle' });
    [['CER', K.oxblood, K.oxbloodWash], ['ACE', K.indigo, K.indigoWash]].forEach(([id, col, wash], i) => {
      const x = W.m + i * (WW / 2 + 0.2);
      const w = WW / 2 - 0.2;
      s.addShape('rect', { x, y: 1.9, w, h: 2.7, fill: { color: wash }, line: { color: col, width: 2 } });
      s.addText(C.FORMATS[id].name, { x: x + 0.3, y: 2.1, w: w - 0.6, h: 0.5, fontFace: DISPLAY, fontSize: 22, bold: true, color: K.ink, valign: 'middle' });
      s.addText(C.FORMATS[id].use, { x: x + 0.3, y: 2.7, w: w - 0.6, h: 1.7, fontFace: BODY, fontSize: 15, color: K.ink, valign: 'top', lineSpacing: 22 });
    });
    s.addText('Team roles', { x: W.m, y: 4.9, w: WW, h: 0.36, fontFace: MONO, fontSize: 11, bold: true, color: acc.a, charSpacing: 1.8, valign: 'middle' });
    const rw = (WW - 0.6) / 4;
    C.ROLES.forEach((r, i) => {
      const x = W.m + i * (rw + 0.2);
      s.addText(r.role.toUpperCase(), { x, y: 5.3, w: rw, h: 0.28, fontFace: MONO, fontSize: 11, bold: true, color: K.ink, valign: 'middle' });
      s.addText(r.text, { x, y: 5.6, w: rw, h: 0.6, fontFace: BODY, fontSize: 13, color: K.inkSoft, valign: 'top' });
    });
    deckChrome(s, 'CER or ACE', acc, next(), TOTAL);
  }

  /* 4–5 — the worked example */
  {
    const s = pptx.addSlide();
    s.background = { color: K.paper };
    s.addText('Worked Example: Density Deception', { x: W.m, y: 0.5, w: WW, h: 0.6, fontFace: DISPLAY, fontSize: 32, bold: true, color: K.ink, valign: 'middle' });
    s.addText(C.WORKED.mystery, { x: W.m, y: 1.15, w: WW, h: 0.4, fontFace: BODY, fontSize: 16, italic: true, color: K.inkSoft, valign: 'middle' });
    s.addImage({ path: img('case-density.jpg'), x: W.m, y: 1.75, w: 5.2, h: 3.4, sizing: { type: 'cover', w: 5.2, h: 3.4 } });
    const rows = [
      [{ text: 'TEST', options: { fontFace: MONO, fontSize: 11, bold: true, color: K.inkSoft } },
       { text: 'RESULT', options: { fontFace: MONO, fontSize: 11, bold: true, color: K.inkSoft } },
       { text: 'WHAT IT TELLS ME', options: { fontFace: MONO, fontSize: 11, bold: true, color: K.inkSoft } }],
      ...C.WORKED.evidence.rows.map((r) => r.map((t, i) => ({
        text: t, options: { fontFace: i === 0 ? MONO : BODY, fontSize: 14, color: i === 0 ? K.ink : K.inkSoft },
      }))),
    ];
    s.addTable(rows, {
      x: W.m + 5.6, y: 1.75, w: WW - 5.6, colW: [(WW - 5.6) * 0.22, (WW - 5.6) * 0.44, (WW - 5.6) * 0.34],
      rowH: [0.4, 0.75, 0.75, 0.75], margin: [6, 8, 6, 0],
      border: [{ type: 'none' }, { type: 'none' }, { pt: 0.75, color: K.rule }, { type: 'none' }],
    });
    s.addText('Ask: why can two equal-size cubes have different masses?', {
      x: W.m, y: 5.5, w: WW, h: 0.5, fontFace: BODY, fontSize: 18, italic: true, color: K.ink, valign: 'middle',
    });
    deckChrome(s, 'Worked example · the data', acc, next(), TOTAL);
  }
  {
    const s = pptx.addSlide();
    s.background = { color: K.paper };
    s.addText('From measurement to argument', { x: W.m, y: 0.5, w: WW, h: 0.6, fontFace: DISPLAY, fontSize: 32, bold: true, color: K.ink, valign: 'middle' });
    const secs = C.FORMATS.CER.sections;
    const ans = C.WORKED.answers.CER;
    const cw = (WW - 0.8) / 3;
    [0, 1, 2].forEach((i) => {
      const x = W.m + i * (cw + 0.4);
      s.addShape('rect', { x, y: 1.5, w: cw, h: 4, fill: { color: i === 2 ? K.manila : acc.wash } });
      s.addText(`${secs[i].n}  ${secs[i].head}`, { x: x + 0.25, y: 1.7, w: cw - 0.5, h: 0.4, fontFace: DISPLAY, fontSize: 20, bold: true, color: K.ink, valign: 'middle' });
      s.addText(ans[i], { x: x + 0.25, y: 2.2, w: cw - 0.5, h: 3.1, fontFace: BODY, fontSize: 14, color: K.ink, valign: 'top', lineSpacing: 21 });
    });
    s.addText('“I used the magnet” is a procedure. “The magnet removed the iron because iron is magnetic and sand is not” is reasoning.', {
      x: W.m, y: 5.8, w: WW, h: 0.5, fontFace: BODY, fontSize: 17, italic: true, color: K.inkSoft, valign: 'middle',
    });
    deckChrome(s, 'Worked example · the argument', acc, next(), TOTAL);
  }

  /* 6–20 — three slides per case */
  C.CASES.forEach((c) => {
    /* a. the mystery */
    {
      const s = pptx.addSlide();
      s.background = { color: K.ink };
      s.addImage({ path: img(c.img), x: 6.4, y: 0, w: 6.933, h: W.h, sizing: { type: 'cover', w: 6.933, h: W.h } });
      s.addShape('rect', { x: W.m, y: 1.2, w: 1.3, h: 0.34, fill: { color: acc.a } });
      s.addText(`CASE ${c.n}`, { x: W.m, y: 1.2, w: 1.3, h: 0.34, fontFace: MONO, fontSize: 11, bold: true, color: K.paper, align: 'center', valign: 'middle', charSpacing: 1.4 });
      s.addText(c.title, { x: W.m, y: 1.8, w: 5.3, h: 1.1, fontFace: DISPLAY, fontSize: 40, bold: true, color: K.paper, valign: 'top', lineSpacing: 44 });
      s.addShape('rect', { x: W.m, y: 3.05, w: 2.6, h: 0.04, fill: { color: acc.lt } });
      s.addText(c.mystery, { x: W.m, y: 3.35, w: 5.3, h: 2.4, fontFace: BODY, fontSize: 17, color: K.manila, valign: 'top', lineSpacing: 26 });
      deckChrome(s, `Case ${c.n} · the mystery`, acc, next(), TOTAL);
      s.addShape('rect', { x: 0, y: W.h - 0.06, w: W.w, h: 0.06, fill: { color: acc.a } });
    }
    /* b. what to test */
    {
      const s = pptx.addSlide();
      s.background = { color: K.paper };
      s.addText(c.title, { x: W.m, y: 0.5, w: WW, h: 0.6, fontFace: DISPLAY, fontSize: 32, bold: true, color: K.ink, valign: 'middle' });
      s.addText('What will you test, and what will it tell you?', { x: W.m, y: 1.12, w: WW, h: 0.36, fontFace: BODY, fontSize: 16, italic: true, color: K.inkSoft, valign: 'middle' });

      s.addShape('rect', { x: W.m, y: 1.7, w: WW / 2 - 0.2, h: 3.5, fill: { color: acc.wash } });
      s.addText('EVIDENCE TO COLLECT', { x: W.m + 0.3, y: 1.95, w: WW / 2 - 0.8, h: 0.3, fontFace: MONO, fontSize: 11, bold: true, color: acc.a, charSpacing: 1.6, valign: 'middle' });
      c.evidence.rows.forEach((r, i) => {
        s.addText(`${String(i + 1).padStart(2, '0')}   ${r}`, {
          x: W.m + 0.3, y: 2.4 + i * 0.75, w: WW / 2 - 0.8, h: 0.6,
          fontFace: DISPLAY, fontSize: 19, color: K.ink, valign: 'middle',
        });
      });

      const x2 = W.m + WW / 2 + 0.2;
      s.addShape('rect', { x: x2, y: 1.7, w: WW / 2 - 0.2, h: 3.5, fill: { color: K.manila } });
      s.addText('ASK WHILE THEY WORK', { x: x2 + 0.3, y: 1.95, w: WW / 2 - 0.8, h: 0.3, fontFace: MONO, fontSize: 11, bold: true, color: K.ink, charSpacing: 1.6, valign: 'middle' });
      c.questions.forEach((q, i) => {
        s.addText(q, {
          x: x2 + 0.3, y: 2.4 + i * 0.8, w: WW / 2 - 0.8, h: 0.75,
          fontFace: BODY, fontSize: 16, color: K.ink, valign: 'middle', lineSpacing: 22,
        });
      });

      s.addText([
        { text: 'MATERIALS   ', options: { fontFace: MONO, fontSize: 10, bold: true, color: K.inkFaint, charSpacing: 1.4 } },
        { text: c.materials, options: { fontFace: BODY, fontSize: 13, color: K.inkSoft } },
      ], { x: W.m, y: 5.45, w: WW, h: 0.3, valign: 'middle' });
      s.addText([
        { text: 'SAFETY   ', options: { fontFace: MONO, fontSize: 10, bold: true, color: acc.a, charSpacing: 1.4 } },
        { text: c.safety, options: { fontFace: BODY, fontSize: 13, color: K.inkSoft } },
      ], { x: W.m, y: 5.8, w: WW, h: 0.3, valign: 'middle' });
      deckChrome(s, `Case ${c.n} · run it`, acc, next(), TOTAL);
    }
    /* c. check the thinking */
    {
      const s = pptx.addSlide();
      s.background = { color: K.paper };
      s.addText('Check the thinking', { x: W.m, y: 0.5, w: WW, h: 0.6, fontFace: DISPLAY, fontSize: 32, bold: true, color: K.ink, valign: 'middle' });
      s.addText(`Case ${c.n} · ${c.title}`, { x: W.m, y: 1.12, w: WW, h: 0.36, fontFace: MONO, fontSize: 12, color: K.inkFaint, charSpacing: 1.4, valign: 'middle' });

      s.addShape('rect', { x: W.m, y: 1.8, w: WW, h: 1.5, fill: { color: K.manila } });
      s.addShape('rect', { x: W.m, y: 1.8, w: 0.07, h: 1.5, fill: { color: K.ink } });
      s.addText('COMMON MISCONCEPTION', { x: W.m + 0.35, y: 2, w: WW - 0.7, h: 0.3, fontFace: MONO, fontSize: 11, bold: true, color: K.ink, charSpacing: 1.6, valign: 'middle' });
      s.addText(c.misconception, { x: W.m + 0.35, y: 2.35, w: WW - 0.7, h: 0.8, fontFace: BODY, fontSize: 18, color: K.ink, valign: 'top', lineSpacing: 25 });

      s.addShape('rect', { x: W.m, y: 3.5, w: WW, h: 1.4, fill: { color: K.paper }, line: { color: K.rule, width: 1 } });
      s.addShape('rect', { x: W.m, y: 3.5, w: 0.07, h: 1.4, fill: { color: acc.a } });
      s.addText('ANSWER KEY', { x: W.m + 0.35, y: 3.68, w: WW - 0.7, h: 0.3, fontFace: MONO, fontSize: 11, bold: true, color: acc.a, charSpacing: 1.6, valign: 'middle' });
      s.addText(c.key, { x: W.m + 0.35, y: 4.02, w: WW - 0.7, h: 0.8, fontFace: BODY, fontSize: 15, color: K.inkSoft, valign: 'top', lineSpacing: 21 });

      s.addShape('rect', { x: W.m, y: 5.1, w: WW, h: 1.1, fill: { color: acc.wash } });
      s.addShape('rect', { x: W.m, y: 5.1, w: 0.07, h: 1.1, fill: { color: acc.a } });
      s.addText('EXTEND', { x: W.m + 0.35, y: 5.26, w: WW - 0.7, h: 0.3, fontFace: MONO, fontSize: 11, bold: true, color: acc.a, charSpacing: 1.6, valign: 'middle' });
      s.addText(c.extend, { x: W.m + 0.35, y: 5.58, w: WW - 0.7, h: 0.5, fontFace: BODY, fontSize: 15, color: K.ink, valign: 'top' });
      deckChrome(s, `Case ${c.n} · debrief`, acc, next(), TOTAL);
    }
  });

  return pptx.writeFile({ fileName: path.join(OUT, 'CER_ACE_Case_Files_Projection_Deck.pptx') });
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const a = await buildPacketDeck();
  console.log('packets deck    ', path.basename(a), (fs.statSync(a).size / 1024).toFixed(0) + ' KB');
  const b = await buildProjectionDeck();
  console.log('projection deck ', path.basename(b), (fs.statSync(b).size / 1024).toFixed(0) + ' KB');
}

main().catch((e) => { console.error(e); process.exit(1); });
