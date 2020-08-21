/* The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates). */
function sym(...args) {

    // console.log(args[0].indexOf(3, 3))

    // let newTest;

    let newArgs = args.slice(0,args.length).sort(function(a,b){return b.length-a.length});

    // testArgArray = newArgs.slice(0,1).reduce((sum, elem) => sum + elem)

    let finalArray = [];    

    // newTest = testArgArray.reduce((sum, elem) => sum + elem)

    // let sum = sample.reduce((sum, elem) => sum + elem) //Reduce, sum is last value returned


    for (let i = 0; i <= newArgs.length-1; i++) {

        // console.log(newArgs.length)

        for (let j = 0; j < newArgs[i].length; j++) {

            // console.log(newArgs[i][j])

            // console.log(finalArray.indexOf(newArgs[i][j]))
    
            if (finalArray.indexOf(newArgs[i][j]) == -1){

                finalArray.splice(0,0,newArgs[i][j])

            } else if (finalArray.indexOf(newArgs[i][j]) >= 0 && finalArray.indexOf(newArgs[i][j], j) >= j)  {

                finalArray.splice(finalArray.indexOf(newArgs[i][j]),1)

                // finalArray.length = finalArray.length - 1;
            }   
        }
    }
    


  
console.log(newArgs)
// return finalArray;
console.log(finalArray)

}
  
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

/* 
sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements. 

 */

