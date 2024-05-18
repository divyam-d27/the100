"use strict";

// ===================================== ARRAY Methods

// =============== sort() ==>> Does sorting based on "STRINGS"

// >>>> Strings
const owners = ["Arya", "Smith", "Adam", "Divyam", "Pratishtha"];
// console.log(owners.sort()); // ==>> in Alphabetical order
// console.log(owners); // ==>> ⚠️ MUTATED

// >>>> Numbers
const arr = [200, 450, -400, 3000, -650, -130, 70, 1300, ...owners];
// const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(arr.sort()); // NOT the result we expected!!
// because, "sort()", does sorting based on STRING || these numbers were first converted to STRING before sorting.

// >>>> SOLUTION for sorting NUMBERS || "compareFn" => callback Function. || must alway return a NUMBER

// arr.sort((a, b) => {
//   // a , b ==> two CONSECUTIVE elements
//   if (a > b) return 1; // "SWITCH" the order || return > 0 || b , a
//   if (a < b) return -1; // "KEEPS" the order || return < 0 || a , b
// });

arr.sort((a, b) => a - b); // same thing using ARROW function

console.log("-----ASCENDING ORDER-----");
console.log(arr);

// arr.sort((a, b) => {
//   if (a > b) return -1; // it "KEEPS" the order || return < 0
//   if (a < b) return 1; // it "SWITCH" the order || return > 0
// });

// arr.sort((a, b) => b - a); // with ARROW function

// console.log("-----DESCENDING ORDER-----");
// console.log(arr);
