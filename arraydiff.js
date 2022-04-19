function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}



//   arrayDiff([1,2],[1]) == [2]
//   arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//     e = [];
//     a = [1, 2];
//     b = [3, 3];
//     if (a.filter((e) => !b.includes(e))) {
//       console.log({ a });
//       console.log({ b });
//       console.log({ e });

//       return "woot";
//     } else {
//       return "nope";
//     }
//   }

//   console.log(arrayDiff());

//   arrayDiff([1,2],[1]) == [2]
//   arrayDiff([1,2,2,2,3],[2]) == [1,3]
