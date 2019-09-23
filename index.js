// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var reversedString = []

  str.split("").forEach((char) => {reversedString.unshift(char)})

  return reversedString.join("")
}

module.exports = reverse;
