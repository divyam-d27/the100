// =========================================== Type Conversion (numbers and strings)
// type conversion is done maually

// const inputYear = "2002";

// console.log(typeof inputYear); // a string

// console.log(typeof Number(inputYear)); // converted to a number

// console.log(Number(inputYear), inputYear); // number string

// console.log(inputYear + 18); // 200218 => a string, because inputYear originally still have string value.

// console.log(Number(inputYear) + 18); // 2020 a number

// console.log(Number("Divyam")); // it will give Nan (invalid number.., not actually 'not a number')
// console.log(typeof NaN); // its a special kind of number.
// console.log(String(23)); // Number to string

// =========================================== Type Coercion (numbers and stings)
// type coercion is automatic

// console.log("I'm " + 23 + " years old ");
// // an operator with two diff value types, '+' operation converts number to string

// console.log("23" - "10" - 3); // 10 a number
// // '-' operation triggers string to number

// console.log("23" + "10" + 3); // 23103 a string
// // on adding using '+' the three strings are concatenated

// // string to number for rest of the operators
// console.log("23" * "2"); // it will result in 46, because * operator can only work in this way, same for /
// console.log("23" / "2");
// console.log("23" > "2");

// // '+' is the only operator where numbers are converted to string

// let n = "1" + 1; // 11 a string
// n = n - 1; // 11 - 1 = 10 a number
// console.log(n); // 10

// n = 2 + 3 + 4 + "5";
// console.log(n); // 95 a string

// n = "10" - "4" - "3" - 2 + "5"; // 1 + '5'
// console.log(n); // 15 a string

// =========================================== Equality and Inequality Operators

// console.log("18" === 18); // false | strict check
// console.log("18" == 18); // true | loose check => type coercion.

console.log("=== STRICT INEQUALITY ===");
if ("20" !== 20) {
  console.log("20 as a STRING");
} else {
  console.log("20 as a NUMBER");
}

console.log("=== LOOSE INEQUALITY ===");
if ("20" != 20) {
  console.log("20 as a STRING");
} else {
  console.log("20 as a NUMBER");
}
