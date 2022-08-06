// Variable declarations
const message = document.querySelector(".message")
const button = document.querySelector("button")
const gameArea = document.querySelector(".gameArea")
const results = document.querySelector(".results")
const directions = document.querySelector(".directions")

//local variables
let inPlay = false;
let count=0;
let playArea={}
const maxDuration = 2;

// Utility functions
const showMessage = (notification) => {
    message.innerHTML = `<h3>${notification}</h3>`
}

const getMeTheHeight = () => {
    let maxHeight = gameArea.clientHeight;
    if(maxHeight <=100 ){
        maxHeight += 200;
    }
    else{
        maxHeight -= 200;
    }

    return maxHeight;
}

const getMeTheWidth = () => {
    let maxWidth = gameArea.clientWidth;
    if(maxWidth <=100 ){
        maxWidth += 200;
    }
    else{
        maxWidth -= 200;
    }

    return maxWidth;
}

// #123ab2
// 0 to 9, a to f total=> 16
// rgb(0 to 255, 0 to 255, 0 to 255)

// #5234

const funcName = (arg1, arg2) => {
    //use those arg and return/ dont return something
}

const random = (number) => {
    const val = Math.floor(Math.random()*number);
    return val;
}
const getColor = () => {

    const randomNumRange = () => {
        let hex = random(256).toString(16);
        return hex.padStart(2,"0")

    }
    return "#" + randomNumRange() + randomNumRange() + randomNumRange()
}


// main functions
// usually contains an event listener

const resetGame = () => {
    clearTimeout(playArea.timer)
    inPlay = false;
    button.style.display = "block"
}
const hit = (e) => {
    let start = e.target.start;
    let end = new Date().getTime();

    let duration = (end - start)/1000;

    if(playArea.timer){
        clearTimeout(playArea.timer)
    }
    clearTimeout(playArea.timer)

    showMessage(`It took you ${duration} seconds to click`)


    if(duration>maxDuration){
    gameArea.children[0].remove();
        
        results.innerHTML = `Too Slow! <span id="loser">You Lost!</span>
        Your score was ${count}
        <br>
        Click the start button to play again!`;

        resetGame();
    }else{
        gameArea.children[0].remove();

        count++;
        playArea.timer = setTimeout(myBox, random(4000));

        if(count===15){
            results.innerHTML = `You reach ${15}
            <span id="winner">You win!</span>
            <br>
            Click the start button to play again!`
            resetGame()
        }else{
            results.innerHTML = `Score: ${count} of 15`
        }
    }


}

const myBox = () => {

    let element = document.createElement("div");
    element.classList.add("box");

    const topPadding = random(getMeTheHeight())
    const leftPadding = random(getMeTheWidth())

    element.style.top = topPadding + "px";
    element.style.left = leftPadding + "px";

    element.style.backgroundColor = getColor();

    element.start = new Date().getTime();

    element.addEventListener("click", hit);

    const arg = {
        target: {start: element.start}
    }
    playArea.timer = setTimeout(()=>hit(arg), 2000)

    gameArea.appendChild(element)
}

const showBox = () => {
    playArea.timer = setTimeout(myBox, random(4000));
}

showMessage("Click Start to Begin!")

button.addEventListener("click",()=>{
    inPlay = true;

    button.style.display = "none";
    directions.style.display = "none";
    results.innerHTML = ""

    count = 0;

    showMessage("Starting ...")
    showBox()
})


/*
let timeOut;

const temp  = () =>{
    // does something


    timeout = setTimeout(()=>temp(),3000)
}

timeOut = setTimeout(()=>temp(),3000)



//clear timeout whenever

clearTimeout(timeOut)

*/