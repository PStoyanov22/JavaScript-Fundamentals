function formFIller(str, str1, str2, arr){
    let name = str;
    let email = str1;
    let phone = str2;

    let namePattern = new RegExp(/<![A-Za-z]+!>/gi);
    let emailPattern =  new RegExp(/<@[A-Za-z]+@>/gi);
    let phonePattern = new RegExp(/<\+[A-Za-z]+\+>/gi);

    for (let sentence of arr) {
        sentence = sentence.replace(namePattern, name);
        sentence = sentence.replace(emailPattern, email);
        sentence = sentence.replace(phonePattern, phone);

        console.log(sentence);
    }
}

formFIller('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'])