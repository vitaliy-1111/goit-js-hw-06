function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorEl = document.querySelector('button.change-color');
const colorTextEl = document.querySelector('span.color');

buttonChangeColorEl.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = getRandomHexColor();
}