// function decimalPlaces(n) {
//   // Convert to String
//   const numStr = String(n);
//   // String Contains Decimal
//   if (numStr.includes(".")) {
//     return numStr.split(".")[1].length;
//   }
//   // String Does Not Contain Decimal
//   return 0;
// }
// console.log(decimalPlaces(3.14));
// //returns 2

// ;

const check = (num) => {
  return parseFloat(num).toFixed(2);
};

console.log(check(2.e-14));
