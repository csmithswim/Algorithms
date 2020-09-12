/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/
function whatIsInAName(collection, source) {
    //Variable to collect the collection & source matches
    let newCollection;

    //Entry length declaration
    let sourceLength = Object.entries(source).length;

    //Loops to iterate through collection to compare source entries
    // console.log(collection[0])

    for (let i = 0; i < collection.length; i++) {

        // console.log(collection[i])
        for (let j = 0; j < sourceLength; j++) {

            console.log(collection[i])

            console.log(Object.values(collection[i]))

            console.log(Object.keys(source)[j])


            console.log(collection[i].hasOwnProperty(Object.keys(source)[j]))


            if (collection[i].hasOwnProperty(Object.entries(source))){

                console.log(Object.entries(source)[j])
            }

            
        }
        
    }





    // console.log(source.hasOwnProperty(Object.keys(source)[0]));

    // console.log(Object.entries(source))
    // console.log(Object.keys(source))
    // console.log(Object.values(source))

    //newCollection = collection.filter(i => i.hasOwnProperty(Object.keys(source)[0]) && i.hasOwnProperty(Object.keys(source)[1]))


    // console.log(newCollection)
    
    return newCollection;


}
  
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }); 
/* should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]. */


/*
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return [] */