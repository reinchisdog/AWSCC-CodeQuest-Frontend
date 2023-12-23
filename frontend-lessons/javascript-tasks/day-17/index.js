// Working with Arrays in JavaScript - Day 17: Assignment

// Task 1: Array Basics

// 1. Create an array named `cities` containing the names of five cities.
// 2. Access and print the third city in the `cities` array.
// 3. Modify the second city in the array to a different city of your choice.

const cities = ['New York', 'Tokyo', 'London', 'Manila', 'Paris'];

console.log(`Third City: ${cities[2]}`);

cities[1] = 'Osaka';
console.log(cities);

// Task 2: Array Operations

// 4. Create an array named `fruits` with at least three different fruits.
// 5. Add a new fruit to the end of the `fruits` array using the `push()` method.
// 6. Remove the last fruit from the array using the `pop()` method.
// 7. Use a loop to iterate through the `fruits` array and print each fruit to the console.

const fruits = ['Lemon', 'Lime', 'Orange'];

fruits.push('Melon');
console.log(fruits);

fruits.pop();
console.log(fruits);

for (let i=0; i<fruits.length; i++){
     console.log(fruits[i]);
}

// Task 3: Advanced Array Techniques

// 8. Create an array named `numbers` with five numeric values.
// 9. Use the `map()` method to create a new array where each number is multiplied by 2.
// 10. Use the `filter()` method to create a new array containing only the numbers greater than 5 from the original `numbers` array.

const numbers = [3, 5, 7, 2, 9];

const mapNumbers = numbers.map(function(number){
     return number * 2;
});
console.log(mapNumbers);

const filterNumbers = numbers.filter(function(number){
     return number > 5;
})
console.log(filterNumbers);

// Task 4: Array Manipulation

// 11. Create an array named `colors` with at least four different colors.
// 12. Add a new color to the beginning of the `colors` array using the `unshift()` method.
// 13. Remove the first color from the array using the `shift()` method.
// 14. Use the `slice()` method to create a new array containing the second and third colors from the original array.

const colors = ['Orange','Yellow','White','Black'];

colors.unshift('Gray');
console.log(colors);

colors.shift();
console.log(colors);

const sliceColors = colors.slice(1, 3);
console.log(sliceColors);

// Task 5: Array Splicing

// 15. Create an array named `characters` with at least six characters (strings).
// 16. Use the `splice()` method to insert two new characters at index 2 of the `characters` array.
// 17. Use the `splice()` method to remove three characters starting from index 4 of the `characters` array.

const characters = ['Kyoichiro', 'Futaba', 'Shinzo', 'Shion', 'Kengo', 'Mutsumi', 'Nanao'];

characters.splice(2, 0, 'Hifumi', 'Alpha');
console.log(characters);

characters.splice(4, 3);
console.log(characters);

// These tasks will help you strengthen your understanding of working with arrays in JavaScript. Arrays are powerful tools for managing and manipulating collections of data. Good luck! 🚀
