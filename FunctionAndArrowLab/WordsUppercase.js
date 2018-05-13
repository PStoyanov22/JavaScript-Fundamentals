function wordsUpper(str){
    let strUp = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');


    function extractWords(){
        "use strict";
        return strUp.split(/\W+/)
    };

}

console.log(wordsUpper('hi, How, are, you'));