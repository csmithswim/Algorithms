package com.csmithswim;

class Solution {
    public boolean isPalindrome(int x) {
        String[] xStringArray = String.valueOf(x).split("");
        for (int i = 0, j = xStringArray.length - 1; i < xStringArray.length / 2; i++, j--) {
            if (!xStringArray[i].equals(xStringArray[j])) {
                return false;
            }
        }
        return true;
    }

    //Solution using math to achieve o(n^2) complexity
    public boolean isPalindromeMath(int num){
        if(num < 0) return  false;
        int reversed = 0, remainder, original = num;
        while(num != 0) {
            remainder = num % 10; // reversed integer is stored in variable
            reversed = reversed * 10 + remainder; //multiply reversed by 10 then add the remainder so it gets stored at next decimal place.
            num  /= 10;  //the last digit is removed from num after division by 10.
        }
        // palindrome if original and reversed are equal
        return original == reversed;
    }
}