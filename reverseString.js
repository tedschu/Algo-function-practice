// function reverseString(s) {
//   const stringArray = s.split("");
//   const resultArray = [];

//   let i = 0;

//  while (stringArray.length > 0) {
//   resultArray.push(stringArray.pop());
// }

// return resultArray.join("");

// // Test the function
// console.log(reverseString("hello")); // Should print: olleh
// console.log(reverseString("test")); // Should print: tset

// function reverseString(s) {
//   const stringArray = s.split("");
//   const resultArray = [];

//   let fromStart = 0;
//   let fromEnd = stringArray.length - 1;

//   while (fromStart <= fromEnd) {
//     resultArray[fromEnd] = stringArray[fromStart];
//     resultArray[fromStart] = stringArray[fromEnd];

//     fromStart++;
//     fromEnd--;
//   }

//   return resultArray.join("");
//   // return REVERSED STRING VALUE
// }

function reverseString(s) {
  //return s.split("").reverse().join("");

  return s.split("").reduce((reverse, char) => char + reverse, "");
}

// Test the function
console.log(reverseString("hello")); // Should print: olleh
console.log(reverseString("theodore")); // Should print: tset
