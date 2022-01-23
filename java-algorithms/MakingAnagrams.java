package com.csmithswim;

import java.util.HashMap;
import java.util.Map;

public class MakingAnagrams {

    public static int makeAnagram(String a, String b) {
        Map<String, Integer> mapA = new HashMap<>();
        Map<String, Integer> mapB = new HashMap<>();

        int charsToBeDeleted = 0;

        for (String e : a.split("")) {
            if (!mapA.containsKey(e)) {
                mapA.put(e, 1);
            } else {
                mapA.put(e, mapA.get(e) + 1);
            }
        }

        for (String e : b.split("")) {
            if (!mapB.containsKey(e)) {
                mapB.put(e, 1);
            } else {
                mapB.put(e, mapB.get(e) + 1);
            }
        }

        for (String key : mapA.keySet()) {

            if (!mapB.containsKey(key)) {
                charsToBeDeleted += mapA.get(key);
            }
            if (mapA.containsKey(key) && mapB.containsKey(key)) {
                System.out.println("mapA: " + key + " = " + mapA.get(key));
                System.out.println("mapB: " + key + " = " + mapB.get(key));

                charsToBeDeleted += Math.abs(mapA.get(key) - mapB.get(key));
            }
        }

        for (String key : mapB.keySet()) {
            if (!mapA.containsKey(key)) {
                charsToBeDeleted += mapB.get(key);
            }
        }

        System.out.println(mapA);
        System.out.println(mapB);
        return charsToBeDeleted;


    }

}

