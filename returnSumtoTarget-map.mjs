//two-pointer or hash map

const findPair = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [complement, nums[i]];
    }

    map.set(nums[i], i);
  }

  return "no match for this array";

  // has(key), get(key), set[key, return value]
};

console.log(findPair([2, 7, 11, 15], 9)); // should return [2, 7]
console.log(findPair([3, 2, 4], 6)); // should return [2, 4]
console.log(findPair([3, 3], 6)); // should return [3, 3]
console.log(findPair([2, 3], 6)); // should return [3, 3]

//function twoSum(nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]; // uses const here instead of let as the const value will be replaced with each iteration
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i); // set the value as the key here as that is what we are searching for (e.g. does it have "7") and we then return index (as value)
//   }
//   return null; // if no match is found
// }

// console.log(twoSum([2, 3, 6, 7, 11, 15], 9));
