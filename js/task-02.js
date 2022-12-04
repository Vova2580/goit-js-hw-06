const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const newListEl = document.createElement("li");

newListEl.textContent = ingredients[0]
newListEl.classList.add("item");



const ingredientsList = document.querySelector("#ingredients");
ingredientsList.appendChild(newListEl);

console.log(ingredientsList)


