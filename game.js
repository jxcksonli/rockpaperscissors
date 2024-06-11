console.log("Welcome to a simple game of rock, paper, scissors!")

function getComputerChoice(){
    let randInt = Math.random();
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
    let lowerUserChoice = userChoice.toLowerCase();


    if (lowerUserChoice == "rock"){
        return "rock";
    } else if ((lowerUserChoice == "paper")) {
        return "paper";
    } else if ((lowerUserChoice == "scissors")) {
        return "scissors"
    } else {
        alert("Invalid choice! Choose either rock, paper or scissors");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "draw";
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        return "human";
    } else {
        return "computer";
    }
}

function playGame(rounds){
    let humanScore = 0;
    let computerScore = 0;

    for (i=0; i < rounds; i++){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const res = playRound(humanSelection, computerSelection)

        if (res == "human"){
            console.log("Human using ".concat(humanSelection).concat(" defeated the computer who used ").concat(computerSelection));
            humanScore++;
        } else if (res == "computer"){
            console.log("Computer using ".concat(computerSelection).concat(" defeated the human who used ").concat(humanSelection));
            computerScore++;
        } else {
            console.log("This round was a draw!")
        }
    }

    if (humanScore == computerScore){
        return "We have a draw! Both players won " + humanScore + " times";
    } else if (humanScore > computerScore){
        return "The human won! With a score of " + humanScore;
    } else {
        return "The computer won! With a score of " + computerScore;
    }
}

console.log(playGame(5))