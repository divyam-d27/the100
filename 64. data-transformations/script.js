"use strict";

// ===================================== ARRAY Methods

const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(arr);

// =============== map()

// const result = arr.map((el, i) => {
//   // must return from map

//   //   return el * 2;

//   //   return 45; // will return 45 for all elements

//   return `Transaction ${i + 1}: ${Math.abs(el)} ${
//     el > 0 ? "credited" : "debited"
//   }`;
// });
// console.log(result);

// =============== filter()

// const result = arr.filter((el) => el < 0);
// console.log(result); // returns an array of filtered elements

// =============== reduce() ===>> to a single value

// const balance = arr.reduce(function (acc, cur, i) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur; // must return to update "accumulator"
// }, 0);
// // 0 ==>> initial Value for accumulator

// console.log(balance);

// acc ==>> accumulator
// cur ==>> current element

const maxValue = arr.reduce((acc, curEl) => (acc > curEl ? acc : curEl)); // return "accumulator" or "current element"
console.log(maxValue);
