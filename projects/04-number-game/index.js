const inputRange = document.getElementById('input-range');
const inputNumber = document.getElementById('input-num');
let input;

inputRange.addEventListener('input', function(){
     input = inputRange.value;
     inputNumber.value = input;
});

inputNumber.addEventListener('input', function(){
     input = inputNumber.value;
     input
});