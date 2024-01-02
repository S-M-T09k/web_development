//*luck
let luck;

document.getElementById("test").onclick = function () {
  luck = Math.floor(Math.random() * 10);
  console.log(luck);

  if (luck == 0 || luck == 1) {
    document.getElementById("result").innerHTML = "you are: unlucky!";
  } else if (luck == 8 || luck == 9) {
    document.getElementById("result").innerHTML = "you are: lucky!";
  } else {
    document.getElementById("result").innerHTML = "you are: mid";
  }
};

const idFetch = document.getElementById.bind(document);
/*let number;

number = 1;

for (let i = 1; i <= number; i++) {
    console.log(i)
    if (i % 2 == 0) {
        console.log("even number")
    }
    else {
        console.log("odd number")
    }
}*/

//*number guessing game
let correctGuess = Math.round(Math.random() * 100);
console.log("correct guess: " + correctGuess);

document.getElementById("submitGuess").onclick = function () {
  let guess = document.getElementById("guess").value;
  let output = document.getElementById("output");

  if (guess == correctGuess) {
    output.innerHTML = "That is correct!";
  } else if (guess == "") {
    output.innerHTML = "invalid guess";
  } else if (guess < correctGuess) {
    output.innerHTML = "You need to guess higher";
  } else if (guess > correctGuess) {
    output.innerHTML = "You need to guess lower";
  }
  console.log(guess);
};

document.getElementById("new").onclick = function () {
  document.getElementById("guess").value = "";
  document.getElementById("output").innerHTML = "";

  let minValue = Math.round(Math.random() * -1000);
  console.log(minValue);
  let maxValue = Math.round(Math.random() * 1000);
  console.log(maxValue);

  document.getElementById("min").innerHTML = minValue;
  document.getElementById("max").innerHTML = maxValue;

  document.getElementById("guess").setAttribute("min", minValue);
  document.getElementById("guess").setAttribute("max", maxValue);

  correctGuess = Math.round(Math.random() * (maxValue - minValue) + minValue);
  console.log("correct guess: " + correctGuess);
};

document.getElementById("reset").onclick = function () {
  document.getElementById("guess").value = "";
  document.getElementById("output").innerHTML = "";

  document.getElementById("min").innerHTML = 0;
  document.getElementById("max").innerHTML = 100;

  document.getElementById("guess").setAttribute("min", 0);
  document.getElementById("guess").setAttribute("max", 100);

  correctGuess = Math.round(Math.random() * 100);
  console.log("correct guess: " + correctGuess);
};

//*marry kiss kill
function Kiss(person) {
  console.log("you kissed " + person);
  let kissArea = document.getElementById("kiss area");
  let nameKissed = document.createTextNode(" " + personKissed);
  kissArea.appendChild(nameKissed);
};

function Marry(person) {
  console.log("you married " + person);
  let marryArea = document.getElementById("marry area");
  let nameMarried = document.createTextNode(" " + personMarried);
  marryArea.appendChild(nameMarried);
};

function Kill(person) {
  console.log("you killed " + person);
  let killArea = document.getElementById("kill area");
  let nameKilled = document.createTextNode(" " + personKilled);
  killArea.appendChild(nameKilled);
};

let personKissed;
let personMarried;
let personKilled;

function Done() {
  personKissed = document.getElementById("kiss").value;
  personMarried = document.getElementById("marry").value;
  personKilled = document.getElementById("kill").value;
  Kiss(personKissed);
  Marry(personMarried);
  Kill(personKilled);
};

document.getElementById("done").onclick = Done;

//*rock paper scissors lizard spock
let userChoice;
let computerChoice;
let result;
let explanation;

const rock = idFetch("rock");
const paper = idFetch("paper");
const scissors = idFetch("scissors");
const lizard = idFetch("lizard");
const spock = idFetch("spock");

const userChoiceDisplay = idFetch("userChoiceDisplay");
const computerChoiceDisplay = idFetch("computerChoiceDisplay");
const resultDisplay = idFetch("resultDisplay");

const possibleChoices = document.querySelectorAll(".RPSLS");
//console.log (possibleChoices);

//?still don't know how these things work!
possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    console.log("user: " + userChoice);
    computerChoice = GenerateComputerChoice();
    computerChoiceDisplay.innerHTML = computerChoice;
    result = GetResult(userChoice, computerChoice);
    resultDisplay.innerHTML = result;
    GetExplanation();
  })
);

function GenerateComputerChoice() {
  let choice;
  choice = Math.floor(Math.random() * possibleChoices.length) + 1;
  console.log(choice);

  switch (choice) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
    case 4:
      choice = "lizard";
      break;
    case 5:
      choice = "spock";
      break;
  }

  console.log("Computer: " + choice);
  return choice;
};

function GetResult(p1, p2) {
  let condition;
  switch (true) {
    case p1 == p2:
      condition = "You drew";
      break;
    case p1 == "rock" && p2 == "scissors":
    case p1 == "rock" && p2 == "lizard":
    case p1 == "paper" && p2 == "rock":
    case p1 == "paper" && p2 == "spock":
    case p1 == "scissors" && p2 == "paper":
    case p1 == "scissors" && p2 == "lizard":
    case p1 == "lizard" && p2 == "paper":
    case p1 == "lizard" && p2 == "spock":
    case p1 == "spock" && p2 == "rock":
    case p1 == "spock" && p2 == "scissors":
      condition = "You won!";
      break;
    case p1 == "scissors" && p2 == "rock":
    case p1 == "lizard" && p2 == "rock":
    case p1 == "rock" && p2 == "paper":
    case p1 == "spock" && p2 == "paper":
    case p1 == "paper" && p2 == "scissors":
    case p1 == "lizard" && p2 == "scissors":
    case p1 == "paper" && p2 == "lizard":
    case p1 == "spock" && p2 == "lizard":
    case p1 == "rock" && p2 == "spock":
    case p1 == "scissors" && p2 == "spock":
      condition = "You lost";
      break;
    //this shit was very tiring
    default:
      condition = null;
      break;
  };
  console.log(condition);
  return condition;
};

function GetExplanation() {
  idFetch("explanationDisplay").innerHTML =
    "I'm too lazy to write code for this";
};