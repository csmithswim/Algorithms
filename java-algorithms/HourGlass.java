package com.csmithswim;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class HourGlass {
    public static int hourglassSum(List<List<Integer>> arr) {
        //find pattern of hourglass in 2d arr
        //traverse through 2d arr and sum up each hour glass
        //sum all hour glass patterns in 2d arr, there are 16 total
        //return the maximum of all patterns
        //4 traversals horizontally/vertically

        List<Integer> sumsOfArr = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                int sum = 0;
                sum += arr.get(i).get(j) + arr.get(i).get(j + 1) + arr.get(i).get(j + 2) + arr.get(i + 1).get(j + 1) +
                        arr.get(i + 2).get(j) + arr.get(i + 2).get(j + 1) + arr.get(i +2).get(j +2);
                sumsOfArr.add(sum);
            }
        }
        return Collections.max(sumsOfArr);
    }
}
