function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    if(computerChoice==0){
        cpu= "Rock";
    }
    else if(computerChoice==1){
        cpu= "Paper";
    }
    else{
        cpu= "Scissors";
    }
    return cpu;
}

function winner(){
    cpu=cpu.toLowerCase();
    player=player.toLowerCase();
    if((cpu == "rock"&&player=="paper")||(cpu == "paper"&&player=="scissors")||(cpu == "scissors"&&player=="rock")){
        return "You win!";
    }
    else if(player == cpu){
        return "Draw!";
    }
    else{
        return "Computer wins!"; 
    }
}

const userButtons= document.querySelectorAll('#user-buttons');

const playerText= document.querySelector('.playerText');
const cpuText= document.querySelector('.cpuText');
const resultText= document.querySelector('.res');

let player;
let cpu;
let result;

function removeTransition(e){
    console.log(e);
}

userButtons.forEach(button => button.addEventListener('click', () => {

    player=button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    cpuText.textContent = `CPU: ${cpu}`;
    resultText.textContent = "Result: "+winner();
}));



const announceText=document.querySelector('.announce');





//function game(){
//   let userScore=0;
//     let cpuScore=0;
//     for(let i=0;i<10;i++){
//         let userChoice = prompt("Please choose between rock, scissors or paper: ").toLowerCase();
//         let computerChoice = getComputerChoice();
//         let x=winner(userChoice, computerChoice);
//         if(x=="draw"){
//             console.log("User choice is "+userChoice+" and cpu choice is: "+computerChoice+". It's a tie!");
//             i--; 
//         }
//         else if(x=="won"){
//             userScore++;
//             console.log("User choice is "+userChoice+" and cpu choice is: "+computerChoice+". You got a point!");
//         }
//         else if(x="lost"){
//             cpuScore++;
//             console.log("User choice is "+userChoice+" and cpu choice is: "+computerChoice+". The cpu got a point!");
//         }
//         if(userScore==5||computerChoice==5){
//             break;
//         }
//     } 
//     if(cpuScore=5&&userScore<5){
//         return console.log("You lost the game! Try again!");
//     }
//     else{
//         return console.log("You won the game! Congratulations!");
//     }
// }

// let x=game();
// console.log(x);