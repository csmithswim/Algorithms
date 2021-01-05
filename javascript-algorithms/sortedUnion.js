/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.

*/

function uniteUnique(...arr) {  
let newArray = arr.slice(0,arr.length)
newArray.sort(function(a,b){return b.length-a.length})

for (let i = 1; i < arr.length; i++) {

  for (let j = 0; j < newArray[0].length; j++) {

  if (!arr[0].includes(arr[i][j]) && arr[i][j] != undefined){

arr[0].push((arr[i][j]))

}



  // console.log(arr[i][j])    
    
  }

  // console.log(i)
  
}

// console.log (newArray)
console.log(arr[0])
return arr[0]

}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);  /*
should return [1, 3, 2, 5, 4].

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) 
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/