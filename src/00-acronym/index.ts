/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
  const inputToArray = input.toUpperCase().split(/[ -]/);
  const acronym = inputToArray.map((word) => {
    return word.replace(/[^A-Z]/g, "").charAt(0);
  });
  return acronym.join("");
}

export { parse };
