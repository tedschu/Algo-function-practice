function twoSum(array1, array2) {
  const num1 = Number(array1.join(""));
  const num2 = Number(array2.join(""));

  return num1 + num2;

  // return the sum of the two arrays
}

//console.log(twoSum([2, 4], [1, 5, 7]));

// Flipping value and comparing to see if it is a palindrome
function luckyNumber(value) {
  const reversed = Number(value.toString().split("").reverse().join(""));

  if (value === reversed) return true;

  return false;
  //return boolean
}

//console.log(luckyNumber(156521));

// Using two-pointer solution to see if it is a palindrome:
function luckyNumber(value) {
  const array = Array.from(String(value), Number); //

  console.log(array);

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] !== array[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

//console.log(luckyNumber(156512));

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
function errorMessage(input) {
  if (!input) {
    return "Required field";
  } else if (!Number(input) || Number(input) === 0) {
    return "Must be a number besides 0";
  } else return "";
}

console.log(errorMessage(-1));
