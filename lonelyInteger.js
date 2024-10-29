/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  const map = new Map();
  // hash map with count as key and the num as the value

  for (let num of a) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.delete(num); // if a key (ex. the num 1, or 2) has been seen already in the map, delete it. This should leave only one key / value in the end (the one that only shows once)
    }
  }

  return parseInt(map.keys().next().value);
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1])); // should return 4
