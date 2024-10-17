/*
Exercise 2: map_operations.js

Create a Map with employee IDs as keys and employee names as values. Implement the following operations:
Add a new employee.
Remove an employee by ID.
Check if a particular employee ID exists.
Update the name of an employee.
Iterate through the map and display all entries (both keys and values). now do this

*/

// Initialize a Map with employee IDs as keys and employee names as values
let employeeMap = new Map([
  [101, "John Doe"],
  [102, "Jane Smith"],
  [103, "Alice Johnson"],
  [104, "Bob Brown"],
  [105, "Charlie Davis"],
  [106, "Eve Wilson"],
  [107, "Frank Miller"],
]);

// Function to add a new employee
function addEmployee(id, name) {
  if (employeeMap.has(id)) {
    console.log(`Employee with ID ${id} already exists`);
  } else {
    employeeMap.set(id, name);
    console.log(`Employee with ID ${id} added`);
  }
}

// Function to remove an employee by ID
function removeEmployee(id) {
  if (employeeMap.has(id)) {
    employeeMap.delete(id);
    console.log(`Employee with ID ${id} removed`);
  } else {
    console.log(`Employee with ID ${id} does not exist`);
  }
}

// Function to check if an employee ID exists
function employeeExists(id) {
  return employeeMap.has(id)
    ? `Employee with ID ${id} exists`
    : `Employee with ID ${id} does not exist`;
}

// Function to update the name of an employee
function updateEmployeeName(id, newName) {
  if (employeeMap.has(id)) {
    employeeMap.set(id, newName);
    console.log(`Employee with ID ${id} updated to ${newName}`);
  } else {
    console.log(`Employee with ID ${id} does not exist`);
  }
}

// Function to iterate through the map and display all entries (both keys and values)
function displayAllEmployees() {
  console.log("Displaying all employees:");
  employeeMap.forEach((name, id) => {
    console.log(`ID: ${id}, Name: ${name}`);
  });
}

// Example usage:

// Adding a new employee
addEmployee(104, "Bob Martin");

// Removing an employee
removeEmployee(102);

// Checking if an employee exists
console.log(employeeExists(101));

// Updating an employee name
updateEmployeeName(103, "Alice Johnson Updated");

// Displaying all employees
displayAllEmployees();
