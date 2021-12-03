const inputEl = document.querySelector('#name-input');
const inputName = document.querySelector('#name-output')

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
  inputName.textContent = e.currentTarget.value;
  if (e.currentTarget.value === '') {
    inputName.textContent = 'Anonymous';
  }
}