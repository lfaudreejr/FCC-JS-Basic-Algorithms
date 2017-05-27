//factorialize a number
function factorialize(num) {
  var n = num;
  
  //if we hit our base then stop
  if(n < 1){
    return 1;
  }
  
  //multiply current number by the next lowest number
  return n * factorialize(n - 1);
  
}