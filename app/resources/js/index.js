import './particles.js';

const christmas = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0, 0);
showRemaining();
const timer = setInterval(showRemaining, 1000);

function showRemaining() {
  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  const now = new Date();
  const distance = christmas - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById(
      'countdown'
    ).innerHTML = `<span style='color: rgb(216, 0, 255); text-shadow: 0 0 2px black; font-size: 56px;'>
      Marry Christmas!!!
      </span>`;
    return;
  }

  const days = Math.floor(distance / _day);
  const hours = Math.floor((distance % _day) / _hour);
  const minutes = Math.floor((distance % _hour) / _minute);
  const seconds = Math.floor((distance % _minute) / _second);

  if (seconds === 59) {
    addRandomTree();
    const div = document.getElementById('countdown');
    div.setAttribute('style', 'color:' + randomColor() + '!important');
  }

  document.getElementById('timer-days').innerHTML = `${days}<span> Days</span>`;
  document.getElementById('timer-hours').innerHTML = `${hours}<span> Hours</span>`;
  document.getElementById('timer-minutes').innerHTML = `${minutes}<span> Minutes</span>`;
  document.getElementById('timer-seconds').innerHTML = `${seconds}<span> Seconds</span>`;
}

function addRandomTree() {
  document
    .getElementById('tree' + randomnmb()[0])
    .insertAdjacentHTML(
      'afterend',
      `<span style="position:absolute;" id="tree${randomnmb()[0]}">${randomnmb()[1]}</span>`
    );
}

function randomnmb() {
  const emoji = ['🎅', '🧝‍♂️', '⛄', '🧦', '🔔', '🕯', '🎄', '🎀', '🎁'];
  return [Math.floor(Math.random() * 16) + 1, emoji[Math.floor(Math.random() * emoji.length)]];
}

function randomColor() {
  const cArr = '1234567890ABCDEF'.split('');
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += cArr[Math.floor(Math.random() * 16)];
  }
  return color;
}
