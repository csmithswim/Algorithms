/* Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

*/ 


function findElement(arr, func) {
    let num = [];

    for (let i = 0; i < arr.length; i++) {
        num += arr[i];

        if (func(num) == true) {

            console.log(arr[i]);

            return arr[i];             
        }
    }

    for (let i = 0; i < arr.length; i++) {

        num += arr[i];

        if (func(num) == false) {

            console.log('undefined');

            return undefined; 
        }
    }
    
}

      
  
  findElement([1, 3, 5, 9], num => num % 2 === 0);
  