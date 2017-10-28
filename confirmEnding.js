function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var diff = str.length - target.length;
  var output = str.substring(diff);

  return output === target ? true : false;
}

confirmEnding("Bastian", "n");
