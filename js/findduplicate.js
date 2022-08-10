function findUniq(arr) {
  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  return arr.filter(unique);
}

console.log(findUniq([1, 0, 0]));
// console.log(findUniq([0, 1, 0]));
// console.log(findUniq([0, 0, 1]));
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([1, 1, 2, 1, 1]));
// console.log(findUniq([3, 10, 3, 3, 3]));

// console.log(uniqueChars);
