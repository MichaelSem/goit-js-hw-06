const buttonIncrease = document.querySelector('[data-action="increment"]');
const buttonDecrease = document.querySelector('[data-action="decrement"]');
let value = document.getElementById("value");
let counterValue = 0;

buttonIncrease.addEventListener("click", () => {
  counterValue++;
  value.innerHTML = counterValue;
});

buttonDecrease.addEventListener("click", () => {
  counterValue--;
  value.innerHTML = counterValue;
});
