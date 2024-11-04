const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function flippingMatrix(matrix) {
  // Find the quadrant length
  // Nested for loops to run through each element of the upper-left quadrant and find the highest number
  // return a sum of the highest number from each index of the quadrant [0][0], [0][1], [1][0], [1][1]

  const quadLength = matrix.length / 2;
  let sum = 0;

  for (let i = 0; i < quadLength; i++) {
    for (let j = 0; j < quadLength; j++) {
      // "i" will give us 0,1 and "j" will also give us 0,1 which we place into separate index values to iterate through [i][j]

      const possibleValues = [
        matrix[i][j],
        matrix[i][2 * quadLength - 1 - j], // top right
        matrix[2 * quadLength - 1 - i][2 * quadLength - 1 - j], // corner
        matrix[2 * quadLength - 1 - i][j], // bottm left
      ];

      console.log(...possibleValues);

      sum += Math.max(...possibleValues);
      console.log(sum);
    }
  }
  return sum;
}

console.log(flippingMatrix(matrix));
