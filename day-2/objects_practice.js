// Exercise 1: Create an object called car. Give it the properties of make, model, and year and give them appropriate values.

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2019,
};

// Exercise 2: Using dot notation, access the properties of the car object and assign it to different variables
carMake = car.make;
carModel = car.model;
carYear = car.year;

// Exercise 3: console.log the variables you created in exercise 2
console.log(carMake);
console.log(carModel);
console.log(carYear);

// Exercise 4: modify the year property of the car object using dot notation
car.year = 2020;
console.log("new car year: " + carYear);

// Exercise 5: deleting a property from an object
delete car.year;
console.log("after deleting year property: ");
console.log(car);

// Exercise 6: create nested objects
let car2 = {
  make: "Toyota",
  model: "Corolla",
  year: 2019,
  owner: {
    name: "Shafquat",
    age: 24,
  },
};

//log the new car object
console.log("new car object: ");
console.log(car2);

// Exercise 7: access the nested object properties
let ownerName = car2.owner.name;
let ownerAge = car2.owner.age;

//log the nested object properties
console.log("owner name: " + ownerName + ", owner age: " + ownerAge);

// Exercise 8: Now do the same as above but with the help of a method that returns the properties
car2.getDetails = function () {
  return `With helper method =>Owner name: ${this.owner.name}, Owner age: ${this.owner.age}`;
};
console.log(car2.getDetails());

// Exercise 9: Use for-in loop to iterate over the properties of the car 2 object
for (let key in car) {
  if (car.hasOwnProperty(key)) {
    console.log(`${key}: ${car[key]}`);
  }
}

// RUN THE FILE with terminal command: node day-2/objects_practice.js
