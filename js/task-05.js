const nameInput = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');
let message;

nameInput.addEventListener("input", (event) => {
        nameOutput.textContent = event.currentTarget.value;
        if (event.currentTarget.value.length === 0) {
                nameOutput.innerHTML = "Anonymous";
        }
});




