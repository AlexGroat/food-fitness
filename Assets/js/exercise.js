// exercise API key

var exerciseApiKey = "400efa57855afc8a9662ce44f394f6e2d540beda";

var exerciseList = document.querySelector("#append-exercise");

var exerciseImage = document.querySelector("#append-exercise-image")

var exerciseButton = document.querySelector(".exercise-form")

function displayExercises(event) {
    event.preventDefault();

    const UrlOne = `https://wger.de/api/v2/exercise/?limit=50&offset=20&language=2`;
    fetch(UrlOne)
        .then(response => response.json())
        .then((jsonData) => {
            for (var i = 0; i < jsonData.results.length; i++) {
                var exerciseAppendDiv = document.createElement("div");
                var exerciseName = document.createElement("h1");
                var exerciseDescription = document.createElement("p");

                exerciseName.textContent = jsonData.results[i].name;
                exerciseDescription.textContent = jsonData.results[i].description;

                exerciseAppendDiv.appendChild(exerciseName);
                exerciseAppendDiv.appendChild(exerciseDescription);
                exerciseList.appendChild(exerciseAppendDiv);
            }
        })
}

exerciseButton.addEventListener("submit", displayExercises);