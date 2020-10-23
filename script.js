// Variables from HTML file
const hsLink = document.querySelector('#highscores');
const timeEl = document.querySelector('#timer');
const questions = document.querySelector('#questions');
const ansSec = document.querySelector('#answer_sec');
const quesResponse = document.querySelector('#response');
const startBtn = document.querySelector('#startBtn')
const ansDiv = document.querySelector('#answers')
const title = document.querySelector('#quizTitle')
const nameEndInput = document.querySelector('#nameEnd')
const highScoresList = document.querySelector('#highScoresUl')

// Variables for functions
let secondsLeft = 3
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
    answerB: "Let",
    answerC: "Console",
    answerD: "Function",
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
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
let ansArray = ["answer_a", "answer_c", "answer_a", "answer_b", "answer_d"]
let ansA = document.createElement('button');
let ansB = document.createElement('button');
let ansC = document.createElement('button');
let ansD = document.createElement('button');
let userSubmit = document.createElement('button')
let userName = document.createElement('input')
let quizAgain = document.createElement('button')
let clearScores = document.createElement('button')


// Style elements
ansA.setAttribute("Class", "btn btn-primary btn-lg btn-block")
ansB.setAttribute("Class", "btn btn-primary btn-lg btn-block")
ansC.setAttribute("Class", "btn btn-primary btn-lg btn-block")
ansD.setAttribute("Class", "btn btn-primary btn-lg btn-block")
ansA.setAttribute("id", "answer_a")
ansB.setAttribute("id", "answer_b")
ansC.setAttribute("id", "answer_c")
ansD.setAttribute("id", "answer_d")
userSubmit.setAttribute("Class", "btn btn-primary btn-md ml-2")
userSubmit.setAttribute("id", "userSub")
userName.setAttribute("id", "currentUser")
quizAgain.setAttribute("Class", "btn btn-primary btn-md ml-2")
quizAgain.setAttribute("id", "quizAgainBut")
clearScores.setAttribute("Class", "btn btn-primary btn-md ml-2")

// Functions
function startQuiz(event) {
    event.preventDefault();
    if (event.target.matches("button")) {
        setTime();
        questionCounter = 0
        score = 0
        availableQuestions = [...quesArray]
        getNewQuestion();
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
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS || secondsLeft === 0 || secondsLeft < 0) {
        localStorage.setItem('mostRecentScore', score)
        console.log(score)
        setTimeout(() => {
            nameInput();
        }, 1000)
    }
    else {
        const questionIndex = questionCounter
        currentQuestion = availableQuestions[questionIndex]
        questions.textContent = currentQuestion.question;
        ansA.textContent = currentQuestion.answerA;
        ansB.textContent = currentQuestion.answerB;
        ansC.textContent = currentQuestion.answerC;
        ansD.textContent = currentQuestion.answerD;

        let choices = [currentQuestion.answerA, currentQuestion.answerB, currentQuestion.answerC, currentQuestion.answerD]
        console.log(choices)
        acceptingAnswers = true
        questionCounter++
    }
};

function checkAnswer (event) {
    event.preventDefault();
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = event.target.id
        const correctAnswer = currentQuestion.correct
        if(selectedChoice === correctAnswer) {
            quesResponse.textContent = "Right!";
            incrementScore(SCORE_POINTS);
            console.log(score)
        }
        else {
            quesResponse.textContent = "Wrong!"
            secondsLeft = secondsLeft-10;
            console.log(score)
        }
        setTimeout(() => {
            getNewQuestion();
        }, 1000)
}

function incrementScore(num) {
    score +=num
}

function nameInput() {
    title.textContent = "Quiz Finished";
    questions.style.display = "none";
    nameEndInput.textContent = "Your final score is " + score + ". Enter your username below.";
    ansA.style.display = 'none';
    ansB.style.display = 'none';
    ansC.style.display = 'none';
    ansD.style.display = 'none';
    ansSec.appendChild(userName)
    ansSec.appendChild(userSubmit)
    userSubmit.textContent = "Submit"
    quesResponse.textContent = "Congrats on finishing!"
}

function logScore (event) {
    event.preventDefault();
    localStorage.setItem('mostRecentUser', document.getElementById('currentUser').value)
    let currentUser = localStorage.getItem('mostRecentUser')
    let currentScore = localStorage.getItem('mostRecentScore')
    let scoreObj = {
        name: currentUser,
        score: currentScore,
    }    
    highScores.push(scoreObj);
    highScores.sort((a,b) => {
        return b.score - a.score
    });
    localStorage.setItem('highScores', JSON.stringify(highScores))

    ansSec.appendChild(quizAgain);
    quizAgain.textContent = "Take Quiz Again";
    nameEndInput.textContent = "Click Take Quiz Again button to restart or Highscores button to see the scores."
    
    questions.style.display = "none";
    ansA.style.display = 'none';
    ansB.style.display = 'none';
    ansC.style.display = 'none';
    ansD.style.display = 'none';
    userName.style.display = 'none';
    userSubmit.style.display = 'none';

    return;
}

function showScores(event) {
    event.preventDefault();
    title.textContent = "Highscores";
    nameEndInput.style.display = 'none';
    questions.style.display = "none";
    ansA.style.display = 'none';
    ansB.style.display = 'none';
    ansC.style.display = 'none';
    ansD.style.display = 'none';
    userName.style.display = 'none';
    userSubmit.style.display = 'none';
    startBtn.style.display = 'none';
    ansSec.appendChild(quizAgain);
    quizAgain.textContent = "Take Quiz Again";
    ansSec.appendChild(clearScores);
    clearScores.textContent = "Clear Scores"

    if(highScoresList.children.length === 0) {
        for (let i = 0; i < highScores.length; i++) {
            let highScoresLi = document.createElement('li')
            highScoresLi.setAttribute("Class", "list-group-item")
            highScoresLi.append(highScores[i].name + ": " + highScores[i].score);
            highScoresList.appendChild(highScoresLi)
        }
    }
    else {}
    
}

function resetQuiz(event) {
    event.preventDefault();
    location.reload();
}

function clear(event) {
    event.preventDefault();
    localStorage.clear();
    location.reload();
}

function setTime() {
    let timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0 || secondsLeft < 0) {
        localStorage.setItem('mostRecentScore', score)
        clearInterval(timerInterval);
        nameInput();
        console.log("Done");
      }
  
    }, 1000);
  }

// Event Listeners
startBtn.addEventListener("click", startQuiz);
ansDiv.addEventListener("click", checkAnswer);
userSubmit.addEventListener("click", logScore);
hsLink.addEventListener("click", showScores);
quizAgain.addEventListener("click", resetQuiz);
clearScores.addEventListener("click", clear);
// make this refresh the page

// Other Scripts