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

  // function reverseString(str) { //using the split, rever and join methods. Split takes a string and splits the characters into an array. Reverse is an array method that reverses the elements of an array and join is an array method that joins the elements into a string.
  //   return str
  //     .split("")
  //     .reverse()
  //     .join("");
  // }


  console.log(reverseString("Greetings from Earth"));

  
  

