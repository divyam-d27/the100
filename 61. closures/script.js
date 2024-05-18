// ===================================== CLOSURES

// Example 1:

// const secureBooking = function () {
//   let passengerCount = 0;

//   // returns a function
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking(); // 'booker' stores returned function
// // "secureBooking" execution context is GONE.

// // but still "booker" can access "passengerCount" variable. || CLOSURE!!
// booker();
// booker();
// booker();

// console.dir(booker);

// Example 2:
let f;

const g = function () {
  const a = 23;

  // assigning f a function value.
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;

  // re-assigning
  f = function () {
    console.log(b * 2);
  };
};

g();
// "g" execution context is popped off after "g" function executes.
f(); // but still "f" can access variable "a" inside "g".
console.dir(f);

// RE-ASSIGNED "f"
h();
f();
console.dir(f); // here the CLOSURE gets re-assined to the value of "b"
