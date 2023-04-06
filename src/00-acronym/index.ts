/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 * 
 * regex /[^a-zA-Z]/g matches letters (^) that are not upper or lower case letters, ( everything execpt letters )
 * A to Z in upper and lower, "g" for global or 'don't stop at first found
 * 
 */

function parse(input: string) {
    let acronym = ""
    let arr = input.split(/[ -]/); // for annoying words
    
    arr = arr.filter((str: string) => str !== "");
    for (let i = 0; i < arr.length; i++) {
        let cleanString = arr[i].replace(/[^a-zA-Z]/g, "")
        let splittedArr = cleanString.charAt(0);
        acronym = acronym + splittedArr;
    }
    return acronym.toUpperCase();
}

export { parse };
