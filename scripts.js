const choices = ["rock", "paper", "scissors"];
const playerBoard = document.querySelector(".player-score");
const computerBoard = document.querySelector(".computer-score");
const roundResult = document.querySelector(".round-result");
const btns = document.querySelectorAll(".player-buttons>button");
const resetBtn = document.querySelector("#reset");

btns.forEach(btn => btn.addEventListener('click', game));
resetBtn.addEventListener('click', resetGame);

// Keep track of scores
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
let result;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "paper":
        return "You Lose! Paper beats Rock";
      case "scissors":
        return "You Win! Rock beats Scissors";
      case "rock":
        return "It's a tie! You both selected Rock";
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "paper":
        return "It's a tie! You both selected paper";
      case "scissors":
        return "You Lose! Scissors beats Paper";
      case "rock":
        return "You Win! Paper beats Rock";
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "paper":
        return "You Win! Scissors beats paper";
      case "scissors":
        return "It's a tie!";
      case "rock":
        return "You Lose! Rock beats Scissors";
    }
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerBoard.innerText = `Player Score: 0`;
  computerBoard.innerText = `Computer Score: 0`;
  roundResult.innerText = 'Game Start !!';
}

function game() {

  computerSelection = getComputerChoice();
  //insert the playerSelection button id as the default argument
  result = playRound(playerSelection = this.id, computerSelection).toLowerCase();
  roundResult.innerText = result;
  //evaluate result of playRound and update score
  if (result.includes("win")) {
    playerScore++;
    playerBoard.innerText = `Player Score: ${playerScore}`;
  } else if (result.includes("lose")) {
    computerScore++;
    computerBoard.innerText = `Computer Score: ${computerScore}`;
  }


  //print game results
  if (playerScore === 5) {
    alert("Player Wins!");
    resetGame();
  } else if (computerScore === 5) {
    alert("Computer Wins!");
    resetGame();
  }
}
