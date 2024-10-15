//1. Regular function to multiply two numbers
function multiply(a, b) {
  return a * b;
}
console.log("multiply 2 with 3: " + multiply(2, 3));

// 2. Regular function with default parameters
function greet(name = "Shafquat") {
  return `Hello, ${name}`;
}
console.log(greet());
console.log(greet("John")); // this is because we are passing a value to the function

// 3. Arrow function to multiply two numbers
let multiplyArrow = (a, b) => a * b;
console.log("multiply 2 with 3 using arrow function: " + multiplyArrow(2, 3));

// 4. Arrow function with default parameters
let greetArrow = (name = "Shafquat") => `Hello, ${name}`;
console.log(greetArrow());
console.log(greetArrow("John"));

// 5. Arrow function with multiple parameters
let greetMultiple = (greeting, name) => `${greeting}, ${name}`;
console.log(greetMultiple("Hello", "John"));

// 6. Assigning a function to a variable
let greetVar = function (name) {
  return `Hello, ${name}`;
};
console.log(greetVar("John")); // this is because we are passing a value to the function

// 7. Anonymous function: passing a function as an argument to another function
numbers = [1, 2, 3, 4, 5];
let doubledNums = numbers.map(function (number) {
  return number * 2;
});

/*steps for the above, we are passing a function as an argument to 
another function, then we are using the map method
 to iterate over the array and double each number */
 console.log(doubledNums);

//8. Arrow function with map method
let doubledNumsArrow = numbers.map((number) => number * 2);
console.log(doubledNumsArrow);

//9. Function returning another function
function greetFunction() {
  return function (name) {
    return `Hello, ${name}`;
  };
}
console.log(greetFunction()("John")); // VERY IMPORTANT: we are calling the function twice

