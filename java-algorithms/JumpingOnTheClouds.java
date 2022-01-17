package com.csmithswim;

public class JumpingOnTheClouds {

    public static int jumpingOnClouds(List<Integer> c) {
        int steps = 0;
        for (int i = 0; i < c.size() - 1; i++) {
            steps++;
            if (i + 2 < c.size() && c.get(i + 2) == 0) {
                i++;
            }
        }
        return steps;
    }
}
