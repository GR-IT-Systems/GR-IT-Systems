// ===== GR IT Systems - script.js =====

// © Jahr automatisch im Footer setzen
(function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Hamburger-Menü öffnen/schließen
(function mobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const panel = document.getElementById('menu-panel');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    panel.setAttribute('aria-hidden', !isOpen);
  });

  // Menü schließen, wenn ein Link geklickt wird
  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      panel.setAttribute('aria-hidden', true);
    });
  });
})();
