/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 * 
 * 
 * 
 * tests are wrong
 * the concept of odd and even apply only to integers
 * that do not have a decimal part
 * so the test should try to catch a string that informs of an error.
 */

function isEven(num: number) {
    if(!Number.isInteger(num)){
        return "odd and even apply only to integers";
    }
    const arr = ["0", "2", "4", "6", "8"]; // even

    let numberString = num.toString();
    const length = numberString.length;
    numberString = numberString.charAt(length - 1)
    
    if (arr.includes(numberString)) {
        return true; // even
    }else {
        return false; // odd
    }
}


export { isEven };
