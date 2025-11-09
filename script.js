// Jahr im Footer automatisch
(function(){
  const y=document.getElementById('year');
  if(y) y.textContent=new Date().getFullYear();
})();

// Hamburger-Menü
const menuToggle=document.getElementById('menu-toggle');
const menuPanel=document.getElementById('menu-panel');
function openMenu(){menuPanel.setAttribute('aria-hidden','false');menuToggle.setAttribute('aria-expanded','true');}
function closeMenu(){menuPanel.setAttribute('aria-hidden','true');menuToggle.setAttribute('aria-expanded','false');}
if(menuToggle&&menuPanel){
  menuToggle.addEventListener('click',()=>{const open=menuPanel.getAttribute('aria-hidden')==='false';open?closeMenu():openMenu();});
  document.addEventListener('click',e=>{if(!menuPanel.contains(e.target)&&!menuToggle.contains(e.target))closeMenu();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
}

// Brand-Link -> immer Startseite
(function(){
  const brand = document.getElementById('brand-home');
  if(brand){
    brand.addEventListener('click', function(e){
      e.preventDefault();
      window.location.href = './index.html';
    });
  }
})();
