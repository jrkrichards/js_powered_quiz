// Variables from HTML file
let timeEl = document.querySelector('#timer')

// Variables for functions
let secondsLeft = 120

// Functions
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
setTime();

// Other Scripts