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

let Questions = [
  {
    Q: "Q1",
    Choices: ["A: DSJDSJJD", "B:SDHDHSHDSH"],
    Answer: "A: dsjDSJJASD",
  },
  {
    Q: "Q2",
    Choices: ["A.ds..sda", "B:JDSHHSDHAHSDA"],
    Answer: "C:fsdfdsfdfss",
  },
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
