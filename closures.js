// Closures are simply another way of thinking of scope, but are specific to functions inside of other functions...meaning variables declared or passed in a parent function will remain accessible to functions inside.
// JS would typically delete variables within a function from memory after a function runs, but with closures (nested functions), they will save the data as JS recognizes that inner functions require it.
// With closures, JS will always use the MOST RECENT data in a varaible.

// The below will print (3, 3, 3) rather than (0, 1, 2) because var (or let i = 0 outside the function) is globally scoped and will use the most recent value
// e.g. when this runs, the loop ends when i = 3, and the loop finishes before 800ms - therefore, JS just sees i = 3, three times.
// if you set let i = 0 INSIDE the loop, JS will, instead, a new version of i for each iteration of the loop, meaning it will print (0, 1, 2)

//let i = 0;

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 800); // if using globally-scoped, or block-scoped variables outside of the function, i will simply be the most updated value (3)
  console.log(i); // will print 0, 1, 2
}

console.log(i); // will print 3, 3, 3

// Most common use cases
// First: to pass an element to have the function create new elements
function elementCreator(element) {
  // higher order function that creates a closure around "element" property, meaning JS / functions within will remember this
  return () => {
    // All elementCreator is doing here is returning this function, which then returns the result of document.create(element) ex. a div
    return document.createElement(element);
  };
}

const createDiv = elementCreator("div");
const createSpan = elementCreator("span");
createDiv();
createSpan();

// Second: to create private variables
// func1 is simply returning func2, which takes the age value and outputs age + 2
function func1(age) {
  function func2() {
    console.log(age + 2);
  }

  return func2;
}

const result = func1(39);
result();

// https://exercism.org/tracks/javascript/exercises/coordinate-transformation/edit
/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */

//
function translate2d(dx, dy) {
  return function (x, y) {
    // returns a function which takes in params (x, y)
    return [x + dx, y + dy]; // inside the function, returns an array with two args, each of which add values from the parent function (closure)
  };
}

const translatorFunc = translate2d(1, 5);
console.log(translatorFunc(-4, 1));
