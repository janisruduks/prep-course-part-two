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

function pyramid(n: number) {
  const symbol = "#";
  const space = " ";
  let numberForSpace = n - 1;
  let numberForSymbol = 1;
  for (let i = 0; i < n; i++) {
    console.log(space.repeat(numberForSpace) + symbol.repeat(numberForSymbol) + space.repeat(numberForSpace));
    numberForSpace = numberForSpace - 1;
    numberForSymbol = numberForSymbol + 2;
  }
}

export { pyramid };
