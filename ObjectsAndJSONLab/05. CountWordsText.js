function countWords(arr){
    let str = arr.join('\n');
    let strArr = str.split(/\W+/).filter(w => w != "");
    let words = {};
    for (let word of strArr) {
        if(!words.hasOwnProperty(word)){
            words[word] = 1;
        }else{
            words[word]++;
        }
    }
    console.log(JSON.stringify(words))

}
countWords([ 'Far too slow, you\'re far too slow.' ]);