#!/usr/bin/env node
/* ============================================================
   CER & ACE Case Files — page renderers
   Shared by the PDF build (build.js) and the design canvas
   (build-canvas.js) so a layout change lands in both at once.
   Every function returns one <section class="page"> of markup;
   the caller supplies the document shell and the stylesheet.
   ============================================================ */

const C = require('./content.js');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------- shared fragments ---------- */

function runhead({ caseNo, left, stamp }) {
  return `<div class="runhead">
    ${caseNo ? `<span class="case-no">${esc(caseNo)}</span>` : ''}
    <span>${esc(left)}</span>
    <span class="spacer"></span>
    ${stamp ? `<span class="stamp">${esc(stamp)}</span>` : ''}
  </div>`;
}

function folio(left, n) {
  return `<div class="folio"><span>${esc(left)}</span><span class="spacer"></span><span class="n">${esc(n)}</span></div>`;
}

function titleBlock(title, deck) {
  return `<div class="title-block">
    <h1>${esc(title)}</h1>
    <div class="deck">${esc(deck)}</div>
  </div>`;
}

const idline = () => `<div class="idline">
  <div class="name">Name</div><div class="date">Date</div><div class="group">Group</div>
</div>`;

function mystery(text) {
  return `<div class="mystery"><span class="lab">The mystery</span><p>${esc(text)}</p></div>`;
}

function plate(img, cap, grow) {
  return `<div class="plate${grow ? ' grow' : ''}"><img src="../../assets/${img}" alt=""><span class="cap">${esc(cap)}</span></div>`;
}

function strip(materials, safety) {
  return `<div class="strip">
    <div class="row"><span class="lab">Materials</span><span class="val">${esc(materials)}</span></div>
    <div class="row safety"><span class="lab">Safety</span><span class="val">${esc(safety)}</span></div>
  </div>`;
}

function shead(n, text) {
  return `<div class="shead">${n ? `<span class="n">${esc(n)}</span>` : ''}<span>${esc(text)}</span></div>`;
}

/* Evidence log tables. `rows` is either a list of row labels (blank
   worksheet) or a list of [label, a, b] triples (worked example). */
function logTable(headers, rows, opts = {}) {
  const body = rows.map((r) => {
    if (Array.isArray(r)) {
      return `<tr><td class="k">${esc(r[0])}</td><td class="filled">${esc(r[1])}</td><td class="filled">${esc(r[2])}</td></tr>`;
    }
    return `<tr class="blank${opts.tall ? ' tall' : ''}"><td class="k">${esc(r)}</td><td></td><td></td></tr>`;
  }).join('\n');
  return `<table class="log${opts.grow ? ' grow' : ''}">
    <colgroup><col class="c1"><col class="c2"><col class="c3"></colgroup>
    <thead><tr>${headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
    <tbody>${body}</tbody>
  </table>`;
}

/* ---------- page 1: the investigation ---------- */

function pageOne(c, fmt, pageNo, isWorked) {
  const obsHeaders = [c.observe.label, 'What I observe', 'Tool or test used'];
  const evHeaders = ['Test performed', 'Result / data', 'What it tells me'];
  return `<section class="page interior">
    ${runhead({ caseNo: `Case ${c.n}`, left: C.BRAND.title, stamp: `Page 1 · ${fmt}` })}
    ${titleBlock(c.title, c.deck)}
    ${idline()}
    ${mystery(c.mystery)}
    ${plate(c.img, `Case ${c.n} · evidence tray`)}
    ${strip(c.materials, c.safety)}
    ${shead('Step 1', 'Observe before you explain')}
    ${logTable(obsHeaders, c.observe.rows)}
    ${shead('Step 2', 'Collect evidence')}
    ${logTable(evHeaders, c.evidence.rows, { tall: true, grow: !isWorked })}
    ${folio(`${isWorked ? 'Worked example' : `Case ${c.n}`} · Page 1 · ${fmt}`, pageNo)}
  </section>`;
}

/* ---------- page 2: the response ---------- */

function pageTwo(c, fmtId, pageNo, answers) {
  const F = C.FORMATS[fmtId];
  const fields = F.sections.map((s, i) => {
    const ans = answers ? answers[i] : null;
    const bodyHeight = s.lines * 18;
    const body = ans
      ? `<div class="answer">${esc(ans)}</div>`
      : `<div class="rules" style="min-height:${bodyHeight}pt"></div>`;
    return `<div class="field ${s.tone}" style="flex:${s.lines} 1 auto">
      <div class="head"><span class="marker">${esc(s.n)}</span><h3>${esc(s.head)}</h3></div>
      <div class="hint">${esc(s.hint)}</div>
      ${body}
    </div>`;
  }).join('\n');

  const check = F.checklist
    ? `<div class="checkline">${F.checklist.map((t) => `<span>${esc(t)}</span>`).join('')}</div>`
    : '';

  return `<section class="page interior">
    ${runhead({ caseNo: `Case ${c.n}`, left: C.BRAND.title, stamp: `Page 2 · ${fmtId}` })}
    ${titleBlock(c.title, F.pageDeck)}
    <div class="note-strip"><b>How to use this page</b>${esc(F.intro)}</div>
    <div style="height:9pt"></div>
    <div class="resp">${fields}</div>
    ${check}
    <div style="height:8pt"></div>
    <div class="stems"><b>Stems</b>${esc(F.stems)}</div>
    ${folio(`Case ${c.n} · Page 2 · ${fmtId}`, pageNo)}
  </section>`;
}

/* ---------- student packet cover ---------- */

function studentCover(fmtId) {
  const F = C.FORMATS[fmtId];
  const rows = C.CASES.map((c) => `<div class="r">
    <span class="no">${esc(c.n)}</span>
    <span class="t">${esc(c.title)}</span>
    <span class="d">${esc(c.figureOut)}</span>
  </div>`).join('\n');

  return `<section class="page cover">
    <div class="split">
      <div class="field">
        <span class="edition">Student packet · ${esc(fmtId)}</span>
        <div class="filetab">Cases 01–05<br>Response format · ${esc(fmtId)}<br>${esc(C.BRAND.grades)}</div>
        <h1>CER &amp; ACE<span class="b">Case Files</span></h1>
        <div class="tagline">${esc(C.BRAND.tagline)}</div>
      </div>
      <div class="shot"><img src="../../assets/hero.jpg" alt=""></div>
    </div>
    <div class="body">
      <p class="lede">Five reusable investigations in matter, energy, magnetism, and conductivity. Every case uses the same reasoning routine, so you can put your attention on the evidence instead of on learning a new worksheet. Your response pages use <strong>${esc(F.name)}</strong>.</p>
      <div class="contents">${rows}</div>
      <div class="whose"><div class="n">Name</div><div class="c">Class / period</div></div>
    </div>
    <div class="footer">
      <span>${esc(C.BRAND.publisher)} · Classroom packet</span>
      <span class="spacer"></span>
      <span>${esc(C.BRAND.grades)}</span>
    </div>
  </section>`;
}

/* ---------- routine page ---------- */

function routinePage(fmtId, pageNo) {
  const F = C.FORMATS[fmtId];
  const moves = C.ROUTINE.map((m) => `<div class="move">
    <span class="n">${esc(m.n)}</span>
    <div><h3>${esc(m.move)}</h3><p>${esc(m.text)}</p></div>
  </div>`).join('\n');

  const roles = C.ROLES.map((r) => `<div class="r"><span class="k">${esc(r.role)}</span><span class="v">${esc(r.text)}</span></div>`).join('\n');

  return `<section class="page interior">
    ${runhead({ caseNo: 'Routine', left: C.BRAND.title, stamp: fmtId })}
    ${titleBlock('The Case File Routine', 'Use the same four moves in every case')}
    <div class="moves grow">${moves}</div>
    <div class="two-col grow">
      <div>
        ${shead('', 'Team roles')}
        <div class="roles">${roles}</div>
      </div>
      <div class="choicebox">
        <div class="k">Your Page 2 response</div>
        <h3>${esc(F.name)}</h3>
        <p>${esc(F.blurb)}</p>
      </div>
    </div>
    <div class="rule-note">
      <span class="k">Evidence rule</span>
      <span class="v">${esc(C.EVIDENCE_RULE)}</span>
    </div>
    ${folio(`Routine · ${fmtId}`, pageNo)}
  </section>`;
}

/* ---------- student packet document ---------- */

function studentPacketPages(fmtId) {
  const pages = [studentCover(fmtId), routinePage(fmtId, 2)];
  const w = C.WORKED;
  pages.push(pageOne({ ...w, n: '00' }, fmtId, 3, true));
  pages.push(pageTwo({ ...w, n: '00' }, fmtId, 4, w.answers[fmtId]));
  C.CASES.forEach((c, i) => {
    pages.push(pageOne(c, fmtId, 5 + i * 2));
    pages.push(pageTwo(c, fmtId, 6 + i * 2));
  });
  return pages;
}

/* ============================================================
   Teacher guide
   ============================================================ */

function teacherCover() {
  const rows = C.CASES.map((c) => `<div class="r">
    <span class="no">${esc(c.n)}</span>
    <span class="t">${esc(c.title)}</span>
    <span class="d">${esc(c.focus)}</span>
  </div>`).join('\n');

  return `<section class="page cover">
    <div class="split">
      <div class="field">
        <span class="edition">Teacher edition</span>
        <div class="filetab">Prep · keys · questions<br>Standards · scaffolds<br>${esc(C.BRAND.grades)}</div>
        <h1>CER &amp; ACE<span class="b">Case Files</span></h1>
        <div class="tagline">${esc(C.BRAND.tagline)}</div>
      </div>
      <div class="shot"><img src="../../assets/hero.jpg" alt=""></div>
    </div>
    <div class="body">
      <p class="lede">Five hands-on cases, one reasoning routine, and two response formats. Each case is a Page 1 investigation plus your choice of a Page 2 response: <strong>CER</strong> or <strong>ACE</strong>.</p>
      <div class="contents">${rows}</div>
      <div style="height:16pt"></div>
      <div class="note-strip"><b>About the standards in this guide</b>${esc(C.STANDARDS.caveat)}</div>
    </div>
    <div class="footer">
      <span>${esc(C.BRAND.publisher)} · Classroom packet</span>
      <span class="spacer"></span>
      <span>${esc(C.BRAND.grades)}</span>
    </div>
  </section>`;
}

function quickStartPage(pageNo) {
  const steps = C.QUICK_START.steps.map((s) => `<div class="s">
    <span class="n">${esc(s.n)}</span>
    <h3>${esc(s.head)}</h3>
    <p>${esc(s.text)}</p>
  </div>`).join('\n');

  const changes = C.QUICK_START.changes.map((t) => `<li>${esc(t)}</li>`).join('\n');

  return `<section class="page interior">
    ${runhead({ caseNo: 'Start', left: C.BRAND.title, stamp: 'Teacher guide' })}
    ${titleBlock('Quick Start', 'One routine, five cases, two reasoning choices')}
    <div class="mystery"><span class="lab">Before the first case</span><p>${esc(C.QUICK_START.lede)}</p></div>
    <div style="height:4pt"></div>
    ${shead('', 'Four moves to run it')}
    <div class="tg-steps grow">${steps}</div>
    ${shead('', 'What changed in this edition')}
    <ul class="ticks grow">${changes}</ul>
    <div style="height:12pt"></div>
    ${shead('', 'Which response format')}
    <div class="panels">
      <div class="panel"><h3>Use CER when</h3><p>${esc(C.FORMATS.CER.use)}</p></div>
      <div class="panel key"><h3>Use ACE when</h3><p>${esc(C.FORMATS.ACE.use)}</p></div>
    </div>
    ${folio('Teacher guide · Quick start', pageNo)}
  </section>`;
}

function standardsPage(pageNo) {
  const rows = C.CASES.map((c) => {
    const mark = (t) => esc(t).replace(/^(Direct[^:]*|Practice|Content|Phenomenon|DCI connection|Direct property match):/, '<b>$1:</b>');
    return `<tr>
      <td class="case"><span class="no">${esc(c.n)}</span>${esc(c.title)}</td>
      <td>${mark(c.tx)}</td>
      <td>${mark(c.ngss)}</td>
    </tr>`;
  }).join('\n');

  const practices = C.STANDARDS.practices.map((t) => `<li>${esc(t)}</li>`).join('\n');
  const sources = C.STANDARDS.sources.map(([k, v]) => `<div class="s"><span class="k">${esc(k)}</span><span class="v">${esc(v)}</span></div>`).join('\n');

  return `<section class="page interior">
    ${runhead({ caseNo: 'Map', left: C.BRAND.title, stamp: 'Teacher guide' })}
    ${titleBlock('Standards Planning Map', 'Direct matches are labeled; bridges and extensions are not overclaimed')}
    <div class="note-strip"><b>Grade band</b>${esc(C.STANDARDS.note)}</div>
    <div style="height:12pt"></div>
    <table class="std grow">
      <colgroup><col style="width:22%"><col style="width:39%"><col style="width:39%"></colgroup>
      <thead><tr><th>Case</th><th>Texas connection</th><th>NGSS connection</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    ${shead('', 'Science and engineering practices used across cases')}
    <ul class="ticks">${practices}</ul>
    <div style="height:14pt"></div>
    ${shead('', 'Verification sources')}
    <div class="sources">${sources}</div>
    ${folio('Teacher guide · Standards', pageNo)}
  </section>`;
}

function teacherCasePage(c, pageNo) {
  const questions = c.questions.map((q) => `<li>${esc(q)}</li>`).join('\n');
  return `<section class="page interior">
    ${runhead({ caseNo: `Case ${c.n}`, left: C.BRAND.title, stamp: 'Teacher guide' })}
    ${titleBlock(c.title, c.deck)}
    ${plate(c.img, `Case ${c.n} · ${c.focus}`, true)}
    ${mystery(c.mystery)}
    <div class="panels">
      <div class="panel"><h3>Prep and setup</h3><p>${esc(c.prep)}</p></div>
      <div class="panel key"><h3>Answer key</h3><p>${esc(c.key)}</p></div>
    </div>
    ${shead('', 'Questions to ask while circulating')}
    <ul class="ticks">${questions}</ul>
    <div style="height:12pt"></div>
    <div class="flag">
      <div class="k">Common misconception</div>
      <p>${esc(c.misconception)}</p>
    </div>
    <div class="flag extend">
      <div class="k">Extend</div>
      <p>${esc(c.extend)}</p>
    </div>
    ${folio(`Teacher guide · Case ${c.n}`, pageNo)}
  </section>`;
}

function assessmentPage(pageNo) {
  const rows = C.ASSESSMENT.rubric.map(([crit, cer, cp, ace, ap]) => `<tr>
    <td class="crit">${esc(crit)}</td>
    <td>${esc(cer)}</td><td class="pts">${cp}</td>
    <td>${esc(ace)}</td><td class="pts">${ap}</td>
  </tr>`).join('\n');

  const scaffolds = C.ASSESSMENT.scaffolds.map((t) => `<li>${esc(t)}</li>`).join('\n');
  const grades = C.ASSESSMENT.grades.map(([k, v]) => `<div class="g"><span class="k">${esc(k)}</span><span class="v">${esc(v)}</span></div>`).join('\n');

  return `<section class="page interior">
    ${runhead({ caseNo: 'Score', left: C.BRAND.title, stamp: 'Teacher guide' })}
    ${titleBlock('Assessment, Scaffolds, and Adaptation', 'Keep the evidence demand while changing the language demand')}
    <table class="rub">
      <colgroup><col style="width:24%"><col style="width:30%"><col style="width:8%"><col style="width:30%"><col style="width:8%"></colgroup>
      <thead><tr>
        <th>Criterion</th>
        <th class="cerhead">CER quick check</th><th class="pts cerhead">Pts</th>
        <th class="acehead">ACE quick check</th><th class="pts acehead">Pts</th>
      </tr></thead>
      <tbody>${rows}
        <tr class="total"><td>Total</td><td></td><td class="pts">10</td><td></td><td class="pts">10</td></tr>
      </tbody>
    </table>
    ${shead('', 'Language and access scaffolds')}
    <ul class="ticks grow">${scaffolds}</ul>
    <div style="height:13pt"></div>
    ${shead('', 'Adapt the same case across K–16')}
    <div class="grade-ladder grow">${grades}</div>
    <div class="flag">
      <div class="k">Teacher safety check</div>
      <p>${esc(C.ASSESSMENT.safety)}</p>
    </div>
    ${folio('Teacher guide · Assessment', pageNo)}
  </section>`;
}

function teacherGuidePages() {
  const pages = [teacherCover(), quickStartPage(2), standardsPage(3)];
  C.CASES.forEach((c, i) => pages.push(teacherCasePage(c, 4 + i)));
  pages.push(assessmentPage(9));
  return pages;
}

module.exports = {
  esc, runhead, folio, titleBlock, idline, mystery, plate, strip, shead, logTable,
  pageOne, pageTwo, studentCover, routinePage, studentPacketPages,
  teacherCover, quickStartPage, standardsPage, teacherCasePage, assessmentPage,
  teacherGuidePages,
};
