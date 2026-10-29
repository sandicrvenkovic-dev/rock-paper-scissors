
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

const results = document.querySelector("#results");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");

const buttons = document.querySelectorAll("#buttons button");

// Generate the computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play one round
function playRound(playerSelection) {
  // Stop playing if someone already won
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }

  const computerSelection = getComputerChoice();
  let roundResult = "";

  if (playerSelection === computerSelection) {
    roundResult = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundResult = "You win this round!";
  } else {
    computerScore++;
    roundResult = "Computer wins this round!";
  }

  // Display round results on the webpage
  results.textContent =
    `You chose ${playerSelection}. ` +
    `Computer chose ${computerSelection}. ${roundResult}`;

  // Update the running score
  score.textContent =
    `Player: ${playerScore} | Computer: ${computerScore}`;

  // Announce the winner when someone reaches 5
  if (playerScore === 5) {
    winner.textContent = "Game Over! You win!";
    buttons.forEach(button => button.disabled = true);
  } else if (computerScore === 5) {
    winner.textContent = "Game Over! Computer wins!";
    buttons.forEach(button => button.disabled = true);
  }
}

// Add event listeners to all three buttons
document.querySelector("#rock").addEventListener("click", () => {
  playRound("rock");
});

document.querySelector("#paper").addEventListener("click", () => {
  playRound("paper");
});

document.querySelector("#scissors").addEventListener("click", () => {
  playRound("scissors");
});
