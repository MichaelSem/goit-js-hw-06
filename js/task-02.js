const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let line = "";

const list = document.getElementById('ingredients');
for (const ingredient of ingredients) {
  const listItem = document.createElement("li");
  listItem.className = "item";
  listItem.append(ingredient);
  console.log(listItem);
  line += listItem.outerHTML;
}

list.insertAdjacentHTML("beforeend", line);

// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");