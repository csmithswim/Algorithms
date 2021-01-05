/* Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes. 

[x] spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
[x] spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
[x] spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".

[] spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
[] spinalCase("AllThe-small Things") should return "all-the-small-things".

*/ 
//? Remove _, whitespace, and make the string lowercase and put hyphens in between each substring.
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  // str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

 
// console.log(spinalCase('AllThe-small Things'));
console.log(spinalCase('thisIsSpinalTap'));
// console.log(spinalCase('This Is Spinal Tap'));
// console.log(spinalCase('The_Andy_Griffith_Show'));
// console.log(spinalCase('Teletubbies say Eh-oh'));


// function spinalCase(str) {
//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//   // Split on whitespace and underscores and join with dash
//   return str
//     .toLowerCase()
//     .split(/(?:_| )+/)
//     .join("-");
// }

spinalCase("This Is Spinal Tap");

// function spinalCase(str) {

//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }


