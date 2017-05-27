function findLongestWord(str) {
  
  //split input into an array of words
  var words = str.split(" ");
  var len = words.length;
  var largestword = 0;
  
  //iterate over each word in the array
  for(var i = 0; i < len; i++){
	//starting at zero, count the length of each word and store into largestword if larger then the current stored length
    if( largestword < words[i].length){
      largestword = words[i].length;
    }
  }

  return largestword;
}