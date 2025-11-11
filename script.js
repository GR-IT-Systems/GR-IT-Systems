// ===== GR IT Systems - script.js =====

// © Jahr automatisch im Footer setzen
(function (){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Hamburger-Menü (öffnet/schließt und schließt nach Klick)
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

  document.querySelectorAll('#menu-panel .menu-link').forEach(a=>{
    a.addEventListener('click', ()=> close());
  });
})();

// Accordion (Leistungen): single-open
(function (){
  const headers = document.querySelectorAll('.accordion-header');
  if (!headers.length) return;
  headers.forEach(h=>{
    h.addEventListener('click', ()=>{
      const item = h.parentElement;
      const acc  = item && item.parentElement;
      acc.querySelectorAll('.accordion-item').forEach(o=>{ if(o!==item) o.classList.remove('active'); });
      item.classList.toggle('active');
    });
  });
})();
