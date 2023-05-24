function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.getElementsByClassName("change-color");
const body = document.getElementsByTagName("body");
const span = document.getElementsByClassName("color");

button[0].addEventListener("click", () => {
  const color = getRandomHexColor();
  body[0].setAttribute("style", `background-color: ${color};`);
  span[0].innerHTML = color;
});