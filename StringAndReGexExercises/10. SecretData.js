function secretData(arr) {
    let namePattern = /(\*[A-Z][a-z-A-Z]*)(?=\s|\t|$)/gm;
    let phonePattern = /(\+[0-9-]{10})(?=\s|\t|$)/gm;
    let idPattern = /(![A-Za-z0-9]+)(?=\s|\t|$)/gm;
    let secretBasePattern = /(_[A-Za-z0-9]+)(?=\s|\t|$)/gm;

    let text = arr.join('\n');
    text = text.replace(namePattern, replacer);
    text = text.replace(phonePattern, replacer);
    text = text.replace(idPattern, replacer);
    text = text.replace(secretBasePattern, replacer);

    function replacer(match, gr1, gr2) {
        return '|'.repeat(match.length);
    }

    console.log(text)
}
secretData([ 'Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number. ',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...' ]);
