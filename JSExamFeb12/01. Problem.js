function solution(arr){
    arr = arr.map(Number);
    let bitcoinsPrice = 11949.16;
    let usd = 67.51;

    let numberBitcoins = 0;
    let firstDay = [];

    let day = 0;

    let stolen = 0;
    let left = 0;

    for (let i = 0; i < arr.length; i++) {
        let goldDaily = arr[i];
        stolen++;
        if(stolen % 3 === 0){
            goldDaily *= 0.7;
        }
        let earnedDaily = goldDaily * usd;


        let total = left + earnedDaily;
        if(total >= bitcoinsPrice){
            firstDay.push(i);
            let boughtBitcoins = Math.floor(total / bitcoinsPrice);
            numberBitcoins+= boughtBitcoins;
            left = total - (boughtBitcoins * bitcoinsPrice )


        }else{
            left = total;
        }

    }
    console.log(`Bought bitcoins: ${numberBitcoins}`);
    if(firstDay.length !== 0){
        console.log(`Day of the first purchased bitcoin: ${firstDay[0] + 1}`);
    }
    console.log(`Left money: ${left.toFixed(2)} lv.`)


}
solution(['3124.15', '504.212', '2511.124']);