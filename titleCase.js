function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });
}

titleCase("I'm a little tea pot");
