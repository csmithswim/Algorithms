/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order. For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {
  //sorting array
  arr.sort(function(a,b){return a-b})

  //Pushing range of numbers from first integer to last integer of array
  let newArray=[];
  for (let i = arr[0]; i <= arr[1]; i++) {
    newArray.push(i)
  }  
  
  //Make a factorial to define the range of numbers to iterate through
  let factorial=1;
  for (let i = 0; i < newArray.length; i++) {
    factorial *= newArray[i]
  }

  //make an array out of that factorial starting from first element of the next to the last
  let factorialArray=[];
  let loop=factorial;
  for (let i=0; i < loop;i++){
    factorialArray.push(factorial)
    factorial=factorial-1;    
  }
    
//iterate through the factorial to see if it is divisible by the range of numbers from the first parameter to the last parameter
  let testArray=[];
  let lowestMultiple=[];
  for (let i = arr[0]; i < loop; i++) {        
    
        let array=[];        
        for (let j = 0; j <= newArray.length; j++) {    
          if (i % newArray[j] == 0  && newArray[j] != 1){
            array.push(i)
          }
        }

        if (array.length >= (arr[0]-arr[1])){

          
          
          console.log(lowestMultiple);
          return lowestMultiple;
        }
        else {testArray.push(array) 
            }      
  }

  testArray.sort(function(a,b){return a.length-b.length});



  
    //Maybe make a recursive function that keeps calling itself until we find the lowest common multiple?

  // console.log(testArray[testArray.length-1][0])

  // console.log(newArray)
    
}


smallestCommons([2, 10]);
  

/*
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820. */