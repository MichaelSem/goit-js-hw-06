const input = document.getElementById('validation-input');

input.addEventListener("blur", () => {
    if (input.length > 6 || input.length < 6) {
        
    } else {
        input.valid;
    }
});
    