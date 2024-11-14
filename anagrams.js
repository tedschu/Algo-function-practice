// Write a function that determines if two strings are anagrams of each other.
// Two strings are anagrams if they have the same characters with the same frequencies, regardless of order. For example, "listen" and "silent" are anagrams.

function isAnagram(string1, string2) {
  // Method 1: alphabetize the strings and then compare them.
  const final1 = string1.toLowerCase().split("").sort().join("");
  const final2 = string2.toLowerCase().split("").sort().join("");

  console.log(final2);

  if (final1 === final2) {
    return true;
  } else return false;
}

console.log(isAnagram("Silent dream", "Listen deram"));
