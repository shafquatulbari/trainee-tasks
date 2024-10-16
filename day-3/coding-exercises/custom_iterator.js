// Class to hold a collection of numbers
class DataCollection {
  constructor(numbers) {
    this.numbers = numbers; 
  }

  // Implementing the Symbol.iterator to create a custom iterator
  [Symbol.iterator]() {
    let index = 0; // Starting index for iteration
    let count = 0; // To limit to 5 numbers
    const numbers = this.numbers; // Reference to the numbers array

    return {
      // Custom next() method to define the iteration logic
      next() {
        while (index < numbers.length) {
          const value = numbers[index++];
          if (value > 50) {
            count++;
            if (count <= 5) {
              return { value, done: false };
            } else {
              return { done: true }; // Stop iteration after 5 numbers
            }
          }
        }
        return { done: true }; // Mark as done if no more numbers greater than 50
      },
    };
  }
}

// Step 1: Create a DataCollection instance with an array of numbers
const data = new DataCollection([
  10, 55, 60, 23, 99, 42, 70, 51, 101, 5, 200, 150, 300,
]);

// Step 2: Use for...of loop to log numbers greater than 50 (limited to 5 numbers)
console.log("Numbers greater than 50 (limited to 5):");
for (let number of data) {
  console.log(number);
}

// Step 3: More complex usage - Destructuring with the iterator
const [first, second, third] = data;
console.log("\nFirst 3 numbers greater than 50 (from destructuring):");
console.log(first, second, third);

// Step 4: Converting the iterator into an array using spread syntax
const selectedNumbers = [...data];
console.log("\nAll numbers greater than 50 (limited to 5) as an array:");
console.log(selectedNumbers);

// Step 5: Using Array.from() to work with the iterator
const fromArray = Array.from(data);
console.log("\nUsing Array.from to create an array from the iterator:");
console.log(fromArray);

// Step 6: Handling cases where there are fewer than 5 numbers greater than 50
const smallData = new DataCollection([5, 20, 30, 55, 70]);
console.log("\nFewer than 5 numbers greater than 50:");
for (let number of smallData) {
  console.log(number);
}
