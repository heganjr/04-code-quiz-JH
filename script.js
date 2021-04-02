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

let timer = 60;
let countdownTimer = document.getElementById("countdown");
let stopTimer;

let questions =[
  {
    Q: "Q1 - Commonly used data types DO NOT include:",
    Choices: ["A: Strings", "B: Booleans", "C: Alerts", "D: Numbers"],
    Answer: "C: Alerts",
  },
  {
    Q: "Q2 - The condition in an if / else statement is enclosed within ______.",
    Choices: ["A: Quotes", "B: Curly Brackets", "C: Parentheses", "D: Square Brackets"],
    Answer: "C: Parentheses",
  },
  {
    Q: "Q3 - String values must be enclosed within ______ when being assigned to variables.",
    Choices: ["A: Commas", "B: Curly Brackets", "C: Quotes", "D: Parentheses"],
    Answer: "C: Quotes",
  },
  {
    Q: "Q4 - A very useful tool used during development and debugging for printing content to the debugger is:",
    Choices: ["A: Javascript", "B: Terminal/ Bash", "C: For loops", "D: console.log"],
    Answer: "D: console.log",
  },
  {
    Q: "Q5 - Arrays in JavaScript can be used to store ______.",
    Choices: ["A: Numbers and Strings", "B: Other Arrays", "C: Booleans", "D: All of the Above"],
    Answer: "D: All of the Above",
  }
];
// Array for each question - Do a for loop to cycle through the questions each time I click on button
// Display check answer for a few seconds and then move onto next question

let beginButton = document.getElementById("begin");
beginButton.addEventListener("click", function () {
  stopTimer = setInterval(timerStartWhenIClickOnBeginBtn, 1000);
});

function timerStartWhenIClickOnBeginBtn() {
  timer--;
  countdownTimer.textContent = timer;
  if (timer <= 0) {
    clearInterval(stopTimer);
    timer = 0;
    countdownTimer.textContent = timer;
  }
}
