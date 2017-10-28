function mutation(arr) {
  var arg1 = arr[0].toLowerCase();
  var arg2 = arr[1].toLowerCase();
  var count = 0;

  for (var i = 0, l = arg2.length; i < l; i++) {
    var index = arg1.indexOf(arg2[i]);
    if (index !== -1) {
      count++;
    }
  }

  return count === arg2.length ? true : false;
}

mutation(["hello", "hey"]);
