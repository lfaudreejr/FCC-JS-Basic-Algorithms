function destroyer(arr) {
  // Remove all the values
  //Create an Array from arr[0];
  var list = Array.from(arr);
  
  //Get all arguments

  var args = [].slice.call(arguments);
  //Remove arr[o];
  var first = args.shift();
  
  var removed;
  
  for(var i = 0; i < args.length; i++){
    for(var j = 0; j <= list.length; j++){
      if(args[i] == list[j]){
        var position = list.indexOf(list[j]);
        console.log(position);
        remove = list.splice(position, 1);
        j--;
        
      }
    }
  }

  
  return list;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);