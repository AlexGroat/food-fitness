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

        
};

=======
>>>>>>> 5a08c4460ecb18d4b907ab0ad58bfd079e85b819

}

loginButton.addEventListener("submit", userLogin);