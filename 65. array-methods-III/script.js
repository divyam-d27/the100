"use strict";

// ===================================== ARRAY Methods

// const arr = [200, 450, 400, 3000, 650, -130, 70, 1300];
// console.log(arr);

// =============== find() & findIndex()

// const resultEl = arr.find((el) => el > 1000);
// console.log(resultEl); // first Element to satisfy the condition

// const resultEl = arr.findIndex((el) => el > 1000);
// console.log(resultEl); // INDEX of first Element to satisfy the condition

// =============== some() & every()

// const result = arr.some((mov) => mov < 0);
// console.log(result); // "true" ==> ANYONE element satisfy the condition

// console.log(arr.every((mov) => mov > 0)); // ALL element must satisfy

// =============== flat()
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8]; // 1 level deep nested
// console.log(arr.flat()); // removes the nested array, and flatened the array

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat()); // "flat" only goes ONE LVL deep || "depth argument" is solution..
// console.log(arrDeep.flat(2)); // depth ===>> 2

// =============== flatMap()

const arr1 = [1, 2, 1];
// using "map()"
// const result = arr1.map((num) => (num === 2 ? [2, 2] : 1)); // return [2,2], if element is 2

// using "flatMap()"
const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1)); // return [2,2], if element is 2

console.log(result); // flattened array
