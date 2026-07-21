///////////////////////////
// Get numbers from the user //
////////////////////////////

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

////////////////////////
// Get the operation //
///////////////////////

let operation = prompt(
  "Choose an operation (+, -, *, /):"
);
//////////////
// Functions//
/////////////

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero.";
  }
  return a / b;
}
///////////////////////////////////
// Variable to store the answer //
//////////////////////////////////

let result;

///////////////////////////////////
// Determine which operation to perform //
///////////////////////////////////

if (operation === "+") {
  result = add(num1, num2);
} else if (operation === "-") {
  result = subtract(num1, num2);
} else if (operation === "*") {
  result = multiply(num1, num2);
} else if (operation === "/") {
  result = divide(num1, num2);
} else {
  result = "Invalid operation.";
}
///////////////////////
// Display the result //
///////////////////////

console.log("Result: " + result);
alert("Result: " + result);