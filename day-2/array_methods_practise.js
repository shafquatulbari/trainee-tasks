// 1.map() method creates a new array with the results of calling a provided function on every element in the array.
const numbers = [1, 2, 3, 4, 5];
const doubledNums = numbers.map(num => num * 2);
console.log(doubledNums);

// 2. filter() method creates a new array with all elements that pass the criteria provided
const filteredNums = numbers.filter(num => num > 3);
console.log(filteredNums);

//3. reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

//4. forEach(): a function executes for each element in an array
numbers.forEach((num) => console.log("Number is: " + num));

//5. concat() method is used to merge two or more arrays
const numbers2 = [6, 7, 8, 9, 10];
const combinedNumbers = numbers.concat(numbers2);
console.log(combinedNumbers);

//6. includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log("Array includes 3: " + numbers.includes(3)); // true
console.log("Array includes 11: " + numbers.includes(11)); // false

//8. reverse() method reverses an array in place & sort() method sorts the elements of an array in place and returns the sorted array.
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers);
const sortedNumbers = reversedNumbers.sort();
console.log(sortedNumbers);

//9. find() method returns the value of the first element in the provided array that satisfies the criteria
const foundNum = numbers.find(num => num > 3);
console.log(foundNum);
