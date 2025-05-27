function guessTheNumber() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let guess;

  console.log("Guess the number between 1 and 100");

  while (guess !== secretNumber) {
    guess = parseInt(prompt("Enter your guess: "), 10);
    
    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
      continue;
    }
    
    attempts++;

    if (guess > secretNumber) {
      console.log("Too high! Try again.");
    } else if (guess < secretNumber) {
      console.log("Too low! Try again.");
    } else {
      console.log(`Congrats! You guessed it in ${attempts} attempts.`);
      break;
    }
  }
}

// To start the game, call:
guessTheNumber();
