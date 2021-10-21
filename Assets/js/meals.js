// spoontacular APIkey
var searchedMeals = document.querySelector("#appended_meals");
var mealButton = document.querySelector(".search-meals");
var foodApiKey = "f10bded0f0fb4c758b590774eff56541";

var mealContainer = document.querySelector("meal-list")

function searchMeal(event) {
    event.preventDefault();
    var queryMeals = document.querySelector("#meal_search");
    const Url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${foodApiKey}&query=${queryMeals.value}&number=50`;
    fetch(Url)
        .then(response => response.json())
        .then((jsonData) => {
            searchedMeals.innerHTML = "";
            for (var i = 0; i < jsonData.results.length; i++) {
                var appendDiv = document.createElement("div");
                var mealName = document.createElement("h1");
                var mealImg = document.createElement("img");

                mealImg.setAttribute("src", jsonData.results[i].image);
                mealName.textContent = jsonData.results[i].title;

                appendDiv.appendChild(mealImg);
                appendDiv.appendChild(mealName);
                searchedMeals.appendChild(appendDiv);

            }

            console.log(jsonData);
        });
}

mealButton.addEventListener("submit", searchMeal);