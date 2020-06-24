/* You are given two arrays and an index. Use the array methods slice and splice to copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.

frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
All elements from the first array should be added to the second array in their original order.
The first array should remain the same after the function runs.
The second array should remain the same after the function runs.
*/ 

//?We are splicing arr1 into index n in arr2

function frankenSplice(arr1, arr2, n) {

    arr2.splice(n, 0, arr1);
    console.log(arr2)
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  

// const arr3 = [3,4,5,7]
// arr3.splice(1,0,8,9);

// console.log(arr3)