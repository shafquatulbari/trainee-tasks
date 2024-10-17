// Advanced ES6+ features

//do npm init -y and npm install @babel/core @babel/cli @babel/preset-env
//Create a .babelrc file and add the following code
// {
//   "presets": ["@babel/preset-env"]
// }

//Run the following command to transpile the code
// npx babel traceur_babel_transpile.js --out-file traceur_babel_transpile_es5.js

// Arrow functions, template literals, and default parameters
const greet = (name = "Guest") => `Hello, ${name}`;

// Class with inheritance and method overriding
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

// Using promises and async/await
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
};

const asyncFetch = async () => {
  const data = await fetchData();
  console.log(data);
};

// Using destructuring and rest operator
const showInfo = ({ name, age, ...rest }) => {
  console.log(
    `Name: ${name}, Age: ${age}, Extra Info: ${JSON.stringify(rest)}`
  );
};

// Using spread operator for merging objects
const person1 = { name: "Mark Antony", age: 45 };
const person2 = { occupation: "Politician", country: "Rome" };
const mergedPerson = { ...person1, ...person2 };

// Running the code
console.log(greet("Mark Antony"));

const caesar = new Dog("Caesar");
console.log(caesar.speak());

asyncFetch();

showInfo(mergedPerson);
