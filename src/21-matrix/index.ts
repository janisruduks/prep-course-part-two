
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
    let matrixCleaned = this.matrix.replace(/\n/g, "  ").split(/\s/);
    let row = [];
    let backupRow = [];

    for(let i = 0; i < matrixCleaned.length; i++) {
      if(matrixCleaned[i] !== "") {
        backupRow.push(parseInt(matrixCleaned[i]));
      }else {
        row.push(backupRow);
        backupRow = [];
      }
    }

    row.push(backupRow)
    return row;
  }

  get columns(): number[][] {
    let rows = this.rows;
    let columns: any[] = [];

    for(let i = 0; i < rows[0].length; i++) {
      columns.push([]);

        for(let j = 0; j < rows.length; j++) {
          columns[i].push(rows[j][i]);
        }
    }

    return columns;
  }
}

export { Matrix };
