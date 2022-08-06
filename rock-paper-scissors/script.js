// dom variables
const pScore = document.getElementById("playerScore")
const cScore = document.getElementById("computerScore")

const playerSelect = document.getElementById("playerSelect")
const computerSelect = document.getElementById("computerSelect")

const message = document.getElementById("message")
const submit = document.getElementById("submit")

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

// custom variables
let playerScore = 0;
let computerScore = 0;

let gameActive = false;



// main functions

const displayBoards = () => {

    const start = document.getElementById("start");
    const boards = document.getElementById("boards")
    const select = document.getElementById("select")

    start.style.display = "none";

    boards.style.display = "block";
    select.style.display = "block";

    gameActive = true;

}

const computerPlay = () => {
    let options = ["rock", "paper", "scissors"];

    let randomChoice = options[Math.floor(Math.random()*options.length)];

    return randomChoice;
}

const playRound = (ps, cs) => {

    // return 0 if it's a draw
    // return 1 if player won
    //  return -1 if computer won
    if(ps===cs){
        return 0;
    }else if(ps === "rock" && cs === "scissors"){
        return 1;
    }else if(ps === "rock" && cs === "paper"){
        return -1;
    }else if(cs === "rock" && ps === "scissors"){
        return -1;
    }else if(cs === "rock" && ps === "paper"){
        return 1;
    }else if(ps === "scissors" && cs === "paper"){
        return 1;
    }else if(ps === "paper" && cs === "scissors"){
        return -1;
    }

    // if(ps===cs){
    //     return 0;
    // }else if(ps==="rock"){
    //     return (cs==="scissors" ? 1 : -1)
    // }else if()

}

const getMeWinner = playerSelection => {
    const computerSelection = computerPlay();

    let winner = playRound(playerSelection,computerSelection);

    winner = winner === 0 ? "Draw!" : (winnner===1 ? "Player won!" : "Computer won!");

    return ({
        winner: winner,
        compMove: computerSelection
    })
}


const gameFlow = (playerSelection) => {
    const winnerObject = getMeWinner(playerSelection);

    const result = winnerObject.winner;

    // TODO => COMPLETE THIS FUNC
    const computerMove = winnerObject.compMove;

    displaySelection('player', playerSelection, results);
    displaySelection('computer', computerMove, results);

    scoreBoard(result)

    message.innerText = result;

    whoWon()
}


// event listeners
submit.addEventListener("click", displayBoards)

rock.addEventListener("click",()=> gameFlow(rock.id))
paper.addEventListener("click",()=> gameFlow(paper.id))
scissors.addEventListener("click",()=> gameFlow(scissors.id))