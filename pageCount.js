// FIRST ATTEMPT: Create start, end, and target points...return the lowest difference
// function pageCount(n, p) {
//   // Find target, start, and end points
//   // Calculate the lowest difference and return

//   const startPoint = 1;
//   const endPoint = Math.floor(n / 2 + 1); // If each open book page === 1 ([0,1], [1,2]), then how many open book pages are there in total?
//   const target = Math.floor(p / 2 + 1);

//   if (endPoint - target <= target - startPoint) {
//     return endPoint - target;
//   } else return target - startPoint;

// }

// console.log(pageCount(13, 7));

// MORE EFFICIENT / SIMPLER: think of the problem in terms of "page turns," calculating from front and from back to target page
function pageCount(n, p) {
  // n = num of pages in book, p = target page

  const turnsFromFront = Math.floor(p / 2);
  const turnsFromBack = Math.floor(n / 2) - Math.floor(p / 2);

  return Math.min(turnsFromBack, turnsFromFront);
}

console.log(pageCount(13, 9));
