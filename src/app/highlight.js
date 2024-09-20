// import "highlight.js/styles/default.css";

// const highlightedCode = hljs.highlight("let teste = 'teste'", {
//   language: "javascript",
// }).value;

// console.log(highlightedCode);

// document.querySelector(".language-javascript").innerHTML = highlightedCode;
document.addEventListener("DOMContentLoaded", (event) => {
  // document.querySelectorAll("pre code").forEach((block) => {
  //   console.log(block);
  //   hljs.highlightElement(block);
  // });
});

const btnModal = document.querySelector("[data-modal-highlight]");
const btnClosedModal = document.querySelector("[data-closed-modal]");
const modal = document.querySelector("[data-modal]");
const text = document.querySelector("[data-text-highlight]");

btnModal.addEventListener("click", (e) => {
  console.log();
  document.querySelectorAll("pre code").forEach((block) => {
    block.innerHTML = text.value;
    console.log(block);

    hljs.highlightElement(block);
  });

  modal.style.display = "block";
});

btnClosedModal.addEventListener("click", (e) => {
  modal.style.display = "none";
});
console.log(modal);
