// Also, could you write a quick example of using .reduce() to sum numbers in an array?
//This would help demonstrate both callbacks and reduce's typical use case.

const sumNums = (array) => {
  return array.reduce((initial, num) => initial + num, 0);
};

console.log(sumNums([1, 2, 3, 4]));

console.log([] == false);
