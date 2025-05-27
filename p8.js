function playRPS(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  if (!choices.includes(userChoice)) {
    console.log("Invalid choice! Choose rock, paper, or scissors.");
    return;
  }
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (userChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

// Example usage:
playRPS('rock');
playRPS('paper');
playRPS('scissors');
