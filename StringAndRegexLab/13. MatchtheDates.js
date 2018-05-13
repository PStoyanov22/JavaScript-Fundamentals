function matchDates(arr){
    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/gm;

    let matches = regex.exec(arr);

    while(matches){
        console.log(`${matches[0]} (Day: ${matches[1]}, Month: ${matches[2]}, Year: ${matches[3]})`);
        matches = regex.exec(arr);
    }

}
matchDates('I am born on 30-Dec-1994.\n' +
' This is not date: 512-Jan-1996.\n ' +
'My father is born on the 29-Jul-1955.');