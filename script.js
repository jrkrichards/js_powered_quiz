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
    questions.textContent = quesArray[0].question;
    ansA.textContent = quesArray[0].answerA;
    ansB.textContent = quesArray[0].answerB;
    ansC.textContent = quesArray[0].answerC;
    ansD.textContent = quesArray[0].answerD;
    ansDiv.addEventListener('click', function() {
        if(event.target.id === ansArray[0]) {
            quesResponse.textContent = "Right!";
            questionFunc2();
            return;
        }
        else {
            if(secondsLeft > 10){
                quesResponse.textContent = "Wrong!"
                secondsLeft = secondsLeft-10;
                questionFunc2();
                return;
            }
            else {
                console.log("need to create ending func")
                questionFunc2();
                return;
            }
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
            console.log(event.target.id)
            quesResponse.textContent = "Right!";
            questionFunc3();
            return;
        }
        else {
            if(secondsLeft > 10){
                quesResponse.textContent = "Wrong!"
                secondsLeft = secondsLeft-10;
                questionFunc3();
                return;
            }
            else {
                console.log("need to create ending func")
                questionFunc3();
                return;
            }
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
        if(event.target.id === ansArray[2]) {
            console.log(event.target.id)
            quesResponse.textContent = "Right!";
            questionFunc4();
            return;
        }
        else {
            if(secondsLeft > 10){
                quesResponse.textContent = "Wrong!"
                secondsLeft = secondsLeft-10;
                questionFunc4();
                return;
            }
            else {
                console.log("need to create ending func")
                questionFunc4();
                return;
            }
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
        if(event.target.id === ansArray[3]) {
            console.log(event.target.id)
            quesResponse.textContent = "Right!";
            questionFunc5();
            return;
        }
        else {
            if(secondsLeft > 10){
                quesResponse.textContent = "Wrong!"
                secondsLeft = secondsLeft-10;
                questionFunc5();
                return;
            }
            else {
                console.log("need to create ending func")
                return;
            }
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
        if(event.target.id === ansArray[4]) {
            console.log(event.target.id)
            quesResponse.textContent = "Right!";
            return;
            
        }
        else {
            if(secondsLeft > 10){
                quesResponse.textContent = "Wrong!"
                secondsLeft = secondsLeft - 10;
                return;
            }
            else {
                console.log("need to create ending func")
                return;
            }
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