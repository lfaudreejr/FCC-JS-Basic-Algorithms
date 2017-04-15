function truncateString(str, num) {
//truncate a string and add "..." to the end
//if the string is less than or equal to 3 the dots do not add to the length of the string

  var dots = "...";
  var str1 = str.slice(0, num - 3).concat(dots);
  var str2 = str.slice(0, num).concat(dots);
  
  if(num <= 3){
    return str2;
  } else if(num >= str.length) {
    return str;
  } else {
    return str1;
  }
  
}