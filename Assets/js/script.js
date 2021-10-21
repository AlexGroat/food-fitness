// spoontacular APIkey
var foodApiKey = "927a07e8df4c43d9a987c5a1a7ed9584";

// store sign in data to local storage

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signupButton = document.querySelector("#submit");

signupButton.addEventListener("click", function(event) {
    event.preventDefault();

    var user = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    };

    localStorage.setItem("user", JSON.stringify(user));
});

// calling the exerciseApiKey to put on the homepage

var exerciseApiKey = "400efa57855afc8a9662ce44f394f6e2d540beda"

var exerciseList = document.querySelector("#appended-exercise")

var exerciseImage = document.querySelector(".appended-exercise-images")



function displayExercises(event) {
    event.preventDefault();

    const UrlOne = `https://wger.de/api/v2/exerciseinfo/?language=2&apikey=${exerciseApiKey}`
    fetch(UrlOne)
        .then(response => response.json())
        .then((jsonData) => {
            for (var i = 0; i < jsonData.results.length; i++) {
                var exerciseAppendDiv = document.createElement("div")
                var exerciseName = document.createElement("h3")

                exerciseName.textContent = jsonData.results[i].name;

                exerciseAppendDiv.appendChild(exerciseName)
                exerciseList.appendChild(exerciseAppendDiv)
            }
        })

    const UrlTwo = `https://wger.de/api/v2/exerciseimage/?langauge=2&apikey=${exerciseApiKey}`;
    fetch(UrlTwo)
        .then(response => response.json())
        .then((jsonData) => {
            for (var i = 0; i < jsonData.results.length; i++) {
                var exerciseImageAppendDiv = document.createElement("div");
                var imageExercise = document.createElement("img");

                imageExercise.setAttribute("src", jsonData.results[i].image);

                exerciseImageAppendDiv.appendChild(imageExercise);
                // exerciseImage.appendChild(imageExercise);
            }
        })

}

signupButton.addEventListener("submit", displayExercises)


// calling the foodApiKey to put into the homepage

var searchedMeals = document.querySelector("#appended-meals");

var signupButton = document.querySelector("#form");

var foodApiKey = "f10bded0f0fb4c758b590774eff56541";

mealUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + foodApiKey;

var mealContainer = document.querySelector("meal-list")

searchedMealArray = [];

function searchMeal(event) {
    event.preventDefault();
    var queryMeals = document.querySelector("#meal_search");


    const Url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=f10bded0f0fb4c758b590774eff56541&query${queryMeals.value}&number=50`;
    fetch(Url)
        .then(response => response.json())
        .then((jsonData) => {
            searchedMeals.innerHTML = "";
            for (var i = 0; i < jsonData.results.length; i++) {
                var mealAppendDiv = document.createElement("div");
                var mealName = document.createElement("h1");
                var mealImg = document.createElement("img");
    
                mealImg.setAttribute("src", jsonData.results[i].image);
                mealName.textContent = jsonData.results[i].title;
    
                mealAppendDiv.appendChild(mealImg);
                mealAppendDiv.appendChild(mealName);
                searchedMeals.appendChild(mealAppendDiv);

            }
         
            console.log(jsonData);
        });
}

signupButton.addEventListener("submit", searchMeal);