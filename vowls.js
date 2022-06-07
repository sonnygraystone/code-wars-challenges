// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  //length gives the total number returned / remove length to show vowls.
  const count = str.match(/[aeiou]/gi).length;
  return count;
}

console.log(getCount("abracadabra"));
