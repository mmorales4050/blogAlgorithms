// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(string) {
  var characterMap = {}
  string.split("").forEach((char) => {
    characterMap[char] ? characterMap[char] ++ : characterMap[char] = 1
  })
  return Object.keys(characterMap).reduce((a, b) => {
    return (characterMap[a] > characterMap[b] ? a : b)
  })
}
