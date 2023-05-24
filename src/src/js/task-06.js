const input = document.getElementById('validation-input');
const maxSymbols = document.querySelector('data-length');

input.addEventListener("blur", () => {
    if (input.length > maxSymbols || input.length < maxSymbols) {

    } else {
        
    }
});
    