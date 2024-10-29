// Given an array of integers, write a function to find the two numbers such that they add up to a specific target number.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// For example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// Please provide a solution to this problem, explaining your approach and discussing the time and space complexity of your algorithm.
// You can use any programming language you're comfortable with.

// SOLUTION 1: NESTED FOR LOOPS
// Uses a for loop for each number, and then a for loop to search the rest of the array (index + 1) to see if any num === total.
// This is a good solution, but time-intensive as you're running a loop within a loop (thus O(n^2))

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// console.log(twoSum([2, 3, 7, 15], 9));
// console.log(twoSum([2, 9, 34, 2, 6, 7, 7, 15], 9));

// SOLUTION 2: HASH MAP
// More time-efficient way of solving this problem at O(n)
// A Map is a data structure that stores key-value pairs and allows for fast lookups.
// has, get, set[value, index]

// function twoSum(nums, target) {
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

// SOLUTION 3: IF THERE CAN BE MULTIPLE PAIRS RETURNED
// function twoSum(nums, target) {
//   const resultArray = [];
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]; // uses const here instead of let as the const value will be replaced with each iteration
//     if (map.has(complement)) {
//       resultArray.push([map.get(complement), i]);
//     }
//     map.set(nums[i], i); // set the value as the key here as that is what we are searching for (e.g. does it have "7") and we then return index (as value)
//   }
//   return resultArray; // if no match is found
// }

// console.log(twoSum([2, 3, 6, 7, 11, 15], 9)); // SHOULD RETURN [[0,1], [1,2]]

// SOLUTION 4: MOST EFFICIENT O(n) and O(1) space only IF ARRAY IS SORTED
// Pointer technique

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right]; // 16

    // Either (1) sum === target, return indexes, (2) sum is greater than target, decrement right, (3) sum is less than target, increment left

    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return null;
}

console.log(twoSum([1, 2, 3, 6, 7, 11, 15], 9));
