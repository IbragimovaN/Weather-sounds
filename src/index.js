import "./index.scss";
const body = document.querySelector("body");

const newParagraph = document.createElement("p");
newParagraph.className = "text";
newParagraph.dataset.id = "3";
newParagraph.textContent = "Третий абзац";

body.append(newParagraph);
