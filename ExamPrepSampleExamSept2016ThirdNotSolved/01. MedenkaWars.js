function solution(arr) {
    let damage = 60;

    let whiteSuccession = 0;
    let vitkorDamage = 0;
    let whitePreviousAmount = 0;

    let naskorDamage = 0;
    let darkSuccession = 0;
    let darkPreviousAmount = 0;

    for (let i = 0; i < arr.length; i++) {
        let [amount, colour, medenkas] = arr[i].split(' ');
        amount = Number(amount);
        if (colour === "white") {
            if (whitePreviousAmount === amount) {
                whiteSuccession++;
            } else {
                whiteSuccession = 1;
                whitePreviousAmount = amount;
            }
            if (whiteSuccession === 2) {
                vitkorDamage += (amount * 2.75 * 60);
                whiteSuccession = 0;
            } else {
                vitkorDamage += (amount * damage);
            }
        }
        if (colour === "dark") {
            if (darkPreviousAmount === amount) {
                darkSuccession++;
            } else {
                darkSuccession = 1;
                darkPreviousAmount = amount;
            }
            if (darkSuccession === 5) {
                naskorDamage += (amount * 4.5 * 60);
                darkSuccession = 0;
            } else {
                naskorDamage += (amount * damage);
            }


        }

    }
    if (vitkorDamage > naskorDamage) {
        console.log(`Winner - Vitkor`);
        console.log(`Damage - ${vitkorDamage}`);

    } else if (vitkorDamage < naskorDamage) {
        console.log(`Winner - Naskor`);
        console.log(`Damage - ${naskorDamage}`);

    }
}
solution(['5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas']);