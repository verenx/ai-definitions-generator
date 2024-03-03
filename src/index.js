function generateDefinition(event) {
event.preventDefault();

new Typewriter('#generated-definition', {
    strings: "an alcoholic drink made from fermented grape juice",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

}

let generateDefintionElement = document.querySelector("#generate-definition-form");
generateDefintionElement.addEventListener("submit", generateDefinition);