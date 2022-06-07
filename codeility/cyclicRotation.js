// loop through array
// take last
// input to front
// repeat for K times

let A = [2, 4, 6, 8, 10, 12, 14, 16];
let K = 3;

// function moveItem(array, k) {
//   for (i = 0; i < k.length; i++) {
//     const findLastIndexOfArray = array[array.length - 1];
//     const addToFrontOfArray = [lastIndex, ...array];
//     const removeLastArr = dupeArr.pop();
//   }
//   return addToFrontOfArray;
// }

// function solution(A, K) {
//   console.log("???", K / A.length);
//   const index = K % A.length;
//   return A.splice(A.length - index, index).concat(A);
// }

function solution(A, K) {
  for (let i = 0, k = K % A.length || 0; i < k; i++) {
    A.unshift(A.pop());
  }
  return A;
}

console.log(solution(A, K));
