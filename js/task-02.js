const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.getElementById('ingredients');

ingredients.forEach(ingredient => {
  const liItem = ulIngredients.createElement("li");
  liItem.textContent = ingredient;
})
