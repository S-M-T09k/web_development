//*imports
import {
  Question,
  ShortAnswerQuestion,
  MultipleChoiceQuestion,

} from './classes.js'


//*questions
export const shortAnswerQuestions = [

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

export const multipleChoiceQuestions = [

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
