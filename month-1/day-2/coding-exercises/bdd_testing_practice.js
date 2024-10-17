function calculateSum(a, b) {
  return a + b;
}

function calculateDifference(a, b) {
  return a - b;
}

function greet(name) {
  return `Hello, ${name}`;
}

//Jasmine Tests
describe("Basic Function Tests", function () {
  it("calculateSum Test", function () {
    //Given
    let a = 2;
    let b = 3;
    //When
    let result = calculateSum(a, b);
    //Then
    expect(result).toEqual(5);
  });

  it("calculateDifference Test", function () {
    //Given
    let a = 2;
    let b = 3;
    //When
    let result = calculateDifference(a, b);
    //Then
    expect(result).toEqual(-1);
  });

  it("greet Test", function () {
    //Given
    let name = "John";
    //When
    let result = greet(name);
    //Then
    expect(result).toEqual("Hello, John");
  });
});
