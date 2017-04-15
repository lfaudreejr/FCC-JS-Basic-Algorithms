function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  //insert num into array
  //sort the array
  //find the first index of num
  //return the index
  arr.push(num);
  var sorted = arr.sort(function(a, b){
    return a - b;
  });
  
  var index = sorted.indexOf(num);
  
  console.log(index);
  
  
  return index;
}

getIndexToIns([40, 60], 50);
