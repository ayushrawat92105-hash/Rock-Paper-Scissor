let userScore = 0;
let CompScore = 0;

const elements = document.querySelectorAll(".elements");
const butn = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genComputerChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randix = Math.floor(Math.random() * 3);
    return options[randix];

};
const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "grey";
};
const showWinner = (userWin) => {
    if(userWin){ 
    userScore++;
    userScorePara.innerText =userScore;
    msg.innerText = "You WIn!";
    msg.style.backgroundColor = "green";
    }else{
        CompScore++;
        compScorePara.innerText = CompScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
};


const playGame =(userChoice) =>{
    console.log("user choice =",userChoice);
    //Generate computer
    const compChoice = genComputerChoice();
    console.log("computer choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();

    }else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin = compChoice === "paper" ? false : true;
        } else if( userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
    

};

elements.forEach((element) =>  {
    element.addEventListener("click",() => {
        const userChoice = element.getAttribute("id");
        playGame(userChoice);

    });
});
