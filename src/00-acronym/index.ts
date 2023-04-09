/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 * 
 * regex /[^a-zA-Z]/g matches letters (^) that are not upper or lower case letters, ( everything execpt letters )
 * A to Z in upper and lower, "g" for global or 'don't stop at first find
 * could use map instead of loop DONE
 */

function parse(input: string): string {
  const array = input.split(/[ -]/);
  const acronym = array.map((word) => {
    return word = word.replace(/[^a-zA-Z]/g, "").charAt(0).toUpperCase();
  });
  return acronym.join("");
}

export { parse };
