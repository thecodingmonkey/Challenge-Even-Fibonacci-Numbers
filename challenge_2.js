exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  // do your work here
  var a= 1, b = 1; // first values of sequence

  while (true) {  // no terminating condition, we terminate by returning
                  // in the if statement below

    var nextVal = a + b;  // calculate next value in sequence

    if (nextVal > n) { // we are done if we pass n
      return sum;
    }

    // check is nextVal is even, add to sum if it is
    if ((nextVal % 2) === 0) {
      sum = sum + nextVal;
    }

    // shift current values to [b, nextVal] from [a, b]
    a = b;
    b = nextVal;
  }

  return sum;  // we never reach here
};