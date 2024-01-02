//*classes
export class Question {
  constructor(name, question, correctAnswer) {

    this.name = name;
    this.question = question;
    this.correctAnswer = correctAnswer;

    Question.numberOfQuestions++;
  }

  static numberOfQuestions = 0;
};

export class ShortAnswerQuestion extends Question {
  constructor(name, question, correctAnswer) {

    super(name, question, correctAnswer);

    ShortAnswerQuestion.numberOfQuestions++;
  }

  static numberOfQuestions = 0;
};

export class MultipleChoiceQuestion extends Question {
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
