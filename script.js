const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let gameOver = false;


const buttons = document.querySelectorAll("button");
const playerScorecard = document.querySelector(".playerScore");
const computerScorecard = document.querySelector(".computerScore");
const resultMessage = document.querySelector(".resultMessage");

playerScorecard.innerHTML = `Your Score: ${playerScore}`;
computerScorecard.innerHTML = `Opponent Score: ${computerScore}`;
resultMessage.innerHTML = `Take your pick. First to reach a score of 5 wins.`;




// add event listener to buttons & starts game
buttons.forEach((button) =>{
  button.addEventListener("click", (e)=> {
    if (!gameOver) {

      console.log(oneRound(e.target.className, computerPlay()));


    }   
    

  })
})




// Plays one round of the game, calls to evaluate the winner and tracks score
function oneRound(playerChoice, computerChoice) {
  console.log(playerChoice);
  console.log(computerChoice);
  let roundWinner = evaluateWinner(playerChoice, computerChoice)

  resultMessage.innerHTML = `${roundWinner}`
   
  trackScore(roundWinner);


}


// Takes in choices and return message on who is winner
function evaluateWinner(playerChoice, computerChoice) {

  if (computerChoice == playerChoice) {
    return "It's a tie."
  } else if (playerChoice == "rock") {
      if (computerChoice == "paper") {
        return "You lose! Paper beats Rock"
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
      } 

}


//takes winner and tabulates points
function trackScore(winner) {
  if (winner.includes("win")) {
    playerScore += 1;
  } else if (winner.includes("lose")) {
    computerScore += 1;
  }
  playerScorecard.innerHTML = `Your Score: ${playerScore}`
  computerScorecard.innerHTML = `Opponent Score: ${computerScore}`

  

  console.log(playerScore);
  console.log(computerScore);

  if (playerScore == 5 || computerScore == 5) {
    endGame();
  };
 
}





// Computer's choice: randomly returns Rock, Paper, or scissors
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  let randomChoice = choices[randomNumber];
  return randomChoice;
}



//stops game
function endGame() {
  gameOver = true;
  
  resultMessage.innerHTML = "Game Over!"
  
}


