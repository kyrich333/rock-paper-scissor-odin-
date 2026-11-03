//variables

let computerScore = 0;
let playerScore = 0;
let round = 0;

const choices = ["rock","paper","scissor"];
const container = document.createElement("div");
container.id ="container";
document.body.appendChild(container);

const scoreBoard = document.createElement("div");
const para = document.createElement("p");
const buttonsContainer = document.createElement("div");
buttonsContainer.id = "buttonsContainer";
scoreBoard.id = "scoreBoard";
scoreBoard.textContent = "player( 0 ) vs ( 0 )computer";
container.append(scoreBoard,para,buttonsContainer);



choices.forEach((choice)=>{
    const button = document.createElement("button");
    button.id = choice;
    button.textContent = choice;
    button.addEventListener("click",()=>{
        play(button.id);  
    });
    buttonsContainer.appendChild(button);

});


// logic

function getComputerChoice(){
    let i = Math.floor(Math.random()*3);
    return choices[i];
}


function play(id){
    
    let computer = getComputerChoice() ;
    let player = id;
    let result = determineWinner(player,computer);
    round += 1;

    scoreBoard.textContent = `round : ${round}  player( ${playerScore} ) vs ( ${computerScore} )computer`;
    para.textContent = result;   
    
};

function determineWinner(player,computer){

    if (player === computer){
        return "draw";
    }
    if( 
        player === "rock" && computer ==="scissor" ||
        player === "paper" && computer ==="rock" ||
        player === "scissor" && computer ==="paper"
        
    )
    {
        playerScore +=1;
        return "you win";
    }
    else

    {
        computerScore+=1;
        return "you lose";
    }

};