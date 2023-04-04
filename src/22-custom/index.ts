/** 
 * Create a class called CharacterCount
 * with a method called count that accepts a string as input and returns an object
 *  with the count of each character in the string. 
 * The returned object should have keys for each character that appears in the string,
 *  and values representing the number of times that character appears.
 * EXAMPLE: "hello world"
 * {
  "h": 1,
  "e": 1,
  "l": 3,
  "o": 2,
  "w": 1,
  "r": 1,
  "d": 1
}
*/
class CharacterCount {
    count(str: string) {
        const letterArray = (str.toLocaleLowerCase().split("") || [] as string[]);
        const letterCountArray = letterArray.reduce((accumulate: { [key: string]: number }, letter) => {
          accumulate[letter] = accumulate[letter] ? accumulate[letter] + 1 : 1;
          return accumulate;
        }, {});
        return letterCountArray;
    }
}


export { CharacterCount }