var user = JSON.parse(localStorage.getItem('user'));

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var loginButton = document.querySelector(".login-form");

function userLogin(event) {
    event.preventDefault();

    if (emailInput.value === user.email && passwordInput.value === user.password) {
        console.log("Correct Email and Password");

    } else {
        console.log("Incorrect Email or Password");
<<<<<<< HEAD
        document.getElementById("calloutalert").style.visibility = "visible";
    }
=======
        
    };


>>>>>>> 297ca2c4eb3c5a20308a87271c029db2639c6b09
}

loginButton.addEventListener("submit", userLogin);