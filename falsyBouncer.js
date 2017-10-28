function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var falsies = [-0, 0, false, null, "", undefined];
  return arr.filter(function(x) {
    return falsies.every(function(y) {
      return x !== y;
    })
      ? x
      : false;
  });
}

bouncer([7, "ate", "", false, 9]);
