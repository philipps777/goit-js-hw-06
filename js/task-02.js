const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients"); 

// ingredients.forEach((ingredient) => {
//   const li = document.createElement("li"); 
//   li.textContent = ingredient; 
//   li.classList.add("item"); 
//   ul.appendChild(li); 
// });


// const items = ingredients.map((ingredient) => {
//   const li = document.createElement("li"); 
//   li.textContent = ingredient; 
//   li.classList.add("item"); 
//   // ul.appendChild(li); 
//   return li;
// });

// ul.append(...items)




console.log(ul);
const items = ingredients.map((ingredient) =>
`<li class = "item">${ingredient}</li>`).join("")
console.log(items);

ul.insertAdjacentHTML('beforeend',items)