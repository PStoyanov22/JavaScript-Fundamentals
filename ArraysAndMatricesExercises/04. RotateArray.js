function rotation(arr){

    let rotations = Number(arr.pop());
    for (let i = 0; i < rotations % 10; i++) {
        let removed = arr.pop();
        arr.unshift(removed);
    }
    console.log(arr.join(' '));
}
rotation(['Banana', 'Orange', 'Coconut', 'Apple', 15]);