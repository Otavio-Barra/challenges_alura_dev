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

// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";

// hljs.registerLanguage("javascript", javascript);

// // console.log(hljs.registerLanguage("javascript", javascript));

// const highlightedCode = hljs.highlight("<span>Hello World!</span>", {
//   language: "javascript",
// });

console.log("teste");
