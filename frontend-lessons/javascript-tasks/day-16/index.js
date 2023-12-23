// JavaScript Fundamentals - Day 16: Assignment

// 1. Create a function named `greet` that prints a greeting message to the console.
// 2. Call the `greet` function to display the greeting.
// 3. Modify the `greet` function to take a parameter `name` and greet the person by name.

function greet(name = 'Person'){
     console.log(`Hello There, ${name}!`);
}

greet();

// 4. Create a function named `addNumbers` that takes two parameters and returns their sum.
// 5. Call the `addNumbers` function with different values and print the results.

function addNumbers(x, y){
     return x + y;
}

console.log(`Sum: ${addNumbers(1, 2)}`);
console.log(`Sum: ${addNumbers(17, 38)}`);
console.log(`Sum: ${addNumbers(16, 95)}`);

// 6. Create a function named `calculateAverage` that takes an array of numbers as a parameter and returns the average.
// 7. Use the `calculateAverage` function with an array of numbers and print the result.

function calculateAverage(arr){
     let sum = 0
     for (let i=0; i < arr.length; i++){
          sum += arr[i];
     }
     return sum / arr.length;
}

let arr = [83, 36, 26, 97, 33];
console.log(`Average: ${calculateAverage(arr)}`);

// These are the fundamental concepts of functions in JavaScript. 
//Functions allow you to write modular and reusable code, making your programs more organized and easier to maintain.

