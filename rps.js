/* get computer choice */
let humanScore = 0, computerScore =0;



function getComputerChoice(){
    
    let index = Math.floor(Math.random()*3);

    switch (index) {
        case 0 :
            return "Rock";
            break;

        case 1 :
            return "Paper";
            break;

        case 2 :
            return "Scissor";
            break;

        default : 
            return "undefined"
    }

}


function getPlayerChoice(){
    let choice = prompt("Please choose between Rock, Paper and Scissor");
    let stdChoice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

    return stdChoice;   
}


function getPlayRound(computerChoice, humanChoice){

    let comp = computerChoice.toLowerCase();
    let player =humanChoice.toLowerCase();

    if (comp === "rock"){
        if(player === "rock"){
            return 2;
            // return "Draw";
        }
        else if(player === "paper"){
            return 1;
            // return "You win!, paper beats rock";
        }
        else if(player === "scissor"){
            return 0;
            // return "You lose!, rock beats scissor";
        }

    }
    else if (comp === "paper"){
        if(player === "rock"){
            return 0;
            // return "You lose!, paper beats rock";
        }
        else if(player === "paper"){
            return 2;
            // return "Draw";
        }
        else if(player === "scissor"){
            return 1;
            // return "You win!, scissor beatss rock";
        }

    }
    else if (comp === "scissor"){
        if(player === "rock"){
            return 1;
            //return "You win!, rock beats scissor";
        }
        else if(player === "paper"){
            return 0;
            //return "You lose!, scissor beats paper";
        }
        else if(player === "scissor"){
            return 2;
            // return "Draw";
        }

    }
}


function playGame(){

    for (i=0;i<5;i++){
        const computerChoice = getComputerChoice();
        const humanChoice = getPlayerChoice();
        const playRound = getPlayRound(computerChoice,humanChoice);

        console.log("You chose " + humanChoice +", computer chose " + computerChoice);
        switch(playRound){
            case 0:
                console.log("you lose");
                computerScore +=1;
                break;
            case 1:
                console.log("you win");
                humanScore +=1;
                break;
            case 2:
                console.log("draw");
                break;
        }
    }
    console.log("overal score human : " + humanScore + " computer score : " + computerScore);
    if (humanScore > computerScore){
        console.log("human wins");
    }
    else if(humanScore <  computerScore){
        console.log("computer wins");
    }
    else{
        console.log("draw")
    }
}

playGame();