// Event Listeners: Assignment Day 23

// Task 1: Click Event Listener

// 1. Create an HTML document with a button element:

// 2. Use JavaScript to select the button element by its ID and attach a click event listener to it.

// 3. In the event listener, display an alert with the message "Button clicked!" when the button is clicked.

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function(event){
     alert('Button clicked!');
});

//  Task 2: Double-Click Event Listener

// 4. Extend the HTML document from Task 1 by adding a second button:

// 5. Use JavaScript to select the new button element and attach a double-click event listener to it.

// 6. In the event listener, display an alert with the message "Button double-clicked!" when the button is double-clicked.

const doubleClickButton = document.getElementById('doubleClickButton');

doubleClickButton.addEventListener('dblclick', function(event){
     alert('Button double-clicked!');
});

//  Task 3: Mouseenter Event Listener

// 7. Further extend the HTML document from Task 2 by adding a third button:

// 8. Use JavaScript to select the new button element and attach a mouseenter event listener to it.

// 9. In the event listener, change the background color of the button to a different color when the mouse enters the button.

// 10. Test each button to ensure that the respective event listener responds correctly to user interactions.

const mouseenterButton = document.getElementById('mouseenterButton');

mouseenterButton.addEventListener('mouseenter', function(event){
     mouseenterButton.style.backgroundColor = 'red';
});

//  Task 4: Keypress Event Listener

// 11. Create an HTML document with an input element:

// 12. Use JavaScript to select the input element by its ID and attach a keypress event listener to it.

// 13. In the event listener, log the pressed key to the console using `console.log()`.

// 14. Test the input field by typing to see the keypress events logged in the console.

const myInput = document.getElementById('myInput');

myInput.addEventListener('keypress', function(event){
     console.log(event.key);
});

// *Feel free to customize the messages and actions in the event listeners based on your preferences. This assignment will help you practice working with various event listeners in JavaScript. Good luck! 🚀*

