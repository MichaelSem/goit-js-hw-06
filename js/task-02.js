const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

var list = document.getElementById('ingredients');
for (let index = 0; index < ingredients.length; index++) {
  let name = ingredients[index];
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(name));
  list.appendChild(entry);
}

