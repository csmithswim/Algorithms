/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {

  let newArr = str.split(" ");

  let finalStr = '';

  for (let i = 0; i < newArr.length; i++) {
    
    finalStr += newArr[i][0].toUpperCase()
    finalStr += newArr[i].slice(1).toLowerCase()
    finalStr += " "
  }
  
  console.log(finalStr)  
  return finalStr.trim();

  return finalStr;

}

  // for (let i = 0; i < newArr.length; i++) {

  //   lowerCase[i] = newArr[i].slice(1).toLowerCase()
    
  // }

  // for (let i = 0; i < upperCase.length; i++) {

  //   finalStr[i] = upperCase[i] + lowerCase[i];
    
  // }

  
  // let fStr = finalStr.join(' ')

  // console.log(fStr)

  // return str;
// }

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

/* titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout. */