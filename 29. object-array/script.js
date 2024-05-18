// OBJECTS ==========================

// console.log("=========OBJECTS========");

const obj = {
  string: "some string",
  num: 45,
  bool: true,
  // a method
  someFunction: function () {
    console.log("Method within obj Object");
  },
};

// console.log(obj);

// console.log(obj.string); // DOT
// console.log(obj["num"]); // BRACKET

// // adding new property
// obj.newProp = "Bracket notation can take expression";

// console.log(obj["new" + "Prop"]); // an expression evaluates to newProp

// // calling method
// obj.someFunction();

// ARRAYS ==========================

// console.log("=========ARRAYS========");

// const arr = ["element1", 45, true, obj];
// // const arr = new Array("element1", 45, true, obj);
// console.log(arr);

// console.log(arr[1]); // index of element

// arr.push("new element at end");
// console.log(arr);

// arr.pop(); // removes last element
// console.log(arr);

// arr.unshift("new element at start");
// console.log(arr);

// arr.shift(); // removes from front
// console.log(arr);

// console.log(arr.indexOf(obj)); // index of an element

// console.log(arr.includes(45)); // returns true or false

// console.log(arr.length); // length of array

// NESTED =================

// const testObj = {
//   a: 23,
//   b: "xyz",
//   // nested object
//   anotherObj: {
//     someMethod: function () {
//       console.log("method within Nested Object");
//     },
//   },
// };

// // using nested properties.
// testObj.anotherObj.someMethod();

const nestArr = [23, "abc", ["qwerty", 45]]; // multidimensional array
console.log(nestArr);
console.log(nestArr[2]);
console.log(nestArr[2][1]); // accessing elements of nested array
