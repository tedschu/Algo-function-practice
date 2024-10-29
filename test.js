function miniMaxSum(arr) {
  const sumArray = arr.reduce((acc, current) => acc + current, 0);

  const minNum = Math.min(...arr); // spreads the array into individual elements
  const maxNum = Math.max(...arr);

  const minSum = sumArray - maxNum;
  const maxSum = sumArray - minNum;

  console.log(minSum + " " + maxSum);
}

miniMaxSum([7, 69, 2, 221, 8974]);
