// function sockMerchant(n, ar) {
//   let totalPairs = 0;
//   let map = new Map();

//   // either divide the total of each num (index) to find the number of pairs (use Math.floor to round down) OR iterate on totalPairs once a given num === 2, and then remove those values from the Map.

//   for (let i = 0; i < ar.length; i++) {
//     if (!map.has(ar[i])) {
//       map.set(ar[i], 1);
//     } else {
//       // increment value +1
//       map.set(ar[i], map.get(ar[i]) + 1);
//     }
//   }

//   for (let value of map) {
//     if (value[1] > 1) {
//       totalPairs += Math.floor(value[1] / 2);
//     }
//   }

//   return totalPairs;
// }

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // should return 3 (pairs)

// OPTION 2: slightly more efficient space complexity and only using 1 loop
function sockMerchant(n, ar) {
  let totalPairs = 0;
  let map = new Map();

  // either divide the total of each num (index) to find the number of pairs (use Math.floor to round down) OR iterate on totalPairs once a given num === 2, and then remove those values from the Map.

  // Loop to set Map key/values, updating values to 0 or 1, and at 2 iterating on totalPairs

  for (let num of ar) {
    if (map.get(num) !== 1) {
      // add to Map (1)
      map.set(num, 1);
    } else if (map.get(num) === 1) {
      map.set(num, 0);
      totalPairs++;
    }
  }

  return totalPairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // should return 3 (pairs)
