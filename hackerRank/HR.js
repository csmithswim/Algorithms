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

function getLetter(s) {
    let letter;
    // Write your code here
    
    switch (s.charAt(0))
        {
            case ( 'a' || 'e' || 'o' || 'i' || u):
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

