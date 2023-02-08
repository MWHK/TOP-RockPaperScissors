let winCounter = 0;
let loseCounter = 0;

function playRound() {
  let items = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  let randomItem = items[randomIndex];
  let chosenItem = prompt("rock paper or scissors").toLowerCase();
  console.log("You Chose: " + chosenItem + " - Computer Chose: " + randomItem);
  if (chosenItem === randomItem) {
    console.log("It's a tie!");
    playRound()
  } else if ((chosenItem === "rock" && randomItem === "scissors") || (chosenItem === "paper" && randomItem === "rock") || (chosenItem === "scissors" && randomItem === "paper")) {
    console.log("You win!");
    winCounter++;
    console.log("Current Score: " + "player " + winCounter + " - Computer " + loseCounter);
    if (winCounter < 5) {
      playRound()
    } else {
      console.log("Game Over - YOU WIN!");
      return
    }
  } else {
    console.log("You lose!");
    loseCounter++;
    console.log("Current Score: " + "player " + winCounter + " - Computer " + loseCounter);
    if (loseCounter < 5) {
        playRound()
    } else {
      console.log("Game Over - YOU LOSE!");
      return
    }
  }
}

playRound();