$(".nav-menu-item a").click(function() {
    $(".nav-menu-item a").removeClass("nav-menu-link_active");
    $(this).addClass("nav-menu-link_active");
});

$(".caracteristicas li").click(function() {
    $(".caracteristicas li").removeClass("selected");
    $(this).addClass("selected");
});

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});