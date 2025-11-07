// ===== GR IT Systems - script.js =====

// © Jahr automatisch im Footer setzen
(function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Sanftes Scrollen für interne Links (z. B. #leistungen, #kontakt)
(function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

// Accordion: nur ein Punkt gleichzeitig offen
(function accordionSingleOpen() {
  const headers = document.querySelectorAll('.accordion-header');
  if (!headers.length) return;

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;        // .accordion-item
      const acc = item && item.parentElement;   // .accordion

      if (!acc) return;

      // alle anderen Items schließen
      acc.querySelectorAll('.accordion-item').forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      // geklicktes Item togglen
      item.classList.toggle('active');
    });
  });
})();
