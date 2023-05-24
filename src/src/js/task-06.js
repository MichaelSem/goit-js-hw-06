const input = document.getElementById('validation-input');
const maxSymbols = document.querySelector('data-length');

input.addEventListener("blur", () => {
    if (input.length < 6) {
        input.style.borderColor = "#f44336";
        input.innerHTML;
    } else {

    }
});
    