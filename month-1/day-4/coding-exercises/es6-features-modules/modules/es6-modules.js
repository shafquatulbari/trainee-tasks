// es6-modules.js (CommonJS)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi, I am ${this.name}`;
  }
}

// Export Person class and default function
module.exports = {
  Person,
  sayHello: function () {
    console.log("Hello World");
  },
};
