// spoontacular APIkey
var foodApiKey = "927a07e8df4c43d9a987c5a1a7ed9584";

// exercise API key
var exerciseApiKey = "400efa57855afc8a9662ce44f394f6e2d540beda";

// declaring varibales for the project
var mealImg = "";
var mealName = "";
var exerciseImg = "";
var exerciseName = "";

function pagevisibility() {
    var page = document.getElementById('page-container')
}

// error messages for the form
const name = document.getElementById('name')
const email = document.getElementById('email')
const age = document.getElementById('age')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (event) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be no longer than 20 characters')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (age.value <= 14) {
        messages.push('Must be at least 15 years of age')
    }
 
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }  
});


// calling the foodapi

mealUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + foodApiKey;

var mealContainer = document.getElementById('meals-orbit')

searchedMealArray = [];

function searchMeal (query) {
    form.addEventListener('submit')
    const Url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=927a07e8df4c43d9a987c5a1a7ed9584&query=" + $[query] + "&number=50&offset=5"
    fetch (Url)
    .then(respons => response.json())
    .then((jsonData) => {
        console.log(jsonData)
    })
}