/*
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
    var pigLatin = "";
    var regex = /[aeiou]/gi;
  
    if (str[0].match(regex)) {
      pigLatin = str + "way";
    } else if (str.match(regex) === null) {
      pigLatin = str + "ay";
    } else {
      var vowelIndice = str.indexOf(str.match(regex)[0]);
  
      pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
  
    return pigLatin;
}
  
translatePigLatin("consonant");
translatePigLatin("california") /*should return "aliforniacay".*/
translatePigLatin("paragraphs") /*should return "aragraphspay".*/
translatePigLatin("glove") /*should return "oveglay".*/
// translatePigLatin("algorithm") /*should return "algorithmway".*/
// translatePigLatin("eight") /*should return "eightway".*/

// Should handle words where the first vowel comes in the middle of the word. 
translatePigLatin("schwartz") /* should return "artzschway". */
// Should handle words without vowels. 
translatePigLatin("rhythm") /* should return "rhythmay". */