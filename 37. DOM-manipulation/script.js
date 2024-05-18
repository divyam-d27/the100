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

let secretNumber = Math.trunc(Math.random() * 20) + 1; // to generate a random number from 1 to 20.
console.log(secretNumber);
document.querySelector(".number").textContent = secretNumber; // updating the number box with random number
