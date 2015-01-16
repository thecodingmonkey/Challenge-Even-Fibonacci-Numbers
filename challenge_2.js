exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
  // do your work here

  var seq = Array.apply(null, new Array(50)).map(Number.prototype.valueOf,1);  //.fill(0, 0, 10);
  seq = seq.map(function (currentValue, idx, arr) {
    return (idx < 2) ? arr[idx] = 1 : arr[idx] = arr[idx-1] + arr[idx-2];
  });

  function reduceFibonacci(prev, cur) {
    return ((cur % 2) === 0 && cur < n) ? prev + cur : prev;
  }

  return seq.reduce(reduceFibonacci, 0);

};