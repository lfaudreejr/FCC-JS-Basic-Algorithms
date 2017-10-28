function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments).slice(1, arr.length);
  return arr.filter(function(x) {
    return args.indexOf(x) == -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
