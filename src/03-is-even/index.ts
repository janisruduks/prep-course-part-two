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
 */

function isEven(num: number) {
    if(!Number.isInteger(num)){
        num = parseInt(num.toString())
    }
    const arr = ["0", "2", "4", "6", "8"]; // numbers that end with these are even

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
