function verification(str){
    let regex = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;

    let result = regex.test(str);
    if(result){
        console.log('Valid');
    }else{
        console.log('Invalid');
    }
}
verification('valid@email.bg');