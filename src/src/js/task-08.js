const email = document.getElementsByName("email");
const password = document.getElementsByName("password");
const button = document.getElementsByTagName("button");
const form = document.getElementsByClassName("login-form");

button[0].addEventListener("click", (event) => {
    event.preventDefault();
    const data = {};
    data.email = email[0].value;
    data.password = password[0].value;

    if (!data.email || !data.password) {
        alert("MINION ALERT")
    } else {
        console.log(data);
        form[0].reset();
    }
    
});