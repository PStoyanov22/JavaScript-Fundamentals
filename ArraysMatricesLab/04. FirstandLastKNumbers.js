function elements(arr){
    let count = Number(arr.shift());
    console.log(arr.slice(0, count).join(" "));
    console.log(arr.slice((arr.length - count), arr.length).join(" "));
}
elements(['2', '7', '8', '9']);