/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 * 
 */

function maxChar(str: string): string {
  let store = 0;
  let current = 0;
  let storeString = ""

  for(let i = 0; i < str.length; i++){
    current = str.split(str[i]).length - 1;
    if(current > store){
      store = current;
      storeString = str[i];
    }
  }
  return storeString;
}

export { maxChar };
