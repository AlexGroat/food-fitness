// spoontacular APIkey
var searchedMeals = document.querySelector("#appended_meals");

var mealButton = document.querySelector(".search-meals");

var foodApiKey = "f10bded0f0fb4c758b590774eff56541";
<<<<<<< HEAD

mealUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + foodApiKey;

var mealContainer = document.querySelector("meal-list")

searchedMealArray = [];
=======
>>>>>>> 2bd426bbcf146ccf0172e24179a6729370465324

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












mealButton.addEventListener("submit", searchMeal);



