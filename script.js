console.log("hello");

let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

function selectRock() {
  playerChoice = "Rock";
  console.log("You chose " + playerChoice);
  return playerChoice;
}

function selectPaper() {
  playerChoice = "Paper";
  console.log("You chose " + playerChoice);
  return playerChoice;
}

function selectScissors() {
  playerChoice = "Scissors";
  console.log("You chose " + playerChoice);
  return playerChoice;
}

function computerSelection() {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number == 1) {
    computerChoice = "Rock";
  } else if (number == 2) {
    computerChoice = "Paper";
  } else if (number == 3) {
    computerChoice = "Scissors";
  } else {
    computerChoice = "Something went wrong";
  }
  console.log("The Computer chose " + computerChoice);
  return computerChoice;
}

function playRound() {
  computerSelection();
  if (playerChoice == computerChoice) {
    playerScore += 0;
    computerScore += 0;
    console.log("Tie!");
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    playerScore += 1;
    console.log("You win! Rock beats scissors!");
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    computerScore += 1;
    console.log("You lose! Paper beats rock!");
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    playerScore += 1;
    console.log("You win! Paper beats rock!")
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    computerScore += 1;
    console.log("You lose! Scissors beat paper!")
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    playerScore += 1;
    console.log("You win! Scissors beat paper!");
  } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    computerScore += 1;
    console.log("You lose! Rock beats scissors!");
  }
  console.log("You have " + playerScore + " points. The Computer has " + computerScore + " points.")
  return [playerScore, computerScore];
}

function game() {
  if (playerScore == 5) {
    console.log("You win the game! Congratulations! You're the best!");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    console.log("You lost! Oh man, how embarassing for you!");
    playerScore = 0;
    computerScore = 0;
  } else {
    console.log("Keep going");
  }
}
