const input = document.querySelector('[data-length="6"');
const maxLength = 6;


input.addEventListener("blur", () => {
    if (input.value.length === maxLength) {
            input.setAttribute("style", "border-color: #4caf50");
        } else {
            input.setAttribute("style", "border-color: #f44336");
        }
    }); 
