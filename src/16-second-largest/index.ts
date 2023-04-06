/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 * sort(a, b) descenting order, sort() ascending
 */

function secondLargest(array: number[]): number {
    array.slice()
    array.sort((a, b) => b - a);
    array = array.slice(0, 3);
    return array[1];
}


export { secondLargest };
