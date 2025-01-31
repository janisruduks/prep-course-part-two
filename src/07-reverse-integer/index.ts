/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number): number {
    let reverseString = int.toString().split("").reverse().join("");
    if(int < 0) {
        reverseString = "-" + reverseString;
    }
    return parseInt(reverseString);
}

export { reverse };
