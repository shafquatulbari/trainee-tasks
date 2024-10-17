// Step 1: Create the inner generator function that generates numbers 1 to 3
function* innerGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Step 2: Create the nested generator function
function* nestedGenerator() {
  yield* innerGenerator(); // Step 3: Delegate to innerGenerator using yield*

  // Step 4: Continue generating numbers 4 to 6
  yield 4;
  yield 5;
  yield 6;
}

// Step 5: Test the nestedGenerator by iterating over it and logging the values
const generatorInstance = nestedGenerator();

console.log("Values from nestedGenerator:");
for (let value of generatorInstance) {
  console.log(value); // Log each value yielded by nestedGenerator
}
