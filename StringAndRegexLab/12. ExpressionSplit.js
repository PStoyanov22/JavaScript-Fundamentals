function split(str){
    let extracted = str.split(/[\s.,();]+/);
    console.log(extracted.join('\n'));

}
split('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}')
