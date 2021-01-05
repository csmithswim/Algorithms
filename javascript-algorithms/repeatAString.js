/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. */ 


function repeatStringNumTimes(str, num) {
let emptyStr = '';
let finalStr = '';

    if (num<0) { 
        
    return emptyStr;
    
    } else {


        for (let i = 0; i < num ; i++) {
            finalStr += str;
            
        }    
        console.log(finalStr)
}
    return str;

  }
  
  repeatStringNumTimes("*", 8);
  