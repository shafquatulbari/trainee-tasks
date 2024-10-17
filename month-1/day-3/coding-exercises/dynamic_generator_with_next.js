// Step 1: Simple generator function that uses next() input to dynamically control execution
function* simpleGenerator() {
  console.log("Generator starts");

  const firstInput = yield "Waiting for first input..."; // Pauses and waits for input
  console.log(`First input received: ${firstInput}`);

  const secondInput = yield "Waiting for second input..."; // Pauses and waits for next input
  console.log(`Second input received: ${secondInput}`);

  return "Generator finished";
}

// Example usage of simpleGenerator
const gen = simpleGenerator();
console.log(gen.next()); // Starts the generator, returns 'Waiting for first input...'
console.log(gen.next(10)); // Passes 10 as firstInput
console.log(gen.next(20)); // Passes 20 as secondInput

// Step 2: A generator that dynamically controls the sequence based on input
function* dynamicControlGenerator() {
  let num = yield "Starting..."; // Initial pause, waits for the first input

  while (num >= 0) {
    // Continues as long as num is non-negative
    num =
      yield `Current number is ${num}. Send the next number or negative to stop.`;
  }

  return "Terminated"; // Ends the generator when a negative number is passed
}

// Example usage of dynamicControlGenerator
const dynGen = dynamicControlGenerator();
console.log(dynGen.next()); // Starts the generator, returns 'Starting...'
console.log(dynGen.next(5)); // Passes 5 as the initial value
console.log(dynGen.next(10)); // Passes 10, continues iteration
console.log(dynGen.next(-1)); // Passes -1, stops the generator

// Step 3: More complex example: controlling a counter with next() inputs
function* counterGenerator(start = 0) {
  let counter = start;

  while (true) {
    const increment = yield counter; // Wait for input to know how much to increment
    if (increment != null) {
      // Increment if a value was passed
      counter += increment;
    }
  }
}

// Example usage of counterGenerator
const counterGen = counterGenerator(10); // Start the counter at 10
console.log(counterGen.next()); // Outputs 10 (initial value)
console.log(counterGen.next(5)); // Increments counter by 5, outputs 15
console.log(counterGen.next(3)); // Increments counter by 3, outputs 18
console.log(counterGen.next(-10)); // Decreases counter by 10, outputs 8

// Step 4: Use dynamic generator input to control a custom sequence
function* customSequence() {
  let current = yield "Enter the start number"; // Start the sequence with user input

  while (true) {
    const nextStep = yield current; // Yield the current number and wait for the next step input
    if (nextStep === "stop") {
      return "Sequence stopped";
    }
    current += nextStep; // Adjust the current value by the next step input
  }
}

// Example usage of customSequence
const sequenceGen = customSequence();
console.log(sequenceGen.next()); // Starts the generator, returns 'Enter the start number'
console.log(sequenceGen.next(50)); // Passes 50 as the starting number
console.log(sequenceGen.next(10)); // Adds 10, outputs 60
console.log(sequenceGen.next(-20)); // Subtracts 20, outputs 40
console.log(sequenceGen.next("stop")); // Stops the sequence
