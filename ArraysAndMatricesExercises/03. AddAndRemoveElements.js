function addRemove(arr){
    "use strict";
    let result = [];
    let number = 1;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === "add"){
            result.push(number);
            number++;
        }else if(arr[i] === "remove"){
            result.pop();
            number++;
        }
    }
    if(result.length > 0)
    console.log(result.join('\n'));
    else
        console.log("Empty");
}
addRemove(['remove', 'remove', 'remove']);