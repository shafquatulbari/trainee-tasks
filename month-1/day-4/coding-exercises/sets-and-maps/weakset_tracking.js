/*
Exercise 4: weakset_tracking.js

Create a WeakSet to track user objects in a system. Implement a function that:
Adds users to the WeakSet.
Removes users from the WeakSet.
Checks if a user is still being tracked.
Simulate the garbage collection of objects by deleting references and checking if they remain in the WeakSet.

*/

// Create a WeakSet to track user objects
let userTracking = new WeakSet();

// Function to add a user to the WeakSet
function addUser(user) {
  userTracking.add(user);
  console.log(`User ${user.name} is now being tracked.`);
}

// Function to remove a user from the WeakSet
function removeUser(user) {
  if (userTracking.has(user)) {
    userTracking.delete(user);
    console.log(`User ${user.name} has been removed from tracking.`);
  } else {
    console.log(`User ${user.name} was not being tracked.`);
  }
}

// Function to check if a user is being tracked
function isUserTracked(user) {
  return userTracking.has(user)
    ? `User ${user.name} is being tracked.`
    : `User ${user.name} is not being tracked.`;
}

// Example usage
let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

// Add users to tracking
addUser(user1);
addUser(user2);

// Check if users are tracked
console.log(isUserTracked(user1)); // Output: User Alice is being tracked.
console.log(isUserTracked(user2)); // Output: User Bob is being tracked.

// Remove user1 from tracking
removeUser(user1);
console.log(isUserTracked(user1)); // Output: User Alice is not being tracked.

// Simulate garbage collection by removing references
user1 = null;
console.log(isUserTracked(user1)); // Output: User null is not being tracked.

// Check user2 after removing reference to user1
console.log(isUserTracked(user2)); // Output: User Bob is being tracked.
