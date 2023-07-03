const choices = ["rock", "paper", "scissors"];

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

function game() {
  // Keep track of scores
  let playerScore = 0;
  let computerScore = 0;
  let computerSelection;
  let playerSelection;
  let result;

  //loop playRound till either player reaches a score of 5
  do {
    playerSelection = prompt(
      `Please enter one of the following ${choices.join(
        " "
      )} or 'quit' to end game`
    ).toLowerCase();

    if (playerSelection === "quit") {
      console.log("Goodbye");
      return;
    } else if (!choices.includes(playerSelection)) {
      alert("Invalid input!");
      continue;
    }

    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection).toLowerCase();
    //evaluate result of playRound and update score
    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
    if (playerScore >= 5 || computerScore >= 5) break;
  } while (true);

  //print game results
  if (playerScore === 5) {
    console.log("Player Wins!");
  } else if (computerScore === 5){
    console.log("Computer Wins!");
  }
}

game();
