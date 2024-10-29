// Return a "results" array quantifying the number of times each query string in "queries" array is found in "strings" array
// Example: [2, 1, 0]

function matchingStrings(strings, queries) {
  const map = new Map();
  const resultArray = [];

  // Create a map of "strings" array with keys (string value) and count of times those strings occur (value)
  for (let string of strings) {
    if (!map.has(string)) {
      map.set(string, 1);
    } else {
      map.set(string, map.get(string) + 1);
    }
  }

  // This loops through queries array to find matches (via Map) of the strings array, pushing any found strings to the resultArray
  for (let query of queries) {
    if (map.has(query)) {
      resultArray.push(map.get(query));
    } else {
      resultArray.push(0);
    }
  }

  return resultArray;
}

console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);
