function biggestElement(matrix){
    let biggest = Number.NEGATIVE_INFINITY;
    for (let arr of matrix) {
        for (let num of arr) {
            if(Number(num) > biggest){

                biggest = num;
            }
        }
    }
    return biggest;

}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));