// Write a function that takes an array of integers and returns the first integer that appears more than once.
// If no integer appears more than once, return -1.

// has, get, set[value, index]

const findFirstDuplicate = (intArray) => {
  const map = new Map();

  for (let i = 0; i < intArray.length; i++) {
    if (map.has(intArray[i])) return intArray[i];

    map.set(intArray[i], i);
  }

  return -1;
};

console.log(findFirstDuplicate([2, 1, 3, 5, 3, 2])); // should return 3
console.log(findFirstDuplicate([1, 2, 3, 4])); // should return -1
console.log(findFirstDuplicate([1, 1])); // should return 1
