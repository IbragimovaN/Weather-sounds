import sunIcon from "./assets/icons/sun.svg";
import rainIcon from "./assets/icons/cloud-rain.svg";
import snowIcon from "./assets/icons/cloud-snow.svg";

import rainSound from "./assets/sounds/rain.mp3";
import sunSound from "./assets/sounds/summer.mp3";
import snowSound from "./assets/sounds/winter.mp3";

import sunBg from "./assets/images/summer-bg.jpg";
import rainBg from "./assets/images/rainy-bg.jpg";
import snowBg from "./assets/images/winter-bg.jpg";

export class Weather {
  name: string;
  icon: string;
  bgImage: string;
  sound: HTMLAudioElement;

  constructor(
    name: string,
    icon: string,
    bgImage: string,
    sound: HTMLAudioElement
  ) {
    this.name = name;
    this.icon = icon;
    this.bgImage = bgImage;
    this.sound = sound;
  }
  installBg() {
    document.body.style.backgroundImage = `url(${this.bgImage})`;
  }
}

const rainObj = new Weather("rainy", rainIcon, rainBg, new Audio(rainSound));
const summerObj = new Weather("summer", sunIcon, sunBg, new Audio(sunSound));
const winterObj = new Weather("winter", snowIcon, snowBg, new Audio(snowSound));

export const dataArr: Weather[] = [rainObj, summerObj, winterObj];
