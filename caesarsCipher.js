function rot13(str) {
  // LBH QVQ VG!
  //store input str to Uppercase
  var input = str.toUpperCase();
  //output string in uppercase after conversion
  var output = "";
  var temp = "";

  //loop though input
  for (i = 0, k = input.length; i < k; i++) {
    //convert each input char to ascii
    var ascii = input.charCodeAt(i);
    var cipher = ascii + 13;
    if (ascii <= 90 && cipher > 90) {
      do {
        cipher = cipher - 91 + 65;
        console.log(cipher);
      } while (cipher > 90);

      temp = String.fromCodePoint(cipher);
      output += temp;
    } else if (ascii <= 90 && ascii >= 65) {
      temp = String.fromCodePoint(cipher);
      output += temp;
    } else {
      temp = String.fromCodePoint(ascii);
      output += temp;
    }
  }

  return output;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
