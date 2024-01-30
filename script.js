let playerSelection;
let computerSelection;

function playGame() {
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Enter Rock, Paper, or Scissor");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        getComputerChoice();
        console.log(playRound(computerSelection, playerSelection));
    }
}

function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3);
}

function playRound(computerSelection,playerSelection) {
    if (computerSelection === 0 && playerSelection === "Scissor") {
        return "You Lose! Rock beats Scissor";
    }
    else if (computerSelection === 1 && playerSelection === "Scissor") {
        return "You Won! Scissor beats Paper";
    }
    else if (computerSelection === 0 && playerSelection === "Paper") {
        return "You Won! Paper beats Rock";
    }
    else if (computerSelection === 2 && playerSelection === "Paper") {
        return "You Lost! Scissor beats Paper";
    }
    else if (computerSelection === 1 && playerSelection === "Rock") {
        return "You Lost! Paper beats Rock";
    }
    else if (computerSelection === 2 && playerSelection === "Rock") {
        return "You Won! Rock beats Scissor";
    }
    else {
        return "It's a draw";
    }
}

playGame();