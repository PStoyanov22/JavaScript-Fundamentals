function print(str){
    for (let obj in str) {
        console.log(`str[${obj}] -> ${str[obj]}`)
    }
}
print("Hello, World!")