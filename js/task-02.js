const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelector('ul#ingredients');

const ingredientsItemArr = ingredients.map(ingredient => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = ingredient;
  return ingredientsEl;
})
console.log(ingredientsItemArr);
ingredientsListEl.append(...ingredientsItemArr);



