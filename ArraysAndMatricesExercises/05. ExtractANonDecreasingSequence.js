function extract(arr){
    arr = arr.map(Number);
    let max = arr[0];
    let result = [];
    result.push(max);

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] >= arr[i - 1]){
            max = arr[i];
            result.push(max);
        }else{
            arr[i] = max;
        }

    }
    console.log(result.join('\n'));
}
extract([20, 3, 99, 15, 6, 22]);