/* Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {

  var patt1 = /[^?a-z]/g;
  var result = str.match(patt1);
  console.log(result)
  //Use a regex to find when the pattern breaks and return the missing letter

    return str;
  } 
  
  fearNotLetter("abce");

  
/*

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

*/ 