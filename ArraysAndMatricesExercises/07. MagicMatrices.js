function magicMatrix(matrix){

    let isMagic = true;
    let sum = matrix[0].reduce((a, b) => a + b, 0);

    for (let row = 1; row < matrix.length; row++) {
        if(matrix[row].reduce((a, b) => a + b, 0) !== sum){
            return isMagic = false;
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {

            colSum += matrix[row][col];
        }
        if(colSum !== sum){
            return isMagic = false;
        }
    }
    return isMagic;
}

console.log(magicMatrix([[4, 5, 6],
                         [6, 5, 4]]));