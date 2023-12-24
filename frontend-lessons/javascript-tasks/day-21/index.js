// JavaScript Fundamentals - Day 21: Assignment

// Task 1: Adding Attributes

// 1. Create an HTML document with an anchor (`<a>`) element with the id "myLink" and the text "Click me".

// 2. Use JavaScript to perform the following tasks:

//    a. Add a `target="_blank"` attribute to the anchor element using the `setAttribute` method.

//    b. Log the updated anchor element to the console.

const myLink = document.getElementById('myLink');
myLink.setAttribute('target', '_blank');
console.log(myLink);

// Task 2: Adding Class Using `classList`

// 3. Create an HTML document with a `<div>` element with the id "myDiv1" and the text "This is a div".

// 4. Use JavaScript to add the class "highlight" to the `<div>` element using the `classList` property.

const myDiv1 = document.getElementById('myDiv1');
myDiv1.classList.add('highlight');
console.log(myDiv1);

// Task 3: Removing Class Using `remove`

// 5. Create an HTML document with a `<div>` element with the id "myDiv2" and the class "highlight".

// 6. Use JavaScript to remove the class "highlight" from the `<div>` element using the `classList` property.

const myDiv2 = document.getElementById('myDiv2');
myDiv2.classList.remove('highlight');
console.log(myDiv2);

// Task 4: Adding Text to HTML Element

// 7. Create an HTML document with a `<p>` element with the id "myParagraph" and any initial text content.

// 8. Use JavaScript to change the text content of the `<p>` element to a new value.

const myParagraph = document.getElementById('myParagraph');
myParagraph.textContent = "This is a New Paragraph";

// Task 5: Adding Styles to HTML Elements in JavaScript

// 9. Create an HTML document with a `<p>` element with the id "myParagraph" and any initial text content.

// 10. Use JavaScript to perform the following tasks:

//     a. Set the text color of the `<p>` element to "red".

//     b. Set the background color of the `<p>` element to "lightgray".

//     c. Set the font size of the `<p>` element to "18px".

myParagraph.style.color = "red";
myParagraph.style.backgroundColor = "lightgray";
myParagraph.style.fontSize = "18px";

// *These tasks will help you practice selecting and modifying elements in the DOM using various JavaScript methods. Good luck! 🚀*
