function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var slen = str.length;
  var tlen = target.length;
  var len = slen - tlen;
  
  str = str.substring(len);
  
  if ( str === target) {
    return true;
  }
  return false;
}