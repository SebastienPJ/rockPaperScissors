const choices = ["rock", "paper", "scissors"]

// Randomly returns Rock, Paper, or scissors
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  let randomChoice = choices[randomNumber];
  return randomChoice;
}


// Plays one round of the game
function startGame(playerChoice, computerChoice) {
  console.log(playerChoice);
  console.log(computerChoice);
  
  // return computerChoice == playerChoice;

  if (computerChoice == playerChoice) {
    return "It's a tie."
  } else if (playerChoice == "rock") {
      if (computerChoice == "paper") {
        return "You Lose! Paper beats Rock"
      } else if (computerChoice == "scissors") {
        return "You win! Rock beats Scissors"
      }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
          return "You win! Paper beats Rock"
        } else if (computerChoice == "scissors") {
            return "You lose! Scissors beat Paper"
          }
      } else if (playerChoice == "scissors") {
          if (computerChoice == "rock") {
            return "You lose! Rock beats Scissors"

          } else if (computerChoice == "paper"){
              return "You win! Scissors beats Paper"
            } 
      } else if (computerChoice == playerChoice) {
          return "It's a tie!"
        }



}

function game() {
  for (let i = 0; i < 5; i++){
    let userChoice = prompt("Choose: Rock, Paper, Scissors: ").toLowerCase();
    console.log(startGame(userChoice, computerPlay()));
  }
}

game();