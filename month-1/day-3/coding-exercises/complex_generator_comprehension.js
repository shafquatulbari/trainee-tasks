// Step 1: Create a generator function that yields squares of even numbers between 1 and 20
function* evenSquares() {
  for (let i = 2; i <= 20; i += 2) {
    // Even numbers from 2 to 20
    yield i * i; // Yield the square of the even number
  }
}

// Step 2: Create a generator function that yields odd numbers between 1 and 20
function* oddNumbers() {
  for (let i = 1; i <= 20; i += 2) {
    // Odd numbers from 1 to 20
    yield i; // Yield the odd number itself
  }
}

// Step 3: Create a generator that combines both using yield*
function* combinedEvenSquaresAndOddNumbers() {
  yield* evenSquares(); // Delegate the even squares generation
  yield* oddNumbers(); // Delegate the odd numbers generation
}

// Step 4: Use a for...of loop to collect and print the results from both generators
const combinedResults = [];

for (let value of combinedEvenSquaresAndOddNumbers()) {
  combinedResults.push(value); // Collect the values from both generators
}

console.log("Combined even squares and odd numbers between 1 and 20:");
console.log(combinedResults); // Print the final combined result array

