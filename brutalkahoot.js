// Brutal Kahoot 
// Begin

// Variables 

const number_of_rounds = document.querySelector(".top-bar__QuestionNumber-sc-186o9v8-2.hAQMGb");

// Change text in Kahoot to Brutal Kahoot text

function changeText () {
  number_of_rounds.innerText = number_of_rounds.innerText + " ROUNDS USED IN CLIP";
}

changeText();
