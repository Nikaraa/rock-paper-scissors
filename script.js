function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "Rock";
    }
    else if (computerChoice == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function winner(cpu, player) {
    cpu = cpu.toLowerCase();
    player = player.toLowerCase();
    if ((cpu == "rock" && player == "paper") || (cpu == "paper" && player == "scissors") || (cpu == "scissors" && player == "rock")) {
        return "You win!";
    }
    else if (player == cpu) {
        return "Draw!";
    }
    else {
        return "Computer wins!";
    }
}

const userButtons = document.querySelectorAll('#user-buttons');

const playerText = document.querySelector('.playerText');
const cpuText = document.querySelector('.cpuText');
const resultText = document.querySelector('.res');

let player;
let cpu;


let score = 0;
let scorePc = 0;

const content = document.querySelector('.content');

const scoreDisplay = document.querySelector('#user');
const scorePcDisplay = document.querySelector('#cpu');;



function disableButtons() {
    userButtons.forEach(elem => {
        elem.disabled = true;
    })
}

function game(selection) {
    let cpu = getComputerChoice();
    round = winner(cpu, selection);
    resultText.textContent = "Result: " + round;

    if (round == "You win!") {
        score++;
        scoreDisplay.textContent = score;
        resultText.textContent = "You won! " + selection + " beats " + cpu + "!";
        if (score == 5) {
            content.textContent = "You won the game! Congratulations!";
            disableButtons();
        }
    }

    else if (round == "Draw!") {
        resultText.textContent = "Tie game!";
    }
    
    else {
        scorePc++;
        scorePcDisplay.textContent = scorePc;
        resultText.textContent = "Computer won! " + selection + " lose to " + cpu + "!";
        if (scorePc == 5) {
            content.textContent = "The computer won the game! Try again!";
            disableButtons();
        }
    }
}

userButtons.forEach(button =>
    button.addEventListener('click', () => {
        game(button.textContent);
    })
);

// function game() {

//     for (let i = 0; i < 10; i++) {
//         let game = winner();
//         if (game == "You win!") {
//             score++;

//         }
//         else if (game == "Draw!") {
//             i--;
//             content.textContent = "Tie game!";
//         }
//         else if (game == "Computer wins!") {
//             scorePc++;

//             cpuScore.textContent = "Cpu Score: " + scorePc;
//         }
//         if (score == 5 || scorePc == 5) {
//             break;
//         }
//     }
//     if (score == 5) {
//         return "You won the game!";
//     }
//     if (scorePc == 5) {
//         return "Computer won the game!"
//     }
// }