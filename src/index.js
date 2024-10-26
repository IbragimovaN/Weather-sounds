import "./index.scss";
import sunIcon from "./assets/icons/sun.svg";
import rainIcon from "./assets/icons/cloud-rain.svg";
import snowIcon from "./assets/icons/cloud-snow.svg";
import { createButton } from "./createBtn";
import { soundsFunc } from "./soundsFunc";
import { currentSound } from "./soundsFunc";

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const btnWrapper = document.createElement("div");
btnWrapper.className = "btnWrapper";
body.appendChild(btnWrapper);

const volumeСontrol = document.createElement("input");
volumeСontrol.type = "range";
volumeСontrol.min = 0;
volumeСontrol.max = 1;
volumeСontrol.step = 0.1;
volumeСontrol.value = 0.5;

btnWrapper.after(volumeСontrol);

const clickFunc = (type) => {
  body.className = type;
  h1.className = `${type}Color`;
  soundsFunc(type);
};

btnWrapper.addEventListener("click", (event) => {
  event.target.id && clickFunc(event.target.id);
});

volumeСontrol.addEventListener("input", (e) => {
  currentSound.volume = e.target.value;
});

createButton("rainy", rainIcon, btnWrapper);
createButton("summer", sunIcon, btnWrapper);
createButton("winter", snowIcon, btnWrapper);
