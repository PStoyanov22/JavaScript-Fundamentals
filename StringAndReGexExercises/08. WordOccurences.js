function findOccurrencies(str, word){
    str = str.toLowerCase();
    let regex = new RegExp(`${word}\\b`, 'ig');
    let count = 0;
    let match = regex.exec(str);
    while(match){
        count++;
        match = regex.exec(str);
    }

    console.log(count)
}
findOccurrencies('The waterfall was so high, that the child couldn’t see its peak.', 'the');