function findLongestWord(str) {
  return str
    .split(" ")
    .sort(function(a, b) {
      return a.length < b.length;
    })
    .shift().length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
