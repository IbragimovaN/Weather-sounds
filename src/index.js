import "./index.scss";
import sunIcon from "./assets/icons/sun.svg";
import rainIcon from "./assets/icons/cloud-rain.svg";
import snowIcon from "./assets/icons/cloud-snow.svg";
import rainSound from "./assets/sounds/rain.mp3";
import sunSound from "./assets/sounds/summer.mp3";
import snowSound from "./assets/sounds/winter.mp3";

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const btnWrapper = document.createElement("div");
btnWrapper.className = "btnWrapper";
body.appendChild(btnWrapper);

let currentSound = null;

const volumeСontrol = document.createElement("input");
volumeСontrol.type = "range";
volumeСontrol.min = 0;
volumeСontrol.max = 1;
volumeСontrol.step = 0.1;
volumeСontrol.value = 0.5;

btnWrapper.after(volumeСontrol);

const sounds = {
  rainy: new Audio(rainSound),
  summer: new Audio(sunSound),
  winter: new Audio(snowSound),
};

const soundsFunc = (type) => {
  if (currentSound) {
    if (currentSound.src.includes(sounds[type].src)) {
      if (currentSound.paused) {
        currentSound.play();
      } else {
        currentSound.pause();
      }
      return;
    } else {
      currentSound.pause();
    }
  }
  currentSound = sounds[type];
  currentSound.play();
};

const clickFunc = (type) => {
  body.className = type;
  h1.className = `${type}Color`;
  soundsFunc(type);
};

const createButton = (type, icon) => {
  const newBtn = document.createElement("button");
  newBtn.className = type;
  newBtn.id = type;
  const image = document.createElement("img");
  image.src = icon;
  image.id = type;
  newBtn.appendChild(image);
  btnWrapper.appendChild(newBtn);
};

btnWrapper.addEventListener("click", (event) => {
  event.target.id && clickFunc(event.target.id);
});

volumeСontrol.addEventListener("input", (e) => {
  console.log(e.target.value);
  currentSound.volume = e.target.value;
});

createButton("rainy", rainIcon);
createButton("summer", sunIcon);
createButton("winter", snowIcon);
