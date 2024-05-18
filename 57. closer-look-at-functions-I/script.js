// ================================ DEFAULT PARAMETERS

// const bookings = []; // an empty array

// const createBooking = function (
//   flightNum,
//   numPassengers = 1, // default value
//   price = 199 * numPassengers // must be defined in order
// ) {
//   // new object
//   const booking = {
//     // ENHANCED object literal
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking); // populating the empty array.
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

// createBooking("LH123", undefined, 1000); // use "undefined" to SKIP a Parameter.

// ================================ Value vs. Reference

const flight = "LH234";
const divv = {
  name: "Divyam Dubey",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999"; // updating parameter
  passenger.name = "Mr. " + passenger.name; // updating a property value

  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, divv);
// console.log(flight); // PRIMITIVE type ==>> NO CHANGE

// console.log(divv); // REFERENCE type ==>> GOT MANIPULATED !!

// PRIMITIVE =>> creating a copy
// OBJECT =>> referencing

const newPassport = function (person) {
  // changing the passport number
  person.passport = Math.trunc(Math.random() * 1000000000);

  // this will mutate the original value in "divv" object.
};

newPassport(divv);
// here we manipulated "divv.passport" unknowingly, this changed the original value...

// WRONG PASSPORT for same arguments!
checkIn(flight, divv); // therefore we get "Wrong passport!" alert, on calling another time..
// that's how the interaction of DIFFERENT function with same object can create issues

// JS "DOESN'T" have 'passing by reference' (it just looks like..)
// Pass REFERENCE TO THE Function✅ || NOT pass 'BY' reference❌
