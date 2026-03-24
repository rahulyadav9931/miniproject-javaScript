let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');

const msg = document.getElementById('message');

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

const drawgame = () => {
    msg.innerText = "game was draw, play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!. Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {

        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose!. ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
};
const playGame = (userChoice) => {

    // generate computer choice
    const computerChoice = genComputerChoice();
    if (userChoice === computerChoice) {
        // It's a draw
        drawgame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = (userChoice === "rock") ? false : true;


        }
        showWinner(userWin, userChoice, computerChoice);

    };

};
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
