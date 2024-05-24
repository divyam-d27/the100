// ======================================= BigInt (ES2020)

// Max INTEGER
// console.log(2 ** 53 - 1); // base 2 || 53 bits || Max number that JS can represent
// console.log(Number.MAX_SAFE_INTEGER); // in 'Number' namespace

// larger Integer ==> UNSTABLE
// console.log("---UNSTABLE---");
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 0);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);
// console.log(2 ** 53 + 7);
// Lost Precission

// console.log(2465654651316543546316435465165454613565n); // BigInt

// console.log(BigInt(9007199254740991)); // BigInt constructor
// console.log(BigInt(9007199254740992));
// console.log(BigInt(9007199254740993)); // only be used with numbers <= (2⁵³ - 1)
// console.log(BigInt(2465654651316543546316435465165454613565)); // Not Accurate

// OPERATIONS w/ BigInt

// operators works the same..
// console.log(10000n + 10000n); // Both operands ==>> BigInt
// console.log(2465654651316543546316435465165454613565n * 100000n);

// we can't "mix" BigInt with regular numbers..

const huge = 2465654651316543546316435n;
// const num = 100;
// console.log(huge * num); // error || solution => "BigInt" constructor
// console.log(huge * BigInt(num));

// 'Math' Operations

// console.log(Math.sqrt(16n)); // error

// exceptions => + and Comparison operators (>, <, >=, <=, ==, !=, ===, !==)

// console.log(20n > 15); // true
// console.log(20n === 20); // false || Different type
// console.log(typeof 20n); // BigInt
// console.log(20n == 20); // true, "loose equality"
// console.log(20n == "20"); // true, "loose equality"

// console.log(huge + "is really big"); // "bigint" number converted to string

// Divisions

console.log(10n / 3n); // cuts the decimal part
console.log(10 / 3);
