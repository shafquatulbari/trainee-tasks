/*
this exercise is about the difference between Object.is and triple equals operator
*/
console.log(Object.is(NaN, NaN)); // true, because they are both NaN
console.log(NaN === NaN); // false, because NaN is not equal to itself

console.log(Object.is(+0, -0)); // false, because they are not same
console.log(+0 === -0); // true

console.log(Object.is("hello", "hello")); // true, because they are same strings
console.log(Object.is({}, {})); // false, because they are different objects in memory

// Create an array of different test cases to compare using Object.is()
const valuesToCompare = [
  [NaN, NaN],
  [+0, -0],
  [{}, {}],
  ['foo', 'foo']
];

// Compare these values using Object.is() and print the results
valuesToCompare.forEach(([val1, val2]) => {
  console.log(`Object.is(${val1}, ${val2}):`, Object.is(val1, val2));
  console.log(`${val1} === ${val2}:`, val1 === val2);
});


