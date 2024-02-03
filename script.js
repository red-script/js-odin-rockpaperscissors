let playerSelection;
let computerSelection;
let score = 0;

const body = document.querySelector('body');
const result = document.createElement('div');
const log = document.createElement('p');
const track = document.createElement('p');
const win = document.createElement('p');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3);
}

function playRound(computerSelection,playerSelection) {
    if (computerSelection === 0 && playerSelection === "Scissor") {
        track.textContent = 'Score: ' + score;
        log.textContent = 'You Lose! Rock beats Scissor';
        if (score > 4) {
            win.textContent = 'Congradulatiions! You Won';
        }
    }
    else if (computerSelection === 1 && playerSelection === "Scissor") {
        score += 1;
        track.textContent = 'Score: ' + score;
        log.textContent = 'You Won! Scissor beats Paper';
        if (score > 4) {
            win.textContent = 'Congradulatiions! You Won';
        }
    }
    else if (computerSelection === 0 && playerSelection === "Paper") {
        score += 1;
        track.textContent = 'Score: ' + score;
        log.textContent = 'You Won! Paper beats Rock';
        if (score > 4) {
            win.textContent = 'Congradulatiions! You Won';
        }
    }
    else if (computerSelection === 2 && playerSelection === "Paper") {
        track.textContent = 'Score: ' + score;
        log.textContent = 'You Lost! Scissor beats Paper';
        if (score > 4) {
            win.textContent = 'Congradulatiions! You Won';
        }
    }
    else if (computerSelection === 1 && playerSelection === "Rock") {
        track.textContent = 'Score: ' + score;
        log.textContent = 'You Lost! Paper beats Rock';
        if (score > 4) {
            win.textContent = 'Congradulatiions! You Won';
        }
    }
    else if (computerSelection === 2 && playerSelection === "Rock") {
        score += 1;
        track.textContent = 'Score: ' + score;
        log.textContent = 'You Won! Rock beats Scissor';
        if (score > 4) {
            win.textContent = 'Congradulatiions! You Won';
        }
    }
    else {
        track.textContent = 'Score: ' + score;
        log.textContent = 'Its a draw';
    }
}
result.appendChild(log);
result.appendChild(track);
result.appendChild(win);
body.appendChild(result);

rock.addEventListener('click', () => {
    getComputerChoice();
    playRound(computerSelection, "Rock");
});
paper.addEventListener('click', () => {
    getComputerChoice();
    playRound(computerSelection, "Paper");
});
scissor.addEventListener('click', () => {
    getComputerChoice();
    playRound(computerSelection, "Scissor");
});
