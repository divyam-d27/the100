"use strict"; // ==>> strict mode

// =============================== 1
// const calcAge = function (birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName); // ==========> VARIABLE LOOKUP || firstName => not in current scope.
//   return age;
// };
// const firstName = "Divyam"; // firstName => in GLOBAL Scope
// calcAge(1995);
// console.log(age); // ERROR => Can't access variables of inner scope

// =============================== 2

// const calcAge = function (birthYear) {
//   const age = 2037 - birthYear;

//   const printAge = function () {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`; // looksup in parent scope..
//     console.log(output);
//   };

//   printAge();
//   return age;
// };
// const firstName = "Divyam";
// calcAge(1995);
// printAge(); // ERROR => Can't access variables of inner scope

// =============================== 3

// const calcAge = function (birthYear) {
//   const age = 2037 - birthYear;

//   const printAge = function () {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`; // looksup in parent scope..
//     console.log(output);

//     // creating a block scope.
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       const firstName = "DUBEY";

//       const str = `Oh, and you're a millenial, ${firstName}`; // =>> finds 'firstName in current scope, no need for lookup
//       console.log(str);
//     }

//     // console.log(str); // ERROR => Can't access variables of inner scope
//     console.log(millenial); // ACCESSIBLE, because 'var' is function scoped. || 'printAge' is its scope.
//   };

//   printAge();
//   return age;
// };
// const firstName = "Divyam";
// calcAge(1995);

// =============================== 4

const calcAge = function (birthYear) {
  const age = 2037 - birthYear;

  const printAge = function () {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // looksup in parent scope..
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Dubey";

      //Reassigning outer scope's variable
      output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // functions are block scoped, in strict mode.
      function add(a, b) {
        return a + b;
      }
    }
    console.log(add(2, 3)); // function are also block scoped(only in strict mode)

    console.log(output); // value re assigned of variable from  parent scope.
  };

  printAge();
  return age;
};
const firstName = "Divyam";
calcAge(1995);
