import "./index.scss";
import sun from "./assets/icons/sun.svg";
import rain from "./assets/icons/cloud-rain.svg";
import snow from "./assets/icons/cloud-snow.svg";

console.log(sun);
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const btnWrapper = document.createElement("div");
btnWrapper.className = "btnWrapper";
body.appendChild(btnWrapper);

const clickFunc = (type) => {
  body.className = type;
  h1.className = `${type}Color`;
};

const createButton = (type, icon) => {
  const newBtn = document.createElement("button");
  newBtn.className = type;
  newBtn.id = type;
  const image = document.createElement("img");
  image.src = icon;
  newBtn.appendChild(image);
  btnWrapper.appendChild(newBtn);
};

document.addEventListener("click", (event) => {
  console.log(event.target.id);
  clickFunc(event.target.id);
});

createButton("rainy", rain);
createButton("summer", sun);
createButton("winter", snow);
