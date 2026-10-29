function playGame() {
    let playerscore = 0;
    let computerscore = 0;
    const choices = ["rock", "paper", "scissors"];

    for (let Round = 1; Round <= 5; Round++) {
        let playerChoice = prompt( "Round " + Round + " out of 5: Choose rock, paper, or scissors:"
        );

        if (playerChoice === null) {
            alert("You didn't make a choice!");
            break; 
        }

        playerChoice = playerChoice.trim().toLowerCase();

        if (!choices.includes(playerChoice)) {
            alert("Invalid choice! Please choose rock, paper, or scissors.");
            Round--;
            continue;
        }

        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result;

        if (playerChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "You win this round!";
            playerscore++;
        } else {
            result = "Computer wins this round!";
            computerscore++;
        }

        alert(
            `Round ${Round}: You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`
        );
    }

    alert(`Game Over! Final Score - You: ${playerscore}, Computer: ${computerscore}`);
}

playGame();