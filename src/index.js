import "./index.scss";
import sunIcon from "./assets/icons/sun.svg";
import rainIcon from "./assets/icons/cloud-rain.svg";
import snowIcon from "./assets/icons/cloud-snow.svg";

import rainSound from "./assets/sounds/rain.mp3";
import sunSound from "./assets/sounds/summer.mp3";
import snowSound from "./assets/sounds/winter.mp3";

import sunBg from "./assets/images/summer-bg.jpg";
import rainBg from "./assets/images/rainy-bg.jpg";
import snowBg from "./assets/images/winter-bg.jpg";
import { createRangeInput } from "./createRangeInput";
import { createButton } from "./createBtn";

// const sounds = {
//   rainy: new Audio(rainSound),
//   summer: new Audio(sunSound),
//   winter: new Audio(snowSound),
// };

const data = [
  {
    class: "rainy",
    icon: rainIcon,
    bgImg: rainBg,
    sound: new Audio(rainSound),
  },
  {
    class: "summer",
    icon: sunIcon,
    bgImg: sunBg,
    sound: new Audio(sunSound),
  },
  {
    class: "winter",
    icon: snowIcon,
    bgImg: snowBg,
    sound: new Audio(snowSound),
  },
];

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const btnWrapper = document.createElement("div");
btnWrapper.className = "btnWrapper";
body.appendChild(btnWrapper);

data.map((item) => createButton(item, btnWrapper));

const volumeСontrol = createRangeInput(btnWrapper);

// export let currentSound = null;
// export const soundsFunc = (type) => {
//   if (currentSound) {
//     if (currentSound.src.includes(sounds[type].src)) {
//       if (currentSound.paused) {
//         currentSound.play();
//       } else {
//         currentSound.pause();
//       }
//       return;
//     } else {
//       currentSound.pause();
//     }
//   }
//   currentSound = sounds[type];
//   currentSound.play();
// };

// btnWrapper.addEventListener("click", (e) => {
//   if (e.target.id) {
//     body.className = e.target.id;
//     h1.className = `${e.target.id}Color`;
//     soundsFunc(e.target.id);
//   }
// });

// volumeСontrol.addEventListener("input", (e) => {
//   currentSound.volume = e.target.value;
// });
