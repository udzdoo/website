// script.js
// Language toggle for nav
document.querySelectorAll('.lang-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.id === 'lang-sr' ? 'sr' : 'en';
    document.documentElement.lang = lang;
    document.querySelectorAll('.sr').forEach(el => el.style.display = lang === 'sr' ? 'inline' : 'none');
    document.querySelectorAll('.en').forEach(el => el.style.display = lang === 'en' ? 'inline' : 'none');
  });
});