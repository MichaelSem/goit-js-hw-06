const categoriesList = document.getElementById('#categories');
const amountOfCategories = document.querySelectorAll(".item");
const categorieNames = document.querySelectorAll("h2");
const items = document.querySelectorAll(".item ul");

console.log(`Number of categories: ${amountOfCategories.length}`);

items.forEach((item, index) => {
    console.log(`Category: ${categorieNames[index].innerHTML}`);
    console.log(`Elements ${item.children.length}`)
});
