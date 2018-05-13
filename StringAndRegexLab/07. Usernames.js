function extractUsername(arr){
    let result = [];
    for (let str of arr) {
        str = str.split('@')
        let name = str[0];
        let domain = str[1].split('.');
        let symbols = '';
        for (let str of domain) {
            symbols += str[0];
        }
        name = name + '.' + symbols;
        result.push(name);
    }
    console.log(result.join(', '));

}
extractUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])