function solution(str){
    let regex = /.*<svg>(<cat><text>.+\[(.+)]<\/text><\/cat>)\s*<cat>(<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>)*<\/cat><\/svg>.*/g;
    let match = regex.exec(str);
    let valueMatchPattern = /(<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>)/g;
    let total = 0;
    let count = 0;
    let valueMatch = valueMatchPattern.exec(str);

    if(str.indexOf("<svg>") === -1  || str.indexOf("</svg>") === -1){
        console.log("No survey found");
        return;

    }else if(match === null){
        console.log("Invalid format");
        return;
    }

    let labelPattern = match[2];
    while (valueMatch) {
        total += Number(valueMatch[2]) * Number(valueMatch[3]);
        count += Number(valueMatch[3]);

        valueMatch = valueMatchPattern.exec(str);


}
    let sum = total / count;
    console.log(`${labelPattern}: ${+sum.toFixed(2)}`);

}
solution("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>")