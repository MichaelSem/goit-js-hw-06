function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.getElementById("boxes");
const numbersInput = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");



const createDivs = () => {
  const numbers = numbersInput.value;
  let divSize = 30;
  const array = [];
  for (let index = 0; index < numbers; index++) {
    const element = document.createElement("div");
    element.style.width = `${divSize}px`;
    element.style.height = `${divSize}px`;
    divSize+=10;
    element.style.backgroundColor = getRandomHexColor();
    array.push(element);
  }
  const markup = array
  .map(arrayElem => arrayElem.outerHTML)
  .join("");
boxes.insertAdjacentHTML("beforeend", markup);
};

const destroyDivs = () => {
  boxes.replaceChildren();
};

btnCreate.addEventListener("click", createDivs);
btnDestroy.addEventListener("click", destroyDivs);