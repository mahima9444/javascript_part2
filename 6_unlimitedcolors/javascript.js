// random color generator
function genrateRandomColor() {
  const hexCode = '0123456789ABCDEF';
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    hexcolor += hexCode[Math.floor(Math.random() * 16)];
  }
  return hexcolor;
}
console.log(genrateRandomColor());
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = genrateRandomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);