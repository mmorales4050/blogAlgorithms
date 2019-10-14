// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var stringObject = {}
  str.split("").forEach((char) => {
    stringObject[char] ? stringObject[char] ++ : stringObject[char] = 1
  })
  return Object.keys(stringObject).reduce((a, b) => {
    return (stringObject[a] > stringObject[b] ? a : b)
  })
}

module.exports = maxChar;
