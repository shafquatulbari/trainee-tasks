/*
Exercise 10: parallel_data_fetcher.js
In this exercise, we’ll fetch data from multiple APIs (simulated here). The goal is to fetch data from multiple sources in parallel using Promise.all() and then yield the combined result.

Concept:

Async generator to yield fetched data.
Promise.all() to fetch data from multiple sources in parallel.
Proper error handling in case one of the API calls fails.

*/

// Simulated API fetch functions (returning promises)
const fetchDataFromAPI1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data from API 1"), 1000));
const fetchDataFromAPI2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data from API 2"), 1500));
const fetchDataFromAPI3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data from API 3"), 500));

/*

Even though API 3 resolves after 500ms and API 1 after 1000ms, 
the Promise.all() will wait for API 2 (the slowest one at 1500ms) to finish.
After all three promises are resolved, Promise.all() will return an array of the 
results in the same order as the promises were passed into Promise.all(), 
regardless of which one resolved first.
Promise.all() waits for all promises to complete before returning.
It does not return the data as soon as each individual promise resolves. 
Instead, it gathers the results of all the promises in the array and returns 
them together once the slowest one finishes.

*/

// Async generator that fetches data from multiple APIs in parallel
async function* parallelDataFetcher() {
  try {
    const results = await Promise.all([
      fetchDataFromAPI1(),
      fetchDataFromAPI2(),
      fetchDataFromAPI3(),
    ]);
    yield results;
  } catch (error) {
    console.error("Error fetching data from one of the APIs:", error);
  }
}

// Main function to consume the async generator
(async () => {
  console.log("Fetching data from multiple APIs in parallel...");
  for await (const result of parallelDataFetcher()) {
    console.log("Received data:", result); // Outputs the array of fetched data
  }
  console.log("Finished fetching data.");
})();
