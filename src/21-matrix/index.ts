
/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 * 
 * 
 * https://postimg.cc/dDYY9wFP
 */
class Matrix {
  constructor(private matrix: string) {}

  get rows(): number[][] {
    const matrixValues = this.matrix.replace(/\n/g, "  ").split(/\s/);

    const rows: number[][] = [];
    let currentRow: number[] = [];
    
    for(let i = 0; i < matrixValues.length; i++) {
      if(matrixValues[i] !== "") {
        currentRow.push(parseInt(matrixValues[i]));
      }else {
        rows.push(currentRow);
        currentRow = [];
      }
    }

    rows.push(currentRow)
    return rows;
  }

  get columns(): number[][] {
    const rows = this.rows;
    const columns: number[][] = [];

    for(let columnIndex = 0; columnIndex < rows[0].length; columnIndex++) {
      columns.push([]);

        for(let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
          columns[columnIndex].push(rows[rowIndex][columnIndex]);
        }
    }

    return columns;
  }
}

export { Matrix };
