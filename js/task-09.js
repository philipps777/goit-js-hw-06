function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color');
const bodyEl = document.body;



changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorSpanEl.textContent = randomColor;
}