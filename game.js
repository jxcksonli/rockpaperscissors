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

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

const humanScore = document.querySelector(".humanScore");
const computerScore = document.querySelector(".computerScore");

// For each button
buttons.forEach((button) => {

  // Add a click listener
  button.addEventListener("click", () => {
    const res = playRound(button.id.toLowerCase(), getComputerChoice());
    let humanScoreValue = parseInt(humanScore.textContent);
    let computerScoreValue = parseInt(computerScore.textContent);

    if (res == "human"){
        humanScoreValue += 1;
        humanScore.textContent = humanScoreValue;
        alertWon(button.id);

    } else if (res == "computer"){
        computerScoreValue += 1;
        computerScore.textContent = computerScoreValue;
        alertLose(button.id);
    } else {
        alertDraw();
    }

    if (humanScoreValue == 5){
        resetValues();
        alertHuman();
      } else if (computerScoreValue== 5){
        resetValues();
        alertComputer();
      }
})
});

function resetValues(){
    computerScore.textContent = 0;
    humanScore.textContent = 0;
}

function alertWon(res){
    alert("Human won the round selecting " + res);
}

function alertLose(res){
    alert("Human loss the round selecting " + res);
}

function alertDraw(){
    alert("This round was a draw!")
}

function alertHuman(){
    alert("The human won the game as it won 5 rounds first!");
}

function alertComputer(){
    alert("The computer won the game as it won 5 rounds first!");
}