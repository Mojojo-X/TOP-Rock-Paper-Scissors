const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

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

// Testing playRound
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

