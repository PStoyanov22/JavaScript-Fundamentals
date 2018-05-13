function average(num){

    let n = num.toString();

    while(true){
        let sum = 0;
        for (let i = 0; i < n.length; i++) {
            sum += Number(n[i]);
        }
        if(sum / n.length <= 5 ){
            n += '9';
        }else {
            return n;
        }
    }
}

console.log(average(5835));