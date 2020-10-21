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

// Functions
function startQuiz(event) {
    event.preventDefault();
    if (event.target.matches("button")) {
        console.log("Clicked Start")
        setTime();
        questionFunc1();
        startBtn.style.display = 'none';
        ansDiv.appendChild(ansA)
        ansDiv.appendChild(ansB)
        ansDiv.appendChild(ansC)
        ansDiv.appendChild(ansD)
        return;   
    }
    else {
        return;
    }
}
function questionFunc1() {
    let i = 0
    questions.textContent = quesArray[i].question;
    ansA.textContent = quesArray[i].answerA;
    ansB.textContent = quesArray[i].answerB;
    ansC.textContent = quesArray[i].answerC;
    ansD.textContent = quesArray[i].answerD;
    ansDiv.addEventListener('click', function() {
        event.preventDefault();
        if(event.target.id === ansArray[i]) {
            console.log(event.target.id)
            quesResponse.textContent = "Right!";
            index = i + 1;
            return;
        }
        else {
            quesResponse.textContent = "Wrong!"
            secondsLeft = secondsLeft-10;
            index = i + 1;
            return;
        }
    }); 
    return;         
}
function questionFunc2() {
    questions.textContent = quesArray[1].question;
    ansA.textContent = quesArray[1].answerA;
    ansB.textContent = quesArray[1].answerB;
    ansC.textContent = quesArray[1].answerC;
    ansD.textContent = quesArray[1].answerD;
    ansDiv.addEventListener('click', function() {
        event.preventDefault();
        if(event.target.id === ansArray[1]) {
            console.log(event.target.id + "Question 1 Right")
            quesResponse.textContent = "Right!";
            questionFunc3();
            return;
        }
        else {
            quesResponse.textContent = "Wrong!"
            console.log(event.target.id + "Question 1 Wrong")
            secondsLeft = secondsLeft-10;
            questionFunc3();
            return;
        }
    });
    return;          
}
function questionFunc3() {
    questions.textContent = quesArray[2].question;
    ansA.textContent = quesArray[2].answerA;
    ansB.textContent = quesArray[2].answerB;
    ansC.textContent = quesArray[2].answerC;
    ansD.textContent = quesArray[2].answerD;
    ansDiv.addEventListener('click', function() {
        event.preventDefault();
        if(event.target.id === ansArray[2]) {
            console.log(event.target.id + "Question 2 Right")
            quesResponse.textContent = "Right!";
            questionFunc4();
            return;
        }
        else {
            quesResponse.textContent = "Wrong!"
            console.log(event.target.id + "Question 2 wrong")
            secondsLeft = secondsLeft-10;
            questionFunc4();
            return;
        }
    }); 
    return;         
}
function questionFunc4() {
    questions.textContent = quesArray[3].question;
    ansA.textContent = quesArray[3].answerA;
    ansB.textContent = quesArray[3].answerB;
    ansC.textContent = quesArray[3].answerC;
    ansD.textContent = quesArray[3].answerD;
    ansDiv.addEventListener('click', function() {
        event.preventDefault();
        if(event.target.id === ansArray[3]) {
            console.log(event.target.id)
            quesResponse.textContent = "Right!";
            questionFunc5();
            return;
        }
        else {
            quesResponse.textContent = "Wrong!"
            secondsLeft = secondsLeft-10;
            questionFunc5();
            return;
        }
    }); 
    return;         
}
function questionFunc5() {
    questions.textContent = quesArray[4].question;
    ansA.textContent = quesArray[4].answerA;
    ansB.textContent = quesArray[4].answerB;
    ansC.textContent = quesArray[4].answerC;
    ansD.textContent = quesArray[4].answerD;
    ansDiv.addEventListener('click', function() {
        event.preventDefault();
        if(event.target.id === ansArray[4]) {
            console.log(event.target.id)
            quesResponse.textContent = "Right!";
            return;
        }
        else {
            quesResponse.textContent = "Wrong!"
            secondsLeft = secondsLeft - 10;
            return;
        }
    }); 
    return;         
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

// Calling functions
startBtn.addEventListener("click", startQuiz);

// Other Scripts