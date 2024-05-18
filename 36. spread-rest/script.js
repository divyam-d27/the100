// =========================================== SPREAD operator

// on arrays
// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr]; // spread operator(...) unpacking all elements || creating new array
// console.log(newArr);
// console.log(...newArr);

// const divyam = [
//   "Divyam",
//   "Dubey",
//   2020 - 2000,
//   "developer",
//   ["Michael", "Peter", "Steve"],
//   true,
// ];

// // joining two arrays
// const joinedArr = [...divyam, ...newArr];
// console.log(joinedArr);

// // SPEAD operator works on all iterables. (arrays,maps,strings,sets) and also on Objects (since es2018)
// const str = "Divyam";
// const letters = [...str, " ", "S"];
// console.log(letters); // we get an ARRAY

// on objects
const divObj = {
  fname: "Divyam",
  lname: "Dubey",
  age: 23,
  friends: ["Michael", "Peter", "Steve"],
  hasPassport: true,
};

// // creating a copy of object.
const divObjCopy = { ...divObj };
divObjCopy.hasPassport = false;
// console.log(divObjCopy.hasPassport);
// console.log(divObjCopy);
// console.log(divObj);

divObjCopy.friends.push("Chintu");
divObjCopy.friends.push("Bunty");
console.log(divObjCopy);
console.log(divObj);

// =========================================== REST operator

// // on arrays
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // collects rest of the elements ina anew array

// on object
// const divObj = {
//   fname: "Divyam",
//   lname: "Dubey",
//   age: 23,
//   friends: ["Michael", "Peter", "Steve"],
//   hasPassport: true,
// };

// const { fname, lname, ...otherDetails } = divObj;
// console.log(fname, lname);
// console.log(otherDetails); // collects rest of the object into another object.

// REST operator in function parameters

// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum); // will give sum of all numbers
// };
// this function can accept any number of parameters
// add(2, 3); // 5
// add(5, 3, 7, 2); // 17
// add(8, 2, 5, 3, 2, 1, 4); // 25
// // we will get arrays, they are packed by the REST'...'

// using spread to spread elements and passing as argument to the function.
// const x = [23, 5, 7];
// add(...x); // 35
// console.log(...x);
