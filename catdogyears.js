function humanYearsCatYearsDogYears(humanYears) {
  switch (humanYears) {
    case 1:
      return (arr = [1, 15, 15]);
    case 2:
      return (arr = [2, 24, 24]);
    default:
      return (arr = [
        humanYears,
        (humanYears - 2) * 4 + 24,
        (humanYears - 2) * 5 + 24,
      ]);
  }
}

console.log(humanYearsCatYearsDogYears(10));
