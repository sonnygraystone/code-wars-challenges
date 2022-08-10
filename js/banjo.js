// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// name + " plays banjo"
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  const outputString = name.substr(0, 1);
  if (outputString.toLowerCase() === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
console.log(areYouPlayingBanjo("ronald"));
