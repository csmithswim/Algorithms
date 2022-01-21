package com.csmithswim;

public class AlternatingCharacters {

    //slow solution that finds alternating characters
    public static void findAlternatingCharacters() {
        String s = "AAAA";
        String s1 = "BBBBBB";
        String s2 = "ABABABAB";
        String s3 = "BABABA";
        String s4 = "AAABBB";

        StringBuilder string = new StringBuilder(s);

        int count = 0;
        for (int i = string.length() - 1; i > 0; i--) {
            if (string.charAt(i) == string.charAt(i - 1)) {
                string.deleteCharAt(i);
                count++;
            }
        }
    }
}
