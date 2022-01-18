package com.csmithswim;

public class CountingValleys {

    public static void countValleys(String input) {
        //input
        //int steps, the steps of hike(length of String input)
        //String path(the characters that describe the path, i.e. UDUUUDD)
        //output
        //int # of valleys traversed
        //test input0
        //8
        //UDDDUDUU

        input = "UDDDUDUU";

        int altitude = 1;
        int valleyCounter = 0;
        for (int i = 0; i < input.length(); i++) {
            if (input.charAt(i) == 'U') {
                altitude++;
            }
            else if (input.charAt(i) == 'D') {
                altitude--;
            }
            if (i + 1 < input.length()) {
                if (input.charAt(i + 1) == 'U' && altitude == 0) {
                    valleyCounter++;
                }
            }
        }
        System.out.println(valleyCounter);
    }
}
