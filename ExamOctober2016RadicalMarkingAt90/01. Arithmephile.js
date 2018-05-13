function solution(arr) {

    let biggestSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {

        let number = Number(arr[i]);

        if (number >= 0 && number < 10) {
            let sum = 1;
            for (let j = i + 1; j <= i + number; j++) {
                sum *= arr[j];
            }
            if (sum > biggestSum) {
                biggestSum = sum;
            }
        }
    }
    console.log(biggestSum);
}
solution(['10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24']);