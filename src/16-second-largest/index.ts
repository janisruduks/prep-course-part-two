/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 * sort(a, b) descenting order, sort() ascending
 */

function secondLargest(array: number[]): number {
    array.sort((a, b) => b - a);
    return array[1];
}


export { secondLargest };
