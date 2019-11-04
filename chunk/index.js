// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  var originalSize = size
  var subArray = []
  var resultArray = []

  while(array.length > 0){
    while(size > 0 && array.length > 0){
      subArray.push(array.shift())
      size --
    }
    resultArray.push(subArray)
    size = originalSize
    subArray = []
  }
  return resultArray
}


function chunk(array, size) {
  var originalSize = size
  var subArray = []
  var resultArray = []
  while(array.length > 0){
    while(size > 0 && array.length > 0){
      subArray.push(array.shift())
      size --
    }
    resultArray.push(subArray)
    size = originalSize
    subArray = []
  }
  return resultArray
}

module.exports = chunk;
