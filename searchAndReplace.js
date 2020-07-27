/* 
Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after).Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/ 

//Todo split the first argument into an array, and then splice the third argument into where the second argument is in the first array.adminBtns


function myReplace(str, before, after) {
let newStr = str.split(" ");

let regex = /[A-Z]/;

  if (before[0].match(regex)){
    let capLet = after[0].toUpperCase()
    let partialStr = after.substring(1)
    let finalAfterStr = capLet.concat(partialStr);

      newStr.splice(newStr.indexOf(before), 1, finalAfterStr)

      let finalStr = newStr.join(' ');

  console.log(finalStr)

  return finalStr

    } else 

    newStr.splice(newStr.indexOf(before), 1, after)

    let finalStr = newStr.join(' ');

    console.log(finalStr)

    return finalStr;
}


// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling")  /* should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".

*/