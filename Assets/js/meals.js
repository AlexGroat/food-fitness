// spoontacular APIkey
var searchedMeals = document.querySelector("#appended_meals");

var mealButton = document.querySelector(".search-meals");

var foodApiKey = "927a07e8df4c43d9a987c5a1a7ed9584";

mealUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + foodApiKey;

var mealContainer = document.querySelector("meal-list")

searchedMealArray = [];

function searchMeal(event) {
    event.preventDefault();
    var queryMeals = document.querySelector("#meal_search");


    const Url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=927a07e8df4c43d9a987c5a1a7ed9584&query=${queryMeals.value}&number=50`;
    fetch(Url)
        .then(response => response.json())
        .then((jsonData) => {
            console.log(jsonData);
        });
}

var mealName = document.createElement("h1");
var mealImg =  document.createElement("img");








mealButton.addEventListener("submit", searchMeal);



