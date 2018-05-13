function print(arr){
    let delimiter = arr[arr.length - 1];
    arr.pop();
    console.log(arr.join([delimiter]));
}
print(['One', 'Two', 'Three', 'Four', 'Five', '-']);