/*
Exercise 3: unique_word_counter.js

Given a large paragraph of text, create a function that returns the number of unique 
words. Use a Set to ensure words are unique and a Map to count the occurrences of each 
word.

*/

// Function to count unique words and their occurrences
function countUniqueWords(paragraph) {
  const words = paragraph.toLowerCase().match(/\b\w+\b/g); // Extract words, ignoring case, using regex
  const uniqueWordsSet = new Set(words); // Store unique words
  const wordCountMap = new Map(); // Map to store word counts

  // Count occurrences of each word
  words.forEach((word) => {
    if (wordCountMap.has(word)) {
      wordCountMap.set(word, wordCountMap.get(word) + 1); //word is the key and wordCountMap.get(word) + 1 is the value
    } else {
      wordCountMap.set(word, 1); //first time the word is found
    }
  });

  // Display unique words and their counts
  console.log(`Total Unique Words: ${uniqueWordsSet.size}`);
  console.log("Word Occurrences:");
  wordCountMap.forEach((count, word) => {
    console.log(`${word}: ${count}`);
  });

  return {
    uniqueWordCount: uniqueWordsSet.size,
    wordOccurrences: wordCountMap,
  };
}

// Example paragraph
const paragraph = `JavaScript is a great programming language. JavaScript is used for web development. 
Web development involves using HTML, CSS, and JavaScript. The use of JavaScript has grown rapidly in recent years.`;

// Call the function with the paragraph
const result = countUniqueWords(paragraph);

const { uniqueWordCount, wordOccurrences } = result;
//calling from outside the function
console.log(uniqueWordCount);
console.log(wordOccurrences);

/*
Total Unique Words: 14
Word Occurrences:
javascript: 3
is: 2
a: 1
great: 1
programming: 1
language: 1
used: 1
for: 1
web: 2
development: 2
involves: 1
using: 1
html: 1
css: 1
the: 1
use: 1
of: 1
has: 1
grown: 1
rapidly: 1
in: 1
recent: 1
years: 1
*/

