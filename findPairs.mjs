function findPairs(string) {
  const resultArray = [];

  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      resultArray.push(string[i] + string[i + 1]);
      i++;
    }
  }
  return resultArray;
}

console.log(findPairs("aadidjekoodirksrss")); // should return ["aa", "oo", "ss"]
