"use strict"; // => strict mode active
// ========================================== Regular vs. Arrow FUNCTION

// var firstName = "steve"; // this will create property in "window object" || BUG

// const divyam = {
//   firstName: "Divyam",
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // inside method || "this" ==> Object calling the method.
//     console.log(2037 - this.year);
//   },

//   // an arrow function as METHOD
//   greet: () => {
//     // console.log(this);
//     console.log(`Hey ${this.firstName}`); // undefined. || window.firstNAme === undefined
//   },
// };

// divyam.greet();

// console.log(this); // window
// console.log(this.firstName); // steve

// Hence we should avoid using Arrow function as method.

// ==========================================

const divyam = {
  firstName: "Divyam",
  year: 1991,
  calcAge: function () {
    // console.log(this); // "this" points to the object that is calling the method.
    // console.log(2037 - this.year);

    // Regular Fucntion inside a method.

    // const self = this; // a work around this problem, before ES6. || storing value of 'this'
    // const isMillenial = function () {
    //   console.log(self); // now it will be Object CALLING the method.

    //   // console.log(this);  // inside regular function "this" is undefined
    //   // console.log(this.year >= 1981 && this.year <= 1996);

    //   console.log(self.year >= 1981 && self.year <= 1996); // now self is refered here, following scope chain, if it isnt here, JS will lookup to parent scope, calcAge, self defined to this
    // };

    // Using ARROW function for the same problem.

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }; // this works as arrow doesn't hav its own "this", it uses parents "this"

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

divyam.calcAge();
