function titleCase(str) {
  
  str = str.toLowerCase().replace(/(^|\s)[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });
  
  return str;
}