function capture(arr){

    let numbers = [];
   let regex = /[0-9]+/gi;

    for (let str of arr) {
        let match = regex.exec(str);
        while(match){
            numbers.push(match[0]);
            match = regex.exec(str);
        }
    }
    console.log(numbers.join(' '));
}
capture(['The300 hgfhsg566', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);