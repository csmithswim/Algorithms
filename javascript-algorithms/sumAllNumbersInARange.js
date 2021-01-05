/*We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.

//? Pseudocode: We first should take the array, sort it in ascending order, then pass it to the range function to get a range of all numbers, then iterate through those numbers to get a sum of all numbers between the lowest and highest number.
*/
function sumAll(arr) {

      let newArray = arr.sort(function(a, b){return a - b});
      let arrayMax = newArray[1];
      let arrayMin = newArray[0];
      let sum = 0;
 
      for (let i = arrayMin; i <= arrayMax; i++) {
         sum += i
         
      }
   return sum;
}
          
console.log(sumAll([10, 5]));


