// Optional enhancements; navigation and all content also work without JavaScript.
const printButton = document.querySelector('[data-print]');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}
const navigationLinks = document.querySelectorAll('nav a[href^="#"]');
const markCurrentSection = () => {
  const active = window.location.hash || '#about';
  navigationLinks.forEach((link) => {
    if (link.getAttribute('href') === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};
markCurrentSection();
window.addEventListener('hashchange', markCurrentSection);
