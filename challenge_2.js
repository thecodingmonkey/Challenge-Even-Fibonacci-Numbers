exports.sumOfEvenFibonacciNumbers = function(n){
  return Array.apply(null, new Array(50)).map(Number.prototype.valueOf,1).map(function (currentValue, idx, arr) { return (idx < 2) ? arr[idx] = 1 : arr[idx] = arr[idx-1] + arr[idx-2]; }).reduce(function (prev, cur) { return ((cur % 2) === 0 && cur < n) ? prev + cur : prev; }, 0);
};