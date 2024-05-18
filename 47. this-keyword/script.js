"use strict"; // strict mode

// =============================================== THIS keyword

// =============================================== THIS in regular function call

// console.log(this); // in global scope, 'this' === 'window' object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // "this" === 'undefined' in strict mode || 'window object' otherwise
// };

// // simple function call
// calcAge(1991);

// =============================================== THIS in arrow function

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this); // 'lexical this' || 'this' === parent function or scope ( 'window' in this case)
// };
// calcAgeArrow(1980);

// =============================================== THIS in object method

const divyam = {
  year: 1991,
  calcAge: function () {
    console.log("OBJECT CALLING THE METHOD ==>>", this); // "this" ===  <object calling the method>
    console.log(2037 - this.year); // this.year ==>> 1991
  },
};
// divyam.calcAge();

// const steve = {
//   year: 2001,
// };

// steve.calcAge = divyam.calcAge; // copying 'calcAge' method from one object to another.

// steve.calcAge(); // 'this' === steve object || ==>> object calling the method

const f = divyam.calcAge; // again copying method.
f(); // 'this' === undefined || because f is just a regular function now.
