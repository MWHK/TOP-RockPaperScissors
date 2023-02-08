let winCounter = 0;
let loseCounter = 0;

function game() {
  let items = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  let randomItem = items[randomIndex];
  let chosenItem = prompt("rock paper or scissors").toLowerCase();
  console.log("Hello there! You Chose: " + chosenItem);
  console.log("Computer Chose: " + randomItem);
  if (chosenItem === randomItem) {
    console.log("It's a tie!");
    game()
  } else if ((chosenItem === "rock" && randomItem === "scissors") || (chosenItem === "paper" && randomItem === "rock") || (chosenItem === "scissors" && randomItem === "paper")) {
    console.log("You win!");
    winCounter++;
    if (winCounter < 5) {
      game()
    } else {
      console.log("Game Over - YOU WIN!");
      return
    }
  } else {
    console.log("You lose!");
    loseCounter++;
    if (loseCounter < 5) {
        game()
    } else {
      console.log("Game Over - YOU LOSE!");
      return
    }
  }
}

game();