function solution(arr) {
    let specialKey = arr[0];
    let result = [];

    let pattern = `(^|\\s)(${specialKey}\\s+)([A-Z!%$#]{8,})(\\s|\\.|\\,|$)`;
    let regex = new RegExp(pattern, 'gi');
    for (let i = 1; i < arr.length; i++) {
        let text = arr[i];

        let match;

        while (match = regex.exec(text)) {
            let encodedWord = match[3];
            if (encodedWord === encodedWord.toUpperCase()) {
                encodedWord = encodedWord.toLowerCase();
                encodedWord = encodedWord.replace(/!/g, '1');
                encodedWord = encodedWord.replace(/%/g, '2');
                encodedWord = encodedWord.replace(/#/g, '3');
                encodedWord = encodedWord.replace(/\$/g, '4');

                let decodedMatch = match[1] + match[2] + encodedWord + match[4];
                text = text.replace(match[0], decodedMatch);

            }
        }

        console.log(text)
    }


}
solution([ 'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!' ]);