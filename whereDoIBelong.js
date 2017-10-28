function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var copyArr = arr.map(function(x) {
    return x;
  });

  copyArr.push(num);

  return copyArr
    .sort(function(a, b) {
      return a - b;
    })
    .indexOf(num);
}

getIndexToIns([40, 60], 50);
