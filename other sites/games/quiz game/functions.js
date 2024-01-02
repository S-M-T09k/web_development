//*functions
export function toSimpleString(string) {

  string = string.trim();
  string = string.toLowerCase();
  string = string.replaceAll(" ", "");

  return string;
};

export function previousQuestion(questions, questionDisplay, index) {

  if (index == 0) {
    index = questions.length - 1;
  }
  else {
    index--;
  }

  questionDisplay.innerText = (index + 1) + ". " + questions[index].question;

  return index;
};

export function nextQuestion(questions, questionDisplay, index) {

  if (index == questions.length - 1) {
    index = 0;
  }
  else {
    index++;
  }

  questionDisplay.innerText = (index + 1) + ". " + questions[index].question;

  return index;
};

export function randomQuestion(questions, questionDisplay, index) {

  index = Math.floor(Math.random() * questions.length);

  questionDisplay.innerText = (index + 1) + ". " + questions[index].question;

  return index;
};

export function wipeAnswers(correctOrNot, correctAnswer, input) {
  correctOrNot.innerText = "";
  correctAnswer.innerText = "";
  input.value = "";
};
