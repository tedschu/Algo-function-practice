function diagonalDifference(arr) {
  const arrLength = arr.length - 1;

  // Pointers
  let startLeft = 0;
  let startRight = arrLength;
  let arrayCounter = 0;

  // Values to compare
  let startLeftTotal = 0;
  let startRightTotal = 0;

  // Two-pointer, one top left, one top right
  for (let i = 0; i < arr.length; i++) {
    startLeftTotal += arr[arrayCounter][startLeft];
    startRightTotal += arr[arrayCounter][startRight];

    arrayCounter++;
    startLeft++;
    startRight--;
  }

  // Stores result and converts to positive as needed
  const result = Math.abs(startLeftTotal - startRightTotal);

  return result;
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
