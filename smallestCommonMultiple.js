/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order. For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {
//First sort arr in descending order
arr.sort(function(a,b){
  return b-a})
  // console.log(arr)     

  //Set variable for output
  let answer=1;

  //Get array of the range of numbers
  let array = [];
  for (let i = arr[0]; i >= arr[1]; i--) {
    array.push(i)    
  }
  //Loop to iterate through the array and multiply the indexes and then check for even divisibility with the other indexes
// let product = array[0];

let finalArray = array.slice(0, array.length)
let newArray=[];

  for (let i = 0; i <= array.length-1; i++) {

    for (let j = 0; j <= 10; j++){
      // console.log(finalArray[i] % array[i] != 0)  
      console.log(finalArray)    
      console.log(finalArray[i])

      // if (finalArray[i] % array[i] != 0){
      //   console.log(array[i])
      // }
      finalArray[i] += array[i]

    }
   
}
  console.log(finalArray)
}
smallestCommons([1,5]);
/*
smallestCommons([1, 5]) should return a number. 
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520. 
smallestCommons([1, 13]) should return 360360. 
smallestCommons([23, 18]) should return 6056820. */

  // Highest to lowest in loop
  // for (let i = 0; i < array.length; i++) {

  //   if (product % array[i] !==0){
  //     console.log(array[i])
  //     console.log(product)
  //     product = product * array[i]
  //     console.log(product)
  //   }            
  // }
  //Lowest to highest
  // for (let i = array.length-1; i >= 0; i--){
  
  //   if (product % array[i] != 0){
  //     console.log(product)
  //     product = product * array[i];
  //     console.log(array[i]) 
  //   }
  // }
  // console.log(product)

