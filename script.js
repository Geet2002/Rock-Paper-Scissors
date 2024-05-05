let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");

let userScoreDisplay = document.querySelector("#user-score");

let compScoreDisplay = document.querySelector("#comp-score");

let compRock = document.querySelector("#compRock"); 
let compPaper = document.querySelector("#compPaper"); 
let compScisssors = document.querySelector("#compScissors"); 


const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
};

const drawGame = () =>{
    console.log("game was draw");
    msg.textContent = "Draw";
};

const showWinner = (userwin) =>{
    if(userwin){ // if(userwin) === if(userwin === true)
        console.log("you win");
        msg.textContent = "Hurray! You are the Winner";
        userScore ++;
        userScoreDisplay.textContent = userScore;
    }else{
        console.log("comp win");
        msg.textContent = "Computer Wins";
        compScore ++;
        compScoreDisplay.textContent = compScore;
    }
}

const playGame = (userChoice) =>{
    console.log("user choice",userChoice);
    //Generate computer choice 
    const compChoice = genCompChoice();
    console.log("comp choice",compChoice);




    if(compChoice === "rock"){
        console.log("CompPlay Rock");

        compRock.style.opacity = 1;
        compPaper.style.opacity = 0;
        compScisssors.style.opacity = 0;
    } 
    else if(compChoice === "paper"){
        console.log("CompPlay Paper");

        compPaper.style.opacity = 1;
        compRock.style.opacity = 0;
        compScisssors.style.opacity = 0;
    }
    else{
        console.log("compPlay Scissors");

        compScisssors.style.opacity = 1;
        compRock.style.opacity = 0;
        compPaper.style.opacity = 0;
    }




    if(userChoice === compChoice){
        // draw
        drawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            //scissors or paper
            userwin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock or scissors
            userwin = compChoice === "scissors" ? false : true;
        } else{
            // rock or paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})