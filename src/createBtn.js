export const createButton = (obj, wrapper) => {
  const newBtn = document.createElement("button");
  newBtn.className = obj.class;
  newBtn.id = obj.class;
  const image = document.createElement("img");
  image.src = obj.icon;
  image.id = obj.class;
  newBtn.appendChild(image);
  wrapper.appendChild(newBtn);
};
