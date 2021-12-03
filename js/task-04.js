const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const counterEl = document.querySelector('#value');
let counterValue = 0;

incrementBtnEl.addEventListener('click', onAddIncrement);
decrementBtnEl.addEventListener('click', onAddDecrement);

function onAddIncrement() {
  counterValue += 1;
  return counterEl.textContent = counterValue;
}
function onAddDecrement() {
  counterValue -= 1;
  return counterEl.textContent = counterValue;
}