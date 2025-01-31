/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 * https://i.kym-cdn.com/photos/images/original/002/126/528/4fc.jpg
 */

class Words {
  count(str: string): { [key: string]: number } {

    const wordsArray = str.toLowerCase().split(/\s/g).filter(Boolean); 

    const wordCount = wordsArray.reduce((word: { [key: string]: number }, count) => {
    if (word[count]) {
      word[count]++;
    } else {
      word[count] = 1;
    }
      return word;

    }, Object.create(null));

    return wordCount;
  }
}

export { Words };
