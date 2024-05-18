"use strict";

// ===================================== ARRAY Methods

const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(arr);

// =============== push()

// arr.push("csk");
// arr.push("rcb");
// arr.push("mi");

// const returnValue = arr.push("555");
// console.log(returnValue); // Length of new array

// console.log(arr); // ==>> MUTATE ⚠️

// =============== pop()

// const returnValue = arr.pop(); // 1300
// console.log(returnValue); // removed element from END

// arr.pop(); // 70
// arr.pop(); // -130
// arr.pop(); // -650
// console.log(arr); // ==>> MUTATE ⚠️

// =============== unshift()

// const returnValue = arr.unshift("something"); // add to START
// console.log(returnValue); // Length of new array

// console.log(arr); // ==>> MUTATE ⚠️

// =============== shift()

// const returnValue = arr.shift(); // 200
// console.log(returnValue); // removed element from START

// arr.shift(); // 450
// arr.shift(); // -400
// arr.shift(); // 3000
// console.log(arr); // ==>> MUTATE ⚠️

// =============== includes()

// console.log(arr.includes(-650)); // true
// console.log(arr.includes(-650, 5)); // false || index at which to start searching

// =============== slice()

// console.log(arr.slice(2)); // from 2nd index till end
// console.log(arr.slice(2, 5)); // from 2nd index till 4th index.... 5th not included
// console.log(arr.slice(-1)); // last element
// console.log(arr.slice(2, -1)); // from 2nd index till second last element(last element not included).

// console.log(arr); // ==>> NOT mutated

// =============== splice()

// const returnValue = arr.splice(2); // start removing elements from 2nd index till END
// console.log(returnValue); // array of removed elements
// console.log(arr); // ==>> MUTATE ⚠️

// arr.splice(2, 5); // number of elements to remove from 2nd index || remove 5 elements from 2nd index
// console.log(arr);

// arr.splice(2, 3, "new1", "new2", "new3"); // add new elements from 2nd index.
// console.log(arr);

// =============== reverse()

const returnValue = arr.reverse();
console.log(returnValue); // returns Reversed Array
console.log(arr); // ==>> MUTATE ⚠️
