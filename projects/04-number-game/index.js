//Variables
const inputRange = document.getElementById('input-range');
const inputNumber = document.getElementById('input-num');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');
const displayMain = document.getElementById('display-main');
const displaySub = document.getElementById('display-subh');

const bottomHeading = document.getElementById('bottom-heading');

let input;
let randomNum;
let turns;


//Event Listeners
inputRange.addEventListener('input', function(){
     input = inputRange.value;
     inputNumber.value = input;
});

inputNumber.addEventListener('input', function(){
     input = inputNumber.value;
     inputRange.value = input;
});

submitButton.addEventListener('click', function(){
     turns++;
     compareNumber();
});

restartButton.addEventListener('click', function(){
     generateNumber();

     displayMain.innerHTML = 'ENTER A <span>NUMBER</span> TO START A GAME...';
     displaySub.innerHTML = '(between 0-1000)';

     bottomHeading.innerHTML = '<div class="line"></div><p>Enter your guess here:</p><div class="line"></div>';

     inputRange.style.display = 'block';
     inputNumber.style.display = 'block';
     submitButton.style.display = 'block';
     restartButton.style.display = 'none';

     inputNumber.value = null;
     inputRange.value = null; 
});

//Initial Generated Number
generateNumber();


//Function: Sets a Randomly Generated Number
function generateNumber (){
     turns = 0;
     randomNum = Math.floor(Math.random() * 1001);
     console.log(randomNum);
}

//Function: Compres Input to Randomly Generated Number
function compareNumber (){
     let percentageDiff;
     //Checks if input is higher or lower, 
     //while calculating how far off the input is to the randomly generated number
     if (input < randomNum){
          console.log('less');
          displayMain.innerHTML = 'Pick a <span>Higher</span> Number <span>↑</span>';
          percentageDiff = 100*((randomNum-input)/(randomNum));
     }    
     else if (input > randomNum){
          console.log('more');
          displayMain.innerHTML = 'Pick a <span>Lower</span> Number <span>↓</span>';
          percentageDiff = 100*((input-randomNum)/(1000-randomNum));
     }
     else if (input == randomNum){
          displayMain.innerHTML = 'Your Guess is <span>Correct</span>!';
          displaySub.innerHTML = `It took you a Total of <span>${turns} Turn/s</span> ...`;
          displaySub.style.color = 'var(--white)';

          bottomHeading.innerHTML = '<div class="line"></div>';
         
          inputRange.style.display = 'none';
          inputNumber.style.display = 'none';
          submitButton.style.display = 'none';
          restartButton.style.display = 'block';
     }

     //Checks the input's warmth to the Randomly Generated Number
     if (percentageDiff > 0 && percentageDiff <= 5){
          displaySub.textContent = '(Extremely Warm)';
     }
     else if (percentageDiff > 5 && percentageDiff <= 20){
          displaySub.textContent = '(Very Warm)';
     }
     else if (percentageDiff > 20 && percentageDiff <= 50){
          displaySub.textContent = '(Warm)';
     }
     else if (percentageDiff > 50 && percentageDiff <= 80){
          displaySub.textContent = '(Cold)';
     }
     else if (percentageDiff > 80 && percentageDiff <= 95){
          displaySub.textContent = '(Very Cold)';
     }
     else if (percentageDiff > 95 && percentageDiff <= 100){
          displaySub.textContent = '(Extremely Cold)';
     }
     
     displaySub.style.color = `hsl(${176*(percentageDiff/100)}, 59%, 42%)`;
}