// Is there some permutation (combination) of the two arrays where each number cna be paired with another to be >= k?

function twoArrays(k, A, B) {
  // Can sort small > large, large > small and then add each combination
  //

  // If you sort an array (A) directly, it will convert the values to strings and alphabetize
  // So, use a function here that will compare successive numbers and sort them numerically
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    if (sortedA[i] + sortedB[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]));
