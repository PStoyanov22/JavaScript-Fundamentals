function sequence(a, b){
    let result = [1];

    for (let i = 1; i < a; i++) {
        result[i] = result.slice(Math.max(0, result.length - b), i + b).reduce((a, b) => a + b, 0);
    }
    console.log(result.join(' '));
}
sequence(6, 3);