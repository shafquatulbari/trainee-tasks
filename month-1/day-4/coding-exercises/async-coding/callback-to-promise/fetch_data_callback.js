/*

You have a function fetchData(callback) that fetches data asynchronously using callbacks. Rewrite this function to return a Promise instead. Ensure that you handle both success and failure scenarios.
Create a fetchDataCallback.js file with the original callback-based version.
Create a fetchDataPromise.js file with the Promise-based version.

*/

// Simulate fetching data asynchronously using a callback
function fetchData(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.5; // Simulate success/failure with 50% chance
    if (success) {
      callback(null, { data: "Fetched Data" });
    } else {
      callback("Error: Failed to fetch data", null);
    }
  }, 1000); // Simulate a 1-second delay
}

// Example usage with a callback
fetchData((error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data); // Output the fetched data
  }
});

