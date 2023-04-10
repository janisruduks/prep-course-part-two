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
const VOVWELS: string[] = ['a', 'e', 'i', 'o', 'u'];

function vowels(str: string): number {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(VOVWELS.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

export { vowels };
