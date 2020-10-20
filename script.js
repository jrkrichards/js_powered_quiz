// Variables from HTML file
let hsLink = document.querySelector('#highscores');
let timeEl = document.querySelector('#timer');
let questions = document.querySelector('#questions');
let ansSec = document.querySelector('#answer_sec');
let quesResponse = document.querySelector('#response');
let startBtn = document.querySelector('#startBtn')
let ansDiv = document.querySelector('#answers')

// Variables for functions
let secondsLeft = 120
let quesArray = [
    {question: "Bootstrap helps with?",
    answerA: "Styling",
    answerB: "Functions",
    answerC: "Objects",
    answerD: "Tying shoelaces"},
    {question: "To have a variable set in the local scope what is used?",
    answerA: "Var",
    answerB: "Function",
    answerC: "Let",
    answerD: "Console"},
    {question: "To have a variable set in the global scope what is used?",
    answerA: "Var",
    answerB: "Function",
    answerC: "Let",
    answerD: "Console"},
    {question: "What data type is used to tell if something is true or false?",
    answerA: "Integer",
    answerB: "Boolean",
    answerC: "String",
    answerD: "Array"},
    {question: "What coding language is needed to make a web application?",
    answerA: "CSS",
    answerB: "HTML",
    answerC: "Javascript",
    answerD: "All of the above"},
];
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
    if (event.target.matches("button")) {
        console.log("Clicked Start")
        setTime();
        questionFunc();
        startBtn.style.display = 'none';
        ansDiv.appendChild(ansA)
        ansDiv.appendChild(ansB)
        ansDiv.appendChild(ansC)
        ansDiv.appendChild(ansD)
        
    }

}
function questionFunc() {
    let i = 0
    questions.textContent = quesArray[i].question;
    ansA.textContent = quesArray[i].answerA;
    ansB.textContent = quesArray[i].answerB;
    ansC.textContent = quesArray[i].answerC;
    ansD.textContent = quesArray[i].answerD;
    ansDiv.addEventListener('click', function() {
        if(event.target.id === ansArray[i]) {
            quesResponse.textContent = "Right!"
        }
        else {
            quesResponse.textContent = "Wrong!"
            secondsLeft = secondsLeft-10;
        }
    });          
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