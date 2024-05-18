// =========================================== For loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}.`);
// }

// an array with different values.
// const divyam = [
//   "Divyam",
//   "Dubey",
//   2020 - 2000,
//   "developer",
//   ["Michael", "Peter", "Steve"],
//   true,
// ];

// using for-loop to iterate over an array

// for (let i = 0; i < divyam.length; i++) {
//   console.log(divyam[i], typeof divyam[i]);
// }

// =========================================== For-of loop

// iterating over elements of an array

// for (let div of divyam) {
//   console.log(div);
// }

// =========================================== For-in loop

// iterating over properties of an object

// const divObj = {
//   fname: "Divyam",
//   lname: "Dubey",
//   age: 23,
//   friends: ["Michael", "Peter", "Steve"],
//   hasPassport: true,
// };

// for (let property in divObj) {
//   console.log(property, divObj[property]); // divObj.property => undefined
//   // [] => expects an expression.
// }

// =========================================== forEach loop
// a method on array, executes a function on each element of the array

// const arr = [2, 34, 25, 47, 101];

// arr.forEach((el) => {
//   console.log(el * 4);
// });

// =========================================== map loop
// a method on array, creates a new Array by transforming each element of the array

// const newArr = arr.map((el) => el * 2);
// console.log(newArr);

// =========================================== while loop  ==>> Entry control loop
// keeps on running until the condition is true

// let count = 1;
// while (count <= 5) {
//   console.log(count);
//   count++; // updating count by 1
// }

// =========================================== do-while loop ==>> Exit control loop
// will execute the code block atleast once, even if the condition is false.

let count = 10; // condition is already false.
do {
  console.log(count); // will get run atleast once
  count++;
} while (count <= 5);
