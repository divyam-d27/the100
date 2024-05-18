// === Mutation ===

// console.log("=== MUTATION ===");

// var a = 2;
// a = "div";
// console.log("var >> ", a);

// let b = 4;
// b = 183;
// console.log("let >> ", b);

// const c = 45;
// c = 90; // can;t be mutated
// console.log("const >> ", c);

// === Re-declaration===

// console.log("=== RE-DECLARATION ===");

// var d = 2;
// var d = "div";
// console.log("var >> ", d);

// let e = 4;
// let e = 183; // error
// console.log("let >> ", b);

// const f = 45;
// const f = 90; // error
// console.log("const >> ", f);

// === Scoping ===

console.log("=== SCOPING ===");

{
  var x = 56;
  let y = "divyam";
  const z = true;

  //   inside of the scope
  console.log("INSIDE SCOPE >>>");
  console.log("var >> ", x);
  console.log("let >> ", y);
  console.log("const >> ", z);
}

console.log("OUTSIDE SCOPE >>>");
console.log("var >> ", x);
console.log("let >> ", y); // not defined
console.log("const >> ", z); // not defined
