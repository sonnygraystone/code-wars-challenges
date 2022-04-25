// Find the index of the array element you want to remove using indexOf, and then remove that index with splice.
// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

const array = [2, 5, 9];
const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array);
