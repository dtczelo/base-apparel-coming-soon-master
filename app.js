let email = document.getElementById("email");
let subButton = document.getElementById("subButton");
let errorIcon = document.getElementById("errorIcon");
let errorMsg = document.getElementById("errorMsg");

subButton.addEventListener("click", (e) => {
    e.preventDefault();
    let userMailValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(email.value);
    if (!userMailValid) {
        errorIcon.classList.add("error");
        errorMsg.classList.add("error");
    } else {
        errorIcon.classList.remove("error");
        errorMsg.classList.remove("error");
    }
})