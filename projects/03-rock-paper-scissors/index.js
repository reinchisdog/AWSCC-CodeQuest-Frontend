//Variables
const choices = ["Rock", "Paper", "Scissors"];

const choiceButtons = document.getElementsByClassName('choice-btn');

const player1ChoiceDisplay = document.getElementById('player1-choice-display');
const player1ScoreDisplay = document.getElementById('player1-score');
const player1Buttons = document.getElementById('player1-choices');

const player2ChoiceDisplay = document.getElementById('player2-choice-display');
const player2ScoreDisplay = document.getElementById('player2-score');
const player2Buttons = document.getElementById('player2-choices');

const gameStatusDisplay = document.getElementById('game-status');

const bottomContainer = document.getElementById('bottom-container');
const resetGameButton = document.getElementById('reset-game-btn');
const gameModeButton = document.getElementById('gamemode-option')
const nextRoundButton = document.getElementById('next-round-btn');
const versusCPU = document.getElementById('v-CPU');
const versusPlayer = document.getElementById('v-PLY');

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

let choice1, choice2;
let p1Score = 0, p2Score = 0;

let isPlayerMode = null;

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

versusCPU.addEventListener("click", function (){
     isPlayerMode = false;
     resetGameButton.style.display = 'block';
     gameModeButton.style.display = 'none';

     for (let i=0; i<3; i++){
          choiceButtons[i].style.display = 'block';
     }
});

versusPlayer.addEventListener("click", function (){
     isPlayerMode = true;
     resetGameButton.style.display = 'block';
     gameModeButton.style.display = 'none';

     for (let i=0; i<3; i++){
          choiceButtons[i].style.display = 'block';
     }
});

nextRoundButton.addEventListener("click", function (){
     while(player2Buttons.childNodes.length > 0){
          player1Buttons.appendChild(player2Buttons.childNodes[0]);
     }

     for (let i=0; i<3; i++){
          choiceButtons[i].style.display = 'block';
     }

     nextRoundButton.style.display = 'none';
     player1ChoiceDisplay.innerHTML = '';
     player2ChoiceDisplay.innerHTML = '';

     gameStatusDisplay.style.width = '700px';
     gameStatusDisplay.textContent = 'SHOW YOUR HAND TO START THE GAME!';
});

resetGameButton.addEventListener("click", function () { 
     p1Score = 0, p2Score = 0;

     player1ScoreDisplay.textContent = `${p1Score}`;
     player2ScoreDisplay.textContent = `${p2Score}`;

     player1ChoiceDisplay.innerHTML = '';
     player2ChoiceDisplay.innerHTML = '';
     nextRoundButton.style.display = 'none';
     resetGameButton.style.display = 'none';
     gameModeButton.style.display = 'block';

     while(player2Buttons.childNodes.length > 0){
          player1Buttons.appendChild(player2Buttons.childNodes[0]);
     }

     for (let i=0; i<3; i++){
          choiceButtons[i].style.display = 'none';
     }

     gameStatusDisplay.style.width = '700px';
     gameStatusDisplay.textContent = 'SHOW YOUR HAND TO START THE GAME!';
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

     if (isPlayerMode == false){
          for (let i=0; i<3; i++){
               choiceButtons[i].style.display = 'none';
          } 
          const randomChoice = Math.floor(Math.random() * choices.length);

          player2ChoiceDisplay.textContent = choices[randomChoice];

          choice2 = randomChoice;

          p2Turn();
     }
     else {
          gameStatusDisplay.style.width = "500px"
          gameStatusDisplay.textContent = "Waiting for PLAYER 2's TURN...";
     }
}

//Function: for setting the process after choosing from Player 2 Buttons
function p2Turn(){
     compareProcess();

     for (let i=0; i<3; i++){
          choiceButtons[i].style.display = 'none';
     }

     nextRoundButton.style.display = 'block';
}

//Function: for setting the process of Player 2 (CPU)
function CPUTurn(){
     compareProcess();

     for (let i=0; i<3; i++){
          choiceButtons[i].style.display = 'none';
     }

     nextRoundButton.style.display = 'block';
}

//Function: that sets the Process of the game
function choiceProcess(choice){
     if (!player1ChoiceDisplay.textContent.trim()){
          player1ChoiceDisplay.textContent = choices[choice];

          choice1 = choice;

          p1Turn();
     }
     else if (isPlayerMode == true){   
          player2ChoiceDisplay.textContent = choices[choice];

          choice2 = choice;

          p2Turn();
     }
}
