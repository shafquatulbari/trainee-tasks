/*
Exercise 11: async_retry_mechanism.js
This exercise involves an async generator that attempts to fetch data from an API. 
If the fetch fails, it retries the request after a delay, up to a maximum number of 
retries.

Concept:

Use Promise with setTimeout to introduce delay.
Implement a retry mechanism that retries fetching data after failure, with a 
limited number of retries.
Use an async generator to yield data after a successful retry.
*/

// Simulate an API fetch function (randomly succeeds/fails)
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.6; // 40% chance of failure
    setTimeout(() => {
      if (success) {
        resolve("API data successfully fetched.");
      } else {
        reject("API fetch failed.");
      }
    }, 1000);
  });
}

//setTimeout wrapped in a promise to introduce a delay.
// Async generator function that retries on failure
async function* retryFetchData(maxRetries = 3, delay = 1000) {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      const data = await fetchDataFromAPI();
      yield data; // Yield the fetched data after a successful attempt
      return; // Exit the loop after success
    } catch (error) {
      console.error(`Attempt ${retries + 1} failed: ${error}`);
      retries++;
      if (retries < maxRetries) {
        console.log(`Retrying after ${delay / 1000} second(s)...`);
        await new Promise((resolve) => setTimeout(resolve, delay)); // Wait before retrying
      } else {
        console.log("Max retries reached. Giving up.");
      }
    }
  }
}

// Main function to consume the async generator
(async () => {
  for await (const data of retryFetchData()) {
    console.log("Received:", data);
  }
})();
