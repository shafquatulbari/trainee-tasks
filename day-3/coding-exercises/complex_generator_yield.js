// Step 1: Create a generator function that generates numbers from 1 to 5
function* numberSeries() {
  for (let i = 1; i <= 5; i++) {
    yield i;
  }
}

// Step 2: Create another generator function that delegates to numberSeries()
// and then generates numbers from 6 to 10
function* extendedSeries() {
  yield* numberSeries(); // Delegates to the numberSeries generator
  for (let i = 6; i <= 10; i++) {
    yield i;
  }
}

// Testing Step 1 and Step 2: Call extendedSeries and print each number until exhausted
const seriesGenerator = extendedSeries();

console.log("Generated numbers from extendedSeries (1 to 10):");
let result = seriesGenerator.next();
while (!result.done) {
  console.log(result.value);
  result = seriesGenerator.next();
}

// Step 3: Refactor extendedSeries to only yield numbers divisible by 3
function* filteredExtendedSeries() {
  // Use yield* to delegate to numberSeries, but only yield numbers divisible by 3
  for (let num of extendedSeries()) {
    if (num % 3 === 0) {
      yield num; // Only yield numbers divisible by 3
    }
  }
}

// Step 4: Call the refactored generator and print numbers divisible by 3
const filteredSeriesGenerator = filteredExtendedSeries();

console.log("\nNumbers divisible by 3 from both series:");
result = filteredSeriesGenerator.next();
while (!result.done) {
  console.log(result.value);
  result = filteredSeriesGenerator.next();
}

// Step 5: Test additional behavior - Using next() manually
console.log("\nManually using next() on filteredExtendedSeries:");
const manualGenerator = filteredExtendedSeries();
console.log(manualGenerator.next()); // { value: 3, done: false }
console.log(manualGenerator.next()); // { value: 6, done: false }
console.log(manualGenerator.next()); // { value: 9, done: false }
console.log(manualGenerator.next()); // { value: undefined, done: true }

// Step 6: Test with destructuring and spread syntax
console.log("\nUsing spread syntax to collect all numbers divisible by 3:");
const numbers = [...filteredExtendedSeries()];
console.log(numbers);

// Step 7: Using Array.from() to collect numbers divisible by 3
console.log("\nUsing Array.from to collect numbers divisible by 3:");
const arrayFromGenerator = Array.from(filteredExtendedSeries());
console.log(arrayFromGenerator);
