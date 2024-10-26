export const createButton = (type, icon, btnWrapper) => {
  const newBtn = document.createElement("button");
  newBtn.className = type;
  newBtn.id = type;
  const image = document.createElement("img");
  image.src = icon;
  image.id = type;
  newBtn.appendChild(image);
  btnWrapper.appendChild(newBtn);
};
