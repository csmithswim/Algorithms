package com.csmithswim;

public class VacuumCleaner {

    public static boolean vacuumCleaner(String input) {
        //Given a string inputs "L, R, U, D" return if input returns.
        String[] inputArr = input.split("");
        int x = 0;
        int y = 0;

        for (int i = 0; i < inputArr.length; i++) {
            if ("L".equals(inputArr[i])) {
                x -= 1;
                continue;
            }
            if ("U".equals(inputArr[i])) {
                y += 1;
                continue;
            }
            if ("R".equals(inputArr[i])) {
                x += 1;
                continue;
            }
            if ("D".equals(inputArr[i])) {
                y -= 1;
            }
        }

        System.out.println(x == 0 & y == 0);
        return x == 0 & y == 0;
    }
}
