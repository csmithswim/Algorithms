/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */ 

function truncateString(str, num) {

  let tStr = str.substring(0,num)+"...";
  if (num >= str.length){
  console.log(str);
  return str;
  } else 
  console.log(tStr)
  return tStr;
  
}

truncateString("Absolutely Longer", 2);
