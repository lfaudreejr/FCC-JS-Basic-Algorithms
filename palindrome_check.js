function palindrome(str) {
  //Regex for all non-alhpanumeric chars
  var regex = /[^A-Za-z0-9]/g;
  //Normal word with all non-alphanumeric chars removed and set to lowercase
  var forward = str.replace(regex, "").toLowerCase();
  //word backwards with non-alhpanumeric chars removed and set to lowercase
  var backward = str.replace(regex, "").toLowerCase().split("").reverse().join("");
 
  //Check if the normal and reversed words match
  if(forward === backward){
    return true;
  }
  else {
    return false;
  }
  
}