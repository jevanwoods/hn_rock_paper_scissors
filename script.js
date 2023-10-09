console.log("hello");

let playerChoice;
let computerChoice;

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
    console.log("Tie!");
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    console.log("You win! Rock beats scissors!");
  } else if (playerChoice == "Rock" && computerChoice == "Paper") {
    console.log("You lose! Paper beats rock!");
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    console.log("You win! Paper beats rock!")
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    console.log("You lose! Scissors beat paper!")
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    console.log("You win! Scissors beat paper!");
  } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    console.log("You lose! Rock beats scissors!");
  }
}
