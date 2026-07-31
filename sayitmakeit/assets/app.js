/* Say It, Make It — chrome i18n registration + catalog filter/search + helper tools. */
(function () {
  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded',fn); }
  ready(function () {
    var I18N = window.BreakoutI18n;
    if (I18N && window.SIMK_CHROME) { I18N.register('sayitmakeit', window.SIMK_CHROME); }
    if (I18N && window.SIMK_ACT) { I18N.extend('sayitmakeit', window.SIMK_ACT); }
    var t = function(k,v){ return I18N ? I18N.t(k,v) : k; };

    /* ---------- catalog page only ---------- */
    var q = document.getElementById('q');
    var cards = [].slice.call(document.querySelectorAll('.acard'));
    var sections = [].slice.call(document.querySelectorAll('.strand-sec'));
    var chips = [].slice.call(document.querySelectorAll('.chip'));
    var qinfo = document.getElementById('qinfo');
    var noresults = document.getElementById('noresults');
    var strand = 'all';

    function apply() {
      if (!cards.length) return;
      var term = (q && q.value || '').trim().toLowerCase();
      var n = 0;
      cards.forEach(function (c) {
        var okS = strand === 'all' || c.getAttribute('data-strand') === strand;
        var okQ = !term || (c.getAttribute('data-search') || '').indexOf(term) > -1;
        var show = okS && okQ;
        c.classList.toggle('hide', !show);
        if (show) n++;
      });
      sections.forEach(function (s) {
        var any = s.querySelectorAll('.acard:not(.hide)').length;
        s.classList.toggle('hide', any === 0);
      });
      if (qinfo) qinfo.textContent = t('results_count', { n: n });
      if (noresults) noresults.hidden = n > 0;
    }

    if (q) q.addEventListener('input', apply);
    chips.forEach(function (ch) {
      ch.addEventListener('click', function () {
        chips.forEach(function (x) { x.classList.remove('active'); });
        ch.classList.add('active');
        strand = ch.getAttribute('data-strand') || 'all';
        apply();
      });
    });

    /* ---------- helper tools ---------- */
    function pop(html) {
      var old = document.querySelector('.pop'); if (old) old.remove();
      var d = document.createElement('div'); d.className = 'pop'; d.innerHTML =
        '<button class="x" aria-label="close">✕</button>' + html;
      document.body.appendChild(d);
      d.querySelector('.x').onclick = function () { d.remove(); if (d._iv) clearInterval(d._iv); };
      return d;
    }
    var surprise = document.getElementById('surprise');
    if (surprise) surprise.onclick = function () {
      var vis = cards.filter(function (c) { return !c.classList.contains('hide'); });
      var pool = vis.length ? vis : cards;
      if (pool.length) location.href = pool[Math.floor(Math.random() * pool.length)].getAttribute('href');
    };
    var assign = document.getElementById('assign');
    if (assign) assign.onclick = function () {
      var roles = ['role_describer','role_builder','role_clarifier','role_messenger','role_observer','role_checker']
        .map(function (k) { return t(k); });
      // shuffle
      for (var i = roles.length - 1; i > 0; i--) { var j = Math.floor(Math.random()*(i+1)); var x=roles[i];roles[i]=roles[j];roles[j]=x; }
      pop('<h4>' + t('tool_roles') + '</h4><ol style="padding-left:18px">' +
        roles.map(function (r) { return '<li>' + r + '</li>'; }).join('') + '</ol>');
    };
    var timer = document.getElementById('timer');
    if (timer) timer.onclick = function () {
      var secs = 120;
      var d = pop('<h4>' + t('tool_timer') + '</h4><div class="big" id="tv">2:00</div>' +
        '<button class="tbtn" id="t-start">' + t('timer_start') + '</button> ' +
        '<button class="tbtn" id="t-reset">' + t('timer_reset') + '</button>');
      var tv = d.querySelector('#tv');
      function paint(){ var m=Math.floor(secs/60), s=secs%60; tv.textContent = m + ':' + (s<10?'0':'') + s; }
      d.querySelector('#t-start').onclick = function () {
        if (d._iv) return;
        d._iv = setInterval(function () { if (secs>0){secs--;paint();} else {clearInterval(d._iv);d._iv=null;} }, 1000);
      };
      d.querySelector('#t-reset').onclick = function () { clearInterval(d._iv); d._iv=null; secs=120; paint(); };
    };

    /* re-render dynamic strings on language change */
    window.addEventListener('breakout-i18n:changed', apply);
    apply();
  });
})();
