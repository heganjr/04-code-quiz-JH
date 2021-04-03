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

let beginButton = document.getElementById("begin");
let timer = 60;
let countdownTimer = document.getElementById("countdown");
let timerStart;

beginButton.addEventListener("click", quizStartOnButtonClick);

function tickTock() {
  timer--;
  countdownTimer.textContent = timer;
  if (timer <= 0) {
    timer = 0;
    countdownTimer.textContent = timer;
    quizIsOver()
  }
}

const introSection = document.querySelector("#intro");
const questionSection = document.querySelector(".question");


function quizStartOnButtonClick() {
  timerStart = setInterval(tickTock, 1000);
  hideAllSections()
  displayQuestion();
  questionSection.style.display = "block";
}

let questionIndex = 0;
var currentQuestion = undefined;

function displayQuestion() {
  // if questionIndex >= questions.length then quiz is over
  // else carry on with displayCurrentQuestion()
  if (questionIndex >= questions.length) {
    quizIsOver();
  } else {
    currentQuestion = questions[questionIndex];
    var h3Element = document.querySelector("#question-text");
    h3Element.textContent = currentQuestion.Q;
    displayChoices(currentQuestion);
    questionIndex++;
  }
}

function displayChoices(currentQuestion) {
  var choices = currentQuestion.Choices;
  for (let choicesIndex = 0; choicesIndex < choices.length; choicesIndex++) {
    const choiceText = choices[choicesIndex];
    // what ever index number we are up to in the for loop invoke that choice string
    var buttonElement = document.querySelector("#choice" + "-" + choicesIndex);
    buttonElement.textContent = choiceText;
    // selecting the button id (named it similar to index so can cycle through easier) and adding the text found in the choices property in the Questions index to the button element with .textcontent
  }
}

const answerA = document.querySelector("#choice-0");
answerA.addEventListener("click", rightOrWrong);

const answerB = document.querySelector("#choice-1");
answerB.addEventListener("click", rightOrWrong);

const answerC = document.querySelector("#choice-2");
answerC.addEventListener("click", rightOrWrong);

const answerD = document.querySelector("#choice-3");
answerD.addEventListener("click", rightOrWrong);
// Event listener works if function changed to displayQuestion

// function toCycleToNextQuestion(){
//   rightOrWrong()
//   displayQuestion()

const pElement = document.querySelector("#right-or-wrong")

function rightOrWrong(eventObject) {
  var buttonThatWasClicked = eventObject.target;
  let buttonAnswerText = buttonThatWasClicked.textContent;
  // eventObject listens to event that was clicked
  // array of objects in the eventObject "target" is identified as the html selector
  // 
  let questionAnswerText = currentQuestion.Answer;
  if (buttonAnswerText === questionAnswerText) {
    pElement.textContent ="CORRECT 😊";
  } else {
    timePenalty()
    pElement.textContent ="WRONG 😥";
    // Text is added to <p> element in the questionSection
  }
 
  displayQuestion();
}

function timePenalty(){
  timer-=10
  countdownTimer.textContent = timer;
  if(timer<=0){
    timer= 0
    quizIsOver()
  }
  // check that quiz
  // Deducting 10 seconds from timer
}

const initialInputSection = document.querySelector(".initial-input")

function quizIsOver(){
  clearInterval(timerStart);
  hideAllSections();
  initialInputSection.style.display = "block"
  
}

const leaderboardSection = document.querySelector(".leaderboard")
const buttonInitialInputSection = document.querySelector("#submit-button")

buttonInitialInputSection.addEventListener("click", displayLeaderboard)

const highscoreButtonElement = document.querySelector("#view-leaderboard")

highscoreButtonElement.addEventListener("click", displayLeaderboard)

const goBackElement = document.querySelector("#go-back-button")
goBackElement.addEventListener("click", refreshPage)

function refreshPage(){
  location.reload();
}

function displayLeaderboard(){
  hideAllSections()
  leaderboardSection.style.display = "block"
  clearInterval(timerStart)
  saveInitialAndScore()
}

const scoreTextSpanElement = document.querySelector("#score-text")
scoreTextSpanElement.textContent = countdownTimer.textContent
// score is not updating to current time

const initialFieldElement = document.querySelector("#initial-field")


function saveInitialAndScore(){
  document.createElement("li")

}
// Create Li element based on initials entered in input element and score based on time (not working) will be hyphenated after the initials





function hideAllSections(){
  introSection.style.display = "none"
  questionSection.style.display = "none"
  initialInputSection.style.display = "none"
  leaderboardSection.style.display = "none"
}
  // Used as a 'reset' to ensure that all sections that have had their display manipulated has been reset to default


// if button value = Answer property of the CurrentQuestion array then correct (CORRECT), else it is wrong (WRONG) and time is deducted

// eventListeners on buttons (in Global Scope) - DO NOT ADD event listeners into the for loop - DONE
// EventListens call function OnWhetherAnswerIsCorrect show "CORRECT" else "WRONG"
// After checking answer (whithin same function) call function displayCurrentQuestion

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
