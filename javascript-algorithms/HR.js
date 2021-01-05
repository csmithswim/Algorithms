//?Challenege 1
/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
// let parameterVariable = 'Welcome to 10 Days of JavaScript!';

function greeting() {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable)
}

// greeting()

//?Challenge 2

/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
    
    console.log(parseInt(firstInteger)+parseInt(secondInteger))
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
    console.log(parseFloat(firstDecimal)+parseFloat(secondDecimal))
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString+secondString)
    
}

// performOperation('2', '3.4', 'hello')


//? Challenege 3
/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length*width;

    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length+width);

    return perimeter;
}
//?Challenge 4

/*Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string,

, consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

    First, print each vowel in on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in
.
Second, print each consonant (i.e., non-vowel) in
on a new line in the same order as it appeared in . */

function vowelsAndConsonants(s) 
{
    var vowels = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i < s.length; i++)
        {
            if (vowels.indexOf(s[i]) > -1)
                {
                    console.log(s[i]);
                }
        }
    
    for (var j = 0; j < s.length; j++)
        {
            if (vowels.indexOf(s[j]) < 0)
                {
                    console.log(s[j]);
                }
        }
    
}

//?Challenege 5
/* Complete the getLetter(s), it takes one parameter a string s consisting of lowercase english alphabetic letters. It must return A, B,C, or D depending on the following criteria:

If the first character in string s is in the set {a,e,i,o,u}, then return A.
If the first character in string s is in the set {b,c,d,f,g}, then return B.
If the first character in string s is in the set {h,j,k,l,m}, then return C.
If the first character in string s is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.
Hint: you can get the letter at some index i in s using the syntax s[i].
*/

function getLetter(s) {
    let letter;
      switch (s.charAt(0))
        {
            case ( 'a' || 'e' || 'o' || 'i' || 'u'):
                letter = 'A';
                break;
                
            case ('b' || 'c' || 'd' || 'f' || 'g'):
                letter = 'B';
                break;
                
            case ('h' || 'j' || 'k' || 'l' || 'm'):
                letter = 'C';
                break;
                
            case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' ):
                letter = 'D';
                
        }
    
    
    return letter;
}

//*? Challenge 6
/*  Return a grade given the following rubric. The getGrade(score) has one parameter, an integer score. 

if 25 < score <= 30, then grade = A.
if 20 < score <= 25, then grade = B.
if 15 < score <= 20, then grade = C.
if 10 < score <= 15, then grade = D.
if 5 < score <= 10, then grade = E.
if 0 < score <= 5, then grade = F.

*/
function getGrade(score)
{
    let grade;
    // Write your code here
    
    if ((score > 25) && (score <= 30))
    {
        grade = 'A';
    }
    
    else if ((score > 20) && (score <= 25))
    {
        grade = 'B';
    }
    
    else if ((score > 15) && (score <= 20))
    {
        grade = 'C';
    }
    
    else if ((score > 10) && (score <= 15))
    {
        grade = 'D';
    }
    
    else if ((score > 5) && (score <= 10))
    {
        grade = 'E';
    }
    
    else if ((score > 0) && (score <= 5))
    {
        grade = 'F';
    }
    
    return grade;
}


//*? Challenge 7

/*
Complete the getSecondLargest function, it has one parameter: an array, nums, of n numbers. The function must find and return the second largest number in nums.

*/

function getSecondLargest(nums) {
    // Complete the function
    var sorted_array = nums.sort(function (a,b) {return a - b;});
    var unique_sorted_array = sorted_array.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })

    return unique_sorted_array[unique_sorted_array.length - 2];
}

//? Challenge 8 

/* 
Complete the isPositive function below. It has one integer parameter, a. If the value of a is positive, it must return the string Yes. Otherwise, it must throw an error according to the following rulels:
if a is -, throw an Error with message = Zero Error.
if a is negative, throw an Error with message = Negative Error.

 */
function isPositive(a) {
    if (a > 0)
        {
            return "YES";
        }
    else if (a === 0)
        {
            throw new Error("Zero Error");
        }
    else if (a < 0)
        {
            throw new Error("Negative Error");
        }
}

//?Challenege 9
/*
Complete the reverseString function; it has one parameter, s. 
1. Try to reverse string s using the split, reverse, and join methods.
2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
3.Print s on a new line. If no exception was thrown, then this should be the reversed string: if an exception was thrown, this should be the original string.
 */


function reverseString(s) {
    try {
        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        console.log(joinArray);
    }
    catch (error)
        {
            // Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
            console.log(error.message);
            console.log(s);
        }
    
    
}

//? Challenge 10
/*
Complete the function in the editor. It has two parameters: a and b. It must return an object modeling a rectangle that has the following properties:
length: the value is equal to a.
width: this value is equal to b
perimeter: this value is equal to 2 * (a+b)
area: this value is equal to a * b
Note: the names of the objects's properties must be spelled correctly to pass.

 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a+b);
    this.area = a * b;
}

//? Challenege 11

/*
Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and y. The function must return a count of all such objects o in array a that satisfy o.x == o.y.

*/

function getCount(objects) {
    var count = 0;
    for (var index in objects)
        {
            if (objects[index].x == objects[index].y)
                {
                    count++;
                }
        }
    return count;
}

//? Challenge 12

/*
Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name of that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is 

*/

function getDayName(dateString) {
    let dayName;
    // Write your code here
    
    var day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var date = new Date(dateString);
    
    dayName = day_names[date.getDay()];
    
    return dayName;
}

