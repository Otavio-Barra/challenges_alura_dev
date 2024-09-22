const btnModal = document.querySelector("[data-modal-highlight]");
const btnClosedModal = document.querySelector("[data-closed-modal]");
const modal = document.querySelector("[data-modal]");
const text = document.querySelector("[data-text-highlight]");
const language = document.querySelector("[data-select-language]");
const inputBackgroundSelect = document.querySelector(
  "[data-backgroud-card-project]"
);
const backgroundEditor = document.querySelectorAll(
  ".coder-editor__container-editor"
);

inputBackgroundSelect.addEventListener("input", () => {
  backgroundEditor.forEach((tag) => {
    tag.style.backgroundColor = inputBackgroundSelect.value;
  });
});

btnModal.addEventListener("click", (e) => {
  CreateHighlight();

  modal.style.display = "block";
});

btnClosedModal.addEventListener("click", (e) => {
  let teste = document.querySelector("[data-highlighted]");

  if (teste.dataset.highlighted) {
    delete teste.dataset.highlighted;
  }

  modal.style.display = "none";
});

function CreateHighlight() {
  document.querySelectorAll("pre code").forEach((blockCode) => {
    SwitchClass(blockCode);
    blockCode.innerText = text.value;
    hljs.highlightElement(blockCode);
  });
}

function SwitchClass(blockCode) {
  blockCode.classList.remove(...blockCode.classList);
  blockCode.classList.add(`language-${language.value}`, "hljs");
}
