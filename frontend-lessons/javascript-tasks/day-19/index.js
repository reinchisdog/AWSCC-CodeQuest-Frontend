// Working with JSON in JavaScript - Day 19: Assignment

// Task 1: JavaScript to JSON

// 1. Create a JavaScript object named `product` with properties for `name`, `price`, and `quantity`.
// 2. Use the `JSON.stringify()` method to convert the `product` object into a JSON string.
// 3. Print the resulting JSON string to the console.

const product = {
     name:     'Nike Shoes',
     price:    5000.00,
     quantity: 120,
};

const productJSON = JSON.stringify(product);

console.log(productJSON);

// Task 2: JSON to JavaScript

// 4. Create a JSON string representing a book with properties for `title`, `author`, and `publishedYear`.
// 5. Use the `JSON.parse()` method to convert the JSON string into a JavaScript object.
// 6. Access and print the `author` property of the resulting JavaScript object.

const stringJSON = '{"title":"Kizumonogatari","author":"Nission Issin","publishedYear":2008}';

const string = JSON.parse(stringJSON);
console.log(string.author);

// Task 3: Advanced JSON Operations

// 7. Create an array of objects, each representing a person with properties for `name`, `age`, and `city`.
// 8. Use `JSON.stringify()` to convert the array of objects into a JSON string.
// 9. Use `JSON.parse()` to convert the JSON string back into an array of objects.
// 10. Print the `name` and `city` of each person in the array to the console.

const obj = [
     {
          name:     'Warwick Badminton',
          age:      23,
          city:     'Brighton',   
     },
     {
          name:     'Eric Robbins Jr.',
          age:      27,
          city:     'Austin',   
     },
     {
          name:     'Rafael Nikita',
          age:      25,
          city:     'London',   
     },
];

const objJSON = JSON.stringify(obj);
console.log(obj);

JSON.parse(objJSON);

for (let i=0; i<obj.length; i++){
     console.log(`Name: ${obj[i].name}   City: ${obj[i].city}`);
}
