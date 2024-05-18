"use strict";
// ========================== When the data is already Known

// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // Array constructor

// ========================== Generating Arrays PROGRAMMATICALLY

// ===>>> 1. Array Constructor Function <<<===

// EMPTY arrays + FILL method

const x = new Array(7); // only one "NUMBER" argument ===> an "empty" array of that length
// console.log(x);

// we can't use the EMPTY array for ANYTHING...
// example..
// console.log(x.map(() => 5)); // nothing happens

// ==>>> fill() ==>> only working method on an empty array

// x.fill(1); // entire array is filled with 1
// x.fill(1, 3); // fill 1, starting at index '3'
// x.fill(1, 3, 5); // end at index '5'
// console.log(x);

// can be used on regular arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 2, 6); // fill 23 from index 2 to 5 !! index 6 is not included!
console.log(arr); // ==>> ⚠️ MUTATES the Original Array
