// JavaScript Fundamentals - Day 13: Assignment

// Task 1: Variable Mastery

// 1. Declare a variable named `currentLesson` and assign it the value 'JavaScript Fundamentals'.
// 2. Print the value of `currentLesson` to the console.

const currentLesson = 'JavaScript Fundamentals';

console.log(currentLesson);

// Task 2: Data Types Exploration

// 3. Create a variable named `favoriteNumber` and assign it a number of your choice.
// 4. Create a variable named `favoriteWord` and assign it a string of your choice.
// 5. Create a variable named `isJavaScriptFun` and assign it a boolean value.
// 6. Create a variable named `nothing` and assign it a value of `null`.
// 7. Create a variable named `undefinedVar` without assigning any value to it.

const favoriteNumber = 16;
const favoriteWord = 'Banana';
let isJavaScriptFun = true;
const nothing = null;
let undefinedVar;

console.log(favoriteNumber,favoriteWord,isJavaScriptFun,nothing,undefinedVar);

// Task 3: Logical Operators in Action

// 8. Create two variables, `isMorning` and `isRaining`, and assign them boolean values.
// 9. Use the logical **AND** (`&&`) operator to check if it's morning and raining. Print appropriate messages based on the result.
// 10. Use the logical **OR** (`||`) operator to check if it's either morning or raining. Print appropriate messages based on the result.
// 11. Use the logical **NOT** (`!`) operator to invert the value of `isMorning`. Print the new value.

let isMorning = false;
let isRaining = true;

if(isMorning && isRaining){
     console.log("It is both morning and raining.");
}
else {
     console.log("It is only either morning or raining, or not both.");
}

if(isMorning || isRaining){
     console.log("It is either morning or raining.");
}
else {
     console.log("It is neither morning nor raining.");
}

console.log(!isMorning);