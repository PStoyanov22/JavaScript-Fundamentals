function employeeData(arr){
   let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)$/;

    for (let str of arr) {
        let match = regex.exec(str);
        if(match){
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }

        match = regex.exec(str);
    }
}
employeeData(['Isacc - 1000 - CEO',
'Ivan - 500 - Employee',
'Peter - 500 - Employee']);