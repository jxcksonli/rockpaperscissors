console.log("Welcome to a simple game of rock, paper, scissors!")

let humanScore = 0
let computerScore = 0



function getComputerChoice(){
    let randInt = Math.random()

    if (randInt <= 0.33){
        return "rock";
    } else if (randInt > 0.66) {
        return "paper"
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let userChoice = prompt("Rock, paper or scissors?");

    if (userChoice.toLowerCase() == "rock"){
        return "rock";
    } else if ((userChoice.toLowerCase() == "paper")) {
        return "paper";
    } else if ((userChoice.toLowerCase() == "scissors")) {
        return "scissors"
    } else {
        return "INVALID CHOICE!"
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "This round is a draw! Both human and computer chose ".concat(humanChoice)
    } else if ((humanChoice == "rock" && computerChoice == "scissors") ||(humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")){
        humanScore++
        return "Human using ".concat(humanChoice).concat(" defeated the computer who used ").concat(computerChoice)
    } else {
        computerScore++
        return "Computer using ".concat(computerChoice).concat(" defeated the human who used ").concat(humanChoice)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection))