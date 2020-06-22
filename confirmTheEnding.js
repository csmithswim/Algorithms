/* Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */

function confirmEnding(str, target) {

    if (target == str.substring(str.length-1) && target.substring(0,target.length-1) == str.substring(str.length-target.length, str.length-1)) {

        console.log('true')

        return true;
    } else console.log('false')

    return false;
}

confirmEnding("Abstraction", "action");

// let str = 'connor'
// let target = 'n'

// console.log(target.length)
// console.log(target.substring(0,0))
// console.log(str.substring(str.length-target.length, str.length-1))