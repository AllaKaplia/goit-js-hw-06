const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ulIngredientsEl = document.querySelector('ul#ingredients');


const makeItemEl = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;

    return itemEl;
  })
}

const elements = makeItemEl(ingredients);
ulIngredientsEl.append(...elements);