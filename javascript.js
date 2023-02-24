//create a function to make the computer playing a random move
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice){
        case 0:{
            console.log("computer choice is: rock!");
            return "rock";
        }
        case 1:{
            console.log("computer choice is: paper!");
            return "paper";
        }
        case 2:{
            console.log("computer choice is: scissors!");
            return "scissors";
        }
    }
}


//create a variable which make the user choose his move, and then a function that calls back the computer random function
function result(player_selection,computer_choice){
    player_selection=player_selection.toLowerCase();
    computer_choice=computer_choice.toLowerCase();
    if(player_selection===computer_choice){
        return "It's a draw!";
    }
    if((player_selection==="rock"&&computer_choice==="paper")||(player_selection==="paper"&&computer_choice==="scissors")||(player_selection==="scissors"&&computer_choice=="rock")){
        return "Computer won!";
    }
    else{
        return "You won!";
    }
}

const player_selection=prompt("Please choose between rock, paper or scissors: ");
const computer_selection=getComputerChoice();

console.log(result(player_selection, computer_selection));



