// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// console.log(firstName);

// let PI = 3.1415;

// // Variable naming conventions
// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// //Code executes top to bottom
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// // Type of operator
// console.log("type of true: " + typeof true);
// console.log("type of javascriptIsFun: " + typeof javascriptIsFun);
// console.log("type of 23: " + typeof 23);
// console.log("type of 'Jonas': " + typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(javascriptIsFun);
// console.log("type of javascriptIsFun: " + typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log("type of year: " + typeof year);

// year = 1991;
// console.log(year);
// console.log("type of year: " + typeof year);

// console.log("type of null: " + typeof null); // type of null is object for historical reasons

// let age = 30; //variables can be reassigned
// age = 31;

// const birthYear = 1991; //variables cannot be reassigned, immutable variable
// // birthYear = 1990; //this will throw an error

// // const job; //this will throw an error

// var job = "programmer"; //old way of declaring variables, not recommended because it is not block scoped and can be reassigned
// console.log("job: " + job);
// job = "teacher";
// console.log("job: " + job);

// //Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log("age of Jonas: " + ageJonas + " , age of Sarah: " + ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName); //string concatenation

// //Assignment operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

// //Comparison operators
// console.log(
//   "age of Jonas is greater than age of Sarah: " + (ageJonas > ageSarah)
// );
// console.log(
//   "age of Sarah is greater than age of Jonas: " + (ageSarah > ageJonas)
// );
// console.log(
//   "age of Sarah is greater or equal to age of 18: " + (ageSarah >= 18)
// );
// //Operators <, >, <=, >=
// const isFullAge = ageSarah >= 18;
// console.log("is Sarah of full age: " + isFullAge);

// //Operator precedence (there is a table of precedence)
// We start with the highest precedence example below

// console.log(25 - 10 - 5); // 10, executes left to right

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10, right to left
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log("average age: " + averageAge);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// let markMass = 78;
// let markHeight = 1.69;

// let johnMass = 92;
// let johnHeight = 1.95;

// BMI = (mass, height) => {
//   return mass / height ** 2;
// };

// let markBMI = BMI(markMass, markHeight);
// let johnBMI = BMI(johnMass, johnHeight);

// // In 1 decimal place
// console.log(
//   `Mark's BMI: ${markBMI.toFixed(1)}, John's BMI: ${johnBMI.toFixed(1)}`
// );

// // who has higher BMI
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// // without template literals
// // Template Literals
// const jonasNew = `I'm ${firstName}, a ${job}, and I'm ${
//   2037 - 1991
// } years old.`;
// console.log(jonasNew);

// //Multiple lines
// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// //Template literals
// console.log(`String with
// multiple
// lines`);

// Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas")); //NaN
// console.log(typeof NaN); //number

// console.log(String(23), 23);

// // Type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3); //10
// console.log("23" * "2"); //46
// console.log("23" > "18"); //true

// let n = "1" + 1; //11
// n = n - 1; //10
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("Jonas")); //true
// console.log(Boolean({})); //true for empty object
// console.log(Boolean("")); //false for empty string

// const money = 0; //0 is a falsy value
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!"); //this will be printed
// }

// let height; //Undefined is a falsy value
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED"); //this will be printed
// }

// Equality operators
// const age = 18;
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == "18") console.log("You just became an adult :D (loose)");

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("Cool! 23 is an amazing number! (strict)");
// }

// if (favorite == 23) {
//   console.log("Cool! 23 is an amazing number! (loose)");
// }

//Boolean logic
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(
//   "Sarah has a driver's license: " +
//     hasDriversLicense +
//     ", and good vision: " +
//     hasGoodVision
// );
// // not operator
// console.log("Sarah does not have a driver's license: " + !hasDriversLicense);
// // or operator with not
// console.log(
//   "Sarah does not have a driver's license or does not have good vision: " +
//     (!hasDriversLicense || !hasGoodVision)
// );

// const isTired = true; //C

// let sarahShouldDrive = hasDriversLicense && hasGoodVision && !isTired;
// console.log("Sarah should drive: " + sarahShouldDrive);

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// dolphinScores = [97, 112, 101];
// koalaScores = [109, 95, 123];

// const calcAverage = (scores) => {
//   return scores.reduce((acc, score) => acc + score, 0) / scores.length; //reduce method to sum up all scores and divide by number of scores
// };

// const dolphinAverage = calcAverage(dolphinScores);
// const koalaAverage = calcAverage(koalaScores);

// if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
//   console.log(`Dolphins win with an average score of ${dolphinAverage}`);
// } else if (koalaAverage > dolphinAverage && koalaAverage >= 100) {
//   console.log(`Koalas win with an average score of ${koalaAverage}`);
// } else if (
//   dolphinAverage === koalaAverage &&
//   dolphinAverage >= 100 &&
//   koalaAverage >= 100
// ) {
//   console.log(
//     `It's a draw! Both teams have an average score of ${dolphinAverage}`
//   );
// } else {
//   console.log("No team wins the trophy");
// }

// Switch statement
// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//     console.log("Take a break");
//     break;
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//     console.log("Take a break");
//     break;
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }

//conditional/ternary operator
// const age = 17;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// //Ternary operator with template literals
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, 
it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. 
It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, 
and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
