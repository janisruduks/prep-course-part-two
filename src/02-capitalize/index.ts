/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string): string {
    const space = " ";
    let finishedString = "";
    let arr = str.split(space);

    for (let i = 0; i < arr.length; i++) {
        let capitalizedString = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
        if (i != 0) {
            finishedString = finishedString + space + capitalizedString;
        }else {
            finishedString = capitalizedString;
        }
    }
    return finishedString;
}

export { capitalize };
