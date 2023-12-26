//Variables
const choices = ["Rock", "Paper", "Scissors"];

const player1ChoiceDisplay = document.getElementById('player1-choice-display');
const player1ScoreDisplay = document.getElementById('player1-score');
const player1Buttons = document.getElementById('player1-choices');

const player2ChoiceDisplay = document.getElementById('player2-choice-display');
const player2ScoreDisplay = document.getElementById('player2-score');
const player2Buttons = document.getElementById('player2-choices');

const gameStatusDisplay = document.getElementById('game-status');
const resetGameButton = document.getElementById('reset-game-btn');

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

let choice1, choice2;
let p1Score = 0, p2Score = 0;

//Event Listeners for Buttons
rockBtn.addEventListener("click", function () {
     choiceProcess(0);
});

paperBtn.addEventListener("click", function () {
     choiceProcess(1);
});

scissorsBtn.addEventListener("click", function () {
     choiceProcess(2);
});



resetGameButton.addEventListener("click", function () { 
     p1Score = 0, p2Score = 0;

     player1ScoreDisplay.textContent = `${p1Score}`;
     player2ScoreDisplay.textContent = `${p2Score}`;

     player1ChoiceDisplay.innerHTML = '';
     player2ChoiceDisplay.innerHTML = '';

     while(player2Buttons.childNodes.length > 0){
          player1Buttons.appendChild(player2Buttons.childNodes[0]);
     }

     gameStatusDisplay.style.width = '700px';
     gameStatusDisplay.textContent = "SHOW YOUR HAND TO START THE GAME!";
});

//Function: for comparing choices to draw conclusion
function compareProcess(){
     //Draw Conclusion
     if((choice1 == 0 && choice2 == 0)||(choice1 == 1 && choice2 == 1)||(choice1 == 2 && choice2 == 2)){
          gameStatusDisplay.style.width = '400px';
          gameStatusDisplay.textContent = "IT'S A DRAW! No one gets a point.";
     }
     //Player 1 - Winner
     else if((choice1 == 0 && choice2 == 2)||(choice1 == 1 && choice2 == 0)||(choice1 == 2 && choice2 == 1)){
          gameStatusDisplay.style.width = '700px';
          gameStatusDisplay.textContent = "PLAYER-1 WINS!";

          player1ScoreDisplay.textContent = `${p1Score+=1}`;
     }
     //Player 2 - Winner
     else if((choice2 == 0 && choice1 == 2)||(choice2 == 1 && choice1 == 0)||(choice2 == 2 && choice1 == 1)){
          gameStatusDisplay.style.width = '700px';
          gameStatusDisplay.textContent = "PLAYER-2 WINS!";

          player2ScoreDisplay.textContent = `${p2Score+=1}`;
     }
}

//Function: for setting the process after choosing from Player 1 Buttons
function p1Turn(){
     while(player1Buttons.childNodes.length > 0){
          player2Buttons.appendChild(player1Buttons.childNodes[0]);
     }

     gameStatusDisplay.style.width = "500px"
     gameStatusDisplay.textContent = "Waiting for PLAYER 2's TURN...";
}

//Function: for setting the process after choosing from Player 2 Buttons
function p2Turn(){
     while(player2Buttons.childNodes.length > 0){
          player1Buttons.appendChild(player2Buttons.childNodes[0]);
     }

     compareProcess();

     player1ChoiceDisplay.innerHTML = '';
     player2ChoiceDisplay.innerHTML = '';
}

//Function: that sets the Process of the game
function choiceProcess(choice){
     if (player1ChoiceDisplay.childElementCount == 0){
          const player1Choice = document.createElement('h1');
          player1Choice.textContent = choices[choice];
          player1ChoiceDisplay.appendChild(player1Choice);

          choice1 = choice;

          p1Turn();
     }
     else{   
          const player2Choice = document.createElement('h1');
          player2Choice.textContent = choices[choice];
          player2ChoiceDisplay.appendChild(player2Choice);

          choice2 = choice;

          p2Turn();
     }
}