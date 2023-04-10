/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(number: number, symbol: string = "#", space: string = " "): void {
  let spaces = number - 1;
  let symbols = 1;
  
  for (let i = 0; i < number; i++) {
    console.log(`${space.repeat(spaces)}${symbol.repeat(symbols)}${space.repeat(spaces)}`);

    spaces--;
    symbols += 2;
  }
}

export { pyramid };
