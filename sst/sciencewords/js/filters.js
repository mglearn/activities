/* ============================================================
   filters.js — client-side filtering for the activity library.

   State lives in the URL query string so a teacher can send a
   colleague a link to exactly the set they are looking at:
     activities.html?grade=3-5&area=earth-space&sst=eoy

   Nothing a student types is ever put in the URL, and no
   filter value is ever written into the page as HTML — the
   renderer uses textContent throughout.
   ============================================================ */
(function (global) {
  'use strict';

  var FACETS = ['grade', 'area', 'type', 'sst', 'ace'];

  function readState() {
    var params = new URLSearchParams(global.location.search);
    var state = { q: params.get('q') || '' };
    FACETS.forEach(function (facet) {
      var raw = params.get(facet);
      state[facet] = raw ? raw.split(',').filter(Boolean) : [];
    });
    return state;
  }

  function writeState(state, replace) {
    var params = new URLSearchParams();
    FACETS.forEach(function (facet) {
      if (state[facet] && state[facet].length) params.set(facet, state[facet].join(','));
    });
    if (state.q) params.set('q', state.q);
    var qs = params.toString();
    var url = global.location.pathname + (qs ? '?' + qs : '');
    if (replace) global.history.replaceState(null, '', url);
    else global.history.pushState(null, '', url);
  }

  function isEmpty(state) {
    if (state.q) return false;
    return FACETS.every(function (facet) { return !state[facet] || !state[facet].length; });
  }

  /* An activity's searchable text: its own fields plus the
     morphemes and terms it uses, so searching "water" finds the
     hydrosphere sheet even though the sheet never says "water"
     in its title. */
  function haystack(activity, db) {
    var bits = [activity.title, activity.description, activity.id];
    bits.push(BIBI.label('gradeBand', activity.gradeBand));
    bits.push(BIBI.label('scienceArea', activity.scienceArea));
    bits.push(BIBI.label('activityType', activity.activityType));
    (activity.morphemes || []).forEach(function (id) {
      var m = db.morphemeById[id];
      if (m) bits.push(m.display, m.meaning, (m.examples || []).join(' '));
    });
    (activity.terms || []).forEach(function (id) {
      var t = db.termById[id];
      if (t) bits.push(t.term, t.studentDefinition, t.wordPartClue);
    });
    return bits.join(' ').toLowerCase();
  }

  function matches(activity, state, db) {
    if (state.grade.length && state.grade.indexOf(activity.gradeBand) === -1) return false;
    if (state.area.length && state.area.indexOf(activity.scienceArea) === -1) return false;
    if (state.type.length && state.type.indexOf(activity.activityType) === -1) return false;
    if (state.sst.length && state.sst.indexOf(activity.sstCheckpoint) === -1) return false;
    if (state.ace.length && state.ace.indexOf(activity.ace) === -1) return false;
    if (state.q) {
      var q = state.q.toLowerCase().trim();
      if (q && haystack(activity, db).indexOf(q) === -1) return false;
    }
    return true;
  }

  function filterActivities(activities, state, db) {
    return activities.filter(function (a) { return matches(a, state, db); });
  }

  global.BIBI = global.BIBI || {};
  global.BIBI.FACETS = FACETS;
  global.BIBI.readState = readState;
  global.BIBI.writeState = writeState;
  global.BIBI.isEmptyState = isEmpty;
  global.BIBI.filterActivities = filterActivities;
  global.BIBI.searchHaystack = haystack;
})(window);
