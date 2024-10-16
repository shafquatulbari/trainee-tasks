// Base class
class Animal {
  // Constructor to initialize properties
  constructor(breed, age) {
    this.breed = breed;
    this.age = age;
  }

  getDetails() {
    return `Breed: ${this.breed}, Age: ${this.age}`;
  }
}

// Derived class
class Dog extends Animal {
  constructor(breed, age, name) {
    super(breed, age); // Call the base class constructor
    this.name = name; // Add new property
  }

  //Override the base class method
  getDetails() {
    return `Dog -> ${super.getDetails()}, Name: ${this.name}`;
  }
}

// Derived class
class Cat extends Animal {
  constructor(breed, age, color) {
    super(breed, age); // Call the base class constructor
    this.color = color; // Add new property
  }

  //Override the base class method
  getDetails() {
    return `Cat -> ${super.getDetails()}, Color: ${this.color}`;
  }
}

// Create objects of derived classes
const dog = new Dog("Labrador", 5, "Tommy");
const cat = new Cat("Persian", 3, "White");
const animal = new Animal("Lion", 10);

// Call the getDetails method of derived classes
console.log(dog.getDetails());
console.log(cat.getDetails());
console.log(animal.getDetails());

/* OUTPUT
Dog -> Breed: Labrador, Age: 5, Name: Tommy
Cat -> Breed: Persian, Age: 3, Color: White
Breed: Lion, Age: 10
*/

//testing instance of with message 
console.log("dog instance of dog?: " + (dog instanceof Dog)); // true
console.log("dog instance of animal?: " + (dog instanceof Animal)); // true
console.log("dog instance of cat?: " + (dog instanceof Cat)); // false
console.log("animal instance of animal?: " + (animal instanceof Animal)); // true
console.log("animal instance of dog?: " + (animal instanceof Dog)); // false
console.log("animal instance of cat?: " + (animal instanceof Cat)); // false
console.log("cat instance of cat?: " + (cat instanceof Cat)); // true
console.log("cat instance of animal?: " + (cat instanceof Animal)); // true

//now with private properties, let's see if we can access them, and how things are different
// Base Class: Vehicle
class Vehicle {
    constructor(make, model, year) {
        this._make = make; // Using _ convention for private property
        this._model = model;
        this._year = year;
    }

    getDetails() {
        return `Vehicle: ${this._year} ${this._make} ${this._model}`;
    }

    // Getter for make (simulates private access)
    get make() {
        return this._make;
    }

    // Setter for make (simulates controlled access)
    set make(newMake) {
        this._make = newMake;
    }
}

// Subclass: Car (extends Vehicle)
class Car extends Vehicle {
    constructor(make, model, year, mileage) {
        super(make, model, year);
        this._mileage = mileage; // Private property with _
    }

    getDetails() {
        return `${super.getDetails()}, Mileage: ${this._mileage} miles`;
    }

    // Getter and Setter for mileage
    get mileage() {
        return this._mileage;
    }

    set mileage(newMileage) {
        if (newMileage >= 0) {
            this._mileage = newMileage;
        } else {
            console.log("Mileage cannot be negative.");
        }
    }
}

// Subclass: ElectricCar (extends Car)
class ElectricCar extends Car {
    constructor(make, model, year, mileage, batteryLife) {
        super(make, model, year, mileage);
        this._batteryLife = batteryLife; // Private property with _
    }

    getDetails() {
        return `${super.getDetails()}, Battery Life: ${this._batteryLife} hours`;
    }

    // Getter and Setter for battery life
    get batteryLife() {
        return this._batteryLife;
    }

    set batteryLife(newBatteryLife) {
        if (newBatteryLife > 0) {
            this._batteryLife = newBatteryLife;
        } else {
            console.log("Battery life must be positive.");
        }
    }
}

// Create instances and test the use of this._property

const vehicle = new Vehicle("Toyota", "Camry", 2020);
console.log(vehicle.getDetails());
vehicle.make = "Honda"; // Changing make using setter
console.log(vehicle.getDetails());
console.log("Make accessed through getter: " + vehicle.make);

const car = new Car("Honda", "Accord", 2019, 20000);
console.log(car.getDetails());
car.mileage = 25000; // Changing mileage using setter
console.log(car.getDetails());
console.log("Mileage accessed through getter: " + car.mileage);

const electricCar = new ElectricCar("Tesla", "Model 3", 2021, 15000, 24);
console.log(electricCar.getDetails());
electricCar.batteryLife = 30; // Changing battery life using setter
console.log(electricCar.getDetails());
console.log("Battery life accessed through getter: " + electricCar.batteryLife);

/* OUTPUT:

Vehicle: 2020 Toyota Camry
Vehicle: 2020 Honda Camry
Make accessed through getter: Honda
Vehicle: 2019 Honda Accord, Mileage: 20000 miles
Vehicle: 2019 Honda Accord, Mileage: 25000 miles
Mileage accessed through getter: 25000
Vehicle: 2021 Tesla Model 3, Mileage: 15000 miles, Battery Life: 24 hours
Vehicle: 2021 Tesla Model 3, Mileage: 15000 miles, Battery Life: 30 hours
Battery life accessed through getter: 30

*/
