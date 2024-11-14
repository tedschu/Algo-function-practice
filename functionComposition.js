/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */

// Define our transformation functions
const moveRight = (x, y) => [x + 1, y]; // moves right by 1
const moveUp = (x, y) => [x, y + 1]; // moves up by 1

function composeTransform(f, g) {
  return function (x, y) {
    const [newX, newY] = f(x, y); // You know the result needs to be an array with two coordinates [x, y], so therefore you want to "transform" the two coordinates using teh two functions

    const [finalX, finalY] = g(newX, newY); // Making sure to use the updated values (newX) to transform here

    return [finalX, finalY];
  };
}

const moveRightThenUp = composeTransform(moveRight, moveUp); // creates a new version of this function, passing the two input functions as params

console.log(moveRightThenUp(0, 0)); //This calls the new function with your param coordinates (x, y)
