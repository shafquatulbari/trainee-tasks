// Step 1: Create the generator function filterAndTransform
function* filterAndTransform(names) {
  for (let name of names) {
    if (name.startsWith("S")) {
      // Step 2: Filter names that start with "S"
      yield name.toUpperCase(); // Step 3: Transform the name to uppercase and yield it
    }
  }
}

// Step 4: Testing with an array of employee names
const employeeNames = [
  "Sarah",
  "Tom",
  "Samuel",
  "Brian",
  "Sophia",
  "Anna",
  "Steve",
  "Chris",
  "Simone",
  "James",
];

// Create an instance of the generator
const filteredNamesGen = filterAndTransform(employeeNames);

console.log(filteredNamesGen); // Object [Generator] {}
// Step 5: Use a for...of loop to log only those names that start with "S" and are transformed to uppercase
console.log("Names starting with 'S' in uppercase:");
for (let name of filteredNamesGen) {
  console.log(name);
}
