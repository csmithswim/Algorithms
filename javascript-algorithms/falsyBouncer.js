/*Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([null, NaN, 1, 2, undefined]) should return [1, 2]. */ 

function bouncer(arr) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(!!arr[i])
        if (!!arr[i] === false) {

            arr.splice(i, 1)

            i = i - 1;
        }
    }
    console.log(arr)
    return arr
}

bouncer([null, NaN, 1, 2, undefined]) 
