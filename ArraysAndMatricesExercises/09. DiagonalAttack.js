function attack(arr){

    let matrix = arr
        .map(row => row.split(' ')
            .map(Number)
        );
    let regDiag = 0;
    let invDiag = 0;

    for (let row = 0; row < matrix.length; row++) {

        regDiag += matrix[row][row];
        invDiag += matrix[row][matrix.length - 1 - row];

    }

    if(regDiag !== invDiag){
        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }else{
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row == col || row+col+1 == matrix.length){
                    continue;
                }
                matrix[row][col] = regDiag;
            }
        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
attack(['5 3 2 3 1',
        '1 4 3 2 5',
        '1 1 3 2 1',
        '1 4 5 2 2',
        '5 2 3 1 1']);