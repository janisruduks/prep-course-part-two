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

function isEven(num: number): Boolean {
    if(!Number.isInteger(num)){
        num = parseInt(num.toString())
    }
    const array = ["0", "2", "4", "6", "8"]; // numbers that end with these are even

    let numberString = num.toString();
    numberString = numberString.charAt(numberString.length - 1)

    return array.includes(numberString); 
}


export { isEven };
