// https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF

function solution(a) {
  let maxNum = a.length + 1;
  console.log("maxNum", maxNum);
  // 5

  let totalSum = (maxNum * (maxNum + 1)) / 2;
  // 5 + 4 + 3 + 2 + 1 = 15
  console.log("totalSum", totalSum);
  let partialSum = 0;
  for (let i = 0; i < a.length; i++) {
    partialSum += a[i];
    //(2. 5, 6) finally ends on 11 after iternating through
    console.log("partial sum", partialSum);
  }
  // 15 - 11
  console.log("end total sum", totalSum);
  console.log("end partial sum", partialSum);
  return totalSum - partialSum;
}

solution([2, 3, 1, 5]);
