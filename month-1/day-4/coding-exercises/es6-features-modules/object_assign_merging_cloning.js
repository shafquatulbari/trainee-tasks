const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5, e: { f: 6 } };

// Clone obj1 and modify it to test if it's a deep copy
const clone = Object.assign({}, obj1);
clone.a = 10;

console.log("Cloned object:", clone);
console.log("Original object:", obj1);

// Merge obj1 and obj2
const merged = Object.assign({}, obj1, obj2);
console.log("Merged object:", merged);

// Test deep copying with nested objects
const deepMerge = Object.assign({}, obj1, obj3);
deepMerge.e.f = 20;
console.log("Deep merged object:", deepMerge);
console.log("Original nested object:", obj3.e.f);
