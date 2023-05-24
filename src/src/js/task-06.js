const input = document.getElementsByTagName('input');
const maxLength = 6;


input[0].addEventListener("blur", () => {
    if (input[0].value.length === maxLength) {
            input[0].setAttribute("style", "border-color: #4caf50");
        } else {
            input[0].setAttribute("style", "border-color: #f44336");
        }
    }); 
