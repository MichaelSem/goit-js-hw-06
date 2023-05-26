const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("input", () => {
    text.setAttribute("style", `font-size: ${text.style.fontSize = input.value}px;`)
});