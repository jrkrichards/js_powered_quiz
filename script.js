// Variables from HTML file
let hsLink = document.querySelector('#highscores')
let timeEl = document.querySelector('#timer')
let questions = document.querySelector('#questions')
let ansAll = document.querySelector('#answers')
let ansA = document.querySelector('#answer_a')
let ansB = document.querySelector('#answer_b')
let ansC = document.querySelector('#answer_c')
let ansD = document.querySelector('#answer_d')
let quesResponse = document.querySelector('#response')
let startQs = document.querySelector('#startQs')

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
console.log(question1.answerA)
console.log(question2.answerC)
console.log(question3.answerA)
console.log(question4.answerB)
console.log(question5.answerD)

// Functions
function startQuiz(event) {
    if (event.target.matches("button")) {
        console.log("Clicked Start")
        setTime();
    }

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
startQs.addEventListener("click", startQuiz);
// Other Scripts