function palindrome(num) {
  const reveresed =
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

  if (reveresed == num) {
    return false;
  } else {
    return true;
  }
}

console.log(palindrome(1212));
