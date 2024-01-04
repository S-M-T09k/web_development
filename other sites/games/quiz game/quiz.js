//!this is done without a tutorial so it will take a shit ton of time
//!start

//*classes
class Question {
  constructor(name, question, correctAnswer) {
    
    this.name = name;
    this.question = question;
    this.correctAnswer = correctAnswer;

    Question.numberOfQuestions++;
  }

  static numberOfQuestions = 0;
};

class ShortAnswerQuestion extends Question {
  constructor(name, question, correctAnswer) {

    super(name, question, correctAnswer);

    ShortAnswerQuestion.numberOfQuestions++;
  }

  static numberOfQuestions = 0;
};

class MultipleChoiceQuestion extends Question {
  constructor(name, question, correctAnswer, choices) {
    super(name, question, correctAnswer);
    this.choices = choices;

    MultipleChoiceQuestion.numberOfQuestions++;
  }

  shuffleChoices() {

    for (let i = this.choices.length - 1; i > 0; i--) {

      const random = Math.floor(Math.random() * (i + 1));

      if (this.choices[i] != `None of the above` && this.choices[i] != `All of the above`) {

        [this.choices[i], this.choices[random]] = [this.choices[random], this.choices[i]];
      }
    };

    return this.choices;
  };

  static numberOfQuestions = 0;
};



//*DOM elements
const gameArea_shortAnswer = document.querySelector('#shortAnswer');
const questionDisplay_shortAnswer = document.querySelector('#shortQuestion');
const userInput_shortAnswer = document.querySelector('#userAnswer_short');
const correctOrNotDisplay_shortAnswer = document.querySelector('#correctionCheck_shortQuestion');
const correctAnswerDisplay_shortAnswer = document.querySelector('#correctShortAnswer');
const submit_shortAnswer = document.querySelector('#submitShortAnswer');
const goBack_shortAnswer = document.querySelector('#goBack_shortAnswer');
const goNext_shortAnswer = document.querySelector('#goNext_shortAnswer');
const random_shortAnswer = document.querySelector('#random_shortAnswer');
const allNav_shortAnswer = document.querySelectorAll('.nbs');
const scoreDisplay_shortAnswer = document.querySelector('#scoreDisplay_shortAnswer');

const gameArea_multipleChoice = document.querySelector('#multipleChoice');
const questionDisplay_multipleChoice = document.querySelector('#multipleChoiceQuestion');
const choices_multipleChoice = document.querySelectorAll('.choices');
const choiceDisplays_multipleChoice = document.querySelectorAll('.choiceDisplays');
const correctOrNotDisplay_multipleChoice = document.querySelector('#correctionCheck_multipleChoice');
const correctAnswerDisplay_multipleChoice = document.querySelector('#correctMultipleChoice');
const submit_multipleChoice = document.querySelector('#submitMultipleChoiceAnswer');
const goBack_multipleChoice = document.querySelector('#goBack_multipleChoice');
const goNext_multipleChoice = document.querySelector('#goNext_multipleChoice');
const random_multipleChoice = document.querySelector('#random_multipleChoice');
const allNav_multipleChoice = document.querySelectorAll('.nbm');
const scoreDisplay_multipleChoice = document.querySelector('#scoreDisplay_multipleChoice');



//*functions
function toSimpleString(string) {

  string = string.trim();
  string = string.toLowerCase();
  string = string.replaceAll(" ", "");

  return string;
};

function previousQuestion(questions, questionDisplay, index, isMultipleChoiceQuestion) {

  if (index == 0) {
    index = questions.length -1;
  }
  else {
    index--;
  };

  questionDisplay.innerText = (index+1) +". "+ questions[index].question;

  appendChoices(index, isMultipleChoiceQuestion);

  return index;
};

function nextQuestion(questions, questionDisplay, index, isMultipleChoiceQuestion) {

  if (index == questions.length -1) {
    index = 0;
  }
  else {
    index++;
  }

  questionDisplay.innerText = (index+1) +". "+ questions[index].question;

  appendChoices(index, isMultipleChoiceQuestion);

  return index;
};

function randomQuestion(questions, questionDisplay, index, isMultipleChoiceQuestion) {

  index = Math.floor(Math.random() * questions.length);

  questionDisplay.innerText = (index+1) +". "+ questions[index].question;

  appendChoices(index, isMultipleChoiceQuestion);

  return index;
};

function wipeAnswers(correctOrNot, correctAnswer, input) {

  correctOrNot.innerText = "";
  correctAnswer.innerText = "";
  if (input != null) {
    input.value = "";
  }
};

function appendChoices(index, isMultipleChoiceQuestion) {

  if (isMultipleChoiceQuestion == true) {

    choiceDisplays_multipleChoice.forEach((element, i) => {
      // console.log(object :>> ', multipleChoiceQuestions[index]);
      // console.log('element :>> ', element);
      // console.log('i :>> ', i);
      // console.log('replacing :>> ', multipleChoiceQuestions[index ].choices[i]);
      element.textContent = multipleChoiceQuestions[index].choices[i];
    });
  }
};



//*questions
const shortAnswerQuestions = [

  new ShortAnswerQuestion(
    `biggestPlanet`,
    `What is the biggest planet in our solar system?`,
    `Jupiter`
  ),

  new ShortAnswerQuestion(
    `highestGrossingFilm`,
    `What is the highest grossing film of all time?`,
    `Avatar`
  ),

  new ShortAnswerQuestion(
    `capitalOfFrance`,
    `What is the capital of France?`,
    `Paris`
  ),

  new ShortAnswerQuestion(
    `writerOfRomeo&Juliet`,
    `Who wrote "Romeo and Juliet"?`,
    `William Shakespeare`
  ),

  new ShortAnswerQuestion(
    `chemicalEquationOfWater`,
    `What is the chemical symbol for water?`,
    `H2O`
  ),

  new ShortAnswerQuestion(
    `endOfWW2`,
    `In which year did World War II end?`,
    `1945`
  ),

  new ShortAnswerQuestion(
    `JapaneseCurrency`,
    `What is the currency of Japan?`,
    `Yen`
  ),

  new ShortAnswerQuestion(
    `tallestMountain`,
    `What is the tallest mountain in the world?`,
    `Mount Everest`
  ),

  new ShortAnswerQuestion(
    `nameOf"O"`,
    `What element does "O" represent on the periodic table?`,
    `Oxygen`
  ),

  new ShortAnswerQuestion(
    `smallestPrime`,
    `What is the smallest prime number?`,
    `2`
  ),

  new ShortAnswerQuestion(
    `authorOfHarryPotter`,
    `Who is the author of the Harry Potter series?`,
    `J.K. Rowling`
  ),

  new ShortAnswerQuestion(
    `bonesInHuman`,
    `How many bones are there in a human body?`,
    `206`
  ),
];

const multipleChoiceQuestions = [

  new MultipleChoiceQuestion(
    `speedOfLight`,
    `What is the exact speed of light in a vacuum?`,
    `299,792,458 m/s`,
    [`3×10⁸ m/s`, `292,351,713 m/s`, `325,435,688 m/s`, `299,792,458 m/s`, `400,102,623 m/s`]
  ),

  new MultipleChoiceQuestion(
    `redPlanet`,
    `Which planet is known as the "Red Planet"?`,
    `Mars`,
    [`Venus`, `Mars`, `Uranus`, `Mercury`, `Jupiter`]
  ),

  new MultipleChoiceQuestion(
    `goldAu`,
    `What is the chemical symbol for gold?`,
    `Au`,
    [`Ag`, `Pb`, `Gl`, `Au`, `Pu`]
  ),

  new MultipleChoiceQuestion(
    `largestOcean`,
    `What is the largest ocean on Earth?`,
    `Pacific Ocean`,
    [`Pacific Ocean`, `Atlantic Ocean`, `Indian Ocean`, `Arctic Ocean`, `Northern Ocean`]
  ),

  new MultipleChoiceQuestion(
    `largestMammal`,
    `What is the largest mammal on Earth?`,
    `Blue Whale`,
    [`Elephant`, `Blue Whale`, `Hippopotamus`, `Gorilla`, `None of the above`]
  ),

  new MultipleChoiceQuestion(
    `godOfTheSea`,
    `In Greek mythology, who is the god of the sea?`,
    `Poseidon`,
    [`Poseidon`, `Zeus`, `Apollo`, `Hermes`, `Ares`]
  ),

  new MultipleChoiceQuestion(
    `theoryOfRelativity`,
    `Who developed the theory of relativity?`,
    `Albert Einstein`,
    [`Isaac Newton`, `Albert Einstein`, `Stephen Hawking`, `Thomas Edison`, `Nicola Tesla`]
  ),

  new MultipleChoiceQuestion(
    `nobleGas`,
    `Which of the following is a noble gas?`,
    `None of the above`,
    [`Oxygen`, `Hydrogen`, `Carbon`, `Iodine`, `None of the above`]
  ),

  new MultipleChoiceQuestion(
    `closestToTheSun`,
    `Which planet is closest to the Sun?`,
    `Mercury`,
    [`Mercury`, `Venus`, `Mars`, `Earth`, `Neptune`]
  ),

  new MultipleChoiceQuestion(
    `nameOfOurSun`,
    `What is the name of our sun?`,
    `Sol`,
    [`Sol`, `The Sun`, `Ares`, `Titan`, `None of the above`]
  ),

  new MultipleChoiceQuestion(
    `primaryColor`,
    `Which of the following is a primary color?`,
    `All of the above`,
    [`Blue`, `Green`, `Red`, `None of the above`, `All of the above`]
  ),

  new MultipleChoiceQuestion(
    `notARealLanguage`,
    `In programming, which of these are not considered to be a real programming language?`,
    `All of the above`,
    [`HTML`, `CSS`, `JSON`, `REST`, `All of the above`]
  ),
];



//*main
let questionIndex_shortAnswer = 0;
let userAnswer_shortAnswer = "";
let score_shortAnswer = 0;
let tries_shortAnswer = 0;
let completed_shortAnswers = [];

let questionIndex_multipleChoice = 0;
let score_multipleChoice = 0;
let tries_multipleChoice = 0;
let completed_multipleChoice = [];


//only for better player experience, this is unnecessary
multipleChoiceQuestions.forEach((element) => { element.shuffleChoices() });

//this is very ugly and bad code but it works, so it's ok
questionDisplay_shortAnswer.innerText = (questionIndex_shortAnswer+1) +'. '+ shortAnswerQuestions[questionIndex_shortAnswer].question;

questionDisplay_multipleChoice.innerText = (questionIndex_multipleChoice+1) +'. '+ multipleChoiceQuestions[questionIndex_multipleChoice].question;
choiceDisplays_multipleChoice.forEach((element, i) => {
  // console.log(i);
  // console.log(element);
  element.textContent = multipleChoiceQuestions[questionIndex_multipleChoice].choices[i];
});

//*nav buttons
goBack_shortAnswer.addEventListener('click', () => {

  questionIndex_shortAnswer = previousQuestion(
    shortAnswerQuestions,
    questionDisplay_shortAnswer,
    questionIndex_shortAnswer,
    false
  );

  wipeAnswers(
    correctOrNotDisplay_shortAnswer,
    correctAnswerDisplay_shortAnswer,
    userInput_shortAnswer
  );

});

goNext_shortAnswer.addEventListener('click', () => {

  questionIndex_shortAnswer = nextQuestion(
    shortAnswerQuestions,
    questionDisplay_shortAnswer,
    questionIndex_shortAnswer,
    false
  );

  wipeAnswers(
    correctOrNotDisplay_shortAnswer,
    correctAnswerDisplay_shortAnswer,
    userInput_shortAnswer
  );

});

random_shortAnswer.addEventListener('click', () => {

  questionIndex_shortAnswer = randomQuestion(
    shortAnswerQuestions,
    questionDisplay_shortAnswer,
    questionIndex_shortAnswer,
    false
  );

  wipeAnswers(
    correctOrNotDisplay_shortAnswer,
    correctAnswerDisplay_shortAnswer,
    userInput_shortAnswer
  );

});

allNav_shortAnswer.forEach((e) => {

  e.addEventListener('click', () => {

    const questionName = shortAnswerQuestions[questionIndex_shortAnswer].name;
    // console.log(questionName);
    // console.log(completed_shortAnswers);

    for (const element of completed_shortAnswers) {

      if (element === questionName) {
        submit_shortAnswer.removeEventListener('click', submitShortAnswer);
        break;
      }
      else if (element !== questionName) {

        if (completed_shortAnswers.indexOf(element) === completed_shortAnswers.length - 1) {
          submit_shortAnswer.addEventListener('click', submitShortAnswer);
        }
        continue;
      }

    };

    tries_shortAnswer = 0;
    
  });
});


goBack_multipleChoice.addEventListener('click', () => {

  questionIndex_multipleChoice = previousQuestion(
    multipleChoiceQuestions,
    questionDisplay_multipleChoice,
    questionIndex_multipleChoice,
    true
  );

  wipeAnswers(
    correctOrNotDisplay_multipleChoice,
    correctAnswerDisplay_multipleChoice,
    null
  );

});

goNext_multipleChoice.addEventListener('click', () => {

  questionIndex_multipleChoice = nextQuestion(
    multipleChoiceQuestions,
    questionDisplay_multipleChoice,
    questionIndex_multipleChoice,
    true
  );

  wipeAnswers(
    correctOrNotDisplay_multipleChoice,
    correctAnswerDisplay_multipleChoice,
    null
  );

});

random_multipleChoice.addEventListener('click', () => {

  questionIndex_multipleChoice = randomQuestion(
    multipleChoiceQuestions,
    questionDisplay_multipleChoice,
    questionIndex_multipleChoice,
    true
  );

  wipeAnswers(
    correctOrNotDisplay_multipleChoice,
    correctAnswerDisplay_multipleChoice,
    null
  );

});

allNav_multipleChoice.forEach((e) => {

  //todo: this thing need to be done
});


submit_shortAnswer.addEventListener('click', submitShortAnswer);
submit_multipleChoice.addEventListener('click', submitMultipleChoice)

//*these function should not go to the functions because it is a main functionality
function submitShortAnswer() {

  userAnswer_shortAnswer = toSimpleString(userInput_shortAnswer.value);
  const userAnswer = userAnswer_shortAnswer;
  const correctAnswer = shortAnswerQuestions[questionIndex_shortAnswer].correctAnswer;

  // console.log('userAnswer_shortAnswer :>> ', userAnswer_shortAnswer);
  // console.log('tries_shortAnswer :>> ', tries_shortAnswer);

  if (userAnswer === toSimpleString(correctAnswer)) {

    score_shortAnswer++;
    tries_shortAnswer = 5;
    correctOrNotDisplay_shortAnswer.innerText = "✓ that is correct";
    correctAnswerDisplay_shortAnswer.innerText = "correct answer: " + correctAnswer;
    scoreDisplay_shortAnswer.innerText = score_shortAnswer;
    
    completed_shortAnswers.push(shortAnswerQuestions[questionIndex_shortAnswer].name);
  }
  else if (userAnswer == "" || userAnswer == null || userAnswer == undefined) {

    correctOrNotDisplay_shortAnswer.innerText = "please input a valid answer";
  }
  else {

    tries_shortAnswer++;
    correctOrNotDisplay_shortAnswer.innerText = "✕ that is incorrect";

    if (tries_shortAnswer === 5) {
      correctAnswerDisplay_shortAnswer.innerText = "correct answer: " + correctAnswer;
      completed_shortAnswers.push(shortAnswerQuestions[questionIndex_shortAnswer].name);
    }
  }

  completed_shortAnswers.forEach ((element) => {

    if (element === shortAnswerQuestions[questionIndex_shortAnswer].name) {

      submit_shortAnswer.removeEventListener('click', submitShortAnswer);
    };
  });

};

function submitMultipleChoice() {

  const question = multipleChoiceQuestions[questionIndex_multipleChoice];
  const userAnswerIndex = getAnswer().index;
  const correctAnswer = question.correctAnswer;
  const correctIndex = question.choices.indexOf(correctAnswer);
  // console.log(userAnswerIndex);
  // console.log(checkAnswer());
  // console.log(correctIndex);

  //todo: actual code should go down here
  

  //*another set of functions inside a function that is not even supposed to be a function
  function getAnswer() {
    let selectedElement;

    choices_multipleChoice.forEach((element, index) => {
      // console.log(element);
      // console.log(element.checked);
      if (element.checked) {
        selectedElement = { element:element, index:index };
      }
    });

    return selectedElement;
  };

  function checkAnswer() {

    if (userAnswerIndex == correctIndex) {


      return true;
    }
    else {


      return false;
    }
  };

};



//*logs
console.log(`there are ${Question.numberOfQuestions} total questions`);
console.log(`there are ${ShortAnswerQuestion.numberOfQuestions} short answer questions`);
console.log(`there are ${MultipleChoiceQuestion.numberOfQuestions} multiple choice questions`);
console.log("short answer questions", shortAnswerQuestions.map(element => element.name));
console.log("multiple choice questions", multipleChoiceQuestions.map(element => element.name));


//!end