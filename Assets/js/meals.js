// spoontacular APIkey

var foodApiKey = "927a07e8df4c43d9a987c5a1a7ed9584";

mealUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' +foodApiKey;

var mealContainer = document.querySelector("meal-list")


function searchMeal (query) {
    const Url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=927a07e8df4c43d9a987c5a1a7ed9584&query=" + $(query);
    fetch (Url)
    .then(response => response.json())
    .then((jsonData) => {
        console.log("we got meal data");
        console.log(jsonData);
    });

}
