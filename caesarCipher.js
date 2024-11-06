function caesarCipher(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letterKey = {};
  const numKey = {};
  let resultString = "";

  // Builds out pair objects as lookup tables, one with index nums (1-26) as keys, and one with values (a-z) as keys
  for (let i = 0; i < alphabet.length; i++) {
    letterKey[alphabet[i]] = i + 1;
    numKey[i + 1] = alphabet[i];
  }

  // Iterate through string to build out resultString
  for (let i = 0; i < s.length; i++) {
    if (!/[a-zA-Z]/.test(s[i])) {
      // checks if any of the characters in s are NOT letters. If they are not letters, add directly to resultString
      resultString += s[i];
    } else {
      let newIndex = letterKey[s[i].toLowerCase()] + k; // gives me the index number of the new letter

      // if the cipher (k) specifies to move the letters to a number > 26, this will account for "resetting" (e.g. if newINdex is 27, set it back to 1)
      if (newIndex % 26 === 0) {
        // if the letter is "z" it will always have a remainder of 0 (e.g. 26 or 52 % 26 === 0) and will return 0 (which will be undefined), so you have to set it to 26 directly.
        newIndex = 26;
      } else if (newIndex > 26) {
        newIndex = newIndex % 26; // if newIndex is 28, this will return a 2 (e.g. 28 % 26 === 2)
      }

      // Checks whether the original letter in s was upperCase. If so, needs to convert back in resultString
      if (s[i] === s[i].toUpperCase()) {
        resultString += numKey[newIndex].toUpperCase();
      } else {
        resultString += numKey[newIndex];
      }
    }
  }

  return resultString; // should output a "z"
}

console.log(caesarCipher("f", 98));
