// 1. Selecting Elements by ID
// Select an element with a specific ID and change its content
function updateTitle() {
  const titleElement = document.getElementById("main-title");
  titleElement.innerHTML = "Updated Title!";
  console.log("Title updated.");
}

// 2. Selecting Elements by Class
// Change the text color of all elements with a specific class
function updateTextColor() {
  const textElements = document.getElementsByClassName("text-section");
  for (let i = 0; i < textElements.length; i++) {
    textElements[i].style.color = "blue";
  }
  console.log("Text color updated to blue.");
}

// 3. Creating and Appending Elements
// Dynamically create a new paragraph element and append it to a container
function addParagraph() {
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = "This is a dynamically created paragraph.";
  const container = document.getElementById("content-container");
  container.appendChild(newParagraph);
  console.log("New paragraph added.");
}

// 4. Removing an Element
// Remove the first child element from a container
function removeFirstChild() {
  const container = document.getElementById("content-container");
  if (container.firstChild) {
    container.removeChild(container.firstChild);
    console.log("First child removed.");
  } else {
    console.log("No child element to remove.");
  }
}

// 5. Handling Events - Button Click
// Add an event listener to a button and trigger an alert when clicked
function addButtonClickEvent() {
  const button = document.getElementById("alert-button");
  button.addEventListener("click", function () {
    alert("Button clicked!");
  });
  console.log("Button click event added.");
}

// 6. Changing Styles Dynamically
// Change the background color of the body dynamically
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  console.log("Background color changed to " + color);
}

// 7. Toggle Class
// Toggle a CSS class for an element
function toggleHighlight() {
  const element = document.getElementById("highlighted-section");
  element.classList.toggle("highlight");
  console.log("Toggled highlight class.");
}

// 8. Query Selector
// Select an element using querySelector and modify it
function updateUsingQuerySelector() {
  const element = document.querySelector(".query-selected");
  element.innerHTML = "Content updated using querySelector!";
  console.log("Content updated using querySelector.");
}

// 9. Modifying Attributes
// Change the attribute of an image
//new image from
function changeImageSource() {
  const imageElement = document.getElementById("dynamic-image");
  imageElement.setAttribute(
    "src",
    "https://t3.ftcdn.net/jpg/02/46/07/16/360_F_246071689_VdA5lCZ2luoVBRfFEnTWBRFkGoEcI2je.jpg"
  );
  console.log("Image source updated.");
}

// Unit testing with QUnit

QUnit.module("Basic Function Tests");

// Test the updateTitle function
QUnit.test("updateTitle Test", function (assert) {
  // Set up: Simulate DOM structure
  document.getElementById("qunit-fixture").innerHTML =
    '<h1 id="main-title">Original Title</h1>';
  
  updateTitle(); // Call the function

  // Assert: Check if the title is updated
  assert.equal(
    document.getElementById("main-title").innerHTML,
    "Updated Title!",
    "Title should be updated correctly."
  );
});

// Test the updateTextColor function
QUnit.test("updateTextColor Test", function (assert) {
  // Set up DOM structure
  document.getElementById("qunit-fixture").innerHTML = `
    <div class="text-section">Text Section 1</div>
    <div class="text-section">Text Section 2</div>
  `;

  updateTextColor(); // Call the function

  // Assert that all text sections have the correct color
  const textSections = document.getElementsByClassName("text-section");
  for (let i = 0; i < textSections.length; i++) {
    assert.equal(
      textSections[i].style.color,
      "blue",
      "Text color should be blue."
    );
  }
});

// Test event listener and button click
QUnit.test("addButtonClickEvent Test", function (assert) {
  assert.expect(1); // We expect one assertion inside the event handler

  // Set up button
  document.getElementById("qunit-fixture").innerHTML =
    '<button id="alert-button">Click Me</button>';
  
  // Spy on window alert
  const originalAlert = window.alert;
  window.alert = function (message) {
    assert.equal(message, "Button clicked!", "Alert message should match.");
  };

  // Add event listener
  addButtonClickEvent();

  // Simulate button click
  document.getElementById("alert-button").click();

  // Restore alert function
  window.alert = originalAlert;
});

// Test querySelector manipulation
QUnit.test("updateUsingQuerySelector Test", function (assert) {
  document.getElementById("qunit-fixture").innerHTML =
    '<div class="query-selected">Original Content</div>';
  
  updateUsingQuerySelector(); // Call function to update content

  assert.equal(
    document.querySelector(".query-selected").innerHTML,
    "Content updated using querySelector!",
    "Content should be updated via querySelector."
  );
});

/* Fixture (#qunit-fixture):
This is a special part of the DOM used by QUnit to test DOM manipulation. 
Anything you place inside this fixture is automatically cleared between tests, 
making it an ideal place to set up DOM elements required for a particular test. */