export const createButton = (obj, wrapper) => {
  const newBtn = document.createElement("button");
  newBtn.className = obj.name;
  newBtn.id = obj.name;
  const image = document.createElement("img");
  image.src = obj.icon;
  image.id = obj.name;
  newBtn.appendChild(image);
  wrapper.appendChild(newBtn);
};
