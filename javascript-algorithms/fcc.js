function sum(arr, n) {
    // Only change code below this line
  if (n <= 0){
    return 1;
  } else {
      console.log((sum(arr, n-1)))
    return sum(arr, n-1) + arr[n-1];
  }
  }
 

// sum([2, 3, 4], 1) 

//   sum([1], 0) should equal 0.
sum([2, 3, 4, 5], 3) 
// should equal 9.