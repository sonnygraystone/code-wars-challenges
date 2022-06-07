function solution(num) {
  let totalCount = 0;
  let currentCount;
  const toBinary = num.toString(2);
  // 1 00000 1 000 1
  // Count 0s

  for (i = 0; i < toBinary.length; i++) {
    currentCount = 0;
    while (toBinary[i] == 0) {
      // console.log("This is the currentCount", currentCount);
      currentCount++ && i++;
    }

    totalCount = Math.max(totalCount, currentCount);
  }
  return totalCount;
}

console.log(solution(1041));
