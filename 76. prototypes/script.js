// ======================================== PROTOTYPES

// CONSTRUCTOR FUCNTION
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Method || Bad practice || It will get COPIED on all the instances!!

  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const divyam = new Person("Divyam", 2000);
// console.log(divyam); // instance of Person || method is "copied"

const arya = new Person("Arya", 2001);
const jack = new Person("Jack", 1975);
// console.log(arya, jack);

// divyam.calcAge();

// console.log(Person.prototype); // PROTOTYPE "property" of the constructor ===>> is the PROTOTYPE of all the instances

// Defining Method on the Constructor's Prototype property || ONLY SINGLE COPY
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// each instance will have access to it.

// console.log(Person.prototype);

// divyam.calcAge(); // we hav acces to "calcAge" due to "protoype inheritance"

// arya.calcAge();
// jack.calcAge();

// Checking prototype of an object.
// console.log(divyam.__proto__);

// prototype of an object is the "prototype property" of its constructor.
// console.log(divyam.__proto__ === Person.prototype); // true

// another way to check... using "isPrototypeOf()"
// console.log(Person.prototype.isPrototypeOf(divyam));
// console.log(Person.prototype.isPrototypeOf(arya));
// console.log(Person.prototype.isPrototypeOf(Person)); // FALSE || "Person.prototype" => NOT a prototype of Person (Constructor)

// Defining Properties on the Constructor's Prototype property
Person.prototype.species = "Homo Sapiens";

console.log(divyam, arya); // "species" property inside '__proto__'
// console.log(divyam.species, arya.species); // we can inherit them from prototype

// a check for inherited property
console.log(divyam.hasOwnProperty("firstName"));
console.log(divyam.hasOwnProperty("species")); // false => inherited..
