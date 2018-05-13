function extractNames(str){
    let regex = /\b_([A-Za-z)-9]+)\b/g;
    let result = [];

    let match = regex.exec(str);
    while(match){
        result.push(match[1]);
        match = regex.exec(str);
    }
    console.log(result.join(','))

}
extractNames('The _id and _age variables are both integers.');

