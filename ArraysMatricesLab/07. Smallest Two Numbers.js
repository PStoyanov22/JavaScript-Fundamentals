function smallestNums(arr){
    "use strict";
    console.log(arr.sort((a, b) => a - b).slice(0, 2));
}
smallestNums([30, 15, 50, 5]);