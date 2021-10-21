// spoontacular APIkey
var foodApiKey = "927a07e8df4c43d9a987c5a1a7ed9584";


// store sign in data to local storage

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signupButton = document.querySelector("#signup");

signupButton.addEventListener("click", function(event) {
    event.preventDefault();

    var user = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    };

    localStorage.setItem("user", JSON.stringify(user));
});


