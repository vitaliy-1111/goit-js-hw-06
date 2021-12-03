const inputFontSizeControlEl = document.querySelector('#font-size-control');
const textChangeEl = document.querySelector('#text');

inputFontSizeControlEl.addEventListener('input', onChangeRangeSizeControl);

function onChangeRangeSizeControl(e) {
  textChangeEl.style.fontSize = `${e.target.value}px`;
}