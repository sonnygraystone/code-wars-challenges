A = [9, 3, 9, 3, 9, 7, 9];

// function findOddOccurances(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] == array[j]) {
//         count++;
//       }
//     }
//     if (count % 2 != 0) {
//       return array[i];
//     }
//   }
// }

function solution(A) {
  let stack = {};
  for (let i = 0; i < A.length; i++) {
    if (typeof stack[A[i]] === "undefined") {
      stack[A[i]] = true;
    } else {
      delete stack[A[i]];
    }
  }
  return +Object.keys(stack)[0];
}

console.log(solution(A));
