/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].*/ 


function largestOfFour(arr) {
    let newArr = [];
    let finalArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] =  arr[i].sort(function(b,a){
            return a-b
        })     
    }         
       for (let i = 0; i < newArr.length; i++) {
        finalArr[i] = newArr[i][0];   

            }
            return finalArr;
}
  
  largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);

