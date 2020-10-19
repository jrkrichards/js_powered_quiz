// Variables from HTML file
let hsLink = document.querySelector('#highscores');
let timeEl = document.querySelector('#timer');
let questions = document.querySelector('#questions');
let ansAll = document.querySelector('#answers');
let quesResponse = document.querySelector('#response');
let startBtn = document.querySelector('#startBtn')

// Variables for functions
let secondsLeft = 120
let question1 = {
    question: "Bootstrap helps with?",
    answerA: "Styling",
    answerB: "Functions",
    answerC: "Objects",
    answerD: "Tying shoelaces"
};
let question2 = {
    question: "To have a variable set in the local scope what is used?",
    answerA: "Var",
    answerB: "Function",
    answerC: "Let",
    answerD: "Console"
};
let question3 = {
    question: "To have a variable set in the global scope what is used?",
    answerA: "Var",
    answerB: "Function",
    answerC: "Let",
    answerD: "Console"
};
let question4 = {
    question: "What data type is used to tell if something is true or false?",
    answerA: "Integer",
    answerB: "Boolean",
    answerC: "String",
    answerD: "Array"
};
let question5 = {
    question: "What coding language is needed to make a web application?",
    answerA: "CSS",
    answerB: "HTML",
    answerC: "Javascript",
    answerD: "All of the above"
};
let ansA = document.createElement('button');
let ansB = document.createElement('button');
let ansC = document.createElement('button');
let ansD = document.createElement('button');

console.log(question1.answerA)
console.log(question2.answerC)
console.log(question3.answerA)
console.log(question4.answerB)
console.log(question5.answerD)

// Style elements
ansA.setAttribute("Class", "btn btn-primary btn-lg btn-block")
ansB.setAttribute("Class", "btn btn-primary btn-lg btn-block")
ansC.setAttribute("Class", "btn btn-primary btn-lg btn-block")
ansD.setAttribute("Class", "btn btn-primary btn-lg btn-block")

// Functions
function startQuiz(event) {
    if (event.target.matches("button")) {
        console.log("Clicked Start")
        setTime();
        questionFunc();
        startBtn.style.display = 'none';
    }

}
function questionFunc() {
    questions.textContent = question1.question;
    ansAll.appendChild(ansA)
    ansAll.appendChild(ansB)
    ansAll.appendChild(ansC)
    ansAll.appendChild(ansD)
    ansA.textContent = question1.answerA;
    ansB.textContent = question1.answerB;
    ansC.textContent = question1.answerC;
    ansD.textContent = question1.answerD;
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