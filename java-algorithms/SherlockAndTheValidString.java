package com.csmithswim;
import java.util.HashMap;

public class SherlockAndTheValidString {

    public static String isValid(String s) {
    //char count must match
    // OR string input length == 1
    // OR if one char is removed from one index then char count must match
            //Math.abs(charCounta - charCount b) == 1 OR lowestCharCount == 1

        if (s.length() == 1) {
            return "YES";
        }
        HashMap<Character, Integer> countedChars = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            if (countedChars.containsKey(s.charAt(i))) {
                countedChars.put(s.charAt(i), countedChars.get(s.charAt(i)) + 1);
            } else {
                countedChars.put(s.charAt(i), 1);
            }
        }

        int charValueToCompare = countedChars.get('a');
        int isolatedCharValue = 0;
        int counter = 0;

        boolean flag = true;

        for (char i = 'b'; i < 'z'; i++) {
            if (countedChars.get(i) != null) {
                if (countedChars.get(i) != charValueToCompare) {
                    counter++;
                    isolatedCharValue = countedChars.get(i);
                }
            }
        }

        if (counter == 0) {
            return "YES";
        }
        if (counter == 1) {
            if (Math.abs(isolatedCharValue - charValueToCompare) == 1 || isolatedCharValue == 1) {
                return "YES";
            }
        }
        return "NO";
    }
}
