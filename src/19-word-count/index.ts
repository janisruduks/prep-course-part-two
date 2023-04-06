/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 * 
 * 
 * https://i.kym-cdn.com/photos/images/original/002/126/528/4fc.jpg
 * 
 * regex \s checks spaces, tabs and new lines
 * filter.(Boolean) so that empty space doesn't count
 * would have used empty object BUT NO, you had to add constructor
 * Object.create(null) blocks inheriting from Object.prototypes
 */

class Words {

  count(str: string): { [key: string]: number } {
    const wordsArray = str.toLowerCase().split(/\s/).filter(Boolean); 
    const wordCount = wordsArray.reduce((acc: { [key: string]: number }, word) => {
      acc[word] = acc[word] ? acc[word] + 1 : 1;
      return acc;
    }, Object.create(null));
    return wordCount;
  }
}

export { Words };
