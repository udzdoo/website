// script.js
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

const translations = {
  sr: {
    title: 'Custom Chatbotovi — Plati Tek Kad Budeš 100 % Zadovoljan',
    subtitle: 'Iskoristi <strong>20 % popusta</strong> na sve projekte do <strong>1. jula 2025.</strong>',
    guarantee: 'Plaćanje po zadovoljstvu važi samo za klijente iz Srbije. Za strane klijente je potrebna uplata depozita od 20 % pre početka projekta.',
    badge: 'Plaćanje po zadovoljstvu',
    ctaDemo: 'Isprobaj live demo',
    ctaContact: 'Zatraži ponudu',
    navIndustries: 'Industrije',
    navVideo: 'Video',
    navCases: 'Studije slučaja',
    navPricing: 'Cenovnik',
    navContact: 'Kontaktirajte nas'
  },
  en: {
    title: 'Custom Chatbots – Pay Only When You’re 100% Satisfied',
    subtitle: 'Enjoy a <strong>20% discount</strong> on all projects until <strong>July 1, 2025</strong>.',
    guarantee: 'Payment upon satisfaction applies only to clients from Serbia. Foreign clients are required to pay a 20% deposit before the project begins.',
    badge: 'Payment upon satisfaction',
    ctaDemo: 'Try Live Demo',
    ctaContact: 'Request a Quote',
    navIndustries: 'Industries',
    navVideo: 'Video',
    navCases: 'Case Studies',
    navPricing: 'Pricing',
    navContact: 'Contact Us'
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang === 'sr' ? 'sr' : 'en';
  document.getElementById('title').innerHTML = translations[lang].title;
  document.getElementById('subtitle').innerHTML = translations[lang].subtitle;
  document.getElementById('guarantee').textContent = translations[lang].guarantee;
  document.getElementById('cta-demo').textContent = translations[lang].ctaDemo;
  document.getElementById('cta-contact').textContent = translations[lang].ctaContact;
  document.getElementById('nav-industries').textContent = translations[lang].navIndustries;
  document.getElementById('nav-video').textContent = translations[lang].navVideo;
  document.getElementById('nav-cases').textContent = translations[lang].navCases;
  document.getElementById('nav-pricing').textContent = translations[lang].navPricing;
  document.getElementById('nav-contact').textContent = translations[lang].navContact;
  document.querySelectorAll('.badge').forEach(b => b.textContent = translations[lang].badge);
}

document.getElementById('lang-sr').addEventListener('click', () => setLanguage('sr'));
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
