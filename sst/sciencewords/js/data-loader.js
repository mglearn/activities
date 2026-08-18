/* ============================================================
   data-loader.js — fetches the JSON data files once and hands
   back plain objects plus a few lookup helpers.

   Everything on this site renders from data/. Nothing about a
   morpheme, a science term, or an activity is written into a
   page by hand, so a correction made in one JSON file shows up
   everywhere it is used.
   ============================================================ */
(function (global) {
  'use strict';

  var CACHE = {};

  function loadJSON(path) {
    if (!CACHE[path]) {
      CACHE[path] = fetch(path).then(function (res) {
        if (!res.ok) throw new Error('Could not load ' + path + ' (' + res.status + ')');
        return res.json();
      });
    }
    return CACHE[path];
  }

  /* Pages sit at the site root, so data paths are relative to it. */
  function loadAll(base) {
    var b = base || 'data/';
    return Promise.all([
      loadJSON(b + 'morphemes.json'),
      loadJSON(b + 'science-terms.json'),
      loadJSON(b + 'activities.json'),
      loadJSON(b + 'standards.json')
    ]).then(function (parts) {
      var db = {
        morphemes: parts[0].morphemes,
        terms: parts[1].terms,
        activities: parts[2].activities,
        standards: parts[3]
      };
      db.morphemeById = index(db.morphemes, 'id');
      db.termById = index(db.terms, 'id');
      db.activityById = index(db.activities, 'id');
      return db;
    });
  }

  function index(list, key) {
    var map = {};
    list.forEach(function (item) { map[item[key]] = item; });
    return map;
  }

  var LABELS = {
    gradeBand: { '3-5': 'Grades 3–5', '6-8': 'Grades 6–8', '9-12': 'Grades 9–12' },
    scienceArea: {
      'matter-energy': 'Matter and Energy',
      'force-motion-energy': 'Force, Motion, and Energy',
      'earth-space': 'Earth and Space',
      'organisms-environments': 'Organisms and Environments',
      'biology': 'Biology',
      'chemistry': 'Chemistry',
      'physics': 'Physics',
      'earth-environmental': 'Earth / Environmental Science'
    },
    sstCheckpoint: { boy: 'BOY', moy: 'MOY', eoy: 'EOY' },
    ace: { articulate: 'Articulate', connect: 'Connect', extend: 'Extend' },
    activityType: {
      break: 'Break It',
      build: 'Build It',
      decode: 'Decode It',
      sort: 'Sort It',
      detective: 'Word Detective',
      mystery: 'Mystery Word',
      stimulus: 'Decode the Stimulus',
      equation: 'Word Equation',
      partner: 'Partner Challenge',
      exit: 'Exit Ticket'
    },
    morphemeType: {
      prefix: 'Prefix',
      root: 'Root',
      'combining-form': 'Combining form',
      suffix: 'Suffix',
      word: 'Word'
    }
  };

  function label(kind, value) {
    var group = LABELS[kind] || {};
    return group[value] || value;
  }

  /* Chip class: combining forms behave like roots visually, so
     students see three shapes, not four. */
  function chipClass(type) {
    if (type === 'prefix') return 'prefix';
    if (type === 'suffix') return 'suffix';
    if (type === 'word') return 'word';
    return 'root';
  }

  global.BIBI = global.BIBI || {};
  global.BIBI.loadJSON = loadJSON;
  global.BIBI.loadAll = loadAll;
  global.BIBI.label = label;
  global.BIBI.LABELS = LABELS;
  global.BIBI.chipClass = chipClass;
})(window);
