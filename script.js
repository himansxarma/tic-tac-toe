let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const drawGame = () => {
    msg.innerText = "It's a draw";
    msg.style.backgroundColor="blue"
}

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText=`${userScore}`
    } else {
        msg.innerText = `You win! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText=`${compScore}`
    }
}

const playGame = (userChoice) => {
    console.log("user Choice =", userChoice)
    // 
    const compChoice = genCompChoice();
    console.log("comp Choice", compChoice)
    if (userChoice === compChoice) {
        drawGame()
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice)
    })
}) 