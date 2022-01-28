package com.csmithswim;

public class TwoStrings {
    public static String twoStrings(String s1, String s2) {
        String output = "NO";
        Map<Character, Integer> s1Map = new HashMap<>();
        for (char e : s1.toCharArray()) {
            s1Map.put(e, 1);
        }

        for (char e : s2.toCharArray()) {
            if (s1Map.containsKey(e)) {
                output = "YES";
                break;
            }
        }
        return output;
    }
}
