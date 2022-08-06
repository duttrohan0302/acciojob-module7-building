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
const gameFlow = id => {

}

const displayBoards = () => {

    const start = document.getElementById("start");
    const boards = document.getElementById("boards")
    const select = document.getElementById("select")

    start.style.display = "none";

    boards.style.display = "block";
    select.style.display = "block";

    gameActive = true;
    
}



// event listeners
submit.addEventListener("click", displayBoards)

rock.addEventListener("click",()=> gameFlow(rock.id))
paper.addEventListener("click",()=> gameFlow(paper.id))
scissors.addEventListener("click",()=> gameFlow(scissors.id))