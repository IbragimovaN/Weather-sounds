import { createRangeInput } from "./createRangeInput";
import { createButton } from "./createBtn";
import { currentSound, onClickBtn } from "./onClickBtn";
import { dataArr } from "./data";
import "./index.scss";

const h1 = document.querySelector("h1");
const btnWrapper = document.createElement("div");
btnWrapper.className = "btnWrapper";
document.body.appendChild(btnWrapper);

dataArr.map((item) => createButton(item, btnWrapper));

const volumeСontrol = createRangeInput(btnWrapper);

btnWrapper.addEventListener("click", (e) => {
  onClickBtn(dataArr, h1, e.target.id);
});

volumeСontrol.addEventListener("input", (e) => {
  currentSound.volume = e.target.value;
});
