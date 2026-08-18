/* ============================================================
   app.js — page controllers.

   Each page sets data-page on <body>; this file renders the
   parts of that page that come from data/. Every node is built
   with createElement and textContent — no innerHTML anywhere,
   so a search string can never become markup.
   ============================================================ */
(function () {
  'use strict';

  var PAGE = document.body.getAttribute('data-page');

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function fail(container, err) {
    container.textContent = '';
    var box = el('div', 'empty');
    box.appendChild(el('p', null, 'The activity data could not be loaded.'));
    box.appendChild(el('p', null, String(err && err.message ? err.message : err)));
    container.appendChild(box);
  }

  /* ---------------- activity card ---------------- */

  function renderActivityCard(activity) {
    var li = el('li', 'acard');
    li.appendChild(el('h3', null, activity.title));
    li.appendChild(el('p', 'meta', BIBI.label('gradeBand', activity.gradeBand) + ' · ' +
      BIBI.label('scienceArea', activity.scienceArea)));

    var tags = el('div', 'tags');
    tags.appendChild(el('span', 'tag sst', BIBI.label('sstCheckpoint', activity.sstCheckpoint)));
    tags.appendChild(el('span', 'tag ace', BIBI.label('ace', activity.ace)));
    tags.appendChild(el('span', 'tag', BIBI.label('activityType', activity.activityType)));
    tags.appendChild(el('span', 'tag', activity.estimatedMinutes + ' min'));
    li.appendChild(tags);

    li.appendChild(el('p', 'desc', activity.description));

    var actions = el('div', 'actions');
    actions.appendChild(link('print/color/grades-' + activity.gradeBand + '/' + activity.id + '.html',
      'btn small', 'Color', 'Open the colour handout for ' + activity.title));
    actions.appendChild(link('print/bw/grades-' + activity.gradeBand + '/' + activity.id + '.html',
      'btn small alt', 'B&W', 'Open the black-and-white handout for ' + activity.title));
    actions.appendChild(link('teacher-keys/' + activity.id + '-key.html',
      'btn small alt', 'Teacher key', 'Open the teacher key for ' + activity.title));
    li.appendChild(actions);
    return li;
  }

  function link(href, className, text, ariaLabel) {
    var a = el('a', className, text);
    a.href = href;
    if (ariaLabel) a.setAttribute('aria-label', ariaLabel);
    return a;
  }

  /* ---------------- home ---------------- */

  function initHome(db) {
    setCount('stat-morphemes', db.morphemes.length);
    setCount('stat-terms', db.terms.length);
    setCount('stat-activities', db.activities.length);

    var bands = ['3-5', '6-8', '9-12'];
    bands.forEach(function (band) {
      var node = document.getElementById('band-count-' + band);
      if (!node) return;
      var n = db.activities.filter(function (a) { return a.gradeBand === band; }).length;
      node.textContent = n === 1 ? '1 activity' : n + ' activities';
    });

    var featured = document.getElementById('featured');
    if (featured) {
      var picks = ['g35-decode-hydrosphere', 'g35-detective-photosynthesis', 'g35-stimulus-eoy-geothermal'];
      picks.forEach(function (id) {
        var a = db.activityById[id];
        if (a) featured.appendChild(renderActivityCard(a));
      });
    }
  }

  function setCount(id, value) {
    var node = document.getElementById(id);
    if (node) node.textContent = value;
  }

  /* ---------------- activity library ---------------- */

  function initLibrary(db) {
    var list = document.getElementById('activity-list');
    var countNode = document.getElementById('result-count');
    var form = document.getElementById('filter-form');
    var search = document.getElementById('q');
    var resetBtn = document.getElementById('reset');
    var state = BIBI.readState();

    /* Reflect URL state onto the controls. */
    search.value = state.q;
    BIBI.FACETS.forEach(function (facet) {
      state[facet].forEach(function (value) {
        var box = form.querySelector('input[name="' + facet + '"][value="' + cssEscape(value) + '"]');
        if (box) box.checked = true;
      });
    });

    function collect() {
      var next = { q: search.value };
      BIBI.FACETS.forEach(function (facet) {
        next[facet] = Array.prototype.slice
          .call(form.querySelectorAll('input[name="' + facet + '"]:checked'))
          .map(function (box) { return box.value; });
      });
      return next;
    }

    function render(current, replace) {
      var results = BIBI.filterActivities(db.activities, current, db);
      list.textContent = '';
      if (!results.length) {
        var empty = el('li', 'empty');
        empty.appendChild(el('p', null, 'No activities match those filters yet.'));
        empty.appendChild(el('p', null, 'Grades 6–8 and 9–12 collections are still being built. Try clearing a filter.'));
        list.appendChild(empty);
      } else {
        results.forEach(function (activity) { list.appendChild(renderActivityCard(activity)); });
      }
      countNode.textContent = results.length === 1
        ? '1 activity'
        : results.length + ' activities';
      BIBI.writeState(current, replace !== false);
    }

    form.addEventListener('change', function () { render(collect()); });
    search.addEventListener('input', function () { render(collect()); });
    resetBtn.addEventListener('click', function () {
      form.reset();
      search.value = '';
      render(collect());
    });
    window.addEventListener('popstate', function () {
      var restored = BIBI.readState();
      search.value = restored.q;
      form.reset();
      BIBI.FACETS.forEach(function (facet) {
        restored[facet].forEach(function (value) {
          var box = form.querySelector('input[name="' + facet + '"][value="' + cssEscape(value) + '"]');
          if (box) box.checked = true;
        });
      });
      render(restored, false);
    });

    render(state, true);
  }

  /* Values in the data are simple slugs, but escape anyway
     rather than trusting that to stay true. */
  function cssEscape(value) {
    return String(value).replace(/["\\]/g, '\\$&');
  }

  /* ---------------- word parts explorer ---------------- */

  function initWordParts(db) {
    var list = document.getElementById('morpheme-list');
    var search = document.getElementById('mq');
    var countNode = document.getElementById('morpheme-count');

    function render() {
      var q = search.value.toLowerCase().trim();
      var results = db.morphemes.filter(function (m) {
        if (!q) return true;
        var bits = [m.display, m.meaning, m.type, (m.examples || []).join(' '), m.studentNote].join(' ').toLowerCase();
        return bits.indexOf(q) !== -1;
      });
      list.textContent = '';
      if (!results.length) {
        var empty = el('li', 'empty');
        empty.appendChild(el('p', null, 'No word parts match that search.'));
        list.appendChild(empty);
      }
      results.forEach(function (m) { list.appendChild(renderMorphemeCard(m, db)); });
      countNode.textContent = results.length === 1 ? '1 word part' : results.length + ' word parts';
    }

    search.addEventListener('input', render);
    render();
  }

  function renderMorphemeCard(m, db) {
    var li = el('li', 'mcard');
    var head = el('h3');
    var chip = el('span', 'chip ' + BIBI.chipClass(m.type));
    chip.appendChild(el('span', 'role', BIBI.label('morphemeType', m.type)));
    chip.appendChild(document.createTextNode(m.display));
    head.appendChild(chip);
    li.appendChild(head);
    li.appendChild(el('p', 'meaning', m.meaning));

    var dl = el('dl');
    dl.appendChild(el('dt', null, 'Seen in'));
    dl.appendChild(el('dd', null, (m.examples || []).join(', ')));
    dl.appendChild(el('dt', null, 'Grades'));
    dl.appendChild(el('dd', null, (m.gradeBands || []).map(function (b) {
      return BIBI.label('gradeBand', b).replace('Grades ', '');
    }).join(', ')));
    dl.appendChild(el('dt', null, 'Science areas'));
    dl.appendChild(el('dd', null, (m.scienceAreas || []).map(function (a) {
      return BIBI.label('scienceArea', a);
    }).join(', ')));
    dl.appendChild(el('dt', null, 'Student note'));
    dl.appendChild(el('dd', null, m.studentNote));
    li.appendChild(dl);

    (m.cautions || []).forEach(function (caution) {
      li.appendChild(el('p', 'caution', caution));
    });

    var using = db.activities.filter(function (a) {
      return (a.morphemes || []).indexOf(m.id) !== -1;
    });
    if (using.length) {
      var a = el('a', 'btn small alt', 'Activities using ' + m.display);
      a.href = 'activities.html?q=' + encodeURIComponent(m.display.toLowerCase());
      li.appendChild(a);
    }
    return li;
  }

  /* ---------------- standards ---------------- */

  function initStandards(db) {
    var host = document.getElementById('standards-status');
    if (!host) return;
    ['teks', 'ngss'].forEach(function (kind) {
      var data = db.standards[kind];
      var panel = el('div', 'panel');
      panel.appendChild(el('h3', null, kind.toUpperCase() + ' — verified entries'));
      if (!data.entries.length) {
        panel.appendChild(el('p', null,
          'None listed yet. A code appears here only after it has been checked against the primary ' +
          'source, with the source URL and the date recorded in data/standards.json.'));
      } else {
        panel.appendChild(el('p', null, data.entries.length + ' verified entries.'));
      }
      var a = el('a', 'btn small alt', 'Primary source');
      a.href = data.source;
      a.target = '_blank';
      a.rel = 'noopener';
      panel.appendChild(a);
      host.appendChild(panel);
    });
  }

  /* ---------------- boot ---------------- */

  var MAIN = {
    home: initHome,
    activities: initLibrary,
    'word-parts': initWordParts,
    standards: initStandards
  };

  if (MAIN[PAGE]) {
    BIBI.loadAll('data/').then(MAIN[PAGE]).catch(function (err) {
      var host = document.getElementById('activity-list') ||
        document.getElementById('morpheme-list') ||
        document.getElementById('standards-status') ||
        document.querySelector('main');
      if (host) fail(host, err);
      /* eslint-disable-next-line no-console */
      console.error(err);
    });
  }
})();
