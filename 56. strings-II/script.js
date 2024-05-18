// ==================================== Methods that return BOOLEAN Value.

// THREE methods that return BOOLEAN
// ".includes()" // ".startsWith()" // ".endsWith()"

const plane1 = "Airbus A320neo";
// console.log(plane1.includes("A320")); // check
// console.log(plane1.includes("Boeing"));
// console.log(plane1.startsWith("Air"));
// console.log(plane1.endsWith("neo"));

// if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
//   // true
//   console.log("Part of the new Airbus family!");
// }

// An example
// const checkBaggage = function (item) {
//   const baggage = item.toLowerCase(); // ==>> To maintain consistency.
//   // const baggage = item; // CASE SENSITIVE
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board");
//   } else {
//     console.log("Welcome aboard!");
//   }
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife.");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// ======================================== SPLIT and JOIN

// console.log("a+very+nice+string".split("+"));
// // '+' is the divider string
// // it will split the string and store it into elements of new array

// console.log("Divyam Dubey".split(" ")); // ['Divyam', 'Dubey'] || split by White Space

// const [firstName, lastName] = "Divyam Dubey".split(" "); // destructure

// // JOIN
// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" "); // array.join(" ") || Join by 'White space'
// console.log(newName);
// // ".join()" is opposite of ".split()"

// // // an Example
// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   // now we loop over the "names" array

//   const namesUpper = [];

//   for (const n of names) {
//     // 1. Making First alphabet of each word UpperCase.
//     // 2. Storing (pushing) the result in an ARRAY

//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     // here we need to store "n[0].toUpperCase()+n.slice(1)" in an array, which latter can be joined using ".join()"

//     // Another Way
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   // 3. joining the resultant array.
//   console.log(namesUpper.join(" "));
// };

// capitalizeName("jessica ann smith davis");
// capitalizeName("divyam dubey");

// ======================================== PADDING

// const message = "Go to gate 23!";
// console.log(message.padStart(25, "+")); // pad at start

// console.log("Divv".padStart(25, "+").padEnd(30, "-"));

// ==================== real world exapmle
// const maskCreditCard = function (number) {
//   // 1. Convert Number to STRING

//   const str = String(number);
//   // const str = number + ""; // another way, Type COERCION

//   // 2. Extracting LAST 4 digits.

//   const last = str.slice(-4);

//   // 3. Masking with * || Same length
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(64647384));
// console.log(maskCreditCard("54654653784638646474565384"));

// REPEAT

// const message2 = "Bad weather... All Departures Delayed... ";
// console.log(message2.repeat(5));
// ".repeat()" takes number, of times we wnt to repeat as argument

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// ============================ WHY and HOW?

console.log(typeof new String("Divyam")); // Object || Behind-the-scenes
console.log(typeof new String("Divyam").slice(1)); // String || Back to Primitive after operation.
