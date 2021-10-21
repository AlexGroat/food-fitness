var searchedMeals = document.querySelector("#appended-meals");
var mealButton = document.querySelector(".search-meals");
var foodApiKey = "1f1c8f27a3a44e8094931c4db570c65e";

var mealContainer = document.querySelector("meal-list")

function searchMeal(event) {
    event.preventDefault();
    var queryMeals = document.querySelector("#meal_search");
    const Url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${foodApiKey}&query=${queryMeals.value}&number=50&addRecipeInformation=true`;
    fetch(Url)
        .then(response => response.json())
        .then((jsonData) => {
            searchedMeals.innerHTML = "";
            for (var i = 0; i < jsonData.results.length; i++) {
                var appendDiv = document.createElement("div");
                var mealName = document.createElement("h1");
                var mealImg = document.createElement("img");
                var mealSummary = document.createElement("p")

                mealImg.setAttribute("src", jsonData.results[i].image);
                mealName.textContent = jsonData.results[i].title;
                mealSummary.textContent = jsonData.results[i].summary;

                appendDiv.appendChild(mealImg);
                appendDiv.appendChild(mealName);
                appendDiv.appendChild(mealSummary);
                searchedMeals.appendChild(appendDiv);


            }

            console.log(jsonData);
        });
}

mealButton.addEventListener("submit", searchMeal);

'https://api.spoonacular.com/recipes/?apiKey=${foodApiKey}'


