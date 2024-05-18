// ======================================= Math & Rounding

// sqrt()
// console.log(Math.sqrt(25)); // 5

// Exponentiation Operator(**)
// console.log(25 ** (1 / 2)); // square root
// console.log(125 ** (1 / 3)); // cubic root ONLY WAY.

// max() and min()
// console.log(Math.max(5, 18, 23, 11, 2)); // to find max.
// console.log(Math.max(5, 18, "23", 11, 2)); // does "type coercion"
// console.log(Math.max(5, 18, "23px", 11, 2)); // NaN || doesn't do "parsing"

// console.log(Math.min(5, 18, 23, 11, 2)); // to find min.

// Mathematical constants on Math namespace.
// console.log(Math.PI); // pi
// console.log(Math.E); // euler's number
// console.log(Math.LN10); // Natural log of 10

// ROUNDING integers

// rounding to "nearest" integer
// console.log("---round---");
// console.log(Math.round(20.3)); // 20
// console.log(Math.round(20.9)); // 21
// // rounding "up"
// console.log("---ceil---");
// console.log(Math.ceil(20.3)); // 21
// console.log(Math.ceil(-7.004)); // -7
// // rounding "down"
// console.log("---floor---");
// console.log(Math.floor(20.3)); // 20
// console.log(Math.floor(-7.004)); // -8

// all of them do => Type Coercion

// console.log(Math.trunc(23.3)); // when dealing with +ve num, works same as "floor"
// console.log(Math.trunc(-20.3)); // -20 || removes only decimal part
// console.log(Math.floor(-20.3)); // -21 // round "down"

// Rounding DECIMALS (i.e. floating point numbers)

// console.log((2.7).toFixed(0)); // 3 || ".toFixed('number of digits we want after decimal')" || 0 ==> no decimal part
console.log((2.7).toFixed(3)); // 2.700 || 3 ==> decimal part
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.345).toFixed(2)); // 2.35 converted to a num
