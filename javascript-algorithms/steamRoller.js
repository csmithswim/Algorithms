/* Flatten a nested array. You must account for varying levels of nesting. */



function steamrollArray(arr) {
    console.log(arr.length)


    console.log(arr[0][0].indexOf("a"))


    // console.log(array)
    return arr;
  }

  
steamrollArray([[["a"]], [["b"]]])
//  should return ["a", "b"].
/* 
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods. */