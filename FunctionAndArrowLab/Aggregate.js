function aggregateElements(arr){
    "use strict";
    aggregate(arr, 0, (a, b) => a + b);
    aggregate(arr, 0, (a, b) => a + 1/b);
    aggregate(arr, '', (a, b) => a + b);

    function aggregate(arr, start, func) {
        let val = start;
        for (let i = 0; i < arr.length; i++) {
             val = func(val, arr[i])

        }
        console.log(val)
    }
}
aggregateElements([10, 20, 30]);