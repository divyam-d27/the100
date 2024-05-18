"use strict";
// ===================================== Methods on Function

// ======================= CALL method

const vistara = {
  airline: "Vistara",
  iataCode: "UK",
  bookings: [],
  // a method
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    // passing object into the bookings array
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
vistara.book(239, "Divyam Dubey");
vistara.book(635, "Arya Dubey");
// console.log(vistara);

// another airline
const indigo = {
  airline: "Indigo",
  iataCode: "6E",
  bookings: [],
};

const book = vistara.book; // separate function

// Does NOT work.
// book(23, "Sarah Williams"); // REGULAR function call || "this." ===>>> "undefined" (strict mode)

// we want to use "book" function on indigo airline.

book.call(indigo, 23, "Sarah Williams"); // this ===>> indigo
// console.log(indigo);

book.call(vistara, 239, "John Doe"); // "this" ==>> vistara
// console.log(vistara);

// this keyword, set explicitly!!

// ======================= APPLY method

const flightData = [156, "Rohit Sharma"]; // an array of arguments.
book.apply(indigo, flightData);

// same thing with "spread" operator and call method.
book.call(vistara, ...flightData);
console.log(vistara);
