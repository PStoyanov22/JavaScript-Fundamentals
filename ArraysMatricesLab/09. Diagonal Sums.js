function sums(matrix){
    let regDiag = 0;
    let invDiag = 0;

    for (let row = 0; row < matrix.length; row++) {

        regDiag += matrix[row][row];
        invDiag += matrix[row][matrix.length - 1 - row];

    }
    console.log(regDiag + " " + invDiag);

}
sums([[20, 40],
      [10, 60]])