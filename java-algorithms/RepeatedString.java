package com.csmithswim;

public class RepeatedString {
    public static long repeatedString(String s, long n) {
        long count = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'a') {
                count++;
            }
        }

        long factor = n/s.length();
        long remainder = n % s.length();
        count = factor * count;
        for (int i =0; i < remainder; i++) {
            if (s.charAt(i) == 'a') {
                count++;
            };
        }

        return count;

    }
}
