// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  var strings = []
  var counter = 0
  while(counter < n){
    var string = ""

    for(var b = 0; b < (counter + 1); b++){
      string = "#" + string
    }

    for(var b = 0; b < (n - (counter + 1)); b++){
      string = string + " "
    }

    strings.push(string)
    counter ++
  }

  strings.forEach((string) => {
    console.log(string)
  })
}
