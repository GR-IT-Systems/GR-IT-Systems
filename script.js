// ===== GR IT Systems - script.js =====

// © Jahr automatisch im Footer setzen
(function (){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Hamburger-Menü per aria-hidden
(function (){
  const toggle = document.getElementById('menu-toggle');
  const panel  = document.getElementById('menu-panel');
  if (!toggle || !panel) return;

  const open  = () => { panel.setAttribute('aria-hidden','false'); toggle.setAttribute('aria-expanded','true'); };
  const close = () => { panel.setAttribute('aria-hidden','true');  toggle.setAttribute('aria-expanded','false'); };

  toggle.addEventListener('click', () => {
    const isOpen = panel.getAttribute('aria-hidden') === 'false';
    isOpen ? close() : open();
  });

  // Menü schließt nach Navigation
  document.querySelectorAll('#menu-panel .menu-link').forEach(a=>{
    a.addEventListener('click', ()=> close());
  });

  // Klick außerhalb schließt
  document.addEventListener('click', (e)=>{
    if (!panel.contains(e.target) && !toggle.contains(e.target)) close();
  });

  // ESC schließt
  document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') close(); });
})();
