// ======================================== PROTOTYPES

// CONSTRUCTOR FUCNTION
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// defining method
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// defining property
Person.prototype.species = "Homo Sapiens";

const divyam = new Person("Divyam", 2000); // instance of Person constructor

// ======================================== PROTOTYPAL INHERITANCE: BUILT-IN objects

// console.log(divyam.__proto__); // Person.prototype
// console.log(divyam.__proto__.__proto__); // "Object.prototype" (top of prototype chain)
// console.log(divyam.__proto__.__proto__.__proto__); // null

// PROTOTYPE of ARRAY

// const arr = [1, 2, 3, 4, 5, 5, 7, 7, 9, 1]; // same as "new Array() === []"
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); // true || "Array" => constructor function
// console.log(arr.__proto__.__proto__); // "Object.prototype"

// // Creating our own array method
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr);
// console.log(arr.unique()); // unique elements
// ⚠️ EXTENDING prototype of a built-in object, is not a good idea

// ============== Prototype chain of a DOM element

// const h1 = document.querySelector("h1");
// console.log(h1);
// console.log(h1.__proto__); // => prototype = "HTMLHeadingElement"
// console.log(h1.__proto__.__proto__); // => prototype of "HTMLHeadingElement" => "HTMLElement"
// console.log(h1.__proto__.__proto__.__proto__); // => prototype of "HTMLElement" => "Element"
// console.log(h1.__proto__.__proto__.__proto__.__proto__); // => prototype of "Element" => "Node"
// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__); // => prototype of "Node" => "Event Target"
// console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); // => prototype of "Event Target" => "Object"

// ============== Prototype chain of a function

const someFunc = (x) => x + 1;
console.log(someFunc.__proto__ === Function.prototype); // true
console.dir(someFunc.__proto__.__proto__); // Object.prototype
