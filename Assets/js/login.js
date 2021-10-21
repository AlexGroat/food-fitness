var user =JSON.parse(localStorage.getItem('user'));

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
