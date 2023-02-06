function game() {
  let items = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3) + 1;
  let randomItem = items[randomIndex - 1];
  let chosenItem = prompt("rock paper or scissors").toLowerCase();
  console.log("Hello there! You Chose: " + chosenItem);
  console.log("Computer Chose: " + randomItem);
  console.log("You Chose: " + chosenItem);
  if (chosenItem === randomItem) {
    console.log("It's a tie!");
  }
  else if ((chosenItem === "rock" && randomItem === "scissors") || (chosenItem === "paper" && randomItem === "rock") || (chosenItem === "scissors" && randomItem === "paper")) {
    console.log("You win!");
  }
  else {
    console.log("You lose!");
  }
}
