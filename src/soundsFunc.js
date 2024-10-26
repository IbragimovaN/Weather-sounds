import rainSound from "./assets/sounds/rain.mp3";
import sunSound from "./assets/sounds/summer.mp3";
import snowSound from "./assets/sounds/winter.mp3";

const sounds = {
  rainy: new Audio(rainSound),
  summer: new Audio(sunSound),
  winter: new Audio(snowSound),
};
export let currentSound = null;
export const soundsFunc = (type) => {
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
