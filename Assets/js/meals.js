// spoontacular APIkey

var foodApiKey = "927a07e8df4c43d9a987c5a1a7ed9584";

mealUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' +foodApiKey;

var mealContainer = document.querySelector("meal-list")

searchedMealArray = [];

function searchMeal (query) {
    const Url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=927a07e8df4c43d9a987c5a1a7ed9584&query=" + $[query] + "&number=50&offset=5";
    fetch (Url)
    .then(response => response.json())
    .then((jsonData) => {
    console.log(jsonData);
    
       
    });

}
