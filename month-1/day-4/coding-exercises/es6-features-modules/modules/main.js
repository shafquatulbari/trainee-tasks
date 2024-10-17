// main.js (CommonJS)
const { Person, sayHello } = require("./es6-modules");

// Create an instance of the Person class and use it
const caesar = new Person("Caesar");
console.log(caesar.greet()); // Outputs: Hi, I am Caesar

// Call the sayHello function
sayHello(); // Outputs: Hello World
