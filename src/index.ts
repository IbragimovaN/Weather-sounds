import { createButton } from "./createBtn";
import { createRangeInput } from "./createRangeInput";
import { dataArr } from "./data";
import "./index.scss";
import { currentSound, onClickBtn } from "./onClickBtn";

const h1 = document.querySelector("h1") as HTMLHeadingElement;
const btnWrapper = document.createElement("div");
btnWrapper.className = "btnWrapper";
document.body.appendChild(btnWrapper);

dataArr.map((item) => createButton(item, btnWrapper));

const volumeСontrol = createRangeInput(btnWrapper);

btnWrapper.addEventListener("click", (e) => {
  const target = e.target as HTMLElement | null;
  if (target && target.id) {
    onClickBtn(dataArr, h1, target.id);
  }
});

volumeСontrol.addEventListener("input", (e: any) => {
  const target = e.target as HTMLInputElement | null;
  if (target && target.value) {
    if (currentSound) {
      currentSound.volume = Number(target.value);
    }
  }
});
