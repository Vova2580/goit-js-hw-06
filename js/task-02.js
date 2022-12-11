const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");


const elements = ingredients.map(ingredient => {

  const newListEl = document.createElement("li");
  newListEl.classList.add("item");
  newListEl.textContent = ingredient;

  return newListEl;
});

ingredientsList.append(...elements);








