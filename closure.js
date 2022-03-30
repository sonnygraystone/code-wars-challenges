// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// e.g. explode("312"); // => "333122"

function explode(s) {
  return s
    .split("")
    .map((d) => {
      let y = "";
      for (let i = 0; i < +d; i++) {
        y += d;
      }
      return y;
    })
    .join("");
}

function explode(s) {
  return s
    .split("")
    .map((e) => e.repeat(+e))
    .join("");
}
