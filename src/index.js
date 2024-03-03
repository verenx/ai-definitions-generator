function generatePoem(event) {
event.preventDefault();
let poemElement = document.querySelector("#generated-poem");
let searchFieldElement = document.querySelector("#search-field");
poemElement.innerHTML = searchFieldElement.value;
}

let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", generatePoem);