const categories = document.querySelectorAll('#categories .item');

console.log('Number of categories:', categories.length);

categories.forEach(function (number, index) {
  console.log(`Category: ${categories[index].querySelector('h2').textContent}`);  
  console.log(`Elements: ${number.querySelectorAll('li').length}`);
})


