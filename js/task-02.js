const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
for (let index = 0; index < ingredients.length; index++) {
  let name = ingredients[index];
  let entry = document.createElement('li');
  entry.appendChild(document.createTextNode(name));
  list.appendChild(entry);
}

