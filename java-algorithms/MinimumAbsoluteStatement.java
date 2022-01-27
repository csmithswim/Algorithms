package com.csmithswim;

import java.util.Collections;
import java.util.List;

public class MinimumAbsoluteStatement {
    public static int minimumAbsoluteDifference(List<Integer> arr) {

        Collections.sort(arr);
        int minDifference = Integer.MAX_VALUE;

        for (int i = 0; i < arr.size() -1; i++) {
            if (arr.get(i + 1) - arr.get(i) < minDifference) {
                minDifference = arr.get(i + 1) - arr.get(i);
            }
        }

        return minDifference;


    }
}
