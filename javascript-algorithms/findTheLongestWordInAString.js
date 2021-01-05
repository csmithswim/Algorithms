/* Return the length of the longest word in the provided sentence.

Your response should be a number.*/ 

//? Find a way to measure the length of each substring and then return that particular substring.length.

function findLongestWordLength(str) {
    let arr = str.split(" ");

    arr.sort(function(a,b){

        return b.length-a.length

         })

    let newArr = arr[0];
    return newArr.length;
}


findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");




