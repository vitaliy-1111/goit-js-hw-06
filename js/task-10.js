function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxButtonEl = document.querySelector('button[ data-create]');
const destroyBoxButtonEl = document.querySelector('button[data-destroy]');
const inputNumberEl = document.querySelector('#controls input');
const containerEl = document.querySelector('#boxes');

createBoxButtonEl.addEventListener('click', onCreateBoxes);
destroyBoxButtonEl.addEventListener('click', onDestroyBoxes);

function onCreateBoxes() {
  let widthBox = 20;
  let heigthBox = 20;
  const arr = Array(Number(inputNumberEl.value))
    .fill('').map(() => `<div style = "width: ${widthBox += 10}px; height:${heigthBox += 10}px; background-color:${getRandomHexColor()};"></div>`);
  
  containerEl.innerHTML = '';
  containerEl.insertAdjacentHTML('beforeend', arr.join(''));
}

function onDestroyBoxes() {
  containerEl.innerHTML = '';
  inputNumberEl.value = '';
}
