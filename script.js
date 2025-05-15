const target = new Date(Date.UTC(2025, 6, 1, 0, 0, 0));
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

function updateTimer() {
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) {
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minsEl.textContent = '00';
    secsEl.textContent = '00';
    clearInterval(timerInterval);
    return;
  }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  daysEl.textContent = String(d).padStart(2, '0');
  hoursEl.textContent = String(h).padStart(2, '0');
  minsEl.textContent = String(m).padStart(2, '0');
  secsEl.textContent = String(s).padStart(2, '0');
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
