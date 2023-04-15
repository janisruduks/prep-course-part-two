/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number, symbol: string = "#", space: string = " "): void {
    let spaces = n - 1;
    for (let i = 0; i < n; i++){
        console.log(symbol.repeat(i + 1) + space.repeat(spaces))
        spaces--;
    }
}

export { steps };
