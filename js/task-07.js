const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("input", () => {
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    console.log("hi");
    text.setAttribute("style", `font-size: ${text.style.fontSize = input.value}px;`)
});