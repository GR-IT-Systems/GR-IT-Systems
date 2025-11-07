// ===== GR IT Systems - script.js =====

// © Jahr automatisch im Footer setzen
(function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Sanftes Scrollen für interne Links (#ueber, #kontakt)
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

// Modal "Leistungen"
(function servicesModal(){
  const modal = document.getElementById('services-modal');
  const openers = [
    document.getElementById('open-services'),
    document.getElementById('open-services-cta')
  ].filter(Boolean);

  const closeButtons = modal ? modal.querySelectorAll('[data-close-modal]') : [];
  let lastFocus = null;

  function openModal(){
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Fokus auf Close-Button
    const btnClose = modal.querySelector('.modal-close');
    if (btnClose) btnClose.focus();
  }

  function closeModal(){
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  openers.forEach(el => el.addEventListener('click', (e)=>{ e.preventDefault(); openModal(); }));
  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  // Klick auf Overlay schließt
  if (modal) {
    modal.addEventListener('click', (e)=>{
      if (e.target && e.target.hasAttribute('data-close-modal')) closeModal();
    });
  }

  // ESC schließt
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
})();
