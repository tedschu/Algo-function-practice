// OPTION 1: Using a Set with a loop: works, but requires a loop to build the set (unnecessary) AND doesn't check for irrelevant characters like nums

// function pangram(s) {
//   // Does string (s) equal 26 unique values?
//   // Ignore letter case
//   const cleanString = s.toLowerCase().replaceAll(" ", "");

//   // A Set is a collection of unique values
//   const set = new Set();

//   for (let i = 0; i < cleanString.length; i++) {
//     set.add(cleanString[i]);
//   }

//   if (set.size === 26) {
//     return "pangram";
//   } else return "not pangram";
// }

// console.log(
//   pangram("We promptly judged antique ivory buckles for the next prize")
// );

// OPTION 2: FASTER AND MORE SPACE-EFFICIENT:
// Creates a Set from the string (s) and sets to lowercase + only adds characters a-z usign regex expression
// We can then look at the size of the set: if equals 26, then it is a pangram.
function pangram(s) {
  const set = new Set(s.toLowerCase().match(/[a-z]/g));

  if (set.size === 26) {
    return "pangram";
  } else {
    return "not pangram";
  }
}

console.log(
  pangram("We promptly judged antique ivory buckles for the next prize")
);
