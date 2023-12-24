// JavaScript Fundamentals - Day 20: Assignment

// Task 1: Selecting Elements

// 1. Create an HTML document with various elements, including headings, paragraphs, and divs.
// 2. Use JavaScript to select and log the following elements to the console:

//    a. All paragraphs on the page using `getElementsByTagName`.

const elementParagraph = document.getElementsByTagName("p");
console.log("<p> Elements : ", elementParagraph);

//    b. All elements with the class "info" using `getElementsByClassName`.

const elementInfo = document.getElementsByClassName("info");
console.log(".info Elements: ", elementInfo);

//    c. The element with the ID "header" using `getElementById`.

const elementHeader = document.getElementById("header");
console.log("#header Elements:", elementHeader);

//    d. The first element with the class "highlight" using `querySelector`.

const elementHighlight = document.querySelector(".highlight");
console.log(".highlight Element", elementHighlight);

// Task 2: Modifying Elements

// 3. Change the text content of the second paragraph to "This paragraph is now updated!".
// 4. Change the background color of the div with the ID "header" to a different color of your choice.

elementParagraph[1].textContent = "This paragraph is now updated!";
elementHeader.style.backgroundColor = "#b3cccc";

// Task 3: Creating and Appending Elements

// 5. Create a new `h3` element with the text "New Section" using `document.createElement`.
// 6. Append the newly created `h3` element to the end of the body of the HTML document.

const header3 = document.createElement("h3");
header3.textContent = "New Section";
document.body.appendChild(header3);

// Task 4: Removing Elements

// 7. Remove the first paragraph from the document.

elementParagraph[1].remove();

// Task 5: Handling Events

// 8. Add a click event listener to the div with the ID "header" that logs "Header clicked!"
// to the console when clicked.

elementHeader.addEventListener("click", function(){
     console.log("Header clicked!");
});

// Task 6: Advanced Element Manipulation

// 9. Create an array of colors.
// 10. Use a loop to iterate over all paragraphs and assign a different background color from the array to each paragraph.

const arrColors = ['#bf7e7e', '#bfb27e', '#7ebf90', '#7e88bf', '#aa7ebf'];

for(let i=0; i<elementParagraph.length; i++){
     elementParagraph[i].style.backgroundColor = `${arrColors[i]}`;
}

// *These tasks will help you practice selecting, modifying, creating, and removing elements from the DOM using JavaScript. Good luck! 🌐*
