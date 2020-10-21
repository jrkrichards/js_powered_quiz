// Variables from HTML file
const hsLink = document.querySelector('#highscores');
const timeEl = document.querySelector('#timer');
const questions = document.querySelector('#questions');
const ansSec = document.querySelector('#answer_sec');
const quesResponse = document.querySelector('#response');
const startBtn = document.querySelector('#startBtn')
const ansDiv = document.querySelector('#answers')

// Variables for functions
let secondsLeft = 120
let quesArray = [
    {question: "Bootstrap helps with?",
    answerA: "Styling",
    answerB: "Functions",
    answerC: "Objects",
    answerD: "Tying shoelaces",
    correct: "answer_a"},
    {question: "To have a variable set in the local scope what is used?",
    answerA: "Var",
    answerB: "Function",
    answerC: "Let",
    answerD: "Console",
    correct: "answer_c"},
    {question: "To have a variable set in the global scope what is used?",
    answerA: "Var",
    answerB: "Function",
    answerC: "Let",
    answerD: "Console",
    correct: "answer_a"},
    {question: "What data type is used to tell if something is true or false?",
    answerA: "Integer",
    answerB: "Boolean",
    answerC: "String",
    answerD: "Array",
    correct: "answer_b"},
    {question: "What coding language is needed to make a web application?",
    answerA: "CSS",
    answerB: "HTML",
    answerC: "Javascript",
    answerD: "All of the above",
    correct: "answer_d"},
];
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const SCORE_POINTS = 100
const MAX_QUESTIONS = 5
let ansArray = ["answer_a", "answer_c", "answer_a", "answer_b", "answer_d"]
let ansA = document.createElement('button');
let ansB = document.createElement('button');
let ansC = document.createElement('button');
let ansD = document.createElement('button');

console.log(quesArray[0].answerA)
console.log(quesArray[1].answerC)
console.log(quesArray[2].answerA)
console.log(quesArray[3].answerB)
console.log(quesArray[4].answerD)

// Style elements
ansA.setAttribute("Class", "btn btn-primary btn-lg btn-block")
ansB.setAttribute("Class", "btn btn-primary btn-lg btn-block")
ansC.setAttribute("Class", "btn btn-primary btn-lg btn-block")
ansD.setAttribute("Class", "btn btn-primary btn-lg btn-block")
ansA.setAttribute("id", "answer_a")
ansB.setAttribute("id", "answer_b")
ansC.setAttribute("id", "answer_c")
ansD.setAttribute("id", "answer_d")
console.log(quesArray.length)
console.log(Math.floor(Math.random() * quesArray.length))
// Functions
function startQuiz(event) {
    event.preventDefault();
    if (event.target.matches("button")) {
        setTime();
        questionCounter = 0
        score = 0
        availableQuestions = [...quesArray]
        getNewQuestion();
        // questionFunc1();
        startBtn.style.display = 'none';
        ansDiv.appendChild(ansA)
        ansDiv.appendChild(ansB)
        ansDiv.appendChild(ansC)
        ansDiv.appendChild(ansD)
        return;   
    }
}
function getNewQuestion() {
    // if no questions or finished all questions go to end page add this back after
    // if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    //     localStorage.setItem('mostRecentScore', score)
    //     alert('Quiz Done')
    //     // return window.location.assign('/end.html')
    // }
    
    questionCounter++

    const questionIndex = questionCounter-1
    currentQuestion = availableQuestions[questionIndex]
    questions.textContent = currentQuestion.question;
    ansA.textContent = currentQuestion.answerA;
    ansB.textContent = currentQuestion.answerB;
    ansC.textContent = currentQuestion.answerC;
    ansD.textContent = currentQuestion.answerD;

    let choices = [currentQuestion.answerA, currentQuestion.answerB, currentQuestion.answerC, currentQuestion.answerD]
    console.log(choices)
    acceptingAnswers = true
};

function checkAnswer (event) {
    event.preventDefault();
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = event.target.id
        const correctAnswer = currentQuestion.correct
        console.log(correctAnswer)
        if(selectedChoice === correctAnswer) {
            quesResponse.textContent = "Right!";
            incrementScore(SCORE_POINTS);
        }
        else {
            quesResponse.textContent = "Wrong!"
            secondsLeft = secondsLeft-10;
        }
        setTimeout(() => {
            getNewQuestion();
        }, 1000)
}

function incrementScore(num) {
    score +=num
}

function setTime() {
    let timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        console.log("Done");
      }
  
    }, 1000);
  }

// Event Listeners
startBtn.addEventListener("click", startQuiz);
ansDiv.addEventListener("click", checkAnswer);

// Other Scripts