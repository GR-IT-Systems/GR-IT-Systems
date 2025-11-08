// Jahr im Footer
(function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Sanftes Scrollen für interne Links
(function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        closeMenu();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

// Hamburger Menü
const menuToggle = document.getElementById('menu-toggle');
const menuPanel  = document.getElementById('menu-panel');

function openMenu(){
  if (!menuPanel) return;
  menuPanel.setAttribute('aria-hidden','false');
  menuToggle.setAttribute('aria-expanded','true');
}
function closeMenu(){
  if (!menuPanel) return;
  menuPanel.setAttribute('aria-hidden','true');
  menuToggle.setAttribute('aria-expanded','false');
}

if (menuToggle && menuPanel){
  menuToggle.addEventListener('click', ()=>{
    const open = menuPanel.getAttribute('aria-hidden') === 'false';
    open ? closeMenu() : openMenu();
  });
  document.addEventListener('click', (e)=>{
    if (!menuPanel.contains(e.target) && !menuToggle.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape') closeMenu();
  });
}

// Akkordeon für leistungen.html
(function initAccordion(){
  const items = document.querySelectorAll('.acc-item');
  if (!items.length) return;
  items.forEach(item=>{
    const header = item.querySelector('.acc-header');
    header.addEventListener('click', ()=>{
      // nur ein Eintrag gleichzeitig offen
      items.forEach(other => { if (other !== item) other.classList.remove('active'); });
      item.classList.toggle('active');
    });
  });
})();
