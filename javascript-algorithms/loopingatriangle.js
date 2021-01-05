// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// It may be useful to know that you can find the length of a 
// string by writing .length after it. 

//With a for loop

let triangle = "";
for (let i = 0; i <= 7; i++) {
    triangle += '#'
  console.log(triangle);
}

//With a while loop

let triangle = '';
while (triangle.length <=7){
  triangle += '#'
  console.log(triangle);
}

