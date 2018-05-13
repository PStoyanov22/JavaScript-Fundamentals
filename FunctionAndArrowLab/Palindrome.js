function palindrome(str){
    let inversed  = str.split('').reverse().join("")

    console.log(str === inversed ? true : false)

}

palindrome("haahds")