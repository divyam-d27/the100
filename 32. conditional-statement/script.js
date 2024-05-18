// =========================================== If/Else Statements

// const age = 19;
// const age = 15;

// if (age >= 18) {
//   console.log("You are eligible for driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`You're young. Wait another ${yearsLeft} years :)`);
// }
// This 'if' 'else' structure is called 'control structure' because it gives control.

// =========================================== SWITCH statement

const day = "sunny";

switch (day) {
  case "monday": // day === 'monday', switch statement does strict comparison
    console.log("1st task of monday");
    console.log("2nd task of monday");
    break; // w/o break code continues to keep on executing..
  case "tuesday":
    console.log("plans on tuesday");
    break;
  case "wednesday":
  case "thursday":
    console.log("plans on wednesday and thursday");
    break;
  case "friday":
    console.log("friday's plan");
    break;
  case "saturday":
  case "sunday":
    console.log("It's Weekend😀");
    break;
  default: // when input is invalid
    console.log("Invalid day!");
}
