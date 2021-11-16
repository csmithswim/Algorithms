package com.csmithswim;

import java.util.Arrays;
import java.util.Map;
import java.util.TreeMap;

public class SherlockHolmesAndTheRemovingOfCharacters {

    public static void solution(String firstString, String secondString) {
        char[] firstArray = firstString.toLowerCase().toCharArray();
        char[] secondArray = secondString.toLowerCase().toCharArray();
        Arrays.sort(firstArray);
        Arrays.sort(secondArray);

        Map<Character, Integer> map  = new TreeMap<>();
        Map<Character, Integer> map2 = new TreeMap<>();

        for (char e : firstArray) {
            if (map.containsKey(e)) {
                map.put(e, map.get(e) + 1);
                continue;
            }
            map.put(e, 1);
        }

        for (char e : secondArray) {
            if (map2.containsKey(e)) {
                map2.put(e, map2.get(e) + 1);
                continue;
            }
            map2.put(e, 1);
        }

        for (var e : map.keySet()) {
            if (map2.containsKey(e)) {
                if (map.get(e) > map2.get(e)) {
                    map.put(e, map.get(e) - map2.get(e));
                    map2.put(e, 0);
                } else if (map2.get(e) > map.get(e)) {
                    map2.put(e, map2.get(e) - map.get(e));
                    map.put(e, 0);
                } else if (map.get(e) == map2.get(e)) {
                    map.put(e, 0);
                    map2.put(e, 0);
                }
            }
        }

        int sum = 0;
        for (var e : map2.values()) {
            sum += e;
        }
        for (var e : map.values()) {
            sum += e;
        }
        System.out.println(sum);
    }
}
