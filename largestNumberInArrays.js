function largestOfFour(arr) {

//RETURN LARGEST NUMBERS IN ARRAYS  //
//Return an Array consisting of the largest number from each sub-array//
var largest = [];
  
    for(var i = 0, j = arr.length; i < j; i++){
      var n = 0;
      
      for(var k = 0, l = arr[i].length; k < l; k++){
   
        
        if(n < arr[i][k]){
          n = arr[i][k];
        }
        
        
      }
      
      largest.push(n);
      
    }
  
  return largest;
  
}