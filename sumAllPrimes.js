/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */
function sumPrimes(num) {       
    let finalSum = 0;

    for (let j = 0; j < num; j++) {
           
        let finalNum = 0;  
        for (let i = j; i >= 0; i--){
            console.log(i)
            console.log(j)
            if (j%(i) === 0){
                finalNum += 1;
                // console.log(`divisible by `+ i)
            }                
            // else if console.log(num + 'is prime')    
        }
        if (finalNum === 2){
            finalSum += num
            console.log(num +' is prime')      
        }
        // console.log(finalNum)
        // console.log(finalSum)
    }
// console.log(finalSum)
}
sumPrimes(10);



// console.log(Math.ceil(Math.sqrt(10)));

  
/* sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156. */

// for (let j = num; j >= 0; j--){
//     console.log(j)
// }
