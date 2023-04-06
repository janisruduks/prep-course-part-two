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

function longestWord(str: string): string {
    const arr = str.split(" ");
    let arrayString = "";
    let longestWord = "";


    for (let i = 0; i < arr.length; i++){
        arrayString = arr[i];
        arrayString = arrayString.replace(/[^a-zA-z]/g, "")
        if(arrayString.length > longestWord.length){
            longestWord = arrayString;
        }
    }
    return longestWord;
}

export { longestWord };
