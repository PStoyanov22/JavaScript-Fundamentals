function processOddNums(arr){
    "use strict";
    let result = console.log(arr.filter((num, i) => i % 2 == 1).map(n => n * 2).reverse().join(' '));
}
processOddNums([3, 0, 10, 4, 7, 3]);