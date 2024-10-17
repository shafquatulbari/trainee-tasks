/*

You have a function fetchData(callback) that fetches data asynchronously using callbacks. 
Rewrite this function to return a Promise instead. Ensure that you handle both success and failure scenarios.
Create a fetchDataCallback.js file with the original callback-based version.
Create a fetchDataPromise.js file with the Promise-based version.

*/

// Convert callback-based fetchData to a Promise-based version
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulate success/failure with 50% chance
      if (success) {
        resolve({ data: "Fetched Data" });
      } else {
        reject("Error: Failed to fetch data");
      }
    }, 1000); // Simulate a 1-second delay
  });
}

// Example usage with Promises
fetchData()
  .then((data) => console.log(data)) // Output the fetched data
  .catch((error) => console.error(error)); // Handle errors
