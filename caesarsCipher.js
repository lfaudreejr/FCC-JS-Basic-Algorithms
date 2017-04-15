function caesars(str) { // LBH QVQ VG!
  
  //store input str to Uppercase
  var input = str.toUpperCase();
  //output string in uppercase after conversion
  var output = new String();
  var temp = new String();

  //loop though input
  for(i = 0, k = input.length; i < k; i++)
  {
    //convert each input char to ascii
    var ascii = input.charCodeAt(i);
    var cipher = ascii + 13;
    if(ascii <= 90 && cipher > 90)
    {
      //keep cipher between A-Z if it may fall outside that range
      do
      {
        cipher = ((cipher - 91) + 65);
        console.log(cipher);
      }
      while (cipher > 90);
      //store new cipher and convert to output
      temp = String.fromCodePoint(cipher);
      output += temp;

    }
    else if (ascii <= 90 && ascii >= 65)
    {
      //if cipher is uppercase is between 65 and 90
      //store new cipher and convert to output
      temp = String.fromCodePoint(cipher);
      output += temp;
    }
    else
    {
      //anything that should not be A-Z gets printed normal
      temp = String.fromCodePoint(ascii);
      output += temp;
    }

  }

  return output;
}

// Change the inputs below to test
caesars("SERR PBQR PNZC");
