// Having a look at DOCUMENT object
// console.log(document);

// ================================================================== DOM Manipulation

// selecting the element === 1
// const messageElement = document.querySelector(".message"); // using class name
// console.log(messageElement);
// console.log(messageElement.textContent); // to get its text content

// // Manipulating its value
// messageElement.textContent = "Correct Number!";
// console.log(messageElement.textContent);

// document.querySelector(".score").textContent = 13;

// // selecting input and logging its value.
// console.log(document.querySelector(".guess").value);

// // modifying the input value.
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// let secretNumber = Math.trunc(Math.random() * 20) + 1; // to generate a random number from 1 to 20.
// console.log(secretNumber);
// document.querySelector(".number").textContent = secretNumber; // updating the number box with random number

// ================================================================== EVENTS

// selecting the target element
const checkBtn = document.querySelector(".check");
// console.log(checkBtn);

// adding "Event Listener" & listening to 'click' event

checkBtn.addEventListener("click", function () {
  console.log("Check button just got clicked!");
});

// adding "Event Listener" on whole document, and listening to KEYSTROKES.

// Which key was pressed ?
// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });

// seperate functions can be made to use as callbacks.

// a function to generate random number between 0 to 255.
const randomNumberGenerator = () => Math.trunc(Math.random() * 256);

// a function to display random number
const numBox = function () {
  document.querySelector(".number").textContent = randomNumberGenerator();
};

// a function to randomly change body background color
const bgChange = function () {
  // selecting 'body' element and changing its background color
  document.body.style.backgroundColor = `rgb(
    ${randomNumberGenerator()},${randomNumberGenerator()},${randomNumberGenerator()}
  )`;
};

// we can add multiple 'addEventListener' method to an element
// checkBtn.addEventListener("click", numBox);
// checkBtn.addEventListener("click", bgChange);
// for different event
// checkBtn.addEventListener("mouseover", bgChange);

// Event Handler Properties

// some elements have special 'event handler properties' to handle certain events

// checkBtn.onclick = bgChange;
// checkBtn.onclick = numBox;
// But we can't add multiple event handlers, like we did in 'addEventListener'.

// we also have 'Inline event listener' => adding event listener as an attribute in HTML.
