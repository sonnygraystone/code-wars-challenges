function squareDigits(num) {
  const digits = num.toString().split("");
  const realDigits = digits.map(Number);
  const multiply = realDigits.map((x) => {
    return Math.pow(x, 2);
  });
  return Number(multiply.join(""));
}

// 9414

console.log(squareDigits(3212));
