/*
Exercise 12: promise_chain_with_async_generator.js
In this exercise, we implement an async generator that fetches data in steps 
(like pagination). The generator yields each step's data, and the main function chains 
the generator with Promises.

Concept:

Async generator to fetch data in steps (e.g., pages of data).
Yield the data for each step.
Chain the generator using Promises, and stop early if needed.
*/

// Simulate API fetch for paginated data (page-based)
function fetchPage(pageNumber) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data from page ${pageNumber}`);
    }, 1000);
  });
}

// Async generator to fetch data page by page
async function* fetchPaginatedData(totalPages) {
  for (let i = 1; i <= totalPages; i++) {
    const data = await fetchPage(i);
    yield data; // Yield data from each page
  }
}

// Main function to consume the async generator and chain results
async function fetchAllData(maxPages) {
  const generator = fetchPaginatedData(maxPages);

  let pageNumber = 1;
  for await (const pageData of generator) {
    console.log(`Page ${pageNumber}: ${pageData}`);

    // Stop early after receiving data from page 3 (for demonstration)
    if (pageNumber === 3) {
      console.log("Stopping early after page 3.");
      break;
    }
    pageNumber++;
  }
}

fetchAllData(5); // Fetch data for 5 pages, stop after page 3
