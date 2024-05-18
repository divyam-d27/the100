// ============================================ STRINGS

// STRINGS are ZERO-based Iterable
const airline = "Air India";
const plane = "A320";

// console.log(plane[0]); // A
// console.log(plane[1]); // 3
// console.log(plane[2]); // 2

// console.log(airline[0]); // A
// console.log(airline[1]); // i
// console.log(airline[2]); // r

// console.log("B737"[0]); // B

// console.log(airline[3]); // "white space" is also counted

// ==================== length of String
// console.log(airline.length);
// console.log("B737".length);

// ==================== METHODS on strings

// console.log(airline.indexOf("i")); // first occurence of "i" in string
// console.log(airline.lastIndexOf("i")); // last occurence of "i" in string

// console.log(airline.indexOf("India")); // can also search for entire word
// console.log(airline.indexOf("india")); // we get, -1, as strings are 'case sensitive'

// // extract substring, using SLICE method
// console.log(airline.slice(4)); // "4" =>> position at which the "extraction" start

// console.log(airline.slice(4, 7)); // EXTRACTION starts at "4", ends at not "7" just before 7 i.e. 6, length of str=7-4

// console.log(airline.slice(0, airline.indexOf(" "))); // ===>>> EXTRACTING the FIRST word
// // here we set start to 0,  and end at the first occurence of (' ')

// console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // ===>> EXTRACTING the LAST word
// // for last word, we will start at last "space(' ')" + 1

// console.log(airline.slice(-2));
// // Extracting from "END of STRING"

// console.log(airline.slice(1, -1)); // start from Alphabet at FIRST INDEX and ends at the SECOND LAST alphabet
// ir Indi

// =============== a function to check for middle seat in a plane
// const checkMiddleSeat = function (seat) {
//   // B and E are middle seat
//   const s = seat.slice(-1);

//   // checking for last caharcter in seat number
//   if (s === "B" || s === "E") {
//     console.log("You got the middle seat 😑");
//   } else {
//     console.log("You got lucky 😎");
//   }
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// =============================== more METHODS

// ================== Fixing capitalizzation
// const passenger = "dIvyAm";
// const passengerLower = passenger.toLowerCase(); // divyam
// // console.log(passengerLower);
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1); // D + ivyam
// console.log(passengerCorrect);

// Comparing E-mail
// const email = "hello@divyam.io";
// const loginEmail = "  Hello@Divyam.Io \n";

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim(); // to remove unnecessary white-spaces
// // console.log(trimmedEmail);

// // we can do all of the above in single line.
// // Every STRING METHOD returns a STRING, therfore, we can CHAIN string methods
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// ================== REPLACING parts of STRING

// const priceGB = "288,97£";
// // const priceUS = priceGB.replace("£", "$");
// const priceUS = priceGB.replace("£", "$").replace(",", "."); // chaining
// console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23, Boarding door 23!";
console.log(announcement.replace("door", "gate")); // ONLY replaces the FIRST occurence

console.log(announcement.replaceAll("door", "gate")); // ES2020 =>> replaces all the occurences
