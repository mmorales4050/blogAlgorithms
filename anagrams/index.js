// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  var strings = [stringA, stringB]
  strings = strings.map((string) => string.replace(/[^\w]/g, "").toLowerCase())
  if(strings[0].length !== strings[1].length){
    return false
  }else{
    var anagrams = strings.map((string) => {
      var anagram = {}
      string.split("").forEach((char) => {
        if(anagram[char]){
          anagram[char] ++
        }else{
          anagram[char] = 1
        }
      })
      return anagram
    })
    var bool = true
    Object.keys(anagrams[0]).forEach((key) => {
      if(anagrams[0][key] !== anagrams[1][key]){
        bool = false
      }
    })
    return bool
  }
}

module.exports = anagrams;
