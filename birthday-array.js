// s = array of numbers
// d = int that is the sum that the numbers need to have (ex. 4)
// m = the length of the segment, e.g. 2 = 2 elements in array [2,2]

// function birthday(s, d, m) {
//   let totalMatches = 0;

//   for (let i = 0; i < s.length; i++) {
//     let sum = 0;
//     for (let j = i; j < i + m; j++) {
//       sum += s[j];
//     }
//     if (sum === d) {
//       totalMatches++;
//     }
//   }
//   return totalMatches;
// }

// console.log(birthday([1, 2, 1, 3, 2, 1, 3, 0, 1], 3, 2));

// OPTION 2: MORE TIME AND SPACE-EFFICIENT.
// Uses moving window pattern
function birthday(s, d, m) {
  let matches = 0;
  let currentSum = 0;

  // Calculate first window sum to get a starting value (ex. 4)
  for (let i = 0; i < m; i++) {
    currentSum += s[i];
  }
  if (currentSum === d) matches++;

  // Now that currentSum is the sum of the first 3 values (4), as you go through the rest of the array, you can just remove the previous value (s[i -1]) and add the next value (s[i + m -1]) to that sum
  // So for the first iteration, you start with currentSum at 4, but then remove the previous value (1) and then add the next (3), so now currentSum is basically s[1 + 2 + 3]
  for (let i = 1; i < s.length; i++) {
    currentSum -= s[i - 1];
    currentSum += s[i + m - 1];

    if (currentSum === d) matches++;
  }

  debugger;

  return matches;
}

console.log(birthday([1, 2, 1, 3, 2, 1, 3], 6, 3));
