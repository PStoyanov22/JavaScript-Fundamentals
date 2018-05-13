function print(arr){
    "use strict";
    let step = Number(arr[arr.length - 1]);
    arr.pop();
    for (let i = 0; i < arr.length; i += step) {
        console.log(arr[i]);
    }
}
print(['5', '21', '30', '4', '20', '2'])