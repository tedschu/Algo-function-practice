function countingSort(arr) {
  // Creates array with 100 index values of 0 (per instructions)
  const resultArray = new Array(100).fill(0);

  // Loop throuh arr array and count (+1) on the index value of resultArray that corresponds to the value of arr (e.g. if arr value is 24, I need to increment index of 24 in resultArray)

  for (let i = 0; i < arr.length; i++) {
    resultArray[arr[i]]++;
  }

  return resultArray;
}

console.log(
  countingSort([24, 23, 1, 2, 4, 3, 5, 7, 7, 6, 4, 8, 4, 23, 6, 98, 55])
);
