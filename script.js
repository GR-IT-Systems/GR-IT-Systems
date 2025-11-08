// Jahr automatisch im Footer
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

// Drawer Leistungen
const drawer       = document.getElementById('services-drawer');
const openSvcBtn   = document.getElementById('open-services-cta');
const menuLeistg   = document.getElementById('menu-leistungen');

function openDrawer(){
  if (!drawer) return;
  drawer.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeDrawer(){
  if (!drawer) return;
  drawer.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  document.querySelectorAll('.svc-item').forEach(i => i.classList.remove('active'));
}

if (openSvcBtn) openSvcBtn.addEventListener('click', (e)=>{ e.preventDefault(); openDrawer(); });
if (menuLeistg) menuLeistg.addEventListener('click', (e)=>{ e.preventDefault(); closeMenu(); openDrawer(); });

if (drawer){
  drawer.addEventListener('click', (e)=>{
    if (e.target && e.target.hasAttribute('data-close-drawer')) closeDrawer();
  });
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && drawer.getAttribute('aria-hidden') === 'false') closeDrawer();
  });
}

// Accordion im Drawer
(function drawerAccordion(){
  const items = document.querySelectorAll('.svc-item');
  if (!items.length) return;

  items.forEach(item => {
    const header = item.querySelector('.svc-header');
    header.addEventListener('click', ()=>{
      items.forEach(other => { if (other !== item) other.classList.remove('active'); });
      item.classList.toggle('active');
    });
  });
})();
