function aggregate(arr){
    let sum = 0;
    let result = [];

    for (let str of arr) {
        let town = str.split('|');
        let name = town[1].trim();
        let income = town[2].trim();
        result.push(name);
        sum += Number(income);
    }
    console.log(result.join(', '));
    console.log(sum);
}
aggregate(['| Sofia           | 300',
           '| Veliko Tarnovo  | 500',
           '| Yambol          | 275'])