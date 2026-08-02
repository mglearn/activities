(function () {
  'use strict';

  var STORAGE_KEY = 'plotpointCopyrightAccess';
  var PASSCODE = 'sapientia';
  var REQUEST_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdz41GKfI4kAbPUEutQnbNIbmQuk4MgWOzhq2ZURbFjrv35xQ/viewform?usp=header';

  function hasAccess() {
    try { return sessionStorage.getItem(STORAGE_KEY) === 'granted'; }
    catch (e) { return false; }
  }

  function grantAccess() {
    try { sessionStorage.setItem(STORAGE_KEY, 'granted'); }
    catch (e) { /* The current page can still be unlocked. */ }
  }

  window.PlotPointCopyrightAccess = {
    hasAccess: hasAccess,
    submit: function (value) {
      if (String(value || '').trim().toLowerCase() !== PASSCODE) return false;
      grantAccess();
      window.dispatchEvent(new CustomEvent('plotpoint:copyright-access-granted'));
      return true;
    },
    requestUrl: REQUEST_URL
  };

  var loader = document.currentScript;
  if (!loader || !loader.hasAttribute('data-protect-room') || hasAccess()) return;

  var style = document.createElement('style');
  style.textContent =
    'html.pp-access-locked,html.pp-access-locked body{overflow:hidden}' +
    '.pp-access-screen{position:fixed;z-index:2147483647;inset:0;display:grid;place-items:center;padding:22px;background:linear-gradient(145deg,#12163a,#5a34a6);font-family:Nunito,system-ui,sans-serif;color:#191d33}' +
    '.pp-access-box{width:min(520px,100%);background:#fff;border:3px solid #f5c542;border-radius:20px;padding:28px;box-shadow:0 24px 70px rgba(0,0,0,.38)}' +
    '.pp-access-kicker{color:#7a4fce;font-weight:800;font-size:.74rem;letter-spacing:.12em;text-transform:uppercase}' +
    '.pp-access-box h1{margin:6px 0 8px;color:#1c2247;font-size:1.7rem;line-height:1.15}' +
    '.pp-access-box p{margin:0 0 16px;line-height:1.55}' +
    '.pp-access-box label{display:block;font-weight:800;margin-bottom:6px}' +
    '.pp-access-row{display:flex;gap:9px;flex-wrap:wrap}' +
    '.pp-access-row input{flex:1;min-width:190px;border:2px solid #dedaf0;border-radius:10px;padding:11px 13px;font:inherit}' +
    '.pp-access-row button,.pp-access-request{border:2px solid #7a4fce;border-radius:10px;padding:10px 15px;font:800 .92rem Nunito,system-ui,sans-serif}' +
    '.pp-access-row button{cursor:pointer;background:#7a4fce;color:#fff}' +
    '.pp-access-request{display:inline-block;margin-top:16px;color:#5a34a6;text-decoration:none;background:#fff}' +
    '.pp-access-error{min-height:1.5em;margin:8px 0 0!important;color:#a4262c;font-weight:800;font-size:.88rem}';
  document.head.appendChild(style);
  document.documentElement.classList.add('pp-access-locked');

  document.addEventListener('DOMContentLoaded', function () {
    var screen = document.createElement('div');
    screen.className = 'pp-access-screen';
    screen.setAttribute('role', 'dialog');
    screen.setAttribute('aria-modal', 'true');
    screen.setAttribute('aria-labelledby', 'pp-access-title');
    screen.innerHTML =
      '<div class="pp-access-box">' +
        '<div class="pp-access-kicker">Copyrighted works collection</div>' +
        '<h1 id="pp-access-title">Passcode required</h1>' +
        '<p>This independent educational companion reproduces no copyrighted text. Enter the collection passcode to continue.</p>' +
        '<form id="pp-access-form">' +
          '<label for="pp-access-code">Passcode</label>' +
          '<div class="pp-access-row"><input id="pp-access-code" type="password" autocomplete="current-password" required><button type="submit">Unlock</button></div>' +
          '<p class="pp-access-error" id="pp-access-error" role="alert"></p>' +
        '</form>' +
        '<a class="pp-access-request" href="' + REQUEST_URL + '" target="_blank" rel="noopener noreferrer">Request access →</a>' +
      '</div>';
    document.body.appendChild(screen);
    var form = screen.querySelector('form');
    var input = screen.querySelector('input');
    var error = screen.querySelector('.pp-access-error');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!window.PlotPointCopyrightAccess.submit(input.value)) {
        error.textContent = 'That passcode is not correct.';
        input.select();
        return;
      }
      screen.remove();
      document.documentElement.classList.remove('pp-access-locked');
    });
    input.focus();
  });
}());
