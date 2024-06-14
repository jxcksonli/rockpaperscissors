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


    if (humanScore == computerScore){
        return "We have a draw! Both players won " + humanScore + " times";
    } else if (humanScore > computerScore){
        return "The human won! With a score of " + humanScore;
    } else {
        return "The computer won! With a score of " + computerScore;
    }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

const humanScoreT = 0;
const computerScoreT = 0;

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {

    const res = playRound(button.id.toLowerCase(), getComputerChoice())

    if (res == "human"){
        alert("Human won selecting " + button.id);
        humanScore++;
    } else if (res == "computer"){
        alert("Human lost selecting " + button.id);
        computerScore++;
    } else {
        alert("This round was a draw!")
    }
  });
});


