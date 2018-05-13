function solution(arr){
    let matrix = [];
    for(let i = 0; i < arr.length - 1; i++) {
        matrix.push(arr[i].split(" ").map(Number));
    }

    let bombBunnies = arr[arr.length - 1].split(' ');
    let totalDamage = 0;
    let deaths = 0;

    for (let bomb of bombBunnies) {
        let bombDamage = 0;
        let[row, col] = bomb.split(',').map(Number);
        let startRow = row - 1;
        let endRow = row + 1;
        let startCol = col - 1;
        let endCol = col + 1;

        if(matrix[row][col] > 0){
            bombDamage += matrix[row][col];
            totalDamage += matrix[row][col];
            deaths++;
            for (let i = startRow; i <= endRow; i++) {
                for (let j = startCol; j <= endCol; j++) {
                    if (i >= 0 && i < matrix.length
                        && j >= 0 && j < matrix[row].length) {
                        matrix[i][j] -= bombDamage;

                    }
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0){
                totalDamage += matrix[i][j];
                deaths++;
            }
        }
    }
    console.log(totalDamage);
    console.log(deaths);
}
solution(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0']);