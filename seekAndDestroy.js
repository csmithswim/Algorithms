/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object. */


function destroyer(...arr) {

    let newArray1 = arr[0].slice(0,arr[0].length)
    let newArray2 = arr.slice(1,arr.length)
    let finalArray = [];

    for (let i = 0; i < newArray.length; i++) {

        // console.log(newArray[i])
        // console.log(arr[i])


      if (newArray[i] !== arr[i]){

        console.log(newArray[i])
        console.log(arr[i])

        finalArray.push(newArray[i])        
      }        

    }

        console.log(newArray2)
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

 //   } else {
    

    //   }
  

  /*destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65]. */