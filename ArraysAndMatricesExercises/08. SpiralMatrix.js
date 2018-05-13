function spiral(rows, cols) {
    let target = rows * cols;
    let currentRow = 0;
    let currentCol = 0;
    let number = 1;
    let matrix = matrixZeros(rows, cols);
    let rotations = 0;


    function matrixZeros(rows, cols) {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix.push('0'.repeat(cols).split('').map(Number));
        }
        return matrix;
    }

    while (target >= number) {
        for (let i = rotations; i < cols - rotations; i++) {
            matrix[currentRow][currentCol++] = number++;
        }

        currentCol -= 1;
        for (let i = ++currentRow; i < rows - rotations; i++) {
            matrix[currentRow++][currentCol] = number++;
        }

        currentRow -= 1;
        for (let i = --currentCol; i >= rotations; i--) {
            matrix[currentRow][currentCol--] = number++;
        }
        currentCol += 1;
        for (let i = --currentRow; i > rotations; i--) {
            matrix[currentRow--][currentCol] = number++;
        }
        rotations++;
        currentRow++;
        currentCol++;
    }
    printMatrix(matrix);

    function printMatrix(matrix){

        console.log(matrix.map(e => e.join(' ')).join('\n'));
    }

}
spiral(5, 5);