const btnMenuHamburguer = document.querySelector(".menu-nav__menu-harburguer");
const modalNavigation = document.querySelector(".menu-nav__modal-navigation");

btnMenuHamburguer.addEventListener("click", () => {
  modalNavigation.classList.toggle("active");
  if (modalNavigation.classList.contains("active")) {
    btnMenuHamburguer.setAttribute(
      "src",
      "./src/imgs/closed-menu-hamburguer.png"
    );
  } else {
    btnMenuHamburguer.setAttribute("src", "./src/imgs/menu-hamburguer.png");
  }
});
