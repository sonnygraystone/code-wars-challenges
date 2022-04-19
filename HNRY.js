// total amount
// if amount is less than 14000 take 10.5%
// if amount is 48,000 take above tax rate and take 17.5 from 34,000
// take above amounts again for both tax brackets - if amount is below 70,000 take another 30% from 22,000
// if over 33% take the above total and 33% off any other amount

let totalTax = 0;

const calculate = (income) => {
  totalTax = 0;
  if (income <= 14000) {
    return firstBracket(income);
  }
  if (income <= 48000) {
    return secondBracket(income);
  }
  if (income <= 70000) {
    return thirdBracket(income);
  }
  if (income > 70000) {
    return finalBracket(income);
  }
  return income;
};

function firstBracket(income) {
  totalTax += income * 0.105;
  return totalTax;
}

function secondBracket(income) {
  totalTax += 1470 + 34000 * 0.175;
  return totalTax;
}

function thirdBracket(income) {
  totalTax += 7420 + 22000 * 0.3;
  return totalTax;
}

function finalBracket(income) {
  const finalTaxAmount = income - 70000;
  totalTax += 14020 + finalTaxAmount * 0.33;
  return totalTax;
}

console.log(calculate(14000));
