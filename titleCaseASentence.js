/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
*/
//? Apply all substrings in the string to toUpperCase(), transform them to an array using split(""), then store the first substring of each element of this new array into another away and then cocatanate the arrays. 

function titleCase(str) {
  let upperStr = str.toUpperCase();
  let lowerStr = str.toLowerCase();
  let newLowerStr = lowerStr.split(" ");
  let newUpperStr = upperStr.split(" ");
  let titleStr = [];
  let genStr = [];


  for (let i = 0; i < newUpperStr.length; i++) {

    titleStr[i] = newUpperStr[i][0];


  }
    // return titleStr;


  for (let i = 0; i < newLowerStr.length; i++) {
    
    genStr = newLowerStr[i].slice(1)
console.log(genStr)
  }
  // return genStr
 
  console.log(titleStr + genStr)
}
  titleCase("I'm a little tea pot");
