const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("#ingredients");


for(let ingredient of ingredients) {

  const newListEl = document.createElement("li"); 
  newListEl.textContent = ingredient;
  newListEl.classList.add("item");
  
  ingredientsList.append(newListEl);
}

console.log(ingredientsList);






