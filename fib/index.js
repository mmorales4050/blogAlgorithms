// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   var numbers = [0, 1]
//   var index = 2
//   if(n === 1){
//     return 1
//   }else if(n === 0){
//     return 0
//   }else {
//     while(index <= n) {
//       numbers.push((numbers[index - 2] + numbers[index - 1]))
//       index = index + 1
//     }
//     return numbers.pop()
//   }
// }

function memoize(fn) {

  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}

function fib(n) {
  if( n < 2 ) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

fib = memoize(fib)

module.exports = fib;
