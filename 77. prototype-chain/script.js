// ======================================== PROTOTYPE CHAIN

// CONSTRUCTOR FUCNTION
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const divyam = new Person("Divyam", 2000);
console.log(divyam); // instance of Person constructor

// Defining Properties on the Constructor's Prototype property
Person.prototype.species = "Homo Sapiens";

// console.log(divyam); // "species" property inside '__proto__'
// console.log(divyam.species); // INHERITED from Prototype

// hasOwnProperty() Defined in ==>> Object.prototype ==>> NOT in Person.prototype ==> NOT in divyam object.
// divyam "Inherits" hasOwnProperty()
// console.log(divyam.hasOwnProperty("firstName"));
// console.log(divyam.hasOwnProperty("species"));

// Prototype of divyam object ==>> Person.prototype
console.log(divyam.__proto__);
console.log(divyam.__proto__ === Person.prototype); // true
console.log("=====================");

// Prototype of Person.prototype ==>> Object.prototype
console.log(divyam.__proto__.__proto__);
console.log(divyam.__proto__.__proto__ === Object.prototype);
console.log("=====================");

// Prototype of Object.prototype ===>> null
console.log(divyam.__proto__.__proto__.__proto__);

// ==>>> PROTOTYPE CHAIN !!