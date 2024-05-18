"use strict";

// ===================================== ARRAY Methods

const arr = [200, 450, -400, 3000];
console.log(arr);

// =============== concat()

// const divArr = ["Divyam", 23, "something"];
// // const newArr = arr.concat(divArr); // combining two arrays
// // console.log(newArr);

// const alphabets = ["a", "b", "c", "d"];
// const anotherArr = arr.concat(divArr, alphabets); // combining multiple arrays
// console.log(anotherArr);

// =============== join()

// const divArr = ["Divyam", 23, "something"];

// joins all the elements by the "seperator string"
// console.log(divArr.join());
// console.log(divArr.join(" - "));
// console.log(divArr.join("")); // empty str

// =============== at()

// console.log(arr.at(2)); // returns the element at that index
// console.log(arr.at(-1)); // last element ==> negative argument

// =============== forEach() ==>> looping arrays

arr.forEach(function (el, i, wholeArr) {
  console.log(`${el} is at index ${i}`);
});
// loops over each element of an array.
// el => current element
// i => current index
// wholeArr => entire Array on which "forEach" is called.
