// ====================================== PRIMITIVES v/s OBJECTS

// ====================================== PRIMITIVES types

// let lastName = "Williams"; // points to a memory address, which stores the assigned value

// let oldLastName = lastName; // will point to the same MEMORY ADDRESS as 'lastName'

// lastName = "Davis"; // a new memory will be allocated which will store the new value.

// console.log(lastName, oldLastName);

// ====================================== REFERENCE Types

// const origDivyam = {
//   firstName: "divyam",
//   lastName: "dubey",
//   age: 27,
// };

// const copyDivyam = origDivyam; // NOT the actual copy || NEW variable with same memory.

// copyDivyam.age = 30; // changing age in copied object.
// console.log("Copy Divyam ===>>>", copyDivyam);

// console.log("Original Divyam ===>>>", origDivyam); // original object also gets mutated

// ====================================== COPYING OBJECTS

const origDivyam = {
  firstName: "divyam",
  lastName: "dubey",
  job: "MERN Developer",
  age: 27,
  friends: ["Alice", "Bob"], // array are special object
};

const copyDivyam = Object.assign({}, origDivyam); // will merge two objects and result in new object.
// console.log("Copy Divyam ===>>>", copyDivyam); // same as original

copyDivyam.job = "Teacher";
// console.log("Copy Divyam ===>>>", copyDivyam);

// console.log("Original Divyam ===>>>", origDivyam); // now we can preserve original object

// adding new friends in copyDivyam.
copyDivyam.friends.push("Mary");
copyDivyam.friends.push("John");

// console.log("Copy Divyam ===>>>", copyDivyam);

console.log("Original Divyam ===>>>", origDivyam); // nested objects got mutated.
// Nested or inner objects does NOT get copied, they still point to the original memory
