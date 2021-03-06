function myMap(array, func) {
  var result = [];
  array.forEach(function(value) {
    result.push(func(value));
  });
  
  return result;
}

var plusOne = function(n) { return n + 1; };

myMap([1, 2, 3, 4], plusOne);
