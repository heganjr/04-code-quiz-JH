// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question - Remove element
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

let questions = [
  {
    Q: "Q1 - Commonly used data types DO NOT include:",
    Choices: ["A: Strings", "B: Booleans", "C: Alerts", "D: Numbers"],
    Answer: "C: Alerts",
  },
  {
    Q:
      "Q2 - The condition in an if / else statement is enclosed within ______.",
    Choices: [
      "A: Quotes",
      "B: Curly Brackets",
      "C: Parentheses",
      "D: Square Brackets",
    ],
    Answer: "C: Parentheses",
  },
  {
    Q:
      "Q3 - String values must be enclosed within ______ when being assigned to variables.",
    Choices: ["A: Commas", "B: Curly Brackets", "C: Quotes", "D: Parentheses"],
    Answer: "C: Quotes",
  },
  {
    Q:
      "Q4 - A very useful tool used during development and debugging for printing content to the debugger is:",
    Choices: [
      "A: Javascript",
      "B: Terminal/ Bash",
      "C: For loops",
      "D: console.log",
    ],
    Answer: "D: console.log",
  },
  {
    Q: "Q5 - Arrays in JavaScript can be used to store ______.",
    Choices: [
      "A: Numbers and Strings",
      "B: Other Arrays",
      "C: Booleans",
      "D: All of the Above",
    ],
    Answer: "D: All of the Above",
  },
];
// Array for each question - Do a for loop to cycle through the questions each time I click on button
// Display check answer for a few seconds and then move onto next question

let questionIndex = 0;
let beginButton = document.getElementById("begin");
let timer = 60;
let countdownTimer = document.getElementById("countdown");
let timerInitialise;

beginButton.addEventListener("click", quizStartOnButtonClick);

function tickTock() {
  timer--;
  countdownTimer.textContent = timer;
  if (timer <= 0) {
    clearInterval(timerInitialise);
    timer = 0;
    countdownTimer.textContent = timer;
  }
}

function quizStartOnButtonClick() {
  timerInitialise = setInterval(tickTock, 1000);
  displayQuestion();
  var introSection = document.querySelector("#intro");
  introSection.style.display = "none";
  var questionSection = document.querySelector(".question");
  questionSection.style.display = "block";
}

function displayQuestion() {
  // if questionIndex >= questions.length then quiz is over
  // else carry on with displayCurrentQuestion()
  var currentQuestion = questions[questionIndex];
  var h3Element = document.querySelector("#question-text");
  h3Element.textContent = currentQuestion.Q;
  displayChoices(currentQuestion);
  questionIndex++;
}

function displayChoices(currentQuestion) {
  // var buttonElement = document.querySelector("#choice0");
  // buttonElement.textContent = currentQuestion.Choices[0]
  // made redundant by loop below
  var choices = currentQuestion.Choices;
  for (let choicesIndex = 0; choicesIndex < choices.length; choicesIndex++) {
    const choiceText = choices[choicesIndex];
    // what ever index number we are up to in the for loop invoke that choice string
    var buttonElement = document.querySelector("#choice" + "-" + choicesIndex);
    buttonElement.textContent = choiceText;
    // selecting the button id (named it similar to index so can cycle through easier) and adding the text found in the choices property in the Questions index to the button element with .textcontent
  }
}

let answerA = document.querySelector("#choice-0")
console.log(answerA)
answerA.addEventListener("click", displayChoices);

let answerB = document.querySelector("#choice-1")
console.log(answerB)
answerB.addEventListener("click", displayChoices);

let answerC = document.querySelector("#choice-2")
console.log(answerC)
answerC.addEventListener("click", displayChoices);

let answerD = document.querySelector("#choice-3")
console.log(answerD)
answerD.addEventListener("click", displayChoices);
// Event listener works if function changed to displayQuestion

// let buttonAnswer = document.querySelectorALL(".question button")
// let questionAnswer = currentQuestion[index]

// function rightOrWrong(){
//   if (buttonAnswer === questionAnswer) {
    
//   } else {
    
//   }

// }
// if button value = Answer property of the CurrentQuestion array then correct (CORRECT), else it is wrong (WRONG) and time is deducted



// eventListeners on buttons (in Global Scope) - DO NOT ADD event listeners into the for loop - DONE
// EventListens call function OnWhetherAnswerIsCorrect show "CORRECT" else "WRONG"
// After checking answer (whithin same function) call function displayCurrentQuestion


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

