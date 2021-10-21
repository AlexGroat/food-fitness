var user = JSON.parse(localStorage.getItem('user'));

<<<<<<< HEAD
const login = document.getElementById("form_id")
const loginButton = document.getElementById("login")


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const user.email = form_id.username
    const user.password = form_id.password

    if (user.email === localStorage.getItem("email") && user.password === localStorage.getItem("password")) {
        console.log("correct things")
    } else {
        console.log("incorrect things")
    }
})
=======
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var loginButton = document.querySelector(".login-form");

function userLogin(event) {
    event.preventDefault();

    if (emailInput.value === user.email && passwordInput.value === user.password) {
        console.log("Correct Email and Password");
    } else {
        console.log("Incorrect Email or Password");
        $("#login-alert").toggle()
     } ;


}

loginButton.addEventListener("submit", userLogin);



// click event listener
// read value of email
// read value of password
// compare value
>>>>>>> 8f41cdf10cb4bdfc02d2c2e793109a34ef2f1043
