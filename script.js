(function () {
  'use strict';
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Close' : 'Menu';
  }
  btn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); btn.focus(); }
  });

  // Architecture panels: open by default on wide screens, collapsed on phones.
  if (window.matchMedia && !window.matchMedia('(min-width: 821px)').matches) {
    document.querySelectorAll('.arch-d').forEach(function (d) { d.removeAttribute('open'); });
  }
})();
