// Step 1: Generate an array from 1 to 10, use map() to square the numbers
function generateAndSquareArray() {
  return Array.from({ length: 10 }, (_, i) => i + 1).map((num) => num * num);
}

// Step 2: Filter the squared numbers based on a limit, defaulting to 25
function filterSquaresGreaterThanLimit(squares, limit = 25) {
  return squares.filter((square) => square > limit);
}

// Step 3: Comprehension-like function to combine both operations
function comprehensionLikeArray(limit = 25) {
  // Generate array from 1 to 10, then square the numbers
  const squaredNumbers = generateAndSquareArray();

  // Filter the squared numbers that are greater than the specified limit
  return filterSquaresGreaterThanLimit(squaredNumbers, limit);
}

// Step 4: Test the comprehension-like function with the default limit
console.log("Comprehension-like Array (squares > 25):");
console.log(comprehensionLikeArray());

// Step 5: Test with a custom limit (for example, 50)
console.log("\nComprehension-like Array (squares > 50):");
console.log(comprehensionLikeArray(50));

// Step 6: Use array destructuring to get the first two results from the filtered array
const [first, second] = comprehensionLikeArray(25);
console.log("\nFirst two squares greater than 25:");
console.log(first, second);

// Step 7: Use destructuring with a fallback (default value) in case there are fewer results
const [
  firstResult = "No result",
  secondResult = "No result",
  thirdResult = "No result",
] = comprehensionLikeArray(20);
console.log("\nFirst three squares greater than 20 (with fallback):");
console.log(firstResult, secondResult, thirdResult);

// Step 8: Additional complexity - combine this with a more dynamic array range using default parameters
function generateDynamicRangeAndSquare(start = 1, end = 10) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
    (num) => num * num
  );
}

function comprehensionLikeArrayDynamicRange(start = 1, end = 10, limit = 25) {
  // Generate and square array from the dynamic range
  const squaredNumbers = generateDynamicRangeAndSquare(start, end);

  // Filter based on the provided limit
  return filterSquaresGreaterThanLimit(squaredNumbers, limit);
}

// Test dynamic range from 1 to 15, filtering squares > 50
console.log(
  "\nComprehension-like Array with Dynamic Range (1 to 15, squares > 50):"
);
console.log(comprehensionLikeArrayDynamicRange(1, 15, 50));

// Test dynamic range from 5 to 20, filtering squares > 150
console.log(
  "\nComprehension-like Array with Dynamic Range (5 to 20, squares > 150):"
);
console.log(comprehensionLikeArrayDynamicRange(5, 20, 150));
