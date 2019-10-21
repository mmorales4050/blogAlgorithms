// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


function matrix(n) {
  // create result matrix

  var results = []

  while(results.length < n) {
    results.push([])
  }

  var counter = 1
  var startRow = 0
  var startCol = 0
  var endRow = n - 1
  var endCol = n - 1

  while(startRow <= endRow && startCol <= endCol){
    // top row
    for(var i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter
      counter ++
    }
    startRow ++

    // end col
    for(var i = startRow; i <= endRow; i++){
      results[i][endCol] = counter
      counter ++
    }
    endCol --

    for(var i = endCol; i >= startCol; i--){
      results[endRow][i] = counter
      counter ++
    }
    endRow --

    for(var i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter
      counter ++
    }
    startCol ++
  }
  return results
}


module.exports = matrix;
