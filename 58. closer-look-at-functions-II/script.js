// ===================================== HIGH-ORDER FUNCTIONS

// ================= Accepting CALLBACKS

// const oneWord = function (str) {
//   return str.replaceAll(" ", "").toLowerCase(); // replaces all "white-spaces" with empty string.
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" "); // makes first word capitalize.
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`); // will return name of the function
// };
// // "transformer" ==>> HIGH-ORDER function.

// transformer("Javascript is the best!", upperFirstWord);
// transformer("Javascript is the best!", oneWord);
// "oneWord" and "upperFirstWord" ==>> CAllBACK functions.

// "transformer" higher-level abstraction, which don't know on there OWN WHAT TO DO

// ================= Returning FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey"); // RETURNS a function
// greeterHey("Divyam");
// greeterHey("Arya");

greet("Hello")("Dubey"); // all in one go || "greet('Hello')" is a 'function' itself
