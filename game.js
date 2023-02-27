//log of win and losses
let winCounter = 0;
let loseCounter = 0;

function playRound() {
  let items = ["rock", "paper", "scissors"]; //array of variables
  let randomIndex = Math.floor(Math.random() * 3); 
  let randomItem = items[randomIndex];
  let chosenItem = prompt("rock paper or scissors").toLowerCase(); //standarizing input to match array
  console.log("You Chose: " + chosenItem + " - Computer Chose: " + randomItem);
  if (chosenItem === randomItem) {
    console.log("It's a tie!");
    playRound()
  } else if ((chosenItem === "rock" && randomItem === "scissors") || (chosenItem === "paper" && randomItem === "rock") || (chosenItem === "scissors" && randomItem === "paper")) {
    console.log("You win this round!");
    winCounter++;
    console.log("Current Score: " + "player " + winCounter + " - Computer " + loseCounter); //displaying score
    if (winCounter < 5) {
      playRound()
    } else {
      console.log("Game Over - YOU WIN!"); //end of game as a winner (more than 5 wins)
      return
    }
  } else {
    console.log("You lose this round!");
    loseCounter++;
    console.log("Current Score: " + "player " + winCounter + " - Computer " + loseCounter);
    if (loseCounter < 5) {
        playRound()
    } else {
      console.log("Game Over - YOU LOSE!"); //end of game as a winner (more than 5 loses)
      return
    }
  }
}

playRound();