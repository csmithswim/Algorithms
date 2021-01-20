public static int diagonalDifference(List<List<Integer>> arr) {
    // Write your code here
    int leftToRight = 0;
    int rightToLeft = 0;
    for (int i =0, j = arr.get(0).size()-1; i < arr.get(0).size(); i++, j--){
        leftToRight += arr.get(i).get(i);
        rightToLeft += arr.get(i).get(j);
    }      
     return Math.abs(rightToLeft - leftToRight);        
     }
}