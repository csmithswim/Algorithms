/* Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.*/

const fearNotLetter = (str) => {
  let missingLetterDigit;
  let missingLetter;

  for (let i = 0; i < str.length-1; i++) {

    // console.log(str.charCodeAt(i+1) - str.charCodeAt(i))

    if (str.charCodeAt(i+1) - str.charCodeAt(i) !== 1 ){

      missingLetterDigit = str.charCodeAt(i) + 1;
      missingLetter = String.fromCharCode(missingLetterDigit);
      
      // console.log(str.charCodeAt(i))
        
    }

  }

  console.log(missingLetterDigit);
  console.log(missingLetter);
  return missingLetter;
}

fearNotLetter("abce") 
/*should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/ 


// && isNaN(str.charCodeAt(i+1) - str.charCodeAt(i)) === false Using isNaN to test for NaN