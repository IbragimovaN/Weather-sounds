export let currentSound = null;

export const onClickBtn = (dataArr, h1, id) => {
  dataArr.map((item) => {
    if (item.name === id) {
      item.installBg();
      h1.className = `${id}Color`;
      if (currentSound) {
        if (currentSound === item.sound) {
          if (currentSound.paused) {
            currentSound.play();
          } else {
            currentSound.pause();
          }
        } else {
          currentSound.pause();
          currentSound = item.sound;
          currentSound.play();
        }
      } else {
        currentSound = item.sound;
        currentSound.play();
      }
    }
  });
};
