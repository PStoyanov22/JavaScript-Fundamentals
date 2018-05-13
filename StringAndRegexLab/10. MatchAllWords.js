function extractWords(str){
    let regex = /\w+/ig;

    let words = str.match(regex);

    console.log(words.join('|'));

}
extractWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text')