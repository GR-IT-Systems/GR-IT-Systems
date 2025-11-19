document.addEventListener("DOMContentLoaded", () => {
  // Jahr im Footer automatisch setzen
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menü (Hamburger)
  const menuToggle = document.getElementById("menu-toggle");
  const menuPanel = document.getElementById("menu-panel");

  function openMenu() {
    if (!menuPanel || !menuToggle) return;
    menuPanel.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    if (!menuPanel || !menuToggle) return;
    menuPanel.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle && menuPanel) {
    // Klick auf den Hamburger
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = menuPanel.getAttribute("aria-hidden") === "false";
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Klick irgendwo anders schließt das Menü
    document.addEventListener("click", (e) => {
      if (!menuPanel.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMenu();
      }
    });

    // ESC schließt das Menü
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    });
  }

  // Smooth Scroll für Anker-Links (falls vorhanden)
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        closeMenu();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Akkordeon (Leistungen-Seite)
  const accItems = document.querySelectorAll(".acc-item");
  if (accItems.length > 0) {
    accItems.forEach((item) => {
      const header = item.querySelector(".acc-header");
      if (!header) return;

      header.addEventListener("click", () => {
        accItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove("active");
          }
        });
        item.classList.toggle("active");
      });
    });
  }
});
