function flippingBits(n) {
  return ~n >>> 0;
}

console.log(flippingBits(5));

// console.log(~5 >>> 0); // gives us 4294967290 (what we want!)
