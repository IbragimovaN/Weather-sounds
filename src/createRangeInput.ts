export const createRangeInput = (afterEl: HTMLElement) => {
  const volumeСontrol = document.createElement("input");
  volumeСontrol.type = "range";
  volumeСontrol.min = "0";
  volumeСontrol.max = "1";
  volumeСontrol.step = "0.1";
  volumeСontrol.value = "0.5";
  afterEl.after(volumeСontrol);
  return volumeСontrol;
};
