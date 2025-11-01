// Cerrar el menú de navegación al hacer clic en un enlace (móvil)
// Excepto cuando se hace clic en "Opciones" que debe desplegar el submenú
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    // No cerrar si es el enlace de Opciones
    if (link.getAttribute("data-bs-toggle") === "collapse") {
      return;
    }

    const navbarCollapse = document.getElementById("navbarNav");
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});

// Cerrar el menú al hacer clic en una opción del submenú
document.querySelectorAll(".submenu-item").forEach((item) => {
  item.addEventListener("click", () => {
    const navbarCollapse = document.getElementById("navbarNav");
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});
