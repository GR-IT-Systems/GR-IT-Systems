// Jahr im Footer
(function(){const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();})();

// Menü öffnen/schließen
const menuToggle=document.getElementById('menu-toggle');
const menuPanel=document.getElementById('menu-panel');
function openMenu(){ if(!menuPanel) return; menuPanel.setAttribute('aria-hidden','false'); menuToggle&&menuToggle.setAttribute('aria-expanded','true'); }
function closeMenu(){ if(!menuPanel) return; menuPanel.setAttribute('aria-hidden','true'); menuToggle&&menuToggle.setAttribute('aria-expanded','false'); }
if(menuToggle&&menuPanel){
  menuToggle.addEventListener('click',()=>{ const open=menuPanel.getAttribute('aria-hidden')==='false'; open?closeMenu():openMenu(); });
  document.addEventListener('click',e=>{ if(!menuPanel.contains(e.target)&&!menuToggle.contains(e.target)) closeMenu(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeMenu(); });
}

// Leistungen Akkordeon
(function(){
  const items=document.querySelectorAll('.acc-item');
  if(!items.length) return;
  items.forEach(item=>{
    const h=item.querySelector('.acc-header');
    h.addEventListener('click',()=>{
      items.forEach(o=>{ if(o!==item) o.classList.remove('active'); });
      item.classList.toggle('active');
    });
  });
})();
