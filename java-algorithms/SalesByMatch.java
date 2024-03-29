package com.csmithswim;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SalesByMatch {
    public static int sockMerchant(int n, List<Integer> ar) {
        Map<Integer, Integer> sockMap = new HashMap<>();
        for (int e : ar) {
            if (sockMap.containsKey(e)) {
                sockMap.put(e, sockMap.get(e) + 1);
            } else {
                sockMap.put(e, 1);
            }

        }
        int unsortedSocks = 0;
        for (Integer value : sockMap.values()) {
            if (value > 1) {
                unsortedSocks += (value/2);
            }
        }
        return unsortedSocks;
    }
    //done with one pass
    Set<Integer> colors = new HashSet<>();
    int pairs = 0;

    for (int i = 0; i < n; i++) {
        if (!colors.contains(c[i])) {
            colors.add(c[i]);
        } else {
            pairs++;
            colors.remove(c[i]);
        }
    }

    System.out.println(pairs);
}
