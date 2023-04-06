/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(str: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i].toLowerCase())){
            count = count + 1;
        }
    }
    return count;
}

export { vowels };
