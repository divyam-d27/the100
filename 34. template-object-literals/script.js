// =========================================== Template Literals

const firstName = "Divyam";
const job = "student";
const birthYear = 2000;
const year = 2020;
// global variables

// oldr way of writing string with an expression
// const divyam =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(divyam);

//here we enclosed year-birthYear in paranthesis (), due to type coercion

// const divyamNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // this is template literal, an easy way of writing above combination of strings
// console.log(divyamNew);

// console.log(`I'm ${2020 - 2000} years old ${if (23 > 10) {
//   const str = '23 is bigger';
// }}`);
// an error because we can only use some 'expression', not 'statements'

// =========================================== Enhanced Object Literals

let dogName = "Duke";
let color = "Brown";
let age = 5;
const bark = function () {
  console.log("Woof! Woof!");
};
// Global variables.

let dog = {
  dogName,
  color,
  age,
  bark,
  // all global variables collected in the object, 'property name must be the same'.

  barkWithName() {
    console.log(
      `Woof Woof!!, I am ${this.dogName} and I am a ${this.age} years old, ${this.color} coloured dog. Woof Woof!`
    );
  },
  // without using 'function' keyword.

  // older way of writing method with 'function' keyword
  // barkWithName: function () {
  //   console.log(
  //     `Woof Woof!!, I am ${this.dogName} and I am a ${this.age} years old, ${this.color} coloured dog. Woof Woof!`
  //   );
  // },
};
console.log(dog);

dog.bark();
dog.barkWithName();
