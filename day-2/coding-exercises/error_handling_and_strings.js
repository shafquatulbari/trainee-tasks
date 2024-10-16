// 1. Function to perform number operations with try..catch and switch..case
function numberOperations(a, b, operation) {
  try {
    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      default:
        throw new Error("Invalid operation");
    }
  } catch (error) {
    return error.message;
  }
}
console.log("add number 2 & 3: " + numberOperations(2, 3, "add"));
console.log("subtract number 2 & 3: " + numberOperations(2, 3, "subtract"));
console.log("multiply number 2 & 3: " + numberOperations(2, 3, "multiply"));
console.log("divide number 2 & 3: " + numberOperations(2, 3, "divide"));

// default case
console.log("invalid operation: " + numberOperations(2, 3, "invalid"));

//case where we catch an error
console.log(
  "ERROR MESSAGE for divide by zero: " + numberOperations(2, 0, "divide")
);

//2. Test string functions (slice, substring, replace, toUpperCase, toLowerCase, split)
let testString = "Hello, World!";
console.log("slice: " + testString.slice(0, 5));
console.log("substring: " + testString.substring(0, 5));
console.log("replace: " + testString.replace("World", "John"));
console.log("toUpperCase: " + testString.toUpperCase());
console.log("toLowerCase: " + testString.toLowerCase());
console.log("split: " + testString.split(", World!"));

//3. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
} // WHAT IS IT DOING? it is splitting the string into an array, reversing the array, and joining it back into a string

console.log("reverse string: " + reverseString("Hello, World!"));