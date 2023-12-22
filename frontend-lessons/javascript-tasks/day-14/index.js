// JavaScript Fundamentals - Day 14: Assignment

// 1. Create a variable named `temperature` and assign it a value.
// 2. Use an `if` statement to check if the `temperature` is greater than 30. Print a message to the console accordingly.
// 3. Extend the previous example with an `else` statement to print a different message if the temperature is not greater than 30.

let temperature = 36.9;

if (temperature > 30){
     console.log("Temperature is greater than 30");
}
else {
     console.log("Temperature is equal or less than 30");
}

// 4. Create a variable named `time` and assign it a value representing the current hour (in 24-hour format).
// 5. Use `else if` statements to greet the user based on the time of day (morning, afternoon, evening).

let time = 1345;

if ((time >= 0 && time <= 59) ||
     (time >= 100 && time <= 159) ||
     (time >= 200 && time <= 259) ||
     (time >= 300 && time <= 359) ||
     (time >= 400 && time <= 459) ||
     (time >= 500 && time <= 559) ||
     (time >= 600 && time <= 659) ||
     (time >= 700 && time <= 759) ||
     (time >= 800 && time <= 859) ||
     (time >= 900 && time <= 959) ||
     (time >= 1000 && time <= 1059) ||
     (time >= 1100 && time <= 1159)){
     console.log("Morning");
}

else if ((time >= 1200 && time <= 1259) ||
     (time >= 1300 && time <= 1359) ||
     (time >= 1400 && time <= 1459) ||
     (time >= 1500 && time <= 1559) ||
     (time >= 1600 && time <= 1659) ||
     (time >= 1700 && time <= 1759)){
     console.log("Afternoon");
}

else if ((time >= 1800 && time <= 1859) ||
     (time >= 1900 && time <= 1959) ||
     (time >= 2000 && time <= 2059) ||
     (time >= 2100 && time <= 2159) ||
     (time >= 2200 && time <= 2259) ||
     (time >= 2300 && time <= 2359)){
     console.log("Evening");
}

else {
     console.log("Not a Valid Time");
}

// 6. Create a switch statement for the variable `day`. Print a message based on the day of the week.

let day = 'Saturday';

switch (day){
     case 'Monday':{
          console.log("Monday");
          break;
     }  
     case 'Tuesday':{
          console.log("Tuesday");
          break;
     }
     case 'Wednesday':{
          console.log("Wednesday");
          break;
     }
     case 'Thursday':{
          console.log("Thursday");
          break;
     }     
     case 'Friday':{
          console.log("Friday");
          break;
     }     
     case 'Saturday':{
          console.log("Saturday");
          break;
     }     
     case 'Sunday':{
          console.log("Sunday");
          break;
     }    
     default:{
          console.log("Not a Valid Day");
          break;
     }
}