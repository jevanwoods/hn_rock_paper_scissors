console.log('hello');

let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

function selectRock() {
  playerChoice = 'Rock';
  document.getElementById('playerMessageBox').innerHTML = 'You chose Rock.';
  console.log('You chose ' + playerChoice);
  return playerChoice;
}

function selectPaper() {
  playerChoice = 'Paper';
  document.getElementById('playerMessageBox').innerHTML = 'You chose Paper.';
  console.log('You chose ' + playerChoice);
  return playerChoice;
}

function selectScissors() {
  playerChoice = 'Scissors';
  document.getElementById('playerMessageBox').innerHTML = 'You chose Scissors.';
  console.log('You chose ' + playerChoice);
  return playerChoice;
}

function computerSelection() {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number == 1) {
    computerChoice = 'Rock';
  } else if (number == 2) {
    computerChoice = 'Paper';
  } else if (number == 3) {
    computerChoice = 'Scissors';
  } else {
    computerChoice = 'Something went wrong';
  }
  document.getElementById('computerMessageBox').innerHTML = 'The Computer chose ' + computerChoice;
  return computerChoice;
}

function playRound() {
  computerSelection();
  if (playerChoice == computerChoice) {
    playerScore += 0;
    computerScore += 0;
    document.getElementById('roundResultsBox').innerHTML = 'Tie!';
    console.log('Tie!');
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    playerScore += 1;
    document.getElementById('roundResultsBox').innerHTML = 'You win! Rock beats scissors!';
    console.log('You win! Rock beats scissors!');
  } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
    computerScore += 1;
    document.getElementById('roundResultsBox').innerHTML = 'You lose! Paper beats rock!';
    console.log('You lose! Paper beats rock!');
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    playerScore += 1;
    document.getElementById('roundResultsBox').innerHTML = 'You win! Paper beats rock!';
    console.log('You win! Paper beats rock!')
  } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
    computerScore += 1;
    document.getElementById('roundResultsBox').innerHTML = 'You lose! Scissors beat paper!';
    console.log('You lose! Scissors beat paper!')
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    playerScore += 1;
    document.getElementById('roundResultsBox').innerHTML = 'You win! Scissors beat paper!';
    console.log('You win! Scissors beat paper!');
  } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
    computerScore += 1;
    document.getElementById('roundResultsBox').innerHTML = 'You lose! Rock beats scissors!';
    console.log('You lose! Rock beats scissors!');
  }
  document.getElementById('playerScoreBox').innerHTML = playerScore + ' points';
  document.getElementById('computerScoreBox').innerHTML = computerScore + ' points';
  console.log('You have ' + playerScore + ' points. The Computer has ' + computerScore + ' points.')
  return [playerScore, computerScore];
}

function game() {
  if (playerScore == 5) {
    document.getElementById('gameResultsBox').innerHTML = 'You win the game! Congratulations! You\'re the best! The score will now reset.';
    console.log("You win the game! Congratulations! You're the best!");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    document.getElementById('gameResultsBox').innerHTML = 'You lost! Oh man, how embarassing for you! The score will now reset.';
    console.log('You lost! Oh man, how embarassing for you!');
    playerScore = 0;
    computerScore = 0;
  } else {
    document.getElementById('gameResultsBox').innerHTML = 'Keep going.';
    console.log('Keep going');
  }
}
