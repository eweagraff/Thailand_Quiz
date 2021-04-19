// variables
var startPage = document.querySelector("#start-page");
var timerEl = document.querySelector("#timer");
var timeLeft = 75;
var quizQuestion = document.querySelector("#question-group");
var startBtn = document.querySelector("#start-button");
var questionEl = document.querySelector("#questions");
var gameindex = 0;
var answerBtn1 = document.querySelector("#answer-button1");
var answerBtn2 = document.querySelector("#answer-button2");
var answerBtn3 = document.querySelector("#answer-button3");
var answerBtn4 = document.querySelector("#answer-button4");
var hasGameStarted = false;
var questions = [
  {
    question: "What is captial of Thailand?",
    choices: ["Kathmandu", "Bangkok", "Bhutan", "Bangladesh"],
    answer: "Bangkok",
  },
  {
    question: "What is the main form of transportation in Thailand?",
    choices: ["Car", "Bicycle", "Motorbike", "Walk"],
    answer: "Motorbike",
  },
  {
    question: "What language do they speak in Thailand?",
    choices: ["Taiwanese", "Thai", "Hindi", "Tagalog"],
    answer: "Thai",
  },
  {
    question: "What is the currency in Thailand?",
    choices: ["Baht", "Yen", "American Dollar", "Rupi"],
    answer: "Baht",
  },
  {
    question: "What is the best part of Thailand?",
    choices: ["The people", "The food", "The culture", "All of the above"],
    answer: "All of the above",
  },
];

var hasGameEnded = false;
var endGameEl = document.querySelector("#end-quiz");
var initials = "";
var score = 0;
var index = 0;

//functions

startBtn.addEventListener("click", function () {
  countdown();
  startQuiz();
});

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";

      timeLeft--;
    } else {
      timerEl.textContent = "";

      clearInterval(timeInterval);
    }
  }, 1000);
}

function startQuiz() {
  hasGameStarted = true;
  startPage.setAttribute("class", "hidden");
  quizQuestion.setAttribute("class", "visible");
  nextQuestion();
}

function nextQuestion() {
  questionEl.textContent = questions[index].question;
  answerBtn1.textContent = questions[index].choices[0];
  answerBtn2.textContent = questions[index].choices[1];
  answerBtn3.textContent = questions[index].choices[2];
  answerBtn4.textContent = questions[index].choices[3];
}

answerBtn1.addEventListener("click", answerClick);
answerBtn2.addEventListener("click", answerClick);
answerBtn3.addEventListener("click", answerClick);
answerBtn4.addEventListener("click", answerClick);

function answerClick(event) {
  var userClick = event.target.textContent;
  var correctAnswer = questions[index].answer;
  if (userClick === correctAnswer) {
    alert("correct");
  } else {
    alert("wrong");
    timeLeft -= 10;
  }
  index++;

  //if index is = 5 go to the all done page (hide questions and make final page visible)
  //else go to next question
  nextQuestion();
}
