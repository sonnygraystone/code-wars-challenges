// function descendingOrder(n) {
//   return Array.from(n.toString())
//     .map(Number)
//     .sort((a, b) => b - a)
//     .join()
//     .replaceAll(",", "");
// }

function descendingOrder(n) {
  var myArr = String(n)
    .split("")
    .map((num) => {
      return Number(num);
    });

  var orderedArr = myArr
    .sort((a, b) => {
      b - a;
    })
    .join()
    .replaceAll(",", "");
  return orderedArr;
}

console.log(descendingOrder(123456789));
