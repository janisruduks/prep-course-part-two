/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sentence: string): string {
    sentence = sentence.replace(/[^a-z ]/gi, ""); 
    const arr = sentence.split(" ");
    
    const longestWord = arr.reduce((longestValue, currentValue) => {
        if(longestValue.length < currentValue.length){
            longestValue = currentValue;
        }
        return longestValue;
    });
    return longestWord;
}

export { longestWord };
