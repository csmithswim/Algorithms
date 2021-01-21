public class Solution {

    // Complete the plusMinus function below.
    static void plusMinus(int[] arr) {
        float positive = 0;
        float zero = 0;
        float negative=0;
        for (int element: arr){
            if (element < 0){
                negative++;
            }
            if (element == 0){
                zero++;
            }
            if (element > 0){
                positive++;
            }
        }
        System.out.println(positive/arr.length);
        System.out.println  (negative/arr.length);
        System.out.println(zero/arr.length);
    }