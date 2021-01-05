/*Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function. */
//?To solve it using a recusrive function, the number passed as an argument needs to be subtracted by 1 and then multipllied by we have to have a conditional set in place that will stop the function call stack and return 1.

function factorialize(num) { //Using a for loop
    for (var product = 1; num > 0; num--) {
        product *= num;
      }
      return product;
}

function factorialize(num) { //Using head recursion
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
}

function factorialize(num, factorial = 1) {//Using tail end recursive calls
    if (num == 0) {
      return factorial;
    } else {
      return factorialize(num - 1, factorial * num);
    }
  }

  function factorialize(num, factorial = 1) { //Using .fill which fills in elements of an array at specific points with a static value.
    //.reduce is an array method that requires several paramters. array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    return num < 0 ? 1 : (
      new Array(num)
        .fill(undefined)
        .reduce((product, val, index) => product * (index + 1), 1)
    );
  }

console.log(factorialize(10));
