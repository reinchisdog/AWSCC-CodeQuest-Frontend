// JavaScript Fundamentals - Day 15: Assignment

// 1. Use a `for` loop to count from 1 to 5 and print each number to the console.

for (let i = 0; i < 5; i++){
     console.log(i+1);
}

// 2. Create an array named `cookies` with different types of cookies (strings).
// 3. Use a `for` loop to iterate over the `cookies` array and print each type of cookie to the console.

let cookies = ['Chocolate Chip','Snickerdoodle','Wafer','Oreo','Macaroons'];

for (let i=0; i < cookies.length; i++){
     console.log(cookies[i]);
}

// 4.  Create a variable named `jarNotEmpty` and set it to `true`.
// 5.  Use a `while` loop to simulate eating cookies while the jar is not empty.

let jarNotEmpty = true;
let i = 0

while (jarNotEmpty){
     console.log(cookies[i] + " Eaten");
     i++;
     
     if(i == cookies.length){
          jarNotEmpty = false;
     }
}