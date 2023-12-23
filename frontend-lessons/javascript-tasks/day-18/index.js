// Working with Objects in JavaScript - Day 18: Assignment

// Task 1: Object Basics

// 1. Create an empty object named `book`.
// 2. Add properties to the `book` object for `title`, `author`, and `year` with appropriate values.
// 3. Access and print the `author` property of the `book` object.

const book = {
     title:    'Bakemonogatari',
     author:   'Nissio Issin',
     year:     2006,
};

console.log(`Book Author: ${book.author}`);

// Task 2: Object Operations

// 4. Create an object named `student` with properties for `name`, `age`, and `grade`.
// 5. Modify the `age` property of the `student` object to a different value.
// 6. Add a new property named `subjects` to the `student` object, which should be an array of at least three subjects.

const student = {
     name:     'Rein Andre',
     age:      20,
     grade:    90.00,
};

student.age = 19;

student.subjects = ['Mathematics', 'Science', 'History'];

console.log(student);

// Task 3: Object Methods

// 7. Create an object named `rectangle` with properties for `width` and `height`.
// 8. Add a method named `calculateArea` to the `rectangle` object that returns the area of the rectangle.
// 9. Invoke the `calculateArea` method and store the result in a variable, then print it to the console.

const rectangle = {
     width:    100,
     height:   200,

     calculateArea: function(width, height){
          return width * height;
     },
};

console.log(`Average: ${rectangle.calculateArea(rectangle.width, rectangle.height)}`);

// Task 4: Advanced Object Techniques

// 10. Create an object named `person` with properties for `name`, `age`, and `address`.
// 11. Use the `delete` keyword to remove the `address` property from the `person` object.
// 12. Create another object named `employee` with properties for `name` and `position`. 
//Combine the `person` and `employee` objects into a new object named `employeeDetails`.

const person = {
     name:     'Rein Andre',
     age:      19,
     address:  `Rodriguez, Rizal`,
};

delete person.address;
console.log(person);

const employee = {
     name:     'Rein Andre',
     position: 'Intern',
};

const employeeDetails = Object.assign({},person,employee);
console.log(employeeDetails);

// These tasks will enhance your understanding of working with objects in JavaScript. Objects are versatile and allow you to structure data in a meaningful way. Best of luck! 🌟

