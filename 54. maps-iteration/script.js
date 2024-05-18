// ========================================== MAPS

// populating MAP

const question = new Map([
  ["question", "What is the best programming language in the world?"], // [key , value]
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]); // an ARRAY of arrays.

console.log(question);

// ========================================== MAPS:ITERATION

// - Maps are Iterables

// console.log(question.get("question"));

// looping over map
// for (const [key, value] of question) {
//   // printing key as number entries
//   if (typeof key === "number") {
//     console.log(`Option ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt("Your Answer...")); // converting prompt STRING to NUMBER.
// // const answer = 3;
// console.log(answer);

// console.log(question.get(question.get("correct") === answer));
// question.get(3 === answer) ==>> question.get(true/false)

// ========================================== Convert OBJECT to MAP

// const divyam = {
//   firstName: "divyam",
//   lastName: "dubey",
//   job: "MERN Developer",
//   age: 27,
//   friends: ["Alice", "Bob"],
// };

// console.log(Object.entries(divyam)); // SIMILAR array

// const divMap = new Map(Object.entries(divyam));
// console.log(divMap); // Object to MAP

// ========================================== MAP to ARRAY
// we can do that - Building new ARRAY, and unpacking using ... SPREAD operator the Map
console.log([...question]); // an array of arrays.
console.log([...question.keys()]); // an array of only KEYS
console.log([...question.values()]); // an array of only values
