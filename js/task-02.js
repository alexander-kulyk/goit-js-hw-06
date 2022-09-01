const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredentsList = document.querySelector('#ingredients');
console.log(ingredentsList);

const makeIngredientsEl = ingredients.map(el =>{
    const ingredientsEl = document.createElement('li');
    ingredientsEl.textContent  = el;
    ingredientsEl.classList.add('item');

    return ingredientsEl;
});

ingredentsList.append(...makeIngredientsEl);
