function solution(arr){
    let decodingTemplate = [];
    let encodedMessage = [];
    let templateSize = Number(arr[0]);

    for (let i = 1; i < 1 + templateSize; i++) {
        let currentRow = arr[i];
        decodingTemplate.push(currentRow.split(' ').map(Number));
    }

    for (let i = 1 + templateSize; i < arr.length; i++) {
        let currentRow = arr[i];
        encodedMessage.push(currentRow.split(' ').map(Number));

    }

    for (let row = 0; row < encodedMessage.length; row += templateSize) {
        for (let col = 0; col < encodedMessage[row].length; col += decodingTemplate[0].length) {
            let currentEncodedNum = encodedMessage[row][col];

            for (let templateRow = 0; templateRow < decodingTemplate.length; templateRow++) {
                for (let templateCol = 0; templateCol < decodingTemplate[templateRow].length; templateCol++) {
                    let currentTemplateNum = decodingTemplate[templateRow][templateCol];

                    let targetRow = row + templateRow;
                    let targetCol = col + templateCol;

                    if(targetCol < encodedMessage[row].length && targetRow < encodedMessage.length){
                        let summedNumber = encodedMessage[targetRow][targetCol] + decodingTemplate[templateRow][templateCol];
                        summedNumber %= 27;
                        if(summedNumber === 0){
                            encodedMessage[targetRow][targetCol] = ' ';

                        }else{
                            encodedMessage[targetRow][targetCol] = String.fromCharCode(summedNumber + 64);
                        }
                    }

                }

            }

        }

    }
    let output = "";


    for (let row in encodedMessage) {
        for (let col in encodedMessage[row]) {
            output += encodedMessage[row][col];
        }
    }
    console.log(output)

}
solution([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]);