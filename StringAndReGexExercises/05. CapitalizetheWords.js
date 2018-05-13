function capitalize(str){


    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
    }
    console.log(str.join(' '))
}

console.log(capitalize('Capitalize these words'));;