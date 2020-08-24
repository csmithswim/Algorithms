const fs = require("fs");

function read(file, callback) {
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        }
        callback(data);
    });
}

// let states;
var output = read('dataParser.txt', function(data) {

// states = data
//    console.log(data);
});


console.log(states)


// let newArray = [[]];
// for (let i = 0; i < output.length; i++) {

//     newArray[i] == output[i]
    
// }
// console.log(newArray);