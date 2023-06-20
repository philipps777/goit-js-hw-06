function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
const controlsDiv = document.querySelector('#controls')    
const inputEl = controlsDiv.querySelector('input')
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');


inputEl.addEventListener('click', ()=>{
  console.dir(inputEl.valueAsNumber);
})

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
}
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

createButton.addEventListener('click', function () {
  createBoxes(inputEl.value);
});

destroyButton.addEventListener('click', destroyBoxes);
// console.dir(inputEl);