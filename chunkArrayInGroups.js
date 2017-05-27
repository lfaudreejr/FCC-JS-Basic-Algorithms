function chunkArrayInGroups(arr, size) {
  // Break an array into chunks of size and enter them into a multidimensional array
  
  var len = arr.length;
  var sliced = [];
  
  for(var i = 0, k = 0; i < len; i = i + size, k++){
    sliced[k] = arr.slice(i, i + size);
  }
  
  
  return sliced;
}