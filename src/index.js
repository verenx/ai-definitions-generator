function displayDefinition(response) {
  

    new Typewriter('#generated-definition', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generateDefinition(event) {
event.preventDefault();

let searchedWordElement = document.querySelector("#search-field");
let definitionBox = document.querySelector("#generated-definition");
definitionBox.classList.remove("hidden");
definitionBox.innerHTML = `<div class="generating-blink">⏳Generating a definition for <strong>${searchedWordElement.value}</strong></div>`;

let apiKey = "bbb7o8acc1a3c8e9f87003f9494b2cct";
let prompt = `Please provide a precise word definition for ${searchedWordElement.value}. Produce the definition in basic HTML format and give it a heading of <h3> Definition </h3>. After this add only one example sentence. The sentence must include this word ${searchedWordElement.value} and show how this word can be used in a sentence. Produce the example sentence in basic HTML format and give it a heading of <h3> Example </h3>. Put your signature as a line at the end like this: <em> SheCodes AI </em>`;
let context = "You are a very intelligent AI assistant and you know all the word definitions in this world. You can define words in a very short and precise way. Please only include the definition of the word and the examples in your answer, don't make any polite introductory remarks.";

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayDefinition);
}

let generateDefintionElement = document.querySelector("#generate-definition-form");
generateDefintionElement.addEventListener("submit", generateDefinition);
