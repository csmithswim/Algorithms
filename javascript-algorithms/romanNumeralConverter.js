/* Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case. */

//? Take an integer as a paramter, return as a roman numeral. Find range of roman numbers. 


function convertToRoman(num) {

//can't have more than three roman numerals consecutively, except for IIII
//When a symbol appears after a larger (or equal) symbol it is added
//But if the symbol appears before a larger symbol it is subtracted


let romanNumerals = [I, IV, V, IX, X, XX, XXX, XL, L, LX, LXX, XC, C, CCC, CD, D, DC, DCC, DCCC, CM, M];
let num [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    console.log();
    return num;

// const I = 1;
// const V = 5;
// const L = 50;	
// const C = 100;	
// const D = 500;	
// const M = 1000;

}
   
convertToRoman(36);
   
/*
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"

*/