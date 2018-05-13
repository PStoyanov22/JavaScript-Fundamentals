function endsWith(str, subst){
    if(str.lastIndexOf(subst) == str.length - subst.length){
        console.log("true")
    }else{
        console.log("false")
    }
}
endsWith('This sentence ends with fun?', 'Fun?');