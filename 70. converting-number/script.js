// ======================================= CONVERTING Numbers

// console.log(23 === 23.0); // ==>> Numbers in JS are "floating-point-numbers"

// console.log(0.1 + 0.2); // NOT the Result we Expected || Conversion to BINARY!!

// console.log(0.1 + 0.2 === 0.3); // FALSE || It is IMPOSSIBLE to represent fraction in BINARY!!

// ============== Number to String

// ==>> using 'Number' object
// console.log(Number("23"));

// ==>> using ' + ' operator || type coercion
// console.log(+"23");

// ============== Parsing

// console.log(Number.parseInt("30px", 10)); // extract Number from string || 10 => RADIX (base of the numerical system)
// console.log(Number.parseInt("30px")); // RADIX (base of the numerical system) => DEFAULT is 10 (NOT ALWAYS!!)
// console.log(Number.parseInt("e23", 10)); // NaN, String does not start with a Number.

// can be used Without 'Number' Object

// console.log(parseInt("   123 ")); // 123 (whitespace is ignored)
// console.log(parseInt("077")); // 77 (leading zeros are ignored)
// console.log(parseInt("1.9")); // 1 (decimal part is truncated)
// console.log(parseInt("ff", 16)); // 255 (lower-case hexadecimal) || RADIX => 16 => Hexadecimal
// console.log(parseInt("0xFF", 16)); // 255 (upper-case hexadecimal with "0x" prefix)
// console.log(parseInt("xyz")); // NaN (input can't be converted to an integer)

// ==>> parseFloat
console.log(Number.parseFloat("2.5rem"));
console.log(Number.parseInt(" 2.5rem ")); // with parseInt
