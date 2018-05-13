function extract(text){
    let start = text.indexOf('(');

    let result = [];
    while(start > -1){
        let end = text.indexOf(')', start);
        let word = text.substring(start + 1, end);
        if(end == -1){
            break;
        }
        result.push(word);
        start = text.indexOf('(', end);


    }
    console.log(result.join(', '));

}
extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');