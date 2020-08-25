const http = require('http');
const fs = require('fs')

    let array = [];
    
    let demo = fs.readFileSync("dataParser.txt", "utf8", (err, data) => {
        if (err) throw err;
                return(data);
    });

    demo = demo.split(`\r\n`);
    // console.log(demo)

    for (let i = 0; i < demo.length; i++) {

        array.splice(i, demo[i])     

      
    }

    console.log(array)


// const fs = require("fs");

// fs.readFile(file, function(err, data) {
//         if (err) {
//             console.log(err);
//         }
//         callback(data);
// });

// const rawData = fs.readFileSync(textFile, 'utf8');

// const parsedData = JSON.parse(rawData);



// function read(file, callback) {
//     fs.readFile(file, 'utf8', function(err, data) {
//         if (err) {
//             console.log(err);
//         }
//         callback(data);
//     });
// }

// var output = read('dataParser.txt', function(data) {

//    let  array = data.toString().split('\n');

    

// console.log(array);
// });

// console.log(array)




