// Would you like to try the unique character problem I mentioned earlier? To recap:
// Write a function that returns the first character that appears only once in a string. If no character appears only once, return null.

// has(key), get(key), set[key, return value]

const firstUnique = (string) => {
  const map = new Map();

  // First store the counter of all characters in a map
  for (let char of string) {
    if (!map.has(char)) {
      // if the char isn't in the map yet, set it there with a value of 1)
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1); // if the char IS in the map, re-set the char and update the value (get existing value + 1). map.get(key) returns the value of the key
    }
  }

  // Then, for each char, if the value of the char key === 1, return that char (e.g. it will return the first one)
  for (let char of string) {
    if (map.get(char) === 1) return char;
  }

  return null; // If none of the char (key) values only show once, then return null
};

console.log(firstUnique("leetcode")); // should return 'l'
console.log(firstUnique("aabbcc")); // should return null
console.log(firstUnique("aabbc")); // should return 'c'
console.log(firstUnique("abab")); // should return null
console.log(firstUnique("a")); // should return 'a'
