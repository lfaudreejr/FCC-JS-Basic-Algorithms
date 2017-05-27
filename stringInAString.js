function mutation(arr) {
  
  var arr1 = arr[0].toLowerCase();
  var arr2 = arr[1].toLowerCase();
  var count = 0;
  
    for(var j = 0, l = arr2.length; j < l; j++ ) {
      var k = arr1.indexOf(arr2[j]);
      console.log(k);
      if (k !== -1){
        count++;
      }
    }
  
  
  if(count === arr2.length){
    return true;
  }
  
  return false;

}