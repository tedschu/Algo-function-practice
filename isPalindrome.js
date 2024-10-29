// Write a function that takes a string as input and returns true if the string is a palindrome, false otherwise.
//A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// For example:

// "racecar" should return true
// "hello" should return false
// "A man a plan a canal Panama" should return true

//OPTION 1: TWO-POINTER METHOD TO COMPARE CHARACTERS
// function isPalindrome(s) {
//   const string = s.toLowerCase().replace(/[^a-z0-9]/g, ""); // Only convert to array if you need to change values (ex. reverse the word)
//   let left = 0;
//   let right = string.length - 1;

//   while (left < right) {
//     if (string[left] === string[right]) {
//       left++;
//       right--;
//     } else return false;
//   }
//   return true;
// }

// console.log(isPalindrome("race car"));

//OPTION 2: REVERSE THE STRING AND COMPARE
// Simpler to read but uses more space as it has to create an array and then back to string
function isPalindrome(s) {
  const string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverse = string.split("").reverse().join("");

  if (string === reverse) {
    return true;
  } else return false;
}

console.log(isPalindrome("racecar"));
