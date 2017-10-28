function largestOfFour(arr) {
  //RETURN LARGEST NUMBERS IN ARRAYS  //
  //Return an Array consisting of the largest number from each sub-array//

  return arr.map(function(a) {
    return a.reduce(function(x, y) {
      return x < y ? y : x;
    });
  });
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
