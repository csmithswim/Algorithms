/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */ 

function sumFibs(num) {
   let fib = [1];
   let finalFib=0;
    for (let i = 1; i < num; i++) {
     
    if (i < 2){        
    fib.push(i);
    } else if (i > 2){ 

    fib.push(fib[i-2]+fib[i-3])
    } 
              
    }
    console.log(fib);         
    
    for (let i = 0; i <= fib.length && fib[i] <= num; i++) {

        if ((fib[i] - 1) % 2 == 0){


            // console.log('test')

            finalFib += (fib[i]);
        } 

        // console.log(fib[i])
        
    }
    
    // console.log(finalFib);
   
    return finalFib;
}
  
// sumFibs(4);
sumFibs(4) 
/* should return 1785.




sumFibs(1) should return a number.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721. */