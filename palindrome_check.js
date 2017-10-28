function palindrome(str) {
  // Good luck!
  var regex = /[^A-Za-z0-9]/g;
  var forward = str.replace(regex, "").toLowerCase();
  var backward = str
    .replace(regex, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  return forward === backward ? true : false;
}

palindrome("eye");
