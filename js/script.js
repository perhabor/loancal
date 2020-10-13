let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let targetNumber = document.querySelector("#target-number");
let computerGuess = document.querySelector("#computer-guess");
let humanGuess = document.querySelector("#human-guess");
const forwardButton = document.querySelector('next-round');

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

 //guessButton1.addEventListener('click', 'guessGame')

 console.log(humanGuess.value)
function makeGuess() {
    if (humanGuess.value > 9) {
        alert("please enter a valid number");

    }else{
        targetNumber.innerHTML = generateTarget();
        compareGuesses(humanGuess.value, computerGuess, targetNumber.innerHTML);
    }

}
 makeGuess()


function compareGuesses(human, computer, guess) {
    let humanValue = Math.abs(human-guess);
    let computerValue = Math.abs(computer-guess);

    if (humanValue < computerValue) {
        return true;
    }else{
        return false;

    }
    
}

function updateScore(winner) {
    if("humanScore" === "winner") {
        humanScore ++;
    }else {
        computerScore++;
    }
}



function advanceRound () {
    currentRoundNumber++;
    
}     

