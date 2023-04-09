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
 * 
 * could be improved with map
 */

function capitalize(str: string): string {
  const arrayOfStrings = str.split(" ");
  const capitalizedString = arrayOfStrings.map((word) => {
    return word = word.replace(word[0], word[0].toUpperCase());
  });
  return capitalizedString.join(" ");
}

export { capitalize };
