(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) a(t);
  new MutationObserver((t) => {
    for (const e of t)
      if (e.type === 'childList')
        for (const s of e.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && a(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(t) {
    const e = {};
    return (
      t.integrity && (e.integrity = t.integrity),
      t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === 'use-credentials'
        ? (e.credentials = 'include')
        : t.crossOrigin === 'anonymous'
          ? (e.credentials = 'omit')
          : (e.credentials = 'same-origin'),
      e
    );
  }
  function a(t) {
    if (t.ep) return;
    t.ep = !0;
    const e = r(t);
    fetch(t.href, e);
  }
})();
const m = '/assets/starburst-BpxI0wu1.png';
particlesJS('particles-js', {
  particles: {
    number: { value: 200, density: { enable: !0, value_area: 800 } },
    shape: { type: 'image', image: { src: m, width: 100, height: 100 } },
    opacity: { value: 0.7, random: !1, anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 } },
    size: { value: 5, random: !0, anim: { enable: !1, speed: 20, size_min: 0.1, sync: !1 } },
    line_linked: { enable: !1, distance: 50, color: '#ffffff', opacity: 0.6, width: 1 },
    move: {
      enable: !0,
      speed: 2,
      direction: 'bottom',
      random: !0,
      straight: !1,
      out_mode: 'out',
      bounce: !1,
      attract: { enable: !0, rotateX: 300, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: !1, mode: 'bubble' }, onclick: { enable: !0, mode: 'repulse' }, resize: !1 },
    modes: {
      grab: { distance: 150, line_linked: { opacity: 1 } },
      bubble: { distance: 200, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.2 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: !0,
});
const f = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0, 0);
l();
const p = setInterval(l, 1e3);
function l() {
  const e = f - new Date();
  if (e < 0) {
    (clearInterval(p),
      (document.getElementById('countdown').innerHTML =
        `<span style='color: rgb(216, 0, 255); text-shadow: 0 0 2px black; font-size: 56px;'>
      Marry Christmas!!!
      </span>`));
    return;
  }
  const s = Math.floor(e / 864e5),
    d = Math.floor((e % 864e5) / 36e5),
    u = Math.floor((e % 36e5) / 6e4),
    c = Math.floor((e % 6e4) / 1e3);
  (c === 59 && (y(), document.getElementById('countdown').setAttribute('style', 'color:' + h() + '!important')),
    (document.getElementById('timer-days').innerHTML = `${s}<span> Days</span>`),
    (document.getElementById('timer-hours').innerHTML = `${d}<span> Hours</span>`),
    (document.getElementById('timer-minutes').innerHTML = `${u}<span> Minutes</span>`),
    (document.getElementById('timer-seconds').innerHTML = `${c}<span> Seconds</span>`));
}
function y() {
  document
    .getElementById('tree' + i()[0])
    .insertAdjacentHTML('afterend', `<span style="position:absolute;" id="tree${i()[0]}">${i()[1]}</span>`);
}
function i() {
  const o = ['🎅', '🧝‍♂️', '⛄', '🧦', '🔔', '🕯', '🎄', '🎀', '🎁'];
  return [Math.floor(Math.random() * 16) + 1, o[Math.floor(Math.random() * o.length)]];
}
function h() {
  const o = '1234567890ABCDEF'.split('');
  let n = '#';
  for (var r = 0; r < 6; r++) n += o[Math.floor(Math.random() * 16)];
  return n;
}
