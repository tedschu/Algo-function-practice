// "Design a function called throttle that takes two parameters:

// A callback function
// A time delay in milliseconds

// The throttled function should ensure that the callback can only be executed once within the specified delay period, no matter how many times it's called.
// Any additional calls during the delay period should be ignored.
// This is commonly used in scenarios like:

// Handling window resize events
// Processing scroll events
// Limiting API calls
// Handling button clicks that trigger expensive operations

// For example:
// javascriptCopyconst expensiveOperation = () => console.log('Processing...');
// const throttledOperation = throttle(expensiveOperation, 1000);

// // If this is called multiple times within 1 second, it should only execute once
// throttledOperation();
// throttledOperation();
// throttledOperation();

// This is our main function that takes 2 parameters:
// 1. expensiveOperation: the function we want to throttle
// 2. delay: how long to wait between allowed calls (in milliseconds)
function throttle(expensiveOperation, delay) {
  // This creates a variable that we'll use to track if we can run the function
  let canRun = true;

  // The "return function()" creates a new function that will be returned
  // This is like creating a new, modified version of our original function
  return function () {
    // If canRun is false, exit the function and do nothing
    if (!canRun) {
      return;
    }

    // If we get here, canRun is true, so:
    expensiveOperation(); // Run our expensive function
    canRun = false; // Prevent any more runs

    // Start a timer for 'delay' milliseconds
    // After the timer finishes, set canRun back to true
    setTimeout(() => {
      canRun = true;
    }, delay);
  };
}

// Let's use it with a simple example:
const sayHi = () => {
  console.log("Hi!");
};

// This creates our throttled version of sayHi
const throttledSayHi = throttle(sayHi, 1000);

// Now when we use it:
throttledSayHi(); // Prints "Hi!"
throttledSayHi(); // Does nothing (canRun is false)
throttledSayHi(); // Does nothing (canRun is false)

// After 1 second, canRun becomes true again
// So the next call would work
