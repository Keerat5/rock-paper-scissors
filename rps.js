let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let Uscore=document.querySelector("#userScore");
let Cscore=document.querySelector("#computerScore");
let resetBtn=document.querySelector(".reset")
let gameOver=false;

const compChoice=()=>{
    const options=["rock","paper","scissors"];
    const i=Math.floor(Math.random()*3);
    return options[i];
}

const drawGame=()=>{
    msg.innerText="It's a draw!";
    msg.style.color="black";
    msg.style.backgroundColor="yellow";
}

const game=(userChoice)=>{
    const computerChoice=compChoice();
    if(computerChoice===userChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(
            (userChoice==="rock" && computerChoice==="scissors") ||
            (userChoice==="paper" && computerChoice==="rock") ||
            (userChoice==="scissors" && computerChoice==="paper")
        ){
            Uscore.innerText=++userScore; // pre inc. user score
            userWin=true;
        }else{
            Cscore.innerText=++compScore; // pre inc. comp score
            userWin=false;
        }

        if(userWin){
            msg.innerText="You win!";
            msg.style.backgroundColor="green";
        }else{
            msg.innerText="You lose!";
            msg.style.backgroundColor="red";    
        }
    }

    endGame();
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        if(gameOver===true) return;
        const userChoice=choice.getAttribute("id");
        game(userChoice);    
    })
})


const endGame = () => {
    if(userScore === 5){
    /*         for(let i of choices){ // this disabling won't work on divs/images
            i.disabled=true;
        } */
        msg.innerText = "Congratulations, you've won the match";
        gameOver = true;
        resetBtn.classList.remove("hide");
    }
    else if(compScore === 5){
        msg.innerText = "Better luck next time";
        gameOver = true;
        resetBtn.classList.remove("hide");
    }
}

const resetGame=()=>{
    userScore=0;
    compScore=0;
    msg.innerText="Play Your Move";
    gameOver=false;
    resetBtn.classList.add("hide");
    Uscore.innerText=0;
    Cscore.innerText=0;
    msg.style.color= '#fff';
    msg.style.backgroundColor='#191913'

} 

resetBtn.addEventListener("click",resetGame);
