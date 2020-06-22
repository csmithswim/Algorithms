/* Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */

function confirmEnding(str, target) {

    if (target.substring(target.length-1) == str.substring(str.length-1) && target.substring(0,target.length-1) == str.substring(str.length-target.length, str.length-1)) {

        console.log('true')

        return true;
    } else console.log('false')

    return false;
}

confirmEnding("He has to give me a new name", "name");

