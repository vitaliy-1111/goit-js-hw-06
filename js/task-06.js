const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onCheckInput);

function onCheckInput(event) {
  if (Number(inputEl.dataset.length) === event.currentTarget.value.length)
  {
  return inputEl.className = 'valid';
  }
  return inputEl.className = 'invalid';
}
