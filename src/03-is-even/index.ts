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
const EVEN_NUMBERS = [0, 2, 4, 6, 8];

function isEven(num: number): Boolean {
    if(!Number.isInteger(num)){
        num = parseInt(num.toString())
    }
    
    const evenNumbers = EVEN_NUMBERS.toString()
    let numberString = num.toString();
    numberString = numberString[numberString.length - 1]

    return evenNumbers.includes(numberString); 
}


export { isEven };
