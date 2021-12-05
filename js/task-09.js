function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorEl = document.querySelector('button.change-color');
const colorTextEl = document.querySelector('span.color');

buttonChangeColorEl.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  colorTextEl.textContent = color;
}