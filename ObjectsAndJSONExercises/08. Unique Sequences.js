function uniqueSequence(arr){
    let result = new Map();
    for (let array of arr) {
        let res = JSON.parse(array).map(Number).sort((a, b) => b - a);
        let resultedArr = `[${res.join(', ')}]`;
        if(!result.has(resultedArr)){
            result.set(resultedArr, res.length);
        }
    }

    let customSort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
    console.log([...result.keys()].sort((a, b) => customSort(a, b, result)).join('\n'));
    /*
    let sortedResult = Array.from(result.keys()).sort((a, b) => a.length > b.length);
    for (let arr of sortedResult) {
        console.log(`[${arr}]`)
    }
     */


}
uniqueSequence(['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13, 4, 5]',
    '[4, -3, 3, -2, 2, -1, 1, 0]',
    '[]']);