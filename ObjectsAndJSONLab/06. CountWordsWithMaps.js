function countWords(arr){
    let str = arr.join('\n').toLowerCase();
    let strArr = str.split(/\W+/).filter(w => w != "");
    let words = new Map();
    for (let word of strArr) {
        if(!words.has(word)){
            words.set(word, 1);
        }else{
            words.set(word, words.get(word)+ 1);
        }
    }
    [...words].sort().forEach(w => console.log(`'${w[0]}' -> ${w[1]} times`));
}
countWords([ 'The man was walking the dog down the road when it suddenly started barking against the other dog. Surprised he pulled him away from it.' ]);