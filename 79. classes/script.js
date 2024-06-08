// ========================================== CLASSES

// class expression
// const Person = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    //instance properties ==>> on all instances
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Defining methods on Prototype ==>> will be on the prototype of all the instances
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const john = new PersonCl("John Doe", 1996);
console.log(john); // a new instance of PersonCl

john.calcAge(); // method inherited from prototype

// prototype of john object
console.log(john._proto_ === PersonCl.prototype);

// Adding method manually ==>> on the prototype property of Person Class
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
john.greet();
