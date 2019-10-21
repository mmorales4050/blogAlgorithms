// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  var spaces = n - 1
  var pounds = 1
  var counter = 1

  while(counter <= n){
    var string = " ".repeat(spaces) + "#".repeat(pounds) + " ".repeat(spaces)
    console.log(string)
    pounds = pounds + 2
    spaces --
    counter ++
  }
}


module.exports = pyramid;
