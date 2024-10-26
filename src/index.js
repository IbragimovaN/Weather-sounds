import "./index.scss";
import sunIcon from "./assets/icons/sun.svg";
import rainIcon from "./assets/icons/cloud-rain.svg";
import snowIcon from "./assets/icons/cloud-snow.svg";
import { createButton } from "./createBtn";
import { soundsFunc } from "./soundsFunc";
import { currentSound } from "./soundsFunc";
import { createRangeInput } from "./createRangeInput";

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const btnWrapper = document.createElement("div");
btnWrapper.className = "btnWrapper";
body.appendChild(btnWrapper);

createButton("rainy", rainIcon, btnWrapper);
createButton("summer", sunIcon, btnWrapper);
createButton("winter", snowIcon, btnWrapper);
const volumeСontrol = createRangeInput(btnWrapper);

btnWrapper.addEventListener("click", (e) => {
  if (e.target.id) {
    body.className = e.target.id;
    h1.className = `${e.target.id}Color`;
    soundsFunc(e.target.id);
  }
});

volumeСontrol.addEventListener("input", (e) => {
  currentSound.volume = e.target.value;
});
