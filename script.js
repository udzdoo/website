// script.js
// Timer
const target = new Date(Date.UTC(2025,6-1,1,0,0,0));
const days = document.getElementById('days'),
      hours = document.getElementById('hours'),
      mins = document.getElementById('mins'),
      secs = document.getElementById('secs');
function updateTimer(){
  const now = new Date(), diff = target - now;
  if(diff<=0){clearInterval(interval); [days,hours,mins,secs].forEach(el=>el.textContent='00'); return;}
  const d=Math.floor(diff/86400000),
        h=Math.floor((diff%86400000)/3600000),
        m=Math.floor((diff%3600000)/60000),
        s=Math.floor((diff%60000)/1000);
  days.textContent=String(d).padStart(2,'0');
  hours.textContent=String(h).padStart(2,'0');
  mins.textContent=String(m).padStart(2,'0');
  secs.textContent=String(s).padStart(2,'0');
}
const interval = setInterval(updateTimer,1000);
updateTimer();
// Language switch
document.getElementById('lang-sr').onclick = () => { document.body.classList.add('lang-sr'); document.body.classList.remove('lang-en'); };
document.getElementById('lang-en').onclick = () => { document.body.classList.add('lang-en'); document.body.classList.remove('lang-sr'); };