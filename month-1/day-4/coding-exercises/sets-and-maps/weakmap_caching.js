/*
Exercise 5: weakmap_caching.js

Use a WeakMap to create a caching system where object metadata is stored only as long as the object exists:
Store metadata (like created date, access count) for a set of objects.
Remove references to objects and ensure metadata is cleaned up when the object is garbage collected.
Implement methods to get, set, and delete metadata from the cache. Now do these

*/

// Create a WeakMap to store object metadata
let metadataCache = new WeakMap();

// Function to set metadata for an object
function setMetadata(object, metadata) {
  metadataCache.set(object, metadata);
  console.log(`Metadata set for object.`);
}

// Function to get metadata for an object
function getMetadata(object) {
  if (metadataCache.has(object)) {
    return metadataCache.get(object);
  } else {
    return "No metadata found for object.";
  }
}

// Function to delete metadata for an object
function deleteMetadata(object) {
  if (metadataCache.delete(object)) {
    console.log("Metadata deleted for object.");
  } else {
    console.log("No metadata found for object to delete.");
  }
}

// Example usage
let obj1 = { id: 1 };
let obj2 = { id: 2 };

// Set metadata for objects
setMetadata(obj1, { created: new Date(), accessCount: 1 });
setMetadata(obj2, { created: new Date(), accessCount: 3 });

// Get metadata
console.log(getMetadata(obj1)); // Output: Metadata for obj1
console.log(getMetadata(obj2)); // Output: Metadata for obj2

// Simulate removing references to objects
obj1 = null; // obj1 is no longer referenced and can be garbage collected

// Attempt to retrieve metadata for obj1 after removing reference
console.log(getMetadata(obj1)); // Output: No metadata found for object
deleteMetadata(obj1); // Output: No metadata found for object to delete

// Get metadata for obj2 which is still referenced
console.log(getMetadata(obj2)); // Output: Metadata for obj2

// Delete metadata manually
deleteMetadata(obj2);
console.log(getMetadata(obj2)); // Output: No metadata found for object
