/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

//Algorithm questions.
//1. strings and intergers
// 2. Input is strings and intergers and the output is just strings.Input
// 3. I don't think so 
// 4. Yes? Idk ILR 
// 5. Idk
// 6.
// 7.

//I need to compare str.length to num and truncate or pop off the remaining str.length + ...



function truncateString(str, num){  
    // let arr = [];
    // arr += str; 
    // newArr = arr.slice(0, num)
    // console.log(newArr+"...");
      
  
} 
  function truncateString(str, num) {
   if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
   
  
  
truncateString("Peter Piper picked a peck of pickled peppers", 11);

  
