/*
Exercise 9: async_generator_file_reader.js
In this exercise, we will simulate reading a large file or stream by using an array of 
strings. We’ll simulate chunked data fetching by yielding each chunk with a delay 
sing Promises.

Concept:

An async generator function allows you to yield values asynchronously, 
so the consuming code can process each chunk as it becomes available.
The Promise is used to simulate a delay in fetching each chunk.
We consume the async generator using for await...of.

*/

// Simulating a large file using an array of strings
const fileChunks = [
  "This is the first chunk of data.",
  "This is the second chunk of data.",
  "Here is the third chunk of data.",
  "Finally, the last chunk of data.",
];

// Async generator that fetches chunks of data
async function* readFileInChunks() {
  for (const chunk of fileChunks) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay of 1 second
    yield chunk; // Yield each chunk one by one after the delay
  }
}

// Main function to consume the async generator
(async () => {
  console.log("Reading file in chunks...");
  for await (const chunk of readFileInChunks()) {
    console.log("Received chunk:", chunk);
  }
  console.log("Finished reading file.");
})();
