// write your code in JavaScript (Node.js 8.9.4)

function solution(T) {
  if (T < 35.0) {
    return "hypothermia";
  }

  if (T >= 35.0 && T <= 37.5) {
    return "normal";
  }

  if (T >= 37.5 && T < 40) {
    return "fever";
  }

  if (T > 40) {
    return "hyperpyrexia";
  }
}

console.log(solution(40.0));
