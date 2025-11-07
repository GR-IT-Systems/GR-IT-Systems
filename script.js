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
        closeMenu();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

// Hamburger-Menü & Dropdown
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

// Drawer (seitliches Pop-up) für Leistungen
const drawer       = document.getElementById('services-drawer');
const drawerPanel  = drawer ? drawer.querySelector('.drawer-panel') : null;
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
  // Detailzustand zurücksetzen
  if (drawerPanel) {
    drawerPanel.classList.remove('detail--open');
    drawer.querySelectorAll('.svc-detail').forEach(p=>{
      p.setAttribute('aria-hidden','true');
    });
  }
}

if (openSvcBtn) openSvcBtn.addEventListener('click', (e)=>{ e.preventDefault(); openDrawer(); });
if (menuLeistg) menuLeistg.addEventListener('click', (e)=>{ e.preventDefault(); closeMenu(); openDrawer(); });

// Close-Buttons & Overlay
if (drawer){
  drawer.addEventListener('click', (e)=>{
    if (e.target && e.target.hasAttribute('data-close-drawer')) closeDrawer();
  });
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && drawer.getAttribute('aria-hidden') === 'false') closeDrawer();
  });
}

// Durchklicken: Hub -> Detail
(function svcRouting(){
  if (!drawer) return;
  const hub = drawer.querySelector('#svc-hub');
  const details = drawer.querySelectorAll('.svc-detail');

  // Öffnet ein Detailpanel
  function openDetail(id){
    if (!drawerPanel) return;
    details.forEach(p => p.setAttribute('aria-hidden','true'));
    const target = drawer.querySelector(`.svc-detail[data-id="${id}"]`);
    if (target){
      target.setAttribute('aria-hidden','false');
      drawerPanel.classList.add('detail--open');
    }
  }
  // Zurück zum Hub
  function backToHub(){
    if (!drawerPanel) return;
    drawerPanel.classList.remove('detail--open');
    details.forEach(p => p.setAttribute('aria-hidden','true'));
  }

  // Klick auf einen Hub-Eintrag
  hub.querySelectorAll('.svc-header').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      openDetail(btn.getAttribute('data-detail'));
    });
  });

  // Back-Buttons
  drawer.querySelectorAll('[data-back]').forEach(btn=>{
    btn.addEventListener('click', backToHub);
  });
})();
