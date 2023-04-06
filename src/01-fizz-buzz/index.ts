/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 * 
 * % modulo divided by number for for example 3 and 4 will return 1 or 6 will return 0
 */

function fizzBuzz(number: number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        else if (i % 3 === 0) {
            console.log("fizz");
        }
        else if (i % 5 === 0) {
            console.log("buzz");
        }else {
            console.log(i);
        }
    }
}

export { fizzBuzz };
