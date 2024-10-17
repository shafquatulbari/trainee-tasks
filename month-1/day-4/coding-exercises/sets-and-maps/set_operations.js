/*
Exercise 1: set_operations.js

Create two sets of numbers (setA and setB). Implement functions for:
Union
Intersection
Difference
Check for subset
Display the unique values in a set do this

*/

function union(setA, setB) {
  // Union of two sets
  return new Set([...setA, ...setB]);
}

function intersection(setA, setB) {
  // Intersection of two sets
  return new Set([...setA].filter((x) => setB.has(x)));
}

function difference(setA, setB) {
  // Difference of two sets
  return new Set([...setA].filter((x) => !setB.has(x)));
}

function isSubset(setA, setB) {
  // Check if setA is a subset of setB
  return [...setA].every((x) => setB.has(x));
}

function displayUniqueValues(set) {
  // Display unique values in a set
  return [...set];
}

// Example usage
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

console.log("Union:", union(setA, setB)); // Union: { 1, 2, 3, 4, 5, 6, 7, 8 }
console.log("Intersection:", intersection(setA, setB)); // Intersection: { 4, 5 }
console.log("Difference:", difference(setA, setB)); // Difference: { 1, 2, 3 }
console.log("Is Subset:", isSubset(setA, setB)); // Is Subset: false
console.log("Unique Values in Set A:", displayUniqueValues(setA)); // Unique Values: [1, 2, 3, 4, 5]

setA.clear();
console.log("Set is cleared:", displayUniqueValues(setA)); // Set is cleared: []
setA.add([10, 20, 30, 40, 50]);
console.log("Unique Values in Set A:", displayUniqueValues(setA)); // Unique Values: [ [ 10, 20, 30, 40, 50 ] ] 