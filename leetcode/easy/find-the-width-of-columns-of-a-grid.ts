/**
 * 6. Find the Width of Columns of a Grid
 * 
 * You are given a 0-indexed m x n integer matrix grid. 
 * The width of a column is the maximum length of its integers.
 * For example, if grid = [[-10], [3], [12]], 
 * the width of the only column is 3 since -10 is of length 3.
 * Return an integer array ans of size n where ans[i] is the width of the i column.
 * The length of an integer x with len digits is equal to len if x is non-negative, 
 * and len + 1 otherwise.
 */

//Solve
function findColumnWidth(grid: number[][]): number[] {
    let result: number[] = [];
    for (let col = 0; col < grid[0].length; col++) {
        let maxLength = 0;

        for (let row = 0; row < grid.length; row++) {
            let numLength = grid[row][col].toString().length;
            maxLength = Math.max(maxLength, numLength);
        }

        result.push(maxLength);
    }
    return result;
};

console.log(findColumnWidth([[1], [22], [333]]));
console.log(findColumnWidth([[-15, 1, 3], [15, 7, 12], [5, 6, -2]]));