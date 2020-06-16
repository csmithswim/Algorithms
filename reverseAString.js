// Define a function that will reverse a string passed as an argument.

//Below is one way to define the function. We define a for loop that will iterate starting at the last character of whatever string we pass and cocatenate to a new empty string we define on the global scope.

let reversedStr = "";
function reverseString(str) {
    for (i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

  // Another way to reverse a string.

  function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }


  console.log(reverseString("hello"));

  
  

