# Overall learnings:

- Hash maps (Map) is good for lookups when you need a key/value pair, for ex: to find the number of instances of a given element in an array
  - Common methods: map.has (finds whether a key exists in the map), map.set (adds a key/value pair to the map), map.get (for a given key, returns the value)
- Sets (Set) is good for finding unique elements. It is akin to an array that will remove duplicates that are added. Useful for finding unique values in a string or array (see pangrams)
- Spread operator (...array) "spreads" or outputs an array or string into its individual elements, which you can then run operations on like sum, Math.max(), etc.
  - So for instance an array[0, 1, 2, 3, 4] set in a variable spreadArray = [...array] would output 0 1 2 3 4 and you can then run sum(spreadArray) to get the value (10)
- Closures: refers to a function inside of another function having access to variables defined in the scope of the outer function. Generally, in JS, all functions have access to variables of parent-level scopes (e.g. a function would have access to global variables). Closure simply means that variables within a function, which are typically deleted from memory after a function runs, will be stored in memory because JS sees that a nested function may still need access to them.
  - Closures are a special version of scoping relating to nested functions
  - Benefits: can create private variables that a function can operate on that isn't accessible outside of the function.
  - Benefits: great for passing a variable into a "helper function" that creates new elements (e.g. a div)...so you can pass in a div (for ex) and it will return a function that creates a div.
- Composition function: is a function that combines two or more functions to create a new function where the result of one function becomes the input to the next. It's often written as (f ∘ g)(x), meaning "apply g first, then apply f to that result."
