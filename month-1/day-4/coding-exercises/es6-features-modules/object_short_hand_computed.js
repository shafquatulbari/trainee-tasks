const name = "Julius";
const age = 55;

// Create an object using shorthand
const person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Computed property example
const dynamicProp = "role";
const role = "Emperor";

const obj = {
  [dynamicProp]: role,
};

console.log("Object with shorthand:", person);
console.log("Object with computed property:", obj);

// Function to return object with both shorthand and computed property
function createPerson(name, role) {
  return {
    name,
    [role]: "Emperor",
  };
}

const caesar = createPerson("Caesar", "role");
console.log(caesar);
