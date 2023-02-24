function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    if(computerChoice==0){
        return "rock";
    }
    else if(computerChoice==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function winner(user_choice, computer_choise){
    if(user_choice===computer_choise){
        return "draw";
    }
    else{
        if((user_choice=="rock"&& computer_choise=="scissors")||(user_choice=="paper"&&computer_choise=="rock")||(user_choice=="scissors"&&computer_choise=="paper")){
            return "won";
        }
        else{
            return "lost";
        }
    }
}

function game(){
    let userScore=0;
    let cpuScore=0;

    for(let i=0;i<10;i++){
        let userChoice = prompt("Please choose between rock, scissors or paper: ").toLowerCase();
        let computerChoice = getComputerChoice();
        let x=winner(userChoice, computerChoice);
        if(x=="draw"){
            console.log("User choice is "+userChoice+" and cpu choice is: "+computerChoice+". It's a tie!");
            i--; 
        }
        else if(x=="won"){
            userScore++;

            console.log("User choice is "+userChoice+" and cpu choice is: "+computerChoice+". You got a point!");
        }
            
        else if(x="lost"){
            cpuScore++;
            console.log("User choice is "+userChoice+" and cpu choice is: "+computerChoice+". The cpu got a point!");
        }
        if(userScore==5||computerChoice==5){
            break;
        }
    } 
    if(cpuScore=5&&userScore<5){
        return console.log("You lost the game! Try again!");
    }
    else{
        return console.log("You won the game! Congratulations!");
    }
}

let x=game();
console.log(x);