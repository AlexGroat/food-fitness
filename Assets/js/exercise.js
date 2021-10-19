// exercise API key

var exerciseApiKey = "400efa57855afc8a9662ce44f394f6e2d540beda";

var exerciseList = document.querySelector("#append-exercise");

var exerciseImage = document.querySelector("#append-exercise-image")

var exerciseButton = document.querySelector(".exercise-form")

function displayExercises(event) {
    event.preventDefault();

    const UrlOne = `https://wger.de/api/v2/exerciseinfo/?language=2&apikey=${exerciseApiKey}`;
    fetch(UrlOne)
        .then(response => response.json())
        .then((jsonData) => {
            for (var i = 0; i < jsonData.results.length; i++) {
                var exerciseAppendDiv = document.createElement("div");
                var exerciseName = document.createElement("h1");

                exerciseName.textContent = jsonData.results[i].name;

                exerciseAppendDiv.appendChild(exerciseName);
                exerciseList.appendChild(exerciseAppendDiv);
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
            exerciseImage.appendChild(imageExercise);
        }
    })
}



exerciseButton.addEventListener("submit", displayExercises);