function isTrue(value){
  var emptystring = "";
  var n = null;
  var negzero = -0;
  var zero = 0;
  
  if(value !== n || value !== emptystring || value !== negzero || value !== zero){
    return value;
  }
  
  return false;
  
}


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  var arr1 = arr.filter(isTrue);
  
  return arr1;
}