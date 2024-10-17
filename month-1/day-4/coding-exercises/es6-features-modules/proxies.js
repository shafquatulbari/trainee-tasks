const person = { name: "Julius", age: 50 };
//We use proxies to intercept operations on objects and functions.
//PROXY OBJECT EXAMPLE
const personProxy = new Proxy(person, {
  //person is the target object
  get(target, prop) { 
    console.log(`Getting property "${prop}"`);
    return target[prop] || "Property not found";
  },
  set(target, prop, value) {
    if (prop === "age" && value < 0) {
      console.log("Age cannot be negative!");
      return false;
    }
    console.log(`Setting property "${prop}" to ${value}`);
    target[prop] = value;
    return true;
  },
});

console.log("Intercepted get prop name:", personProxy.name); // Intercepted get
console.log("Intercepted get prop age:", personProxy.age); // Intercepted get
personProxy.age = -10; // Validation fail
personProxy.age = 60; // Intercepted set
console.log(personProxy.age); // Intercepted get

//PROXY FUNCTION EXAMPLE
const multiply = (a, b) => a * b;

const multiplyProxy = new Proxy(multiply, {
  apply(target, thisArg, argumentsList) {
    console.log(`Called with arguments: ${argumentsList}`);
    const result = target(...argumentsList);
    console.log(`Result: ${result}`);
    return result;
  },
});

console.log(multiplyProxy(3, 4)); // Should log arguments and result

// Original function that makes use of "this"
const multiplyWithContext = function(a, b) {
  console.log(`Context (this):`, this);
  return a * b * this.factor;
};

// The target object to be used as "thisArg"
const context = { factor: 10 };

// Proxy for multiplyWithContext
const multiplyProxyWithContext = new Proxy(multiplyWithContext, {
  apply(target, thisArg, argumentsList) {
    console.log(`Called with arguments: ${argumentsList}`);
    const result = target.apply(thisArg, argumentsList); // Invoke the original function with custom context
    console.log(`Result: ${result}`);
    return result;
  }
});

// Call the proxy function with the custom "this" context
console.log(multiplyProxyWithContext.call(context, 3, 4)); // Uses "context" as "this"
